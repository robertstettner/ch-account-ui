import PropTypes from 'prop-types'
import React, { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/router'
import HeadingCount from '../../../services/HeadingCount'
import WithLang from '../../../services/lang/WithLang'
import FeatureDynamicView from '../../../components/views/FeatureDynamicView'
import { getStageFeatures } from '../../../services/translate'
import { errorsPropType } from '../../../services/propTypes'
import Dynamic from '../../../components/Dynamic'
import componentMap from '../../../services/componentMap'
import WithQueryParams from '../../../components/providers/WithQueryParams'
import useFRAuth from '../../../services/useFRAuth'
import { translateErrors } from '../../../services/errors'
import { formatNumber } from '../../../services/formatting'
import Loading from '../../../components/application-specific/Loading'
import Pagination from '../../../components/general-ui/interaction/Pagination'

const YourCompanies = ({ lang, queryParams }) => {
  const currentPage = Number(queryParams?.page) || 1
  const [search, setSearch] = useState('')

  const { profile, pagination, errors, loading, companyData } = useFRAuth({
    fetchCompanyData: true,
    companySearch: search,
    refresh: true,
    currentPage
  })

  const uiStage = 'HOME_YOUR_COMPANIES'
  const headingCount = useMemo(() => new HeadingCount(), [])
  const { push } = useRouter()
  const content = getStageFeatures(lang, uiStage)
  const [isSearchLoading, setSearchLoading] = useState(loading)
  const [companies, setCompanies] = useState([])

  const clickNext = async () => {
    if (currentPage < pagination.totalPages) {
      push(`/account/your-companies?page=${currentPage + 1}`)
    }
  }

  const clickPrevious = async () => {
    if (currentPage > 1) {
      push(`/account/your-companies?page=${currentPage - 1}`)
    }
  }

  const clickToSelectPage = async (e) => {
    const selectedPage = Number.parseInt(e.currentTarget.getAttribute('value'))
    push(`/account/your-companies?page=${selectedPage}`)
  }

  useEffect(() => {
    headingCount.reset()
  })

  useEffect(() => {
    if (companyData.length > 0) {
      setCompanies(companyData.filter((company) => company.membershipStatus === 'confirmed'))
    }
  }, [companyData])

  const onSearch = (search) => {
    setSearchLoading(true)
    setSearch(search)
  }

  const pendingCompanies = companies?.filter(
    (company) => company.membershipStatus === 'pending'
  )
  const showCount = (loading && isSearchLoading) ? false : !!search
  const paginationComponent = (
    <Pagination
      pages={pagination.pages}
      currentPage={currentPage}
      startPage={pagination.startPage}
      displayPrev={true}
      displayNext={true}
      display={pagination.totalPages > 1}
      clickNext={() => clickNext()}
      clickPrevious={() => clickPrevious()}
      clickToSelectPage={(e) => clickToSelectPage(e)}
    />
  )

  const pager = pagination.totalPages && pagination.startPage && pagination.totalPages > 1 ? paginationComponent : null

  const dynamicComponent = (
    <Dynamic
      companies={companies}
      componentMap={componentMap}
      content={content}
      errors={translateErrors(errors, lang)}
      handlers={{ onSearch }}
      headingCount={headingCount}
      loading={loading && isSearchLoading}
      noCompanies={!search && companies?.length === 0}
      profile={profile}
      searchCount={companies ? formatNumber(companies?.length) : null}
      showCount={showCount}
      uiElements={[]}
      uiStage={uiStage}
      lang={lang}
      {...queryParams}
    />
  )

  return (
    <>
      <FeatureDynamicView
        width='full'
        titleLinkHref='/account/home'
        hasBackLink={false}
        hasLogoutLink={true}
        hasAccountLinks
        accountLinksItem={2}
        messages={pendingCompanies.length}
        pagination={pager}
      >
        {loading && isSearchLoading ? <Loading /> : dynamicComponent}
      </FeatureDynamicView>
    </>
  )
}

export { YourCompanies }

export default WithQueryParams(WithLang(YourCompanies))

YourCompanies.propTypes = {
  companies: PropTypes.array,
  errors: errorsPropType,
  headingCount: PropTypes.instanceOf(HeadingCount),
  profile: PropTypes.object,
  lang: PropTypes.string,
  accessToken: PropTypes.string,
  queryParams: PropTypes.object
}

YourCompanies.defaultProps = {
  companies: [],
  profile: {}
}

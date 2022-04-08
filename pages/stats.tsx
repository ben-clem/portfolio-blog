import type { GetStaticProps, NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Header from '@components/Header'
import Wrapper from '@components/Wrapper'
import Stats from '@components/Stats'

const Dashboard: NextPage = () => {
  const { t } = useTranslation('common')

  return (
    <Wrapper>
      <Header head={t('statsHeader')} bio={t('statsBio')} />
      <Stats />
    </Wrapper>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, ['common'])),
  },
})

export default Dashboard
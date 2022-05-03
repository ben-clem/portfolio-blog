import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps, NextPage } from 'next'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { allInfos } from '@layer/generated'
import components from '@components/MDX'
import Wrapper from '@components/Wrapper'
import { useTranslation } from 'next-i18next'
import Header from '@components/Header'

const About: NextPage<{ about: { body: { code: string } } }> = ({ about }) => {
  const Component = useMDXComponent(about.body.code)
  const { t } = useTranslation('common')

  return (
    <Wrapper>
      <Header head={t('aboutHeader')} bio={t('aboutBio')} />
      <div className='blog'>
        <Component components={components} />
      </div>
    </Wrapper>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const about = allInfos.find(
    (page: { slug: string }) => page.slug === 'about'
  )!

  return {
    props: { about, ...(await serverSideTranslations(locale!, ['common'])) },
  }
}

export default About

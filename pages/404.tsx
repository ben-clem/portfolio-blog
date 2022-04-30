import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps, NextPage } from 'next'
import { allInfos } from '@layer/generated'
import Wrapper from '@components/Wrapper'
import { useTranslation } from 'next-i18next'
import Header from '@components/Header'
import Contact from '@components/Contact'
import Link from 'next/link'

const About: NextPage = () => {
  const { t } = useTranslation('common')

  return (
    <Wrapper>
      <h1 className='my-20 text-5xl'>{t('lost')}</h1>
      <div className='blog'>
        <p>
          {t('broken')}
          <Link href='htps://github.com/harshhhdev/harshhhdev.github.io/issues.new'>
            harshhhdev/harshhhdev.github.io
          </Link>
        </p>
        <p>
          {t('readBlog')}
          <Link href='/blog'>blog?</Link>
        </p>
      </div>
      <Contact />
    </Wrapper>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: { ...(await serverSideTranslations(locale!, ['common'])) },
  }
}

export default About

import type { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Wrapper from '@components/Wrapper'
import Projects from '@components/Projects/Projects'
import Contact from '@components/Contact'

const ProjectsHome: NextPage = () => {
  return (
    <Wrapper>
      <Projects />
      <Contact />
    </Wrapper>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, ['common'])),
  },
})

export default ProjectsHome

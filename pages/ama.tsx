import type { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Wrapper from '@components/Wrapper'
import AskMeAnything from '@components/AMA'
import Contact from '@components/Contact'
import prisma from '@lib/prisma'
import { Question } from '@prisma/client'

const AMA: NextPage<{ questions: Question[] }> = ({ questions }) => {
  return (
    <Wrapper>
      <AskMeAnything questions={questions} />
      <Contact />
    </Wrapper>
  )
}

/**
 * Using getStaticProps as apparently server side rendering messes up next-i18next?
 */
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const questions = await prisma.question.findMany({
    where: { status: 'ANSWERED' },
    orderBy: { createdAt: 'desc' },
  })

  return {
    props: {
      questions,
      ...(await serverSideTranslations(locale!, ['common'])),
    },
  }
}

export default AMA

import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Wrapper from "@components/Wrapper";
import { allProjects, Project } from "@layer/generated";
import Contact from "@components/Contact";
import Post from "@components/Projects/Post";
import { useMDXComponent } from "next-contentlayer/hooks";
import components from "components/MDX";

const ProjectsPost: NextPage<{ post: Project }> = ({ post }) => {
  const Component = useMDXComponent(post.body.code);

  return (
    <Wrapper>
      <Post project={post} />
      <div className="project">
        <Component components={{ ...components }} />
      </div>
      <Contact />
    </Wrapper>
  );
};

export const getStaticProps: GetStaticProps = async (context) => ({
  props: {
    post: allProjects.find((post) => post.slug === context.params?.slug),
    params: context.params,
    ...(await serverSideTranslations(context.locale!, ["common"])),
  },
});

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: allProjects.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
};

export default ProjectsPost;

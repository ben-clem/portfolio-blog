import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Wrapper from "@components/Wrapper";
import { allBlogs, Blog } from "@layer/generated";
import Contact from "@components/Contact";
import Post from "@components/Blog/Post";
import { useMDXComponent } from "next-contentlayer/hooks";
import components from "components/MDX";

const BlogPost: NextPage<{ post: Blog }> = ({ post }) => {
  const Component = useMDXComponent(post.body.code);

  return (
    <Wrapper>
      <Post blog={post} />
      <div className="blog">
        <Component components={{ ...components }} />
      </div>
      <Contact />
    </Wrapper>
  );
};

export const getStaticProps: GetStaticProps = async (context) => ({
  props: {
    post: allBlogs.find((post) => post.slug === context.params?.slug),
    params: context.params,
    ...(await serverSideTranslations(context.locale!, ["common"])),
  },
});

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: allBlogs.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
};

export default BlogPost;

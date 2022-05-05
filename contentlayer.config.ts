import {
  ComputedFields,
  defineDocumentType,
  makeSource,
} from "contentlayer/source-files";
import readingTime from "reading-time";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeCodeTitles from "rehype-code-titles";
import rehypePrism from "rehype-prism-plus";

const computedFields: ComputedFields = {
  readingTime: { type: "json", resolve: (doc) => readingTime(doc.body.raw) },
  wordCount: {
    type: "number",
    resolve: (doc) => doc.body.raw.split(/\s+/gu).length,
  },
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ""),
  },
};

const Info = defineDocumentType(() => ({
  name: "Info",
  filePathPattern: "*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
  },
  computedFields,
}));

const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: "projects/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    tags: { type: "string", required: true },
    published: { type: "string", required: true },
  },
  computedFields,
}));

const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: "blog/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    tags: { type: "string", required: true },
    published: { type: "string", required: true },
  },
  computedFields,
}));

const Example = defineDocumentType(() => ({
  name: "Example",
  filePathPattern: "example/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    tags: { type: "string", required: true },
    published: { type: "string", required: true },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Info, Project, Blog, Example],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      rehypePrism,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["anchor"],
          },
        },
      ],
    ],
  },
});

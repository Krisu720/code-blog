// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
var computedFields = {
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath
  }
};
var Doc = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: "./installations/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    description: {
      type: "string",
      required: true
    }
  },
  computedFields
}));
var Component = defineDocumentType(() => ({
  name: "Component",
  filePathPattern: "./components/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    description: {
      type: "string",
      required: true
    }
    // component: {
    //   type: "reference",
    //   required: true,
    // },
  },
  computedFields
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "src/content",
  documentTypes: [Doc, Component],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: "github-dark",
          onVisitLine(node) {
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push("line--highlighted");
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ["word--highlighted"];
          }
        }
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section"
          }
        }
      ]
    ]
  }
});
export {
  Component,
  Doc,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-TGGLPNZ2.mjs.map

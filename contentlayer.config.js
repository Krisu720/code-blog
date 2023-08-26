import {defineDocumentType,makeSource} from 'contentlayer/source-files'
/** @type {import("contentlayer/source-files").ComputedFields} */
const computedFields = {
    slugAsParams: {
        type: "string",
        resolve: (doc) => {
            console.log(doc._raw.flattenedPath)
            return doc._raw.flattenedPath}
    }
}

export const Doc = defineDocumentType(()=>({
    name: "Doc",
    filePathPattern: "**/*.mdx",
    contentType:"mdx",
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
}))


export default makeSource({
    contentDirPath: "src/content",
    documentTypes: [Doc]
})
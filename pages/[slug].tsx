import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkRehype from 'remark-rehype'
import rehypeRaw from 'rehype-raw'
import rehypeStringify from 'rehype-stringify'

export default function Page({ content }) {
  return <div className="markdown-body" dangerouslySetInnerHTML={{ __html: content }} />
}

export async function getStaticPaths() {
  const pagesDirectory = path.join(process.cwd(), 'content')
  const filenames = fs.readdirSync(pagesDirectory)

  const paths = filenames.map((filename) => ({
    params: { slug: filename.replace('.md', '') },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const fullPath = path.join(process.cwd(), 'content', `${params.slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { content } = matter(fileContents)

  // Custom function to handle line breaks
  const handleLineBreaks = (html) => {
    return html.split('\n').map(line => line.trim()).join('<br />')
  }

  const processedContent = await remark()
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeStringify)
    .process(content)

  const contentWithLineBreaks = handleLineBreaks(processedContent.toString())

  return {
    props: {
      content: contentWithLineBreaks,
    },
  }
}
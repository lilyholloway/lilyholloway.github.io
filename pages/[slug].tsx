import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

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

  const processedContent = await remark()
    .use(html)
    .process(content)
  const contentHtml = processedContent.toString()

  return {
    props: {
      content: contentHtml,
    },
  }
}
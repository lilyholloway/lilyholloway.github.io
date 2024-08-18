import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import Image from 'next/image'

export default function Home({ contentHtml }) {
  return (
    <div className="markdown-body">
      <Image 
        src="/images/Lily Holloway.jpg" 
        alt="Lily Holloway" 
        width={300} 
        height={300} 
        className="mt4 db center responsive-img"
      />
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </div>
  )
}

export async function getStaticProps() {
  const fullPath = path.join(process.cwd(), 'content', 'about.md')
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { content } = matter(fileContents)

  const processedContent = await remark()
    .use(html)
    .process(content)
  const contentHtml = processedContent.toString()

  return {
    props: {
      contentHtml,
    },
  }
}
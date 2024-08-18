import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Image from 'next/image'
import { remark } from 'remark'
import remarkRehype from 'remark-rehype'
import rehypeRaw from 'rehype-raw'
import rehypeStringify from 'rehype-stringify'

export default function Home({ content }) {
  return (
    <div className="markdown-body">
      <Image 
        src="/images/Lily Holloway.jpg" 
        alt="Lily Holloway" 
        width={300} 
        height={300} 
        className="mt4 db center responsive-img"
      />
      <div className="mt-8" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}

export async function getStaticProps() {
  const fullPath = path.join(process.cwd(), 'content', 'about.md')
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
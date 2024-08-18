import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Image from 'next/image'

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
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}

export async function getStaticProps() {
  const fullPath = path.join(process.cwd(), 'content', 'about.md')
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { content } = matter(fileContents)

  // Convert markdown links to HTML
  const contentWithLinks = content.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')

  // Convert newlines to <br> tags and wrap paragraphs in <p> tags
  const contentHtml = contentWithLinks
    .split('\n\n')
    .map(paragraph => `<p>${paragraph.replace(/\n/g, '<br>')}</p>`)
    .join('')

  return {
    props: {
      content: contentHtml,
    },
  }
}
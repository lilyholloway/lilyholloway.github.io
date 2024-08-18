import Link from 'next/link'
import Image from 'next/image'
import { siteConfig } from '../config/site'

export default function Layout({ children }) {
  return (
    <div className="bg-super-white">
      <div className="tc mt4">
        <Link href="/">
          <a>
            <Image src="/images/Elsy.png" alt="Home" width={100} height={100} className="br-100 db center mb2" />
          </a>
        </Link>
        <Link href="/">
          <a style={{ color: 'grey', textDecoration: 'none' }}>
            <h1 className="mt3 mb4 f2">{siteConfig.title}</h1>
          </a>
        </Link>
      </div>
      <div className="mw7 bg-white mt4 mb3 center br2-ns bt bb ba-ns b--light-gray">
        <nav className="bb b--light-gray pv4 tc">
          {siteConfig.links.map((link) => (
            <Link key={link.name} href={link.url}>
              <a className="link gray hover-mid-gray mh2 pv1">{link.name}</a>
            </Link>
          ))}
        </nav>
        <main className="tl relative pa4 pa5-ns overflow-hidden">
          {children}
        </main>
      </div>
      <footer className="mt4 tc silver">
        Lily Holloway © 2020 - {new Date().getFullYear()}
      </footer>
    </div>
  )
}
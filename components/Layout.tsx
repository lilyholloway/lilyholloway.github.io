import Link from 'next/link'
import Image from 'next/image'
import { siteConfig } from '../config/site'

export default function Layout({ children }) {
  return (
    <div className="bg-super-white">
      <div className="tc mt4">
        <Link href="/">
          <a>
            <Image src="/images/Elsy.png" alt="Home" width={100} height={100} />
          </a>
        </Link>
        <h1 className="mt2 mb0">{siteConfig.title}</h1>
      </div>
      <div className="mw7 bg-white mt4 mb3 center br2-ns bt bb ba-ns b--light-gray">
        <nav className="tc">
          {siteConfig.links.map((link) => (
            <Link key={link.name} href={link.url}>
              <a className="link gray hover-mid-gray mh2 pv1">{link.name}</a>
            </Link>
          ))}
        </nav>
        <main className="tl f6 relative pa4 pa5-ns overflow-hidden">
          {children}
        </main>
      </div>
      <footer className="mt4 tc">
        Lily Holloway © 2020 - {new Date().getFullYear()}
      </footer>
    </div>
  )
}
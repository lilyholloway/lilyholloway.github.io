import Link from 'next/link'
import Image from 'next/image'
import { siteConfig } from '../config/site'

export default function Layout({ children }) {
  return (
    <div className="bg-super-white">
      <div className="tc mt4">
        <Link href="/" passHref>
          <Image src="/images/Elsy.png" alt="Home" width={100} height={100} className="br-100 db center mb2" />
        </Link>
        <Link href="/" passHref>
          <h1 className="mt3 mb4 f2" style={{ color: 'grey', textDecoration: 'none' }}>{siteConfig.title}</h1>
        </Link>
      </div>
      <div className="bg-white mw7 mt4 mb3 center br2-ns bt bb ba-ns b--light-gray">
        <nav className="bb b--light-gray pv4 tc">
          {siteConfig.links.map((link) => (
            <Link key={link.name} href={link.url} passHref>
              <span className="link gray hover-mid-gray mh2 pv1">{link.name}</span>
            </Link>
          ))}
        </nav>
        <main className="relative overflow-hidden tl pa4 pa5-ns" style={{ paddingTop: '2rem' }}>
          {children}
        </main>
      </div>
      <footer className="pb-3 mt3 tc silver">
        Lily Holloway © 2020 - {new Date().getFullYear()}
      </footer>
    </div>
  )
}
import Image from 'next/image'
import Link from 'next/link'

export default function Custom404() {
  return (
    <div className="tc">
      <Image src="/images/404.png" alt="not found" width={160} height={160} className="mb3" />
      <Link href="/">
        <a className="link blue hover-gray">Home</a>
      </Link>
    </div>
  )
}
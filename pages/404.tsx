import Image from 'next/image'
import Link from 'next/link'

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-center">
        <Image 
          src="/images/404.png" 
          alt="not found" 
          width={160} 
          height={160} 
          className="mx-auto mb-3"
        />
        <br></br>
        <Link href="/">
          <a className="link gray hover-mid-gray">Home</a>
        </Link>
      </div>
    </div>
  )
}
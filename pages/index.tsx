import Image from 'next/image'

export default function Home() {
  return (
    <div className="markdown-body">
      <Image 
        src="/images/Lily Holloway.jpg" 
        alt="Lily Holloway" 
        width={300} 
        height={300} 
        className="mt4 db center responsive-img"
      />
      <p>
        Lily Holloway is a powerlifting enthusiast and third-year MFA candidate
        in the creative writing programme at Syracuse University. They are a
        2024 winner of the Griffith Review Emerging Voices competition, a
        hopeless romantic, and a pain in the neck. You can find their work
        published or forthcoming in various places including Black Warrior
        Review, Sundog Lit, Ōrongohau | Best New Zealand Poems, Peach Mag, and
        Hobart After Dark. Their chapbook was published in 2021 as a part of
        Auckland University Press' <a href="/books">AUP New Poets 8</a>.
      </p>
      <p>
        Lily is one of two Editors-in-Chief at <a href="https://salthilljournal.net/" target="_blank" rel="noopener noreferrer">Salt Hill Journal</a>.
      </p>
      <p>
        Contact them at <a href="mailto:howdy@lilyholloway.co.nz">howdy@lilyholloway.co.nz</a>.
      </p>
      <p>
        Follow them on <a href="https://www.twitter.com/milfs4minecraft" target="_blank" rel="noopener noreferrer">Twitter</a> and <a href="https://www.instagram.com/milfs4minecraft/" target="_blank" rel="noopener noreferrer">Instagram</a>.
      </p>
    </div>
  )
}
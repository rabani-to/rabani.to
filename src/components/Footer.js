import Link from "next/link"

import { IoLogoTwitter } from "react-icons/io5"
import { BsGithub } from "react-icons/bs"

function Footer() {
  return (
    <footer className="flex mt-20 items-center border-t py-4 space-x-2">
      <Link href="/">
        <a className="font-montse font-bold">Radish 2022</a>
      </Link>
      <div className="flex-grow" />
      <Link href="/">
        <a>
          <BsGithub className="text-2xl" />
        </a>
      </Link>
      <Link href="/">
        <a>
          <IoLogoTwitter className="text-2xl" />
        </a>
      </Link>
    </footer>
  )
}

export default Footer

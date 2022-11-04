import Link from "next/link"

import { IoLogoTwitter } from "react-icons/io5"
import { BsGithub } from "react-icons/bs"

function Footer() {
  return (
    <footer className="flex mt-20 items-center border-t py-4">
      <Link href="/">
        <a className="font-montse font-bold">Radish 2022</a>
      </Link>
      <div className="flex-grow" />
      <Link href="https://github.com/rabani-to">
        <a className="p-2" target="_blank">
          <BsGithub className="text-2xl" />
        </a>
      </Link>
      <Link href="https://twitter.com/radish_la">
        <a className="p-2" target="_blank">
          <IoLogoTwitter className="text-2xl" />
        </a>
      </Link>
    </footer>
  )
}

export default Footer

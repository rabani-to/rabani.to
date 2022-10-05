import Image from "next/image"
import Link from "next/link"

import asset_logo from "@/assets/logo.svg"

function Radish() {
  return (
    <Link href="/">
      <a className="flex items-center group justify-center space-x-2">
        <div className="w-[2rem]">
          <Image src={asset_logo} layout="responsive" />
        </div>
        <h1 className="font-bold font-montse text-2xl opacity-60 group-hover:opacity-100">
          Radish.
        </h1>
      </a>
    </Link>
  )
}

export default Radish

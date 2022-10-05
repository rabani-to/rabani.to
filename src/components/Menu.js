import { useEffect, useState } from "react"
import Link from "next/link"

import { classnames } from "@/lib/helpers"
import Radish from "./Radish"
import Footer from "./Footer"

function Menu({ show, onClose }) {
  const [canRender, setCanRender] = useState(false)

  useEffect(() => {
    if (!canRender && show) {
      setCanRender(true)
    }
  }, [show])

  return (
    <div
      className={classnames(
        "cursor-none fixed bg-black z-20 inset-0",
        "animate__animated animate__faster",
        canRender
          ? show
            ? "animate__fadeInRight"
            : "animate__fadeOutRight"
          : "hidden"
      )}
    >
      <main className="max-w-7xl mx-auto flex space-y-4 flex-col px-4 text-white min-h-screen">
        <div hidden={!show} className="flex flex-col">
          <nav className="flex h-24 items-center">
            <Radish />
            <div className="flex-grow" />
            <button
              onClick={onClose}
              className="w-8 h-8 group space-y-1 flex flex-col justify-center"
            >
              <div className="w-full transition-all group-hover:bg-white/90 group-hover:w-9/12 h-[3px] bg-white/80"></div>
              <div className="w-8/12 transition-all group-hover:bg-white/90 group-hover:w-full h-[3px] bg-white/80"></div>
              <div className="w-full transition-all group-hover:bg-white/90 group-hover:w-10/12 h-[3px] bg-white/80"></div>
            </button>
          </nav>
          <menu className="max-w-3xl">
            <ul className="flex flex-col font-roboto font-bold text-7xl">
              <Link href="/">
                <a className="py-4 hover:line-through animate__animated animate__fadeInUp animate__delay-1s">
                  About.
                </a>
              </Link>
              <Link href="/">
                <a className="border-t py-4 hover:line-through animate__animated animate__fadeInUp animate__delay-2s">
                  Manifesto.
                </a>
              </Link>
              <Link href="/">
                <a className="border-t py-4 hover:line-through animate__animated animate__fadeInUp animate__delay-3s">
                  Contact.
                </a>
              </Link>
            </ul>
          </menu>
        </div>
        <div className="flex-grow" />
        <Footer />
      </main>
    </div>
  )
}

export default Menu

import { Fragment, useEffect, useState } from "react"

import { debounceEvent } from "@/lib/helpers"
import Menu from "./Menu"
import Radish from "./Radish"

function Navigation() {
  const [showMenu, setShowMenu] = useState(false)

  useEffect(() => {
    function handleScroll() {
      const halfScreenHView = window.innerHeight * 0.3
      const isOutOfScreenContext = window.scrollY > halfScreenHView
      if (isOutOfScreenContext) {
        document
          .querySelectorAll(".appear")
          .forEach((/** @type { HTMLDivElement } */ node) => {
            node.classList.add(
              "animate__animated",
              "animate__fadeInUp",
              "animate__faster"
            )
          })
      }
    }
    const debouncedScroll = debounceEvent(handleScroll, 60)
    document.addEventListener("scroll", debouncedScroll)
    return () => window.removeEventListener("scroll", debouncedScroll)
  }, [])

  return (
    <Fragment>
      <nav className="w-full flex h-24 items-center">
        <Radish />
        <div className="flex-grow" />
        <button
          onClick={() => setShowMenu(true)}
          className="w-8 h-8 group space-y-1 flex flex-col justify-center"
        >
          <div className="w-full transition-all group-hover:bg-white/90 group-hover:w-9/12 h-[3px] bg-white/80"></div>
          <div className="w-8/12 transition-all group-hover:bg-white/90 group-hover:w-full h-[3px] bg-white/80"></div>
          <div className="w-full transition-all group-hover:bg-white/90 group-hover:w-10/12 h-[3px] bg-white/80"></div>
        </button>
      </nav>
      <Menu onClose={() => setShowMenu(false)} show={showMenu} />
    </Fragment>
  )
}

export default Navigation

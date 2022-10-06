import { Fragment, useState } from "react"

import Menu from "./Menu"
import Radish from "./Radish"

function Navigation() {
  const [showMenu, setShowMenu] = useState(false)

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

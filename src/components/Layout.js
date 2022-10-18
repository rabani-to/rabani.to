import { Fragment } from "react"

import { classnames } from "@/lib/helpers"
import CustomPointer from "./CustomPointer"
import Footer from "./Footer"

function Layout({ className, children }) {
  return (
    <Fragment>
      <CustomPointer />
      <main
        className={classnames(
          "lg:cursor-none relative max-w-7xl mx-auto z-[1] flex flex-col px-4 text-white min-h-screen",
          className
        )}
      >
        {children}
        <Footer />
      </main>
    </Fragment>
  )
}

export default Layout

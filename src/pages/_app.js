import "@/styles/globals.css"
import { Fragment } from "react"
import { Toaster } from "react-hot-toast"

function App({ Component, pageProps }) {
  return (
    <Fragment>
      <Toaster position="top-center" />
      <Component {...pageProps} />
    </Fragment>
  )
}

export default App

import { Fragment } from "react"
import toast from "react-hot-toast"

import { HiArrowRight } from "react-icons/hi"

import Navigation from "@/components/Navigation"
import Layout from "@/components/Layout"
import SeoTags from "@/components/SeoTags"

/** @type { import("react").FormEventHandler } */
function handleSubmit(e) {
  e.preventDefault()
  toast.loading("Sending")
  function toHome() {
    toast.dismiss()
    toast.success("Message sent!")
    setTimeout(() => {
      window.location.href = "/"
    }, 500)
  }
  fetch("https://formspree.io/f/xnqrvrqz", {
    method: "POST",
    body: new FormData(e.target),
    headers: {
      Accept: "application/json",
    },
  })
    .then(toHome)
    .catch(toHome)
}

export default function ContactPage() {
  return (
    <Fragment>
      <SeoTags />
      <Layout>
        <Navigation />
        <div className="mt-12 min-h-screen flex flex-col space-y-4">
          <h2 className="text-7xl font-roboto font-bold">Contact us</h2>
          <form
            method="POST"
            onSubmit={handleSubmit}
            className="flex flex-col max-w-3xl space-y-4"
          >
            <fieldset data-type="blur-clear" className="group flex flex-col">
              <label
                htmlFor="email"
                className="text-gray-500 transition-all group-hover:text-gray-400"
              >
                Your email
              </label>
              <input
                required
                id="email"
                name="email"
                placeholder="your@email.xyz"
                className="bg-transparent outline-none focus:border-white/30 py-4 border-b border-white/25 group-hover:border-white/30 text-2xl md:text-4xl"
                type="email"
              />
            </fieldset>
            <fieldset data-type="blur-clear" className="group flex flex-col">
              <label
                htmlFor="message"
                className="text-gray-500 transition-all group-hover:text-gray-400"
              >
                Your message
              </label>
              <textarea
                required
                id="message"
                name="message"
                data-type="blur-clear"
                placeholder="Let's build something awesome!!"
                className="bg-transparent outline-none focus:border-white/30 py-4 border-b border-white/25 group-hover:border-white/30 text-2xl md:text-4xl"
                type="text"
              />
            </fieldset>
            <button
              type="submit"
              className="flex group justify-center items-center space-x-2 border-2 border-white text-lg font-bold py-4 px-6"
            >
              <span>SEND NOW</span>
              <HiArrowRight className="text-2xl transform group-hover:translate-x-px" />
            </button>
          </form>
        </div>
      </Layout>
    </Fragment>
  )
}

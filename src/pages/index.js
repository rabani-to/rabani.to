import { Fragment, useEffect, useState } from "react"
import Head from "next/head"
import Link from "next/link"

import Menu from "@/components/Menu"
import Radish from "@/components/Radish"
import Footer from "@/components/Footer"
import InfoCards from "@/components/InfoCards"
import Background from "@/components/Background"
import CustomPointer from "@/components/CustomPointer"
import { classnames, debounceEvent } from "@/lib/helpers"

import { HiArrowRight } from "react-icons/hi"
import styles from "@/styles/Home.module.css"

const WORD = ["Develop", "Design", "Create", "Deploy", "Launch"]
export default function HomePage() {
  const [showMenu, setShowMenu] = useState(false)
  const [text, setText] = useState("")

  useEffect(() => {
    let timer = null
    function nextText() {
      setText((text) => {
        const nextIdx = WORD.indexOf(text) + 1
        return WORD[nextIdx] || WORD[0]
      })
      timer = setTimeout(nextText, 1_200)
    }
    nextText()

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
    return () => {
      clearTimeout(timer)
      window.removeEventListener("scroll", debouncedScroll)
    }
  }, [])

  return (
    <Fragment>
      <CustomPointer />
      <Head>
        <title>rabani.to</title>
        <meta
          name="description"
          content="Your friendly people for on-chain systems."
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>
      <Menu onClose={() => setShowMenu(false)} show={showMenu} />
      <Background />
      <main className="cursor-none relative max-w-7xl mx-auto z-[1] flex space-y-4 flex-col px-4 text-white min-h-screen">
        <div className="flex flex-col min-h-screen justify-center">
          <nav className="flex h-24 items-center">
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
          <section
            className={classnames(
              "animate__animated animate__fadeIn",
              "flex-grow flex flex-col items-start justify-center"
            )}
          >
            <p
              className={classnames(
                styles.Hero,
                "text-[8rem] font-roboto font-bold leading-none"
              )}
            >
              <span>{text}</span>
              <br />
              Web3 Native Solutions.
            </p>
            <p
              className={classnames(
                "animate__animated animate__fadeInUp",
                "text-gray-400 mt-2 max-w-2xl"
              )}
            >
              We are a Latin American team that helps you create Web3 primitives
              to boost up your ideas. Design and develop on-chain systems.
            </p>
            <button className="flex group items-center space-x-2 border-2 border-white text-lg font-bold py-4 px-6 mt-8">
              <span>CONTACT NOW</span>
              <HiArrowRight className="text-2xl transform group-hover:translate-x-px" />
            </button>
          </section>
        </div>
        <section className="pt-44">
          <InfoCards />
          <div className="flex justify-end mt-24">
            <Link href="/">
              <a
                title="Read our manifesto"
                className="text-[9rem] hover:line-through text-right bg-black max-w-2xl font-bold leading-none"
              >
                The Radish Manifesto.
              </a>
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    </Fragment>
  )
}

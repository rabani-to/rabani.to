import { Fragment, useEffect, useState } from "react"
import Link from "next/link"

import { classnames } from "@/lib/helpers"
import InfoCards from "@/components/InfoCards"
import Background from "@/components/Background"

import { HiArrowRight } from "react-icons/hi"
import Navigation from "@/components/Navigation"
import Layout from "@/components/Layout"
import SeoTags from "@/components/SeoTags"

import styles from "@/styles/Home.module.css"

export default function HomePage() {
  const text = useTextMachine()
  return (
    <Fragment>
      <SeoTags />
      <Background />
      <Layout>
        <section
          className={classnames(
            "animate__animated animate__fadeIn",
            "flex-grow min-h-screen flex flex-col z-[1]"
          )}
        >
          <Navigation />
          <div className="flex-grow flex flex-col items-start justify-center">
            <p
              className={classnames(
                styles.Hero,
                "text-7xl md:text-[8rem] font-roboto font-bold leading-none"
              )}
            >
              <span>{text}</span>
              <br />
              Web3 <span className="hidden lg:inline">Native</span> Solutions.
            </p>
            <p
              className={classnames(
                "animate__animated animate__fadeInUp",
                "text-gray-400 mt-2 max-w-lg"
              )}
            >
              We are a Software Development company that helps DAOs create
              solutions for their on-chain systems.
            </p>
            <Link href="/contact">
              <a className="flex group items-center space-x-2 border-2 border-white text-lg font-bold py-4 px-6 mt-8">
                <span>CONTACT NOW</span>
                <HiArrowRight className="text-2xl transform group-hover:translate-x-px" />
              </a>
            </Link>
          </div>
        </section>
        <section className="pt-24 md:pt-44">
          <InfoCards />
          <div className="flex md:justify-end mt-24">
            <Link href="/manifesto">
              <a
                title="Read our manifesto"
                className="text-7xl md:text-[9rem] hover:line-through md:text-right bg-black max-w-2xl font-bold leading-none"
              >
                The
                <br />
                Radish
                <br />
                Manifesto.
              </a>
            </Link>
          </div>
        </section>
      </Layout>
    </Fragment>
  )
}

const WORD_LIST = ["Develop", "Design", "Create", "Deploy", "Launch"]
function useTextMachine() {
  const [text, setText] = useState("")

  useEffect(() => {
    let timer = null
    function nextWord() {
      setText((text) => {
        const nextIdx = WORD_LIST.indexOf(text) + 1
        return WORD_LIST[nextIdx] || WORD_LIST[0]
      })
      timer = setTimeout(nextWord, 1_200)
    }
    nextWord()
    return () => clearTimeout(timer)
  }, [])
  return text
}

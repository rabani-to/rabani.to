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

const WORD = ["Develop", "Design", "Create", "Deploy", "Launch"]
export default function HomePage() {
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
    return () => clearTimeout(timer)
  }, [])

  return (
    <Fragment>
      <SeoTags />
      <Background />
      <Layout>
        <section
          className={classnames(
            "animate__animated animate__fadeIn",
            "flex-grow min-h-screen flex flex-col"
          )}
        >
          <Navigation />
          <div className="flex-grow flex flex-col items-start justify-center">
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
            <Link href="/contact">
              <a className="flex group items-center space-x-2 border-2 border-white text-lg font-bold py-4 px-6 mt-8">
                <span>CONTACT NOW</span>
                <HiArrowRight className="text-2xl transform group-hover:translate-x-px" />
              </a>
            </Link>
          </div>
        </section>
        <section className="pt-44">
          <InfoCards />
          <div className="flex justify-end mt-24">
            <Link href="/manifesto">
              <a
                title="Read our manifesto"
                className="text-[9rem] hover:line-through text-right bg-black max-w-2xl font-bold leading-none"
              >
                The Radish Manifesto.
              </a>
            </Link>
          </div>
        </section>
      </Layout>
    </Fragment>
  )
}
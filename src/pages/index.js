import { Fragment } from "react"
import Link from "next/link"

import { HiArrowRight } from "react-icons/hi"

import { classnames } from "@/lib/helpers"
import Navigation from "@/components/Navigation"
import Layout from "@/components/Layout"
import SeoTags from "@/components/SeoTags"

import InfoCards from "@/components/home/InfoCards"
import Background from "@/components/home/Background"
import WordRotator from "@/components/home/WordRotator"
import Manifesto from "@/components/home/Manifesto"
import TriangledBorder from "@/components/home/TriangledBorder"
import styles from "@/components/home/Home.module.css"

export default function HomePage() {
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
            <div
              className={classnames(
                styles.Hero,
                "text-7xl md:text-[8rem] font-roboto font-bold leading-none"
              )}
            >
              <WordRotator />
              <br />
              Web3 <span className="hidden lg:inline">Native</span> Solutions.
            </div>
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
        <section>
          <TriangledBorder />
          <div className="pt-24 md:pt-44" />
          <InfoCards />
          <Manifesto />
        </section>
      </Layout>
    </Fragment>
  )
}

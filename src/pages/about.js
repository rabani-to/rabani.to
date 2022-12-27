import { Fragment } from "react"

import Navigation from "@/components/Navigation"
import Layout from "@/components/Layout"
import SeoTags from "@/components/SeoTags"
import Link from "next/link"
import asset_denny from "@/assets/denny.png"
import asset_valentin from "@/assets/valentin.jpg"
import asset_diego from "@/assets/diego.jpg"
import { GrLinkedinOption } from "react-icons/gr"
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs"
import { ImLinkedin2 } from "react-icons/im"
import { FaLinkedinIn } from "react-icons/fa"
import Image from "next/image"
export default function AboutPage() {
  return (
    <Fragment>
      <SeoTags />
      <Layout>
        <Navigation />
        <div className="mt-12 min-h-screen flex flex-col">
          <h2 className="text-7xl font-roboto font-bold">The team</h2>
          <section className="max-w-4xl mt-10">
            <div className="max-w-xl text-gray-400 flex flex-col space-y-2">
              <p>
                Radish solves client{"'"}s challenges by providing value,
                ownership, and trust.
              </p>
              <p>
                We are an engineering team that joins DAOs to face
                decentralization biases when creating software for on-chain
                systems.
              </p>
              <p>
                Do you want to join us?{" "}
                <Link href="https://angel.co/company/radish-la/jobs">
                  <a target="_blank" className="text-white hover:underline">
                    See open positions.
                  </a>
                </Link>
              </p>
            </div>

            <div className="flex flex-wrap gap-12 mt-12">
              <Profile
                image={asset_denny}
                github="https://github.com/d3portillo"
                twitter="https://twitter.com/d3portillo"
                linkedin="https://linkedin.com/in/d3portillo"
                name="Denny Portillo"
              >
                Frontend Engineer
              </Profile>
              <Profile
                image={asset_valentin}
                name="Valentin Vila"
                linkedin="https://linkedin.com/in/valentin-vila"
                github="https://github.com/DobleV55"
              >
                Backend Engineer
              </Profile>
              <Profile
                image={asset_diego}
                name="Diego Rubio"
                github="https://github.com/zarpos"
                linkedin="https://linkedin.com/in/diego-rubio-morato"
              >
                Solidity Engineer
              </Profile>
            </div>
          </section>
        </div>
      </Layout>
    </Fragment>
  )
}

function Profile({ name, image, children, github, twitter, linkedin }) {
  return (
    <div className="flex space-x-2">
      <div className="relative w-20 h-20 rounded-full overflow-hidden">
        <Image
          placeholder="blur"
          objectFit="cover"
          src={image}
          layout="fill"
          alt={name}
        />
      </div>
      <div className="flex flex-col">
        <p className="text-gray-400 text-sm">{children}</p>
        <h3 className="text-2xl font-montse">{name}</h3>
        <div className="flex space-x-1">
          {github && <ActionLink href={github} Icon={BsGithub} />}
          {twitter && <ActionLink href={twitter} Icon={BsTwitter} />}
          {linkedin && <ActionLink href={linkedin} Icon={FaLinkedinIn} />}
        </div>
      </div>
    </div>
  )
}

function ActionLink({ Icon, href }) {
  return (
    <Link href={href}>
      <a
        target="_blank"
        className="p-2 hover:bg-white group rounded-full transition-colors duration-300"
      >
        <Icon className="text-lg group-hover:text-black transition-colors duration-300" />
      </a>
    </Link>
  )
}

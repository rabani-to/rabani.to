import { Fragment } from "react"

import Navigation from "@/components/Navigation"
import Layout from "@/components/Layout"
import SeoTags from "@/components/SeoTags"

export default function ManifestoPage() {
  return (
    <Fragment>
      <SeoTags />
      <Layout>
        <Navigation />
        <div className="min-h-screen flex flex-col lg:flex-row gap-12">
          <section className="lg:text-right overflow-hidden">
            <h2 className="text-7xl md:text-[6rem] leading-none font-roboto font-bold">
              The
              <br />
              Radish <br />
              Manifesto.
            </h2>
            <p className="mt-10 text-gray-400">
              We are an innovation network working with Web3 primitive to
              design, develope and impore blocjaeconae aeloremp ipsim loremp
              impsum loremp impsumloremp.
            </p>
          </section>
          <section className="max-w-3xl text-lg flex flex-col gap-4 text-gray-400">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              sit impedit accusantium amet eos non nesciunt! Laboriosam
              incidunt, rerum, exercitationem voluptas maiores repellat earum
              quae necessitatibus tenetur, dolorem non beatae!
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              sit impedit accusantium amet eos non nesciunt! Laboriosam
              incidunt, rerum, exercitationem voluptas maiores repellat earum
              quae necessitatibus tenetur, dolorem non beatae!
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              sit impedit accusantium amet eos non nesciunt! Laboriosam
              incidunt, rerum, exercitationem voluptas maiores repellat earum
              quae necessitatibus tenetur, dolorem non beatae!
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              sit impedit accusantium amet eos non nesciunt! Laboriosam
              incidunt, rerum, exercitationem voluptas maiores repellat earum
              quae necessitatibus tenetur, dolorem non beatae!
            </p>
          </section>
        </div>
      </Layout>
    </Fragment>
  )
}

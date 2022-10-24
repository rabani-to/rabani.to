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
        <div className="mt-12 min-h-screen flex flex-col lg:flex-row gap-12">
          <section className="lg:text-right overflow-hidden lg:overflow-clip">
            <h2 className="text-7xl md:text-[6rem] leading-none font-roboto font-bold">
              The
              <br />
              Radish <br />
              Manifesto.
            </h2>
            <p className="mt-10 text-lg text-gray-400">
              Radish is a network of expert engineers working with Web3
              primitives to help you Design, Develop and Launch <i>on-chain</i>{" "}
              solutions.
            </p>
          </section>
          <Separator />
          <section className="max-w-3xl text-lg flex flex-col gap-4 text-gray-400">
            <p>
              For centuries, Latin American people have been exploited, and
              sadly this continues. Inequality and poor distribution are
              day-to-day what we have to deal with in Latin America. LATAM is
              filled with censorship, irrational economics, inflation hitting
              tops of 100% in some countries in 2022, and political sanctions.
            </p>
            <p>
              Because of this, Radish is raising the flag to stop this, bringing
              a multicultural team, and being the new standard of blockchain in
              Latin America.
            </p>
            <Header>Just hire from Latam, it is cheaper...</Header>
            <p>
              The rising demand for tech talent the world has seen over the past
              couple of years has been a challenge to most enterprises and
              startups looking to hire talent at the lowest price. For starters,
              hiring offshore developers from Latin America is far less costly.
              Second, it allows you to access a much wider pool of talent. Not
              to mention the time zone alignment, quality, and availability of
              developers among many more. For things like that, countries around
              the globe hire people from LATAM with meager pay.
            </p>
            <p>
              The standard rates for the talent within the region are lesser
              partly because of the lower demand for the skill in the market.
              Hiring remote workers can help firms save on overhead costs,
              employee benefits, and insurance. Other costs, such as vacations
              and corporate training, as well as spending on onboarding
              sessions, can be cut as well. The cost of recruiting developers is
              one of the key determinants that sways founders toward the LATAM
              market.
            </p>
            <p>
              For this and much more, we will be the new standard that
              homogenizes Latin America in the IT field. Regarding salary, we
              don{"'"}t care where you from, your gender, nor your race, and
              that
              {"'"}s why all developers at Radish will get the same income, no
              matter where they are from, if North America, Europe, The
              Metaverse or your mom{"'"}s garage.
            </p>
            <p>
              Because, in the end, we only want to continue adding and keeping
              the best talent in this distributed universe.
            </p>

            <Header>Transparency is the new black</Header>
            <p>
              Yes, we know it is a hackneyed phrase. But we really bet for
              transparency to be our goal. Imagine countries, large companies,
              states, governments, and startups, all having their balances
              accessible to anyone in the blockchain. From how much money CEO,
              CTOs, and top-tier employees earn to how cultural and gender
              diverse their staff is.
            </p>
            <p>
              Building transparency and trust towards Radish employees,
              stakeholders, and clients, helps to attract premium talent since
              transparency has never been a more valuable asset. We really
              believe, the sooner Radish can delegate to its radishers*, the
              faster our culture will develop, in the end, radishers are the
              foundation of the company. Our manifesto, as well as our culture,
              our thoughts, and our fight for decentralization will not change.
            </p>
            <p>Our manifesto and vision of the Descentralized is immutable.</p>
            <Separator />
            <p>
              <dfn>
                <abbr title="An engineer working at the Radish team.">
                  Radisher
                </abbr>
              </dfn>
              {": "}
              An engineer working at the Radish team.
            </p>
          </section>
        </div>
      </Layout>
    </Fragment>
  )
}

function Separator() {
  return <hr className="border-zinc-800" />
}

function Header({ children = null }) {
  return <h3 className="text-3xl text-white font-bold">{children}</h3>
}

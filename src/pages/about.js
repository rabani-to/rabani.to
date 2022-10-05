import { Fragment } from "react"

import Navigation from "@/components/Navigation"
import Layout from "@/components/Layout"
import SeoTags from "@/components/SeoTags"

export default function AboutPage() {
  return (
    <Fragment>
      <SeoTags />
      <Layout>
        <Navigation />
        <div className="min-h-screen">
          <h2 className="text-7xl font-roboto font-bold">About</h2>
        </div>
      </Layout>
    </Fragment>
  )
}

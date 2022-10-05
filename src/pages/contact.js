import { Fragment } from "react"

import Navigation from "@/components/Navigation"
import Layout from "@/components/Layout"
import SeoTags from "@/components/SeoTags"

export default function ContactPage() {
  return (
    <Fragment>
      <SeoTags />
      <Layout>
        <Navigation />
        <div className="min-h-screen">
          <h2 className="text-7xl font-roboto font-bold">Contacto</h2>
        </div>
      </Layout>
    </Fragment>
  )
}

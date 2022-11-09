import { NextSeo } from "next-seo"

const URL = "https://radish.la"
const TWITTER_HANDLE = "radish_la"
export const DEFAULT_CONFIG = {
  title: "The Radish. Team",
  url: URL,
  seoURL: `${URL}/seo.png`,
  description: "Your friendly team for on-chain solutions.",
}

/**
 * @param { Partial<DEFAULT_CONFIG> } props
 */
function SeoTags(props = {}) {
  const SEO = { ...DEFAULT_CONFIG, ...props }
  return (
    <NextSeo
      title={SEO.title}
      additionalLinkTags={[
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon.png",
        },
      ]}
      twitter={{
        cardType: "summary_large_image",
        handle: TWITTER_HANDLE,
        site: SEO.url,
      }}
      openGraph={{
        type: "website",
        url: SEO.url,
        title: SEO.title,
        description: SEO.description,
        images: [
          {
            url: SEO.seoURL,
            alt: SEO.seoURL,
            width: 1200,
            height: 630,
          },
        ],
      }}
      description={SEO.description}
    />
  )
}

export default SeoTags

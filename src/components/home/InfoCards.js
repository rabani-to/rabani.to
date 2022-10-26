import { useEffect } from "react"
import Image from "next/image"

import { classnames, debounceEvent } from "@/lib/helpers"

import asset_distributed from "@/assets/distributed.svg"
import asset_multicultural from "@/assets/multicultural.svg"
import asset_reliable from "@/assets/reliable.svg"

function InfoCards() {
  useAppear()
  return (
    <div className="flex flex-col md:flex-row gap-12 md:gap-4">
      <InfoCard title="Multicultural" icon={asset_multicultural}>
        Latin America is our home, the reason we exist. Talent comes in no
        specific shape or color. Formless. We know the systems we build are
        chained, but yet everyone is free of mind and soul.
      </InfoCard>
      <InfoCard
        className="animate__delay-1s"
        title="Reliable & Efficient"
        icon={asset_reliable}
      >
        Our philosophy is to provide trustness by building consistent and
        functional software for a better decentralized. Radish will mitigate,
        thrive and help DAOs in the unexpected.
      </InfoCard>
      <InfoCard
        className="animate__delay-2s"
        title="Distributed"
        icon={asset_distributed}
      >
        As the software we help DAOs create, our team is not framed to the
        common thinking. The idea of being centralized simply kills us.
      </InfoCard>
    </div>
  )
}

function InfoCard({ title, icon, children, className }) {
  return (
    <div className={classnames("appear", className, "w-full flex flex-col")}>
      <div data-type="blur-clear" className="w-16 h-16">
        <Image alt="" src={icon} width={320} height={320} layout="responsive" />
      </div>
      <h3
        data-type="blur-clear"
        className="text-3xl mt-8 font-roboto font-bold leading-none"
      >
        {title}
      </h3>
      <p data-type="blur-clear" className="mt-4 text-gray-400">
        {children}
      </p>
    </div>
  )
}

function useAppear() {
  useEffect(() => {
    function handleScroll() {
      const halfScreenHView = window.innerHeight * 0.25
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
    return () => window.removeEventListener("scroll", debouncedScroll)
  }, [])
}

export default InfoCards

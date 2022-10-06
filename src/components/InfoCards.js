import { useEffect } from "react"
import Image from "next/image"

import { classnames, debounceEvent } from "@/lib/helpers"

import asset_distributed from "@/assets/distributed.svg"
import asset_multicultural from "@/assets/multicultural.svg"
import asset_reliable from "@/assets/reliable.svg"

function InfoCards() {
  useAppear()
  return (
    <div className="flex space-x-4">
      <InfoCard title="Multicultural" icon={asset_multicultural}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
        asperiores esse, culpa consectetur repudiandae vitae eveniet vel
        officiis dicta ad at ipsam quibusdam explicabo. Earum beatae quaerat
        voluptate cum tempore!
      </InfoCard>
      <InfoCard
        className="animate__delay-1s"
        title="Reliable & Efficient"
        icon={asset_reliable}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
        asperiores esse, culpa consectetur repudiandae vitae eveniet vel
        officiis dicta ad at ipsam quibusdam explicabo. Earum beatae quaerat
        voluptate cum tempore!
      </InfoCard>
      <InfoCard
        className="animate__delay-2s"
        title="Distributed"
        icon={asset_distributed}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
        asperiores esse, culpa consectetur repudiandae vitae eveniet vel
        officiis dicta ad at ipsam quibusdam explicabo. Earum beatae quaerat
        voluptate cum tempore!
      </InfoCard>
    </div>
  )
}

function InfoCard({ title, icon, children, className }) {
  return (
    <div className={classnames("appear", className, "flex flex-col")}>
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

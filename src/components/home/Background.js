import Image from "next/image"
import asset_static_bg from "@/assets/static-bg.jpg"

const PLACEHOLDER_IMAGE = "__PLACEHOLDER_IMAGE"
function removePlaceholderImage() {
  const item = document.querySelector(`#${PLACEHOLDER_IMAGE}`)
  if (item) {
    const hiddenAlready = item.classList.contains("animate__animated")
    if (hiddenAlready) return
    item.classList.add("animate__animated", "animate__fadeOut")
  }
}

function Background() {
  return (
    <div className="cursor-none absolute inset-0 flex items-center">
      <div className="bg-black/70 fixed inset-0 z-[1]" />
      <video
        muted
        loop
        onTimeUpdate={removePlaceholderImage}
        className="w-screen h-screen object-cover"
        src="/fondo_low.mp4"
        autoPlay
      />
      <section
        id={PLACEHOLDER_IMAGE}
        className="absolute w-screen h-screen inset-0"
      >
        <Image
          placeholder="blur"
          objectFit="cover"
          alt=""
          layout="fill"
          src={asset_static_bg}
        />
      </section>
    </div>
  )
}

export default Background

const PLACEHOLDER_ELEMENT = "__PLACEHOLDER_ELEMENT"
function removePlaceholderImage() {
  const item = document.querySelector(`#${PLACEHOLDER_ELEMENT}`)
  if (item) {
    const hiddenAlready = item.classList.contains("animate__animated")
    if (hiddenAlready) return
    item.classList.add(
      "animate__animated",
      "animate__fadeOut",
      "animate__faster"
    )
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
        id={PLACEHOLDER_ELEMENT}
        className="absolute w-screen h-screen inset-0 bg-black"
      />
    </div>
  )
}

export default Background

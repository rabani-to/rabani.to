function Background() {
  return (
    <div className="cursor-none absolute inset-0 flex items-center">
      <div className="bg-black/75 fixed inset-0" />
      <video
        loop
        muted
        className="w-screen h-screen object-cover"
        src="/fondo_low.mp4"
        autoPlay
      />
    </div>
  )
}

export default Background

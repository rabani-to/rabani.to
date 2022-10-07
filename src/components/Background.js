function Background() {
  return (
    <div className="cursor-none absolute inset-0 flex items-center">
      <div className="bg-black/75 fixed inset-0" />
      <video
        loop
        className="w-full h-full object-cover"
        src="/boo.mp4"
        autoPlay
      />
    </div>
  )
}

export default Background

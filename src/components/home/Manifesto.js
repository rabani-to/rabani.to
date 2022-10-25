import Link from "next/link"

function Manifesto() {
  return (
    <div className="flex md:justify-end mt-24">
      <Link href="/manifesto">
        <a
          title="Read our manifesto"
          className="text-7xl md:text-[9rem] hover:line-through md:text-right bg-black max-w-2xl font-bold leading-none"
        >
          The
          <br />
          Radish
          <br />
          Manifesto.
        </a>
      </Link>
    </div>
  )
}

export default Manifesto

import { useEffect, useState } from "react"
import { ImCross } from "react-icons/im"

const POINTER_SIZE = 120
function CustomPointer() {
  const [points, setPoints] = useState({ x: 0, y: 0 })
  const { x, y } = points
  useEffect(() => {
    function handleMouseMove({ clientX: x, clientY: y }) {
      setPoints({ x, y })
    }
    window.addEventListener("mousemove", handleMouseMove)
    function makePointerBigger() {
      document.body.classList.add("make-pointer-bigger")
    }
    function makePointerSmaller() {
      document.body.classList.remove("make-pointer-bigger")
    }
    document
      .querySelectorAll("a, button, [data-type='blur-clear']")
      .forEach((/** @type { HTMLDivElement } */ element) => {
        element.addEventListener("mouseenter", makePointerBigger)
        element.addEventListener("mouseleave", makePointerSmaller)
      })
  }, [])

  return (
    <div
      className="fixed pointer-events-none flex items-center justify-center z-50"
      style={{
        top: -POINTER_SIZE * 0.5,
        left: -POINTER_SIZE * 0.5,
        width: POINTER_SIZE,
        height: POINTER_SIZE,
        transform: `translate(${x}px, ${y}px)`,
      }}
    >
      <div
        data-type="custom-pointer"
        className="flex transition-all items-center justify-center rounded-full bg-white/5 w-full h-full"
      >
        <ImCross className="text-white text-xs" />
      </div>
    </div>
  )
}

export default CustomPointer

import { classnames } from "@/lib/helpers"
import styles from "./WordRotator.module.css"

function WordRotator() {
  return (
    <div className="relative inline-flex overflow-hidden">
      <span className="select-none opacity-0">Distribute</span>
      <ul
        className={classnames("absolute bottom-0 left-0", styles.animateWords)}
      >
        <li>Design</li>
        <li>Develop</li>
        <li>Launch</li>
        <li>Distribute</li>
        <li>Design</li>
      </ul>
    </div>
  )
}
export default WordRotator

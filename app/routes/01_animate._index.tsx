import { motion } from 'framer-motion'

export default function AnimationsPage() {
  return (
    <div>
      <ul className="rounded-lg  bg-slate-200  text-center leading-5">
        {/* animate x */}
        <motion.li
          className="rounded-full bg-indigo-500 px-2 text-white shadow"
          animate={{ x: 100 }}
        >
          1
        </motion.li>

        {/* animate y and delay 0.5sec */}
        <motion.li
          className="rounded-full bg-indigo-500 px-2 text-white shadow"
          animate={{ y: 100, transition: { delay: 0.5 } }}
        >
          2
        </motion.li>

        {/* animate rotate */}
        <motion.li
          className="rounded-full bg-indigo-500 px-2 text-white shadow"
          animate={{ rotate: 360 }}
        >
          3
        </motion.li>

        {/* animate scale */}
        <motion.li
          className="rounded-full bg-indigo-500 px-2 text-white shadow"
          whileHover={{ scale: 5 }}
        >
          4
        </motion.li>

        {/* nothing */}
        <motion.li className="rounded-full bg-indigo-500 px-2 text-white shadow">
          5
        </motion.li>
      </ul>
    </div>
  )
}

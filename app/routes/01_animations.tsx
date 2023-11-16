import { motion } from 'framer-motion'

export default function AnimationsPage() {
  return (
    <div>
      <ul className="bg-slate-200 leading-5 rounded-full">
        <motion.li
          className="rounded-full px-2 bg-indigo-500 text-white"
          animate={{ x: 100, transition: { duration: 1 } }}
        >
          1
        </motion.li>
        <motion.li
          className="rounded-full px-2 bg-indigo-500 text-white"
          animate={{ y: 100, transition: { delay: 1 } }}
        >
          2
        </motion.li>
        <motion.li
          className="rounded-full px-2 bg-indigo-500 text-white"
          animate={{ rotate: 360 }}
        >
          3
        </motion.li>
        <motion.li
          className="rounded-full px-2 bg-indigo-500 text-white hover:cursor-pointer"
          whileHover={{ scale: 5 }}
        >
          4
        </motion.li>
        <motion.li
          className="rounded-full px-2 bg-indigo-500 text-white"
          drag
          dragConstraints={{ left: 100, right: 100 }}
        >
          5
        </motion.li>
      </ul>
    </div>
  )
}

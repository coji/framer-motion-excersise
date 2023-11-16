import type { MetaFunction } from '@remix-run/cloudflare'
import { motion } from 'framer-motion'

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ]
}

export default function Index() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <ul className="bg-red-200">
        <motion.li animate={{ x: 100 }}>1</motion.li>
        <motion.li animate={{ y: 100 }}>2</motion.li>
        <motion.li animate={{ rotate: 360 }}>3</motion.li>
        <motion.li className="cursor-pointer" whileHover={{ scale: 5 }}>
          4
        </motion.li>
        <motion.li drag dragConstraints={{ left: 100, right: 100 }}>
          5
        </motion.li>
      </ul>
    </div>
  )
}

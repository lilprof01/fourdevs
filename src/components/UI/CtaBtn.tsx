import { motion } from 'framer-motion'

interface BtnProps{
  style: string;
  text: string;
}

const CtaBtn: React.FC<BtnProps> = ({ style, text }) => {
  return (
    <motion.button whileHover={{scale: 1.05}} whileTap={{scale: 0.95}} className={`${style} select-none bg-deep text-white rounded-full cursor-pointer`}>
      {text}
    </motion.button>
  )
}

export default CtaBtn

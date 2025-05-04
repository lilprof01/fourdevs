import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
interface BtnProps {
  style: string;
  text: string;
}

const CtaBtn: React.FC<BtnProps> = ({ style, text }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact");
  };
  return (
    <motion.button
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${style} select-none bg-deep text-white rounded-full cursor-pointer`}
    >
      {text}
    </motion.button>
  );
};

export default CtaBtn;

interface BtnProps{
  style: string;
  text: string;
}

const CtaBtn: React.FC<BtnProps> = ({ style, text }) => {
  return (
    <button className={`${style} bg-primary text-white rounded-full`}>
      {text}
    </button>
  )
}

export default CtaBtn

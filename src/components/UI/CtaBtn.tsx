interface BtnProps{
  style: string;
  text: string;
}

const CtaBtn: React.FC<BtnProps> = ({ style, text }) => {
  return (
    <button className={`${style} bg-deep text-white rounded-full`}>
      {text}
    </button>
  )
}

export default CtaBtn

interface FeaturesCardProps {
  icon: string;
  title: string;
  text: string;
}

const FeaturesCard: React.FC<FeaturesCardProps> = ({ icon, title, text }) => {
  return (
    <div className="p-7 flex flex-col justify-center align-middle gap-6 bg-[#F2F2F2] hover:bg-secondary transition-all ease-in-out duration-300 cursor-pointer border border-[#D9D9D9] rounded-xl">
      <div className="h-14 w-14 rounded-full bg-white flex justify-center items-center align-middle"><img alt="icon" src={icon} /></div>
      <p className="text-2xl font-medium">{title}</p>
      <p className="text-[16px]">{text}</p>
      <a href="#" className="text-primary">Submit a Gig &rarr;</a>
    </div>
  );
};

export default FeaturesCard;

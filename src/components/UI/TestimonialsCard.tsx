import clientAvatar from "/avatar/clientAvatar.svg";
import ratings from "/icons/ratings.png";

const TestimonialsCard = () => {
  return (
    <div className="p-7 flex flex-col justify-center align-middle gap-6 bg-[#F2F2F2] hover:bg-light transition-all ease-in-out duration-300 cursor-pointer border border-[#D9D9D9] rounded-xl">
      <div>
        <img alt="ratings" src={ratings} />
      </div>
      <p className="text-[16px]">
        FOURDEVS took our rough app idea and turned it into a polished product faster than we imagined. Their communication and execution were world-class.
      </p>
      <div className="flex items-center align-middle border-t border-[#D9D9D9] pt-4 gap-2">
        <div className="h-14 w-14 rounded-full bg-white flex justify-center items-center align-middle">
          <img alt="icon" src={clientAvatar} />
        </div>
        <div>
          <p className="text-lg font-medium">Babatunde A</p>
          <p className="text-sm text-text">Entrepreneur, Lagos</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;

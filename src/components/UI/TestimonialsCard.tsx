import clientAvatar from "/clientAvatar.svg";

const TestimonialsCard = () => {
  return (
    <div className="p-7 flex flex-col justify-center align-middle gap-6 bg-[#F2F2F2] hover:bg-light transition-all ease-in-out duration-300 cursor-pointer border border-[#D9D9D9] rounded-xl">
      <p className="text-[16px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ipsa
        excepturi enim voluptate. Deserunt fugiat id, quidem quo quibusdam est
        omnis, doloremque quisquam vitae voluptates architecto at excepturi
        eveniet iste!
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

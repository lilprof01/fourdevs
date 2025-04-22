const TrustedUser = () => {
  return (
    <div className="w-fit bg-white rounded-full p-1 shadow-xl">
      <div className="bg-secondary flex items-center align-middle rounded-full p-1">
        <div className="rounded-full flex">
          <div className="bg-[url(/Image.svg)] bg-cover bg-center h-10 w-10 rounded-full"></div>
          <div className="bg-[url(/Image-1.svg)] bg-cover bg-center h-10 w-10 rounded-full -ml-4"></div>
          <div className="bg-[url(/Image-2.svg)] bg-cover bg-center h-10 w-10 rounded-full -ml-4"></div>
        </div>
        <p className="text-sm font-medium text-[#30344A] p-2">
          200+ Happy Clients Globally
        </p>
      </div>
    </div>
  );
};

export default TrustedUser;

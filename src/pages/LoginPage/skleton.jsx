const skleton = () => {
  return (
    <div className=" flex h-screen w-full animate-pulse  justify-center bg-gray-300">
      <div className=" bottom-1/4  z-20 flex w-7/12  items-center justify-center gap-5 text-white">
        <div className="flex h-96 w-80 flex-col items-center justify-center gap-10 bg-gray-400">
          <div className=" px-10s h-5 w-[30%] self-center rounded-sm bg-gray-200"></div>
          <div className=" h-10 w-[70%] self-center rounded-lg bg-gray-200 px-10"></div>
          <div className=" h-10 w-[70%] self-center rounded-lg bg-gray-200 px-10"></div>
          <div className=" h-10 w-[70%] self-center rounded-lg bg-gray-200 px-10"></div>
          <div className=" h-10 w-[30%] self-center rounded-lg bg-gray-200 px-10"></div>
        </div>
      </div>
    </div>
  );
};

export default skleton;

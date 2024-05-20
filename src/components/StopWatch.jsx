function StopWatch() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className=" flex flex-col justify-center items-center bg-teste bg-cover bg-no-repeat bg-center h-60 w-60 my-10 sm:h-80 sm:w-80 sm:my-4  static z-1 drop-shadow-md">
        <h1 className="bg-gradient-to-r from-white via-grey-1 to-white text-4xl sm:text-6xl py-8 px-24 sm:px-28  rounded-full relative  z-10 drop-shadow-md ">
          00:00
        </h1>
      </div>
    </div>
  );
}
export default StopWatch;

function StopWatch() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className=" flex flex-col justify-center items-center bg-teste bg-cover bg-no-repeat bg-center h-60 w-60 my-20 sm:h-80 sm:w-80 sm:my-12 lg:w-100 lg:h-100  static z-1">
        <h1 className="bg-gradient-to-r from-grey-1 via-reallyWhite to-grey-1 text-4xl sm:text-6xl py-5 px-28  rounded-full relative  z-10  ">
          00:00
        </h1>
      </div>
    </div>
  );
}
export default StopWatch;

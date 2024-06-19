import Buttons from "./Buttons";

function StopWatch({ mode, sign, hours, minutes, seconds }) {
  const getClassName = () => {
    if (mode === "rest") {
      return "flex flex-col justify-center m-10 lg:my-14 items-center bg-circleBlue bg-cover bg-no-repeat bg-center h-60 w-60 my-10 sm:h-80 sm:w-80 sm:my-4  static z-1 drop-shadow-md>";
    } else if (mode === "focus") {
      return "flex flex-col justify-center  lg:my-14 items-center bg-circleRed bg-cover bg-no-repeat bg-center h-60 w-60 my-10 sm:h-80 sm:w-80 sm:my-4  static z-1 drop-shadow-md>";
    } else {
      return "flex flex-col justify-center lg:my-14 items-center bg-circlePurple bg-cover bg-no-repeat bg-center h-60 w-60 my-10 sm:h-80 sm:w-80 sm:my-4  static z-1 drop-shadow-md>";
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className={getClassName()}>
        <h1 className="bg-gradient-to-r font-bold from-grey-1 via-white to-grey-1 text-4xl sm:text-6xl py-8 px-20   rounded-full relative  z-10 drop-shadow-md ">
          {`${sign}${hours.toString().padStart(2, "0")}:${minutes
            .toString()
            .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`}
        </h1>
      </div>
    </div>
  );
}

export default StopWatch;

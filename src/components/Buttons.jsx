function Buttons({
  focusTimeClickHandler,
  restTimeClickHandler,
  mode,
  itsRunning,
}) {
  return (
    <div className="flex place-content-around  lg:px-40 xl:px-56 xl:mt-10 mt-8 lg:m-4 text-2xl md:text-3xl text-white font-bold">
      <button
        onClick={restTimeClickHandler}
        className=" whitespace-nowrap text-center bg-gradient-to-t from-darkBlue to-blue px-10 py-10 mb-3 sm:px-20 rounded-lg md:mr-8 drop-shadow-lg"
      >
        {mode === "rest" && itsRunning ? "PARAR" : "Relaxar"}
      </button>
      <button
        onClick={focusTimeClickHandler}
        className=" whitespace-nowrap text-center bg-gradient-to-b from-magenta to-red px-4 py-4 mb-3 sm:px-20 rounded-lg drop-shadow-lg"
      >
        {mode === "focus" && itsRunning ? "PARAR" : "Focar"}
      </button>
    </div>
  );
}

export default Buttons;

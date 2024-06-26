function Buttons({
  focusTimeClickHandler,
  restTimeClickHandler,
  mode,
  itsRunning,
  clearTime,
}) {
  return (
    <div className="flex place-content-around  lg:max-w-22  lg:px-40 xl:px-56 xl:mt-10 mt-8 lg:m-4 text-2xl md:text-3xl text-white font-bold">
      <button
        onClick={restTimeClickHandler}
        className=" whitespace-nowrap text-center bg-gradient-to-t from-darkBlue to-blue px-3 mb-3 sm:px-12 rounded-lg md:mr-8 drop-shadow-lg"
      >
        {mode === "rest" && itsRunning ? "PARAR" : "Relaxar"}
      </button>
      <button
        onClick={clearTime}
        className=" whitespace-nowrap text-center bg-gradient-to-b from-blue to-purple px-2 py-2 mx-1 mb-3 sm:px-20 rounded-lg drop-shadow-lg"
      >
        Zerar
      </button>
      <button
        onClick={focusTimeClickHandler}
        className=" whitespace-nowrap text-center bg-gradient-to-b from-magenta to-red px-6 py-6 mb-3 sm:px-20 rounded-lg drop-shadow-lg"
      >
        {mode === "focus" && itsRunning ? "PARAR" : "Focar"}
      </button>
    </div>
  );
}

export default Buttons;

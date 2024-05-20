function Buttons() {
  return (
    <div className="flex place-content-around ms:px-40 md:px-20  lg:px-40 xl:px-56 xl:mt-10 mt-8 lg:m-4 text-2xl md:text-3xl text-white font-bold ">
      <button className="bg-gradient-to-t from-darkBlue to-blue px-10 py-10 mb-3 sm:px-20 rounded-lg md:mr-8 drop-shadow-lg ">
        Relaxar
      </button>
      <button className="bg-gradient-to-b from-magenta to-red px-10 py-10 mb-3 sm:px-20 rounded-lg drop-shadow-lg ">
        Focar
      </button>
    </div>
  );
}
export default Buttons;

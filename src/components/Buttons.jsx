function Buttons() {
  return (
    <div className="flex place-content-around ms:px-40 md:px-20  lg:px-40 xl:px-96 mt-8 lg:m-4 text-2xl md:text-3xl text-white font-bold ">
      <button className="bg-gradient-to-t from-darkBlue to-blue px-10 py-12 sm:px-20 rounded-lg md:mr-8 ">
        Relaxar
      </button>
      <button className="bg-gradient-to-b from-magenta to-red px-10 py-12 sm:px-20 rounded-lg ">
        Focar
      </button>
    </div>
  );
}
export default Buttons;

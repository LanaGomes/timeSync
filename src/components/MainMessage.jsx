import { useState } from "react";

function MainMessage({ mode }) {
  const getClassNameMainMessage = () => {
    if (mode === "rest") {
      return "bg-blue p-6 text-xl flex-1 text-center  sm:p-4 sm:text-1xl lg:text-3xl lg:p-8 text-white";
    } else if (mode === "focus") {
      return "bg-red p-6 text-xl flex-1 text-center sm:p-4 sm:text-1xl lg:text-3xl lg:p-8  text-white";
    } else {
      return "bg-purple p-6 text-xl flex-1 text-center sm:p-4 sm:text-1xl lg:text-3xl lg:p-8  text-white";
    }
  };
  return (
    <div>
      <main className={getClassNameMainMessage()}>
        <h2 className="px-10 font-semibold">
          {mode == "rest" ? "Hora de Relaxar" : "Vamos focar!"}
        </h2>
        <p>{}</p>
      </main>
    </div>
  );
}
export default MainMessage;

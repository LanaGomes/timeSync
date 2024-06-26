import { useState } from "react";

function MainMessage({ mode, sign, time, hours, minutes, seconds }) {
  const getClassNameMainMessage = () => {
    if (mode === "rest") {
      return "bg-blue p-4 text-xl flex-1 text-center sm:text-1xl lg:text-3xl lg:p-8 text-white";
    } else if (mode === "focus") {
      return "bg-red p-4 text-xl flex-1 text-center sm:text-1xl lg:text-3xl lg:p-8  text-white";
    } else {
      return "bg-purple p-4 text-xl flex-1 text-center sm:text-1xl lg:text-3xl lg:p-8  text-white";
    }
  };
  const timeBalance = () => {
    if (sign == " ") {
      return (
        <p className="pt-4 text-xl">{`Você precisa DESCANSAR esse tempo : ${hours
          .toString()
          .padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds
          .toString()
          .padStart(2, "0")}`}</p>
      );
    } else if (sign == "-") {
      return (
        <p className="pt-4 text-xl">{`Você precisa FOCAR esse tempo : ${hours
          .toString()
          .padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds
          .toString()
          .padStart(2, "0")}`}</p>
      );
    }
  };
  return (
    <div>
      {" "}
      <main className={getClassNameMainMessage()}>
        <h2 className="px-10 font-semibold">
          {mode == "rest" ? "Hora de Relaxar" : "Vamos focar!"}
        </h2>

        {time == 0 ? (
          <p className="pt-4 text-xl">
            "O primeiro passo é sempre o mais difícil, mas não deixa de ser só
            um passo"
          </p>
        ) : (
          timeBalance()
        )}
      </main>
    </div>
  );
}
export default MainMessage;

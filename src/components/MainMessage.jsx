import { useState } from "react";

function MainMessage() {
  const [message, setMessage] = useState(true);

  return (
    <div>
      <main className="bg-grey-1  text-xl flex-1 text-center sm:p-4 sm:text-1xl lg:text-2xl lg:p-4">
        <h2 className="font-bold">Hora de Relaxar!</h2>
        <p>Você tem 1 hora para descansar</p>
      </main>
    </div>
  );
}
export default MainMessage;

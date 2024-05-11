import { useState } from "react";

function MainMessage() {
  const [message, setMessage] = useState(true);
  return (
    <div>
      <main className="bg-grey-1 my-4 p-4 flex-1 text-center sm:p-8 lg:p-12">
        <h2 className="font-bold">Hora de Relaxar!</h2>
        <p>Você tem 1 hora para descansar</p>
      </main>
    </div>
  );
}
export default MainMessage;

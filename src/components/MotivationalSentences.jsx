import React, { useState, useEffect } from "react";
import errorImg from "./../../public/Images/icons8-erro.gif";
import loadingImg from "./../../public/Images/loadingImg.gif";

const MotivationalSentences = () => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchQuote = async () => {
    const url = "https://quotes85.p.rapidapi.com/keyword?word=focus";
    let apiKey = "";
    try {
      apiKey = process.env.RAPIDAPI_KEY;
    } catch (e) {
      console.log(e);
      apiKey = import.meta.env.VITE_RAPIDAPI_KEY;
    }
    console.log(import.meta.env.VITE_RAPIDAPI_KEY);
    console.log("maoe");
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY,
        "x-rapidapi-host": "quotes85.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(
          '"Cada erro em sua requisição é uma oportunidade de aprendizado e crescimento. Persevere e transforme obstáculos em degraus para o sucesso"'
        );
      }

      const result = await response.json();
      console.log(result);

      if (Array.isArray(result) && result.length > 0) {
        const randomIndex = Math.floor(Math.random() * result.length);
        setQuote(result[randomIndex]);
      } else {
        throw new Error("Nenhuma citação encontrada.");
      }

      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();

    const intervalId = setInterval(() => {
      fetchQuote(); // Fetch a new quote every hour
    }, 3600000);

    return () => clearInterval(intervalId);
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center my-6 mx-12 text-lg text-center text-grey-2 italic">
        <img className="my-2 h-8" src={loadingImg} alt="Loading"></img>
        <p>Carregando frase do dia...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center my-6 mx-12 text-xs text-left text-grey-2 sm:text-base md:my-10 md:mx-36 gap-5 italic">
        <img
          className="flex justify-center items-center h-10 w-10"
          src={errorImg}
          alt="Error"
        ></img>
        Erro: {error}
      </div>
    );
  }

  return (
    <div className="my-6 mx-12 text-lg text-center text-grey-2 italic">
      <blockquote>
        <q>{quote}</q>
      </blockquote>
    </div>
  );
};

export default MotivationalSentences;

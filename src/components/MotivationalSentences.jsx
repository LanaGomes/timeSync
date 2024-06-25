import React, { useState, useEffect } from "react";
import errorImg from "./../Images/icons8-erro.gif";
import loadingImg from "./../Images/loadingImg.gif";

const MotivationalSentences = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuote = async () => {
      const url =
        "https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote?token=ipworld.info";
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY,
          "x-rapidapi-host":
            "quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);

        if (!response.ok) {
          throw new Error(
            '"Cada erro em sua requisição é uma oportunidade de aprendizado e crescimento.Persevere e transforme obstáculos em degraus para o sucesso"'
          );
        }

        const result = await response.json();
        console.log(result);
        setQuote(result.text);
        setAuthor(result.author);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchQuote();
  }, []);

  if (loading) {
    return (
      <div className="flex  flex-col justify-center items-center my-6 mx-12 text-lg text-center text-grey-2 italic ">
        <img className="my-2 h-8" src={loadingImg}></img>
        <p>Carregando frase do dia...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center my-6 mx-12 text-xs text-left text-grey-2 sm:text-base md:my-10 md:mx-36 gap-5 italic">
        {" "}
        <img
          className=" flex justify-center  items-center h-10 w-10"
          src={errorImg}
        ></img>{" "}
        Erro: {error}
      </div>
    );
  }

  return (
    <div className="flex text-grey-2 text-center my-10 mx-36 gap-5 italic">
      <blockquote>
        <q>{quote}</q>{" "}
      </blockquote>
      <p>{author}</p>
    </div>
  );
};

export default MotivationalSentences;

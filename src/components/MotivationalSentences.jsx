import React, { useState, useEffect } from "react";
import BancoFrasesMotivacionais from "./BancoFrasesMotivacionais";
import loadingImg from "./../../public/Images/loadingImg.gif";

const MotivationalSentences = () => {
  const [quote, setQuote] = useState(null);
  const [author, setAuthor] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchRandomQuote = () => {
    const randomIndex = Math.floor(
      Math.random() * BancoFrasesMotivacionais.length
    );
    const randomQuote = BancoFrasesMotivacionais[randomIndex];

    setQuote(randomQuote.quote);
    setAuthor(randomQuote.author);
  };

  useEffect(() => {
    fetchRandomQuote();
    setLoading(false);

    const intervalId = setInterval(() => {
      fetchRandomQuote();
    }, 1800000);

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
  return (
    <div className="my-6 mx-12 text-lg text-center text-grey-2 italic">
      <blockquote>
        <q>{quote}</q>
      </blockquote>
      <p>{author}</p>
    </div>
  );
};

export default MotivationalSentences;

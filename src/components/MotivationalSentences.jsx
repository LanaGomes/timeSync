import React, { useState, useEffect } from "react";

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
          throw new Error("Erro na requisição");
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
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>Erro: {error}</p>;
  }

  return (
    <div>
      <p>{quote}</p>
      <p>{author}</p>
    </div>
  );
};

export default MotivationalSentences;

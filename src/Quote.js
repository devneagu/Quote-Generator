import React, { useEffect, useState } from "react";

const Quote = function Quote({ getRandomQuote }) {
  const [quoteList, setQuoteList] = React.useState([]);

  if (quoteList.length == 0) {
    let randomPage = parseInt(Math.random(Math.random()) * 70000);
    fetch(
      "https://quote-garden.herokuapp.com/api/v3/quotes?page=" +
        String(randomPage) +
        "&limit=1"
    )
      .then((response) => response.json())
      .then((data) => setQuoteList(data.data));
  }
  function getRandomQuote() {
    let randomPage = parseInt(Math.random(Math.random()) * 70000);
    fetch(
      "https://quote-garden.herokuapp.com/api/v3/quotes?page=" +
        String(randomPage) +
        "&limit=1"
    )
      .then((response) => response.json())
      .then((data) => setQuoteList(data.data));
  }
  //   useEffect(() => {
  //     console.log(quoteList);
  //     if (quoteList.length) quoteElement([quoteList[0]]);
  //   }, [quoteList]);
  return (
    <div>
      <h1 onClick={() => getRandomQuote()}>Random Quote</h1>
      <div className="text-center mb-5">
        {quoteList.length > 0 ? (
          quoteList.map((item) => (
            <div key={item._id}>
              <p>{item.quoteText}</p>
              <h3>{item.quoteAuthor}</h3>
              <h5>{item.quoteGenre}</h5>
            </div>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};
export default Quote;

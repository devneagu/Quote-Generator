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
    let randomPage = parseInt(Math.random(Math.random()) * 7000);
    fetch(
      "https://quote-garden.herokuapp.com/api/v3/quotes?page=" +
        String(randomPage) +
        "&limit=1"
    )
      .then((response) => response.json())
      .then((data) => setQuoteList(data.data));
  }

  function goToAuthor() {
    let randomPage = parseInt(Math.random(Math.random()) * 7000);
    console.log(
      "https://quote-garden.herokuapp.com/api/v3/quotes?page=" +
        String(randomPage) +
        "&author" +
        quoteList[0].quoteAuthor
    );
    fetch(
      "https://quote-garden.herokuapp.com/api/v3/quotes?author=" +
        quoteList[0].quoteAuthor
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setQuoteList(data.data);
      });
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
              <div onClick={() => goToAuthor()} className="authorContainer">
                <h3>{item.quoteAuthor}</h3>
                <h5>{item.quoteGenre}</h5>
              </div>
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

import React from "react";
import { useSelector } from 'react-redux';
import QuoteCard from "./QuoteCard";

function Quotes() {
  const quotes = useSelector( state => state.quotes );

  const quoteComponents = quotes.map( quote => {
    return(
      <QuoteCard key={ quote.id } quote={ quote } />
    )
  })

  return (
    <div>
      <hr />
      <div className="row justify-content-center">
        <h2>Quotes</h2>
      </div>
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            { quoteComponents }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quotes;

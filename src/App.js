import React from "react";
import "./styles.css";
import { produce } from "immer";
export default function App() {
  let book = { title: "Bhagavan Ravana Brahma" };

  let book2 = published(book);

  console.log(JSON.stringify(book2));
  return (
    <div className="App">
      <h1>
        Immer usage than Immutable, popularity: immer will do safe operation of
        immutable thing, it is far better than the usage of the spread operator
        also{" "}
      </h1>
      Before produce the old object: {JSON.stringify(book)}
      <br />
      After usage of Produce :: {JSON.stringify(book2)}
    </div>
  );
}

const published = (book) => {
  return produce(book, (draftBook) => {
    draftBook.isPublished = true;
  });
};

import React, { useState } from "react";

const Layout = ({ keyValue, data }) => {
  const [hover, setHover] = useState(false);

  // Store the page content in a variable
  let wordString = data.content;

  // Get the total number of tokens on each page
  let totTokens = data.tokens.length;

  // Store all the tokens on a page in a tokens array
  let tokensArray = [];
  for (let i = 0; i < totTokens; i++) {
    tokensArray.push(data.tokens[i].position);
  }

  function mapWords() {
    let wordObj = {};
    for (let i = 0; i < totTokens; i++) {
      //Get the first index of every token in the tokens array
      const startIdx = tokensArray[i][0];

      //Get the last index of every token in the tokens array
      const endIdx = tokensArray[i][1];

      // Return the portion of string in the wordString corresponding to that particular array from the tokens array
      const slicedString = wordString.slice(startIdx, endIdx);

      // check to confirm the sliced string matches the values from the tokens
      const wordValue = data.tokens[i].value;
      // console.log("WORDS VS VALUES", slicedString, wordValue);

      wordObj[slicedString] = wordValue;
    }
    return wordObj;
  }

  let pageContent = mapWords();

  // console.log("HERE'S THE PAGE CONTENT", pageContent);

  let dataContent = data.content;
  function clickCallback(w) {
    w = w.replace(/[^\w\s]/gi, '')

    // Check the word value against the content returned from the content object
    let found = pageContent[w];
    if (found !== undefined) {
      alert(found);
    } else {
      alert(w);
    }
  }

  function clickableWords(dataContent, clickCallback) {
    const words = dataContent.split(/ /g);

    return words.map((w) => (
      <span
        className="text-center p-4 wrap"
        id="page-content"
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
        onClick={() => clickCallback(w)}
      >
        {w}
      </span>
    ));
  }

  return (
    <div className="col" id="page" key={keyValue}>
      {/* <WordModal /> */}
      {clickableWords(dataContent, clickCallback)}
    </div>
  );
};

export default Layout;

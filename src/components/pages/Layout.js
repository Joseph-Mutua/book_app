import React from "react";
import WordModal from "../Modal";

const Layout = ({ keyValue, data }) => {
  // console.log("LAYOUT DATA OBJECT", data.content);

  // Store the page content in a variable
  let wordString = data.content;

  // Get the total number of tokens on each page
  let totTokens = data.tokens.length;

  // Store all the tokens on a page in a tokens array
  let tokensArray = [];
  for (let i = 0; i < totTokens; i++) {
    tokensArray.push(data.tokens[i].position);
  }

  for (let i = 0; i < totTokens; i++) {
    //Get the first index of every token in the tokens array
    const startIdx = tokensArray[i][0];

    //Get the last index of every token in the tokens array
    const endIdx = tokensArray[i][1];

    // Return the portion of string in the wordString corresponding to that particular array from the tokens array
    const slicedString = wordString.slice(startIdx, endIdx);

    // check to confirm the sliced string matches the values from the tokens
    const wordValue = data.tokens[i].value;
    console.log("WORDS VS VALUES", slicedString, wordValue);
  }

  return (
    <div className="col" id="page" key={keyValue}>
      <h1 className="text-center p-4" id="page-content">
        {data.content}
      </h1>
    </div>
  );
};

export default Layout;

import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { GET_BOOK } from "../GraphQL/Queries";

export const GetBook = () => {
  const { error, loading, data } = useQuery(GET_BOOK);
  const [pages, setPages] = useState([]);

  useEffect(() => {
    if (data) {
      console.log(data);
      setPages(data.book.pages);
    }
  }, [data]);


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h1>Page Content</h1>
      <div>

        {pages.map((page, index) => {
          return <Link key={index}>{JSON.stringify(page.content)}</Link>;
        })}
      </div>
    </div>
  );
};

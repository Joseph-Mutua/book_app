import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_BOOK } from "../GraphQL/Queries";
import Pagination from "./Pagination";

export const GetBook = () => {
  const { error, loading, data } = useQuery(GET_BOOK);
  const [pages, setPages] = useState([]);

  useEffect(() => {
    if (data) {
      // console.log(data);
      setPages(data.book.pages);
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="container">
      <Pagination pageData={pages} pageLimit={1} dataLimit={1} />
    </div>
  );
};

import React, { useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { GET_BOOK } from "../GraphQL/Queries";

export const GetBook = () => {
  const { error, loading, data } = useQuery(GET_BOOK);

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h1>Book</h1>
    </div>
  );
};

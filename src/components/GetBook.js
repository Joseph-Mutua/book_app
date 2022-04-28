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

  // let count;
  // const sortPages = (count = 0) => {
  //   return [pages[count], pages[count + 1]];
  // };

  // const pagesToShow = sortPages(count)

  //   function displayPages() {
  //     return pagesToShow.map((page, index) => {
  //       return (
  //         <div className="col-md-6 p-4 wrap" id="page" key={index}>
  //           <h1 className="display-3">{JSON.stringify(page.content)}</h1>
  //         </div>
  //       );
  //     });
  //   };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  //   return (
  //     <div className="container">
  //       <h1 className="text-center">Page Content</h1>
  //       <div className="row">{ displayPages(pages)}</div>
  //     </div>
  //   );

  return (
    <div className="container">
      <Pagination pageData={pages} pageLimit={1} dataLimit={1} />
    </div>
  );
};

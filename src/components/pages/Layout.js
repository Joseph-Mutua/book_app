import React from "react";

const Layout = ({ keyValue, data }) => {
  return (
    <div className="col" id="page" key={keyValue}>
      <h1 className="text-center p-4" id="page-content">{data.content}</h1>
    </div>
  );
};

export default Layout;
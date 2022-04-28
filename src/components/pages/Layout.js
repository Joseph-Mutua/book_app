import React from "react";

const Layout = ({ keyValue, data }) => {
  return (
    <div className="col" id="page" key={keyValue}>
      <h1 className="display-1">{JSON.stringify(data.content)}</h1>
    </div>
  );
};

export default Layout;
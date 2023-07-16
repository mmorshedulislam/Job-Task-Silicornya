import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div>
      <p>Error 404 Not Found</p>
      <h2>{error.message | error.status}</h2>
    </div>
  );
};

export default ErrorPage;

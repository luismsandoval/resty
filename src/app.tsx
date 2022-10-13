import React, { useState } from "react";

import "./app.scss";

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Form } from "./components/form";
import { Results } from "./components/results";

const App = () => {
  const [data, setData] = useState({});
  const [requestParams, setRequestParams] = useState({ method: "", url: "" });

  const callApi = async (request: any) => {
    const response = await fetch(request.url, { method: request.method });
    let parsed = await response.json();
    let data = { parsed, response };
    setData(data);
    setRequestParams(request);
  };

  return (
    <>
      <Header />
      <div>Request Method: {requestParams?.method}</div>
      <div>URL: {requestParams?.url}</div>
      <Form handleApiCall={callApi} />
      <Results data={data} />
      <Footer />
    </>
  );
};

export default App;

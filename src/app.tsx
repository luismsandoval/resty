import { useReducer } from "react";

import "./app.scss";

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Form } from "./components/form";
import { Results } from "./components/results";
import History from "./components/history/history";
import LeftSidebar from "./components/results/LeftSidebar";
import RightSidebar from "./components/history/RightSidebar";

interface AppState {
  method: "GET" | "POST" | "PUT";
  url: string;
  body: object | undefined;
  response: object | undefined;
}

export const changeMethod = (
  state: AppState,
  method: "GET" | "POST" | "PUT"
) => {
  if (method === "GET") {
    state.body = undefined;
  }
  return {
    ...state,
    method,
  };
};

export const setBodyIfNotGet = (state: AppState, body: object) => {
  if (state.method !== "GET") {
    state.body = body;
  }
  return state;
};

export const setURL = (state: AppState, url: string) => {
  state.url = url;
  return state;
};

export const setResponse = (state: AppState, response: object) => {
  state.response = response;
  return state;
};

export const dispatchAction = (
  state: AppState,
  action: { action: string; body: unknown }
) => {
  switch (action.action) {
    case "method":
      return changeMethod(state, action.body as "GET" | "POST" | "PUT");
    case "url":
      return setURL(state, action.body as string);
    case "body":
      return setBodyIfNotGet(state, action.body as object);
    case "response":
      return setResponse(state, action.body as object);
    default:
      return state;
  }
};

const historyReducer = (state, action: { action: string; body: unknown }) => {
  switch (action.action) {
    case "history":
      return {
        ...state,
        history: [...state.history, action.body],
      };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(dispatchAction, {
    method: "PUT",
    url: "http://localhost:3000",
    body: undefined,
    response: undefined,
  });

  const [historyState, historyDispatch] = useReducer(historyReducer, {
    history: [],
  });

  const updateBodyIfNotGet = (body: object) => {
    dispatch({ action: "body", body: body });
  };
  const updateMethod = (method: "GET" | "POST" | "PUT") => {
    dispatch({ action: "method", body: method });
  };
  const updateURL = (url: string) => {
    dispatch({ action: "url", body: url });
  };
  const updateResponse = (response: object) => {
    dispatch({ action: "response", body: response });
  };

  const updateHistory = (response: object) => {
    historyDispatch({ action: "history", body: response });
  };

  const callApi = async (request: any) => {
    const response = await fetch(request.url, { method: request.method });
    let parsed = await response.json();
    let data = { parsed, response };
    updateHistory(data);
    updateBodyIfNotGet(data);
    updateMethod(request.method);
    updateURL(request.url);
    updateResponse(data);
  };

  return (
    <>
      <Header />
      <div>Request Method: {state?.method}</div>
      <div>URL: {state?.url}</div>
      <Form handleApiCall={callApi} />
      <LeftSidebar>
        <Results data={state.response} />
      </LeftSidebar>
      <RightSidebar>
        <History history={historyState.history} />
      </RightSidebar>
      <Footer />
    </>
  );
};

export default App;

import React from "react";
import "./form.scss";

export interface formData {
  method: string;
  url: string;
}

const handleSubmit = (
  e: React.FormEvent<HTMLFormElement>,
  callback: any
): void => {
  e.preventDefault();
  const formData = {
    method: "GET",
    url: e.target[0].value,
  };
  callback(formData);
};

export const Form = (props: any) => {
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e, props.handleApiCall)}>
        <label>
          <span>URL: </span>
          <input name="url" type="text" />
          <button type="submit">GO!</button>
        </label>
        <label className="methods">
          <input type="radio" name="method" value="GET" checked />
          GET
          <br />
          <input type="radio" name="method" value="POST" />
          POST
          <br />
          <input type="radio" name="method" value="PUT" />
          PUT
          <br />
          <input type="radio" name="method" value="DELETE" />
          DELETE
        </label>
      </form>
    </>
  );
};

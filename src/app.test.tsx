import { createElement } from "react";
import { render, cleanup, screen } from "@testing-library/react";

import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Form } from "./components/form";
import { Results } from "./components/results";

afterEach(cleanup);

describe("component tests", () => {
  it("renders the header component", () => {
    let header = createElement(Header);
    render(header);
    expect(header).toBeTruthy();
    expect(screen.getByText("RESTy")).toBeTruthy();
  });

  it("renders the footer component", () => {
    let footer = createElement(Footer);
    render(footer);
    expect(footer).toBeTruthy();
    expect(screen.getByText("2022")).toBeTruthy();
  });

  it("renders the form component", () => {
    let form = createElement(Form);
    render(form);
    expect(form).toBeTruthy();
    expect(screen.getByText("URL:")).toBeTruthy();
  });

  it("renders the results component", () => {
    let results = createElement(Results);
    render(results);
    expect(results).toBeTruthy();
    expect(screen.getByText("results")).toBeTruthy();
  });
});

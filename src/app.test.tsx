const { React, createElement } = require("react");
const {
  render,
  fireEvent,
  cleanup,
  screen,
} = require("@testing-library/react");

const {Header} = require("./components/header");
const {Footer} = require("./components/footer");
const {Form} = require("./components/form");
const {Results} = require("./components/results");

afterEach(cleanup);

describe("component tests", () => {
  it("renders the header component", () => {
    let header = createElement(Header);
    render(header);
    expect(header).toBeTruthy();
    expect(screen.queryByText("RESTy")).toBeTruthy();
  });

  it("renders the footer component", () => {
    let footer = createElement(Footer);
    render(footer);
    expect(footer).toBeTruthy();
    expect(screen.queryByText("2022")).toBeTruthy();
  });

  it("renders the form component", () => {
    let form = createElement(Form);
    render(form);
    expect(form).toBeTruthy();
    expect(screen.queryByText("URL:")).toBeTruthy();
  });

  it("renders the results component", () => {
    let results = createElement(Results);
    render(results);
    expect(results).toBeTruthy();
    expect(screen.queryByText("results")).toBeTruthy();
  });
});

import { render, fireEvent } from "@testing-library/react";
import Snowman from "./Snowman";
import TEST_IMAGE from "./0.png";

const word = "apple";

it("renders without crashing", function () {
  // this is a low-value test, but better than nothing
  render(
    <Snowman maxWrong={word.length - 1} images={TEST_IMAGE} words={word} />
  );
});

it("matches snapshot", function () {
  const { container } = render(
    <Snowman maxWrong={word.length - 1} images={TEST_IMAGE} words={word} />
  );
  expect(container).toMatchSnapshot();
});

it("end of game snapshot", function () {
  const { container } = render(
    <Snowman maxWrong={word.length - 1} images={TEST_IMAGE} words={word} />
  );
  expect(container).toMatchSnapshot();

  const bButton = container.querySelector('button[value="b"]');
  fireEvent.click(bButton);
  const cButton = container.querySelector('button[value="c"]');
  fireEvent.click(cButton);
  const dButton = container.querySelector('button[value="d"]');
  fireEvent.click(dButton);
  const fButton = container.querySelector('button[value="f"]');
  fireEvent.click(fButton);
  const gButton = container.querySelector('button[value="g"]');
  fireEvent.click(gButton);
  const hButton = container.querySelector('button[value="h"]');
  fireEvent.click(hButton);

  expect(container.querySelector("#letter-buttons")).toHaveClass("hidden");
});

// it("button area is not displayed when max guesses are reached", function () {});

import { render, fireEvent } from "@testing-library/react";
import Snowman from "./Snowman";
import TEST_IMAGE from "./0.png";

const word = 'apple';

it("renders without crashing", function () {
  // this is a low-value test, but better than nothing
  render(<Snowman maxWrong={word.length-1} images={TEST_IMAGE} words={word}/>);
});



it("matches snapshot", function () {
  const { container } = render(<Snowman maxWrong={word.length-1} images={TEST_IMAGE} words={word}/>);
  expect(container).toMatchSnapshot();
});

Descr
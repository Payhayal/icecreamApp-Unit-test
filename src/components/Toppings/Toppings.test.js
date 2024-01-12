import { render, screen } from "@testing-library/react";
import Toppings from ".";
import userEvent from "@testing-library/user-event";

test("the effect of adding to the total price", async () => {
  render(<Toppings />);
  const user = userEvent.setup();

  //  call total price
  const total = screen.getByText(/Total Toppings Price :/i);

  // call the cherries topping and add it to the total
  const cherryCheck = await screen.findByRole("checkbox", {
    name: /Cherries/i,
  });
  await user.click(cherryCheck);

  // check the total price
  expect(total).toHaveTextContent("2");

  // add Mochi topping and add it to the total
  const mochiCheck = await screen.findByRole("checkbox", { name: /Mochi/i });
  await user.click(mochiCheck);

  // check the total price
  expect(total).toHaveTextContent("4");

  //   remove 1 topping from the basket
  await user.click(cherryCheck);
  expect(total).toHaveTextContent("2");

  // remove 1 more topping from the basket
  await user.click(mochiCheck);
  expect(total).toHaveTextContent("0");
});

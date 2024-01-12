import { render, screen, waitFor } from "@testing-library/react";
import Scoops from ".";
<<<<<<< HEAD
=======
import userEvent from "@testing-library/user-event";
>>>>>>> d6f7a241912506dd82c8f255900f75a060207391

/* matchers 
* get/find/query+[All]+By+matcher
    get >> elementler baslangicta DOM da var ise kullanilir
    find>>elemtin ne zmn ekrana basilacagi belli degilse (async-await)
    query>> elementler DOM`da yok ise ve kosula gore gelecekse kullanilir 
*/

test("A card is rendered for each type coming from the API", async () => {
  render(<Scoops />);
  //   call all cards(images) that are rendered
  const images = await screen.findAllByRole("img", { name: /ice-scoop/i });
  //   Is the number of images received 4?
  expect(images).toHaveLength(4);
});
<<<<<<< HEAD
=======

test("Does the total price increase when the add button is clicked?", async () => {
  render(<Scoops />);
  const user = userEvent.setup();

  // call total price
  const total = await screen.findByRole("heading", {
    name: /Total Price :/i,
  });
  // call all add buttons
  const buttons = await screen.findAllByRole("button", { name: /add/i });

  // add 1 scoop of icecream and check the price
  await user.click(buttons[0]);
  expect(total).toHaveTextContent("5");

  // check double click on vanilla icecream
  await user.dblClick(buttons[1]);
  expect(total).toHaveTextContent("15");
});

test("Does the total price decrease when the clear button is clicked?", async () => {
  render(<Scoops />);
  const user = userEvent.setup();

  // call total price
  const total = await screen.findByRole("heading", { name: /Total Price :/i });
  // call all clear buttons
  const delButtons = await screen.findAllByRole("button", {
    name: /Clear/i,
  });

  // call all add buttons
  const addButtons = await screen.findAllByRole("button", { name: /add/i });

  // add to different types of scoops
  await user.click(addButtons[2]);
  await user.dblClick(addButtons[3]);

  await waitFor(() => expect(total).toHaveTextContent("15"));

  // clear 1 item in the basket when clear button is clicked
  await user.click(delButtons[2]);

  await waitFor(() => expect(total).toHaveTextContent("10"));

  // clear 2 items in the basket when clear button is clicked
  await user.click(delButtons[3]);

  await waitFor(() => expect(total).toHaveTextContent("0"));
});
>>>>>>> d6f7a241912506dd82c8f255900f75a060207391

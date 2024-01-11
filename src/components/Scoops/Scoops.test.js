import { render, screen } from "@testing-library/react";
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
  const images = await screen.findAllByRole("img", { name: "ice-scoop" });
  //   Is the number of images received 4?
  expect(images).toHaveLength(4);
});
<<<<<<< HEAD
=======

describe("check the clear and add buttons", () => {
  test("Does the total price increase when the add button is clicked?", async () => {
    render(<Scoops />);
    const user = userEvent.setup();

    // call total price
    const total = screen.getByRole("heading", { name: /Total Price :/i });
    // call all add buttons
    const addButtons = await screen.findAllByRole("button", { name: /add/i });

    // add 1 scoop of icecream and check the price
    await user.click(addButtons[0]);
    expect(total).toHaveTextContent("5");

    // check double click on vanilla icecream
    await user.dblClick(addButtons[1]);
    expect(total).toHaveTextContent("15");
  });
  test("Does the total price decrease when the clear button is clicked?", async () => {
    render(<Scoops />);
    const user = userEvent.setup();

    // call total price
    const total = screen.getByRole("heading", { name: /total price : /i });
    // call all clear buttons
    const clearButtons = await screen.findAllByRole("button", {
      name: /clear/i,
    });

    // call all add buttons
    const addButtons = await screen.findAllByRole("button", { name: /add/i });

    // add 1 scoop of icecream and check the price
    await user.click(addButtons[0]);
    expect(total).toHaveTextContent("5");

    // click clear button and ckeck the price
    await user.click(clearButtons[0]);
    expect(total).toHaveTextContent("0");

    // add to different types of scoops
    await user.click(addButtons[2]);
    await user.dblClick(addButtons[3]);

    expect(total).toHaveTextContent("15");

    // clear 1 item in the basket when clear button is clicked
    await user.click(clearButtons[2]);
    expect(total).toHaveTextContent("10");

    // clear 2 items in the basket when clear button is clicked
    await user.click(clearButtons[3]);
    expect(total).toHaveTextContent("0");
  });
});
>>>>>>> d6f7a241912506dd82c8f255900f75a060207391

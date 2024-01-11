import { render, screen } from "@testing-library/react";
import Scoops from ".";

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

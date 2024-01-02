import { fireEvent, render, screen } from "@testing-library/react";
import Form from ".";
import userEvent from "@testing-library/user-event";

test("Is button active depending on the conditions?", async () => {
  render(<Form />);

  const user = userEvent.setup();

  // getting the necessary elements
  const orderBtn = screen.getByRole("button");
  const checkBox = screen.getByRole("checkbox", {
    name: "I have read and accept the conditions",
  });
  //   first, the button is inactive
  expect(orderBtn).toBeDisabled();

  //   checking if the checkbox is unticked(checkbox tiksiz mi kontrol etme)
  expect(checkBox).not.toBeChecked();

  // tick the checkbox and check if button is active or not
  await user.click(checkBox);
  expect(orderBtn).toBeEnabled();

  // untick the checkbox and check if button is active or not
  await user.click(checkBox);
  expect(orderBtn).toBeDisabled();
});

test("A popup appears when the confirm button is hovered", async () => {
  render(<Form />);
  const user = userEvent.setup();

  // getting the necessary elements
  const checkBox = screen.getByRole("checkbox");
  const button = screen.getByRole("button");

  //   trigger user intereactions(kullanici etkilesimlerini tetikleme fireEvent yerine)
  await user.click(checkBox);
  fireEvent.mouseEnter(button);

  // call the popup
  const popup = screen.getByText("We won`t deliver", { exact: false });

  // Does the popup appear?(popup gozukuyor mu?)
  expect(popup).toBeVisible();

  //   unhover the mouse from the button
  fireEvent.mouseLeave(button);
  // Does the popup disappear?
  expect(popup).not.toBeVisible();
});

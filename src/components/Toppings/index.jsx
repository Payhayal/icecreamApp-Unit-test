import axios from "axios";
import { useEffect, useState } from "react";

const Toppings = () => {
  const [toppingData, setToppingData] = useState([]);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3050/toppings")
      .then((res) => setToppingData(res.data));
  }, []);
  // adds to the basket when input is ticked and removes from the basket when input is ticked again
  const handleChange = (e, top) => {
    e.target.checked
      ? setBasket([...basket, top])
      : setBasket(basket.filter((i) => i.name !== top.name));
  };

  return (
    <div className="container my-5">
      <h1 className="d-flex justify-content-center dondurma">Toppings</h1>
      <h2
        className="d-flex justify-content-start bg-warning text-black rounded text-danger shadow text-nowrap"
        style={{ width: "350px" }}
      >
        Each topping: $2
      </h2>

      <h2
        className="d-flex justify-content-center bg-danger text-white rounded p-2 text-danger shadow"
        style={{ width: "550px" }}
      >
        Total Toppings Price : ${basket.length * 2}
      </h2>

      <div className="row gap-3 mt-4">
        {toppingData.map((top, i) => (
          <div
            key={i}
            className="d-flex flex-column align-items-center"
            style={{ width: "150px" }}
          >
            <img className="img-fluid" src={top.imagePath} alt="" />
            <label htmlFor={top.name} className="text-nowrap">
              {top.name}
            </label>
            <input
              type="checkbox"
              className="form-check-input"
              onChange={(e) => handleChange(e, top)}
              id={top.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Toppings;

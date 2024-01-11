import React from "react";

const Card = ({ scoop, basket, setBasket }) => {
  //to find how many scoops are in the basket
  const found = basket.filter((item) => item.name === scoop.name);
  const amount = found.length;

  //to clear the same scoops
  const handleReset = () => {
<<<<<<< HEAD
    const clear = basket.filter((item) => item.name !== scoop.name);
    setBasket(clear);
=======
    const clearBasket = basket.filter((item) => item.name !== scoop.name);

    setBasket(clearBasket);
>>>>>>> d6f7a241912506dd82c8f255900f75a060207391
  };

  return (
    <div
      className="d-flex flex-column align-items-center"
      style={{ width: "150px" }}
    >
      <img className="img-fluid" src={scoop.imagePath} alt="ice-scoop" />
      <label className="lead">{scoop.name}</label>
      <div className="d-flex align-items-center gap-2 mt-2">
        <button className="btn btn-danger" onClick={handleReset}>
          Clear
        </button>
        <span className="fs-2">{amount}</span>
        <button
          className="btn btn-warning"
          onClick={() => setBasket([...basket, scoop])}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Card;

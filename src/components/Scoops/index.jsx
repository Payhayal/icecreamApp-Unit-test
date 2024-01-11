import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./../Card/index";

const Scoops = () => {
  const [scoopData, setScoopData] = useState([]);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3050/scoops")
      .then((res) => setScoopData(res.data));
  }, []);
  console.log(basket);

  return (
    <div className="container">
      <h1 className="d-flex justify-content-center ">Icecream Shop</h1>
      <p className="fs-2 text-dark font-weight-bold fw-2 ">Each scoop:$5</p>
      <h2 className="d-flex justify-content-center bg-light rounded p-2 text-danger shadow">
        Total Scoops: {basket.length}
      </h2>
      <h2 className="d-flex justify-content-center bg-light rounded p-2 text-danger shadow">
        Total Price : ${basket.length * 5}
      </h2>
      <div className="row gap-5 p-3 justify-content-between">
        {scoopData.map((scoop, i) => (
          <Card key={i} scoop={scoop} basket={basket} setBasket={setBasket} />
        ))}
      </div>
    </div>
  );
};

export default Scoops;

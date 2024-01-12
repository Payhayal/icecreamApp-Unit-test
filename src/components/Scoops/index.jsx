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

  return (
    <div className="container">
      <h1 className="d-flex justify-content-center dondurma ">
        <span>🍨🍦</span>Ice Cream Shop<span>🍨🍦</span>
      </h1>
      <h2
        className="d-flex justify-content-start bg-warning text-black rounded text-danger shadow text-nowrap"
        style={{ width: "350px" }}
      >
        Each scoop:$5
      </h2>
      <h2
        className="d-flex justify-content-center bg-light  rounded p-2 text-danger shadow"
        style={{ width: "550px" }}
      >
        Total Scoops:{basket.length}
      </h2>
      <h2
        className="d-flex justify-content-center bg-danger text-white rounded p-2 text-danger shadow"
        style={{ width: "550px" }}
      >
        Total Price :${basket.length * 5}
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

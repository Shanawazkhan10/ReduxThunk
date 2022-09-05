import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const SellCake = () => {
  const posts = useSelector((state) => state.numberOfCake);
  const [first, setfirst] = useState("false");
  // var data
  useEffect(() => {
    console.log(posts);
    if (first === "true") {
      setfirst("false");
    } else {
      setfirst("true");
    }
  }, [posts]);

  return (
    <div>
      <h1>SellCake {first}</h1>
    </div>
  );
};

export default SellCake;

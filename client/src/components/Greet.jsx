// import React from 'react'

import { useEffect, useState } from "react";
import axios from "axios";

const Greet = () => {
  const [temp, setTemp] = useState(30);
  const [data, setData] = useState({});

  useEffect(() => {
    axios("https://random.dog/woof.json").then((res) => setData(res.data));
  }, [temp]);

  let temperature = 30;
  function chill() {
    // temperature = temperature - 1;
    // console.log(temperature);
    setTemp(temp - 1);
  }
  return (
    <div>
      <center>
        <h1>{temp} deg</h1>
        <img src={data.url} alt="" />
        <button onClick={chill}>Add Cooling</button>
      </center>
    </div>
  );
};

export default Greet;

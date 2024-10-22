// import React from 'react'

import { useEffect, useState } from "react";
import axios from "axios";
// import Card from "./Card";
import Card3 from "./Card";

const Greet = () => {
  const [temp, setTemp] = useState(30);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios("https://potterapi-fedeperin.vercel.app/en/characters").then((res) =>
      setData(res.data)
    );
  });

  // console.log(data);

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

        {/* {console.log(data)} */}
        <ul>
          {data.map((ele) => (
            <Card3 name={ele.fullName} img={ele.image} />
          ))}
        </ul>

        <img src={data.url} alt="" />
        <button onClick={chill}>Add Cooling</button>
      </center>
    </div>
  );
};

export default Greet;

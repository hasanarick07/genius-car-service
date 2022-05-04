import React from "react";
import expert1 from "../../../images/experts/expert-1.jpg";
import expert2 from "../../../images/experts/expert-2.jpg";
import expert3 from "../../../images/experts/expert-3.jpg";
import expert4 from "../../../images/experts/expert-4.jpg";
import expert5 from "../../../images/experts/expert-5.jpg";
import expert6 from "../../../images/experts/expert-6.png";
import Expert from "../Expert/Expert";

const Experts = () => {
  const Experts = [
    { id: 1, name: "linkon", img: expert1 },
    { id: 2, name: "pinkon", img: expert2 },
    { id: 3, name: "tinkon", img: expert3 },
    { id: 4, name: "binkon", img: expert4 },
    { id: 5, name: "jinkon", img: expert5 },
    { id: 6, name: "rinkon", img: expert6 },
  ];
  return (
    <div id="experts" className="mt-7">
      <h1 className="my-7 text-4xl">Our Experts</h1>
      <div className="grid md:grid-cols-3 gap-4 justify-items-center">
        {Experts.map(expert => (
          <Expert key={expert.id} expert={expert}></Expert>
        ))}
      </div>
    </div>
  );
};

export default Experts;

import React from "react";
import phone from "../images/process-phone.png";
import loop from "../images/process-loop.png";
import email from "../images/process-email.png";
import ProcessCard from "../Cards/ProcessCard";

function Process() {
  const processes = [
    { title: "Zenhook@gmail.com", img: email },
    { title: "+91978975912", img: phone },
    { title: "243,street name, village,city,642203", img: loop },
  ];
  return (
    <div className="flex mt-16 mb-10">
      {/* map the each value and render imag and title */}
      { processes.map((data, index ) => (
        <ProcessCard img={data.img} title={data.title} key={index} />
      ))}
    </div>
  );
}

export default Process;

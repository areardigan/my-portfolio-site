import React from "react";

const CompanyJobCard = ({ title, dateRange }) => {
  return (
    <div className="p-5 flex-col ">
      <h1 className="text-white text-lg ">
        {title.title}
        <span className="text-maybe-purple ml-2">{title.company}</span>
      </h1>
      <h2 className="text-white text-sm">{dateRange}</h2>
      <ul className="flex-col space-y-2 mt-4">
        {["hello", "goodbye", "See ya later"].map((detail, index) => {
          console.log(detail);
          return (
            <li key={index}>
              <p className="text-white">{detail}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CompanyJobCard;

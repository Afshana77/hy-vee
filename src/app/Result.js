import React, { useEffect, useState } from "react";

const Result = ({ age, gender, country }) => {
  return (
    <>
      {age || gender ? (
        <div className="bg-slate-50 w-80   m-auto border rounded p-2">
          <p>Age: {age}</p>
          <p className="capitalize">Gender: {gender}</p>
          <p>Country: {country}</p>
        </div>
     ) : (
        <div className="bg-red-100 w-80 top-0 postition absolute m-auto border rounded p-2">
          <p>Please enter a valid name</p>
        </div>
      )}  
    </>
  );
};

export default Result;

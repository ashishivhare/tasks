import React from "react";
import { Child } from "./Child";
import { useState } from "react";

export const Parent = () => {
   const [sec, setSec] = useState("");

const abc = (data)=>{

setSec(data);
}
   

   return (
      <div>
         <h1>pass data from child component to parent component </h1>
         <h3>here is parent component data --- {sec}</h3>
         <Child abc={abc} />
      </div>
   );
};
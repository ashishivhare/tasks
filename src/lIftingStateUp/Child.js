import React, { useState } from "react";

export const Child = (props) => {
   const [first, setfirst] = useState('');
   const sub = (e) => {
      e.preventDefault();

      props.abc(first);
   };
   return (
      <div>
         <p>hello child here</p>

         <form onSubmit={sub}>
            <input
               type="text"
               value={first}
               onChange={(e) => {
                  setfirst(e.target.value);
               }}
            />
            <input type="submit" value="submit" />
         </form>
      </div>
   );
};
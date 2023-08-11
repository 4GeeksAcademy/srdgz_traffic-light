import React, { useState } from "react";

const Button = () => {
    const [color, setColor] = useState(false);

    function handleClick() {
        alert("esto funciona!")
            //setColor(!color);
          };
   
    return (
        <button className="btn btn-secondary btn-lg mt-5 ms-5" onClick={handleClick}>Change Color</button>
    )
  
}
export default Button;
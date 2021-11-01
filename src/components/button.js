import React from "react";

function button({button, filter}){
    return (
        <div>
           {
               button.map((cat,i) => {
                   return <button type='button' onClick={()=>filter(cat)}>{cat}</button>
               })
           }
        </div>
    )
}
export default button;
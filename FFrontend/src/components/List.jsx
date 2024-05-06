// import "./styles.css";
import React from "react";

export default function List({item,del,check,checkbox,classname}) {
    return (
        <>
           
            
            <li key={item.length}>
                <input
                    type="checkbox"
                    checked={checkbox} 
                    onChange={() => check(item)} 
                    name={item}
                    id={item}
                />
                <label htmlFor={item}>{item}</label> 
                <button onClick={()=>del(item)}  className={classname && "none"} >X</button> 
            </li>
        </>
    );
}      

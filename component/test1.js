import { useState,useEffect } from 'react';
import './style.css'
const Test=()=>{

const[Value,setValue]=useState(0)
const[keepValue,setKeepValue]=useState(0)
const[mode,setMode]=useState("Prime")
const[show,setShow]=useState("")

useEffect(()=>{
if(Value<0)
{
    setKeepValue(1)
}

else{
    setKeepValue(Number(Value).toFixed(0))
    
}

},[Value])
useEffect(()=>{
    if(mode==="Prime")
    {
        for(let round=2;round<=Value;round++)
        {
           
            if(Number(Value) === Number(round) )
            { 
                setShow("true");
            }
            else if(Value % round === 0)
            {
                setShow("false");
                break
            }
            
        
        }
        if(Value<2)
        {
            setShow("false");
        }
    }
    
    else{
        let start=1
        let before=0
        while(start<Value)
        {
            start+=before
            before=start-before
            if((Number(Value) === Number(start)))
            { 
                setShow("true");
            }
            
            else{
                setShow("false");
            }
        }
        if(Number(Value)===1||Number(Value)===0)
        {
            setShow("true");
        }
    }
    
    },[Value,mode])

return(

<div className='container'>
    <div className="box1">
        <input type="number" onChange={(e)=>setValue(e.target.value)} value={keepValue} ></input>
    </div>
    <div className="box2">
        <select onChange={(e)=>setMode(e.target.value)}>
            <option value="Prime">
                isPrime
            </option>
            <option value="Fibonacci">
                isFibonacci
            </option>
        </select>
    </div>
    <div className="box3">
        {show}
    </div>
</div>
);

}
export default Test;
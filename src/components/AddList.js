import React, { useState } from "react";


function AddList(props) {   
    
  const [data, setData] = useState('');
    
  return (
    <div className="flex gap-9">
      <form >
        <div >
          <label className="font-mono text-xl text-white">Add a Task: </label>
          <input onChange={(e)=>{
             setData(e.target.value);
          }} value={data} type="text" className="border-none outline-none rounded-md w-[30rem] h-11 p-3 text-lg no-underline font-semibold"></input>
        </div>
      </form>
      <button onClick={()=>{
        props.newList(data)
        setData('')
      }} className="bg-blue-800 px-6 rounded-md hover:shadow-md hover:shadow-black text-white font-mono font-bold transition-all">ADD</button>
      
    </div>
  );
}

export default AddList;

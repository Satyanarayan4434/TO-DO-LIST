import React from 'react';
import { BsTrash } from "react-icons/bs";

function List(props) {
  let datas = props.data;
  let id = props.id;
  
  

  return (
    <div className='bg-pink-800 text-white font-semibold font-mono  min-w-[60rem] items-center flex justify-between p-3'>
      
        <h1>{datas}</h1>
        <button onClick={() => props.deleteItem(id)} ><BsTrash/></button>
    </div>
  );
}

export default List
import React from 'react';
import List from './List';

function Lists(props) {
    let datas = props.addList; 
    let deleteItem = props.deleteItem;
  return (
    <div className='flex flex-col gap-6'>
        {
            datas.map((data, index)=>{   
              return <List key={index} id={index} data={data} deleteItem={deleteItem}/>   
            })
        }    
    </div>
  )
}

export default Lists
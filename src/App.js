import { useState } from "react";
import "./App.css";
import AddList from "./components/AddList";
import Lists from "./components/Lists";

function App() {

  const [addList, setAddList] = useState([]);
  
  let newList = (newData)=>{
      setAddList([...addList, newData])
  }

  let deleteItem = (id) =>{
    setAddList((addList)=>{
      return addList.filter((list, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="flex flex-col items-center gap-6 bg-slate-600 h-screen">
      <h1 className="font-mono text-4xl mt-6 font-extrabold bg-orange-800 p-2 rounded-lg text-white">TO-DO List</h1>
      <AddList newList={newList} /> 
      <Lists  addList={addList} deleteItem ={deleteItem}/>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
// import {useState} from 'react'


function App() {
  const [toDos,setToDos]=React.useState([])
  const [toDo,setToDo] =React.useState('')
 
  const handleDeleteClick =(id)=>{
    console.log(toDos[1]);
    const removeItem = toDos.filter((rrr)=>{
      return rrr.id !== id
    })
    setToDos(removeItem)
  }

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>   ToDo </h1>
      </div>
      <div className="subHeading">
        <br />
        <h2></h2>
      </div>
      <div className="input">
        <input  value={toDo}  onChange={(e)=>setToDo(e.target.value) }  type="text" placeholder="🖊️ Add item..." defaultValue="" />  {/*  on change (ie) typing an event is created and the value is saved to setToDo then it is saved to  todo*/ }
        <i   onClick={()=>{
          console.log(toDo);
          if(toDo!=""){ 
            setToDos ([...toDos,{id:Date.now()       
              ,text:toDo,
              status:false
              }])
              setToDo("")
          }
        } } className="fas fa-plus"></i>{/*  on click set values on toDo to toDos now we add date for getting id and state to check the stats an all these are passewd to the toDos */}
      </div>
      <div className="todos">
       { toDos.map((obj)=>{

      return(
      <div className="todo">
          <div className="left">
            <input onChange={(e)=>{
              setToDos(toDos.filter(obj2=>{
                if (obj2.id===obj.id){
                  obj2.status=e.target.checked
                }
                return obj2
              }
              ))} }value={obj.status}type="checkbox" name="" id="" /> {/* the id of one object(obj) is checked with id of object (obj2) and if both obj are find same the checked = if checked this will give true value and if not it will be false as we mentioned above*/}
            <p>{obj.text}</p>{/* the mapped value is printed here,ie the valaue on toDos*/}
          </div>
          <div className="right">
            <button onClick={()=>handleDeleteClick(obj.id)}  ><i className="fas fa-times"></i></button>
          </div>
          </div>)

        })}
        {toDos.map((obj)=>{
          if(obj.status){
            return( <h1>{obj.text}</h1>
              )
          }
          return null
        }
        )}{/* if status for checked is true then if loop will return a */}
      </div>
    </div>
  );
}

export default App;
// no
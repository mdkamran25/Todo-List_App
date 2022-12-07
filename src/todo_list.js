import React, {useState} from 'react'
import './todo_list.css'

 
function TodoList() {
   const [inputList, setinputList] = useState("");
   const [items, setitems] = useState([]);

   const itemEvent = (e) => {
        setinputList(e.target.value);
   };
   
   const listofItem = () =>{
        setitems((oldItems) => {
            return [...oldItems, inputList];
        });
        setinputList("");
   };
   
   const deleteItems = (id) =>{
        console.log("hi")
        setitems((oldItems) =>{
            return oldItems.filter((arrElem, index) =>{
                return index !== id;
            });
        });
   };
  return (
    <>
        <div className='todo_body d-flex justify-content-center align-items-center'>
            <div className='todo d-flex justify-content-center align-items-center'>
                <div class="row no-gutters">
                    <div class="col-12 my-3">
                        <div className='col-12 heading mx-0 d-flex justify-content-center align-items-center'>
                            <h1 className='col-12 d-flex justify-content-center align-items-center'>TodoList</h1>
                        </div>
                    </div>
                    <div class="col-12 d-flex justify-content-center align-items-center my-3">
                            <input type="text" className='input' name="inputData" 
                             value={inputList}
                             onChange={itemEvent}/>
                        <div class="input-group-append">
                            <button class="button" type="button" onClick={listofItem}>+</button>
                        </div>
                    </div>
                    {
                        items.map((cur, index) => {
                            return(
                                <div class="d-flex mx-5 align-items-center mb-2 ">
                                    <button class="button1 mx-3 " type="button" onClick={() => {deleteItems(index);}} >&times;</button>
                                    <p className='mt-3' key={index} id={index} onSelect={deleteItems}>{cur}</p>
                                </div>  
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </>    
  )
}

export default TodoList
                            
            
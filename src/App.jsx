import { useEffect, useState } from "react";

function App() {

    console.log("localstorage", localStorage.getItem("todo"));
    const [todo, setTodo] = useState(
        localStorage.getItem("todo") ? JSON.parse(localStorage.getItem("todo")) : []
    );

    useEffect(() => {
        
        if (todo) {
            localStorage.setItem("todo", JSON.stringify(todo));
        }
    },[todo])

    return (
    <div>
        <h1 className="underline text-3xl">Todo App</h1>
            <input type="text" className="bg-orange-800" onKeyDown={
                function (event) {
                    console.log(event)
                    if (event.code === "Enter") {
                        // logic..
                        // add todo/

                        console.log("enter pressed")
                        setTodo([...todo, event.target.value]);
                        event.target.value=""
                    }
                    
                }
            } />

            {todo.map( (value, index)=> {
                return <div key={index} className="shadow p-5 mt-5 flex justify-between">
                    <div>
                        {value}
                    </div>
                    
                    <div className="text-red-500 cursor-pointer" onClick={ ()=> 
                        setTodo([...todo.filter( (value, i)=>  (i !== index))])
                     }>
                        Delete
                    </div>
                   
                </div>
            })}


    </div>);
}

export default App;
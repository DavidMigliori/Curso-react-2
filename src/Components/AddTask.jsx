import { useRef } from "react"

export const AddTask = ({addTask}) => {
    const inputRef = useRef()
    return <>
    <input ref={inputRef} type="text" placeholder="Ingrese la tarea"/>
    <button onClick={()=> {addTask(inputRef.current.value)}}>agregar</button>
    </>
}
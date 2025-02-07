export const ShowTask = ({taskList, changeStatus, removeTasks}) => {
    return <>
        <table>
            <thead>
                  <tr>
                     <th>Tareas</th>
                     <th>Estado</th>
                      <th>Opciones</th>
                  </tr>
                 </thead>
                <tbody>
                     {taskList.map((e,i)=> {
                         return <tr key={i}>
                              <td>{e.task}</td>
                             <td>{e.status ? "completado" : "no completado" }</td>
                             <td>
                                  <button onClick={() => {removeTasks (i)}}> Eliminar</button>
                                  <button onClick={()=>{changeStatus(i)}}> Completar</button>
                            </td>
                         </tr>
                     })}
            </tbody>
     </table>
    </>
                
}

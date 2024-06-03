import BalonRow from "./BalonRow"
function BalonTable({balones, onEdit, onDelete}){
console.log(balones);
return(

<>
<table>
    <thead>
     <tr>
    <th>NOMBRES</th>
    <th>PRECIOS</th>
    <th>ACCIONES</th>
     </tr>
    </thead>

    <tbody>
        {balones.map((balon) =>(
        <BalonRow
        key={balon.id}
        balon={balon}
        onDelete={onDelete}
        onEdit={onEdit}
        />
        ))}
     
    </tbody>
</table>

</>

)

}
export default BalonTable
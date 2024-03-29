import { useState } from "react"

const ShoppingList = ({ items, handleClick, handleAddItem}) => {
    const [values, setValues] = useState("")


  return (  
 <>
          <h1>Alışveriş Listesi</h1>
    <div className="shop-container">
       <div className="title"> <h2>Alınacaklar</h2></div>
        <div className="container"> 
        <form onSubmit={(e) => {e.preventDefault()
        if(values.trim().length > 0) {

          
          handleAddItem(values);
          setValues("");
        }
      }}>
     <input 
       placeholder="Yeni bir madde ekleyin"
       value={values}
       onChange={(event) => setValues(event.target.value)
       } />
      <button>Add</button>
     
        </form>
    </div>

      <ul>
         {items.map((item) => {
             return <li key={item.id}>
              {item.value}
              {/* Silme butonu */}
             <button className="btn" onClick={() =>handleClick(item.id)}>❌</button>
             </li>
            })}  
            </ul> 
 
        </div>
</>
  )
}
export default ShoppingList
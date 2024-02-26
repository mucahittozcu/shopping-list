"use client"
import { useState } from "react"

// // Benzersiz kimlikler oluşturmak için kullanılır {npm install uuid}
import { v4 as uuidv4 } from 'uuid';
import ShoppingList from "./Shopping";

const App = () => {
    const [items, setItems] = useState([])
      // yeni bir öğe ekler.
    function handleAddItem(value) {
       const createItem = {id: uuidv4() ,value}
       setItems([...items,createItem])
      }

      const handleClick = (id) => {
        // // Filtreledikten sonra id'ye ait nesneyi listeden çıkarıyoruz.
        const deleteFilter = items.filter((item) =>{
           return item.id !== id
        })
        setItems(deleteFilter)
       }



  return (
    <div>
      {/* {items.length > 0 && <ShoppingList items={items} handleAddItem={handleAddItem} handleClick={handleClick} />} */}
      <ShoppingList items={items} handleAddItem={handleAddItem} handleClick={handleClick} />
    </div>
  )
}
export default App
import React, { useState } from "react";
import { v4 as uuid } from "uuid";


function ItemForm({ onItemFormSubmit }) {
  const [formInput, setFormInput] = useState("")
  const [formCategorySelection, setFormCategorySelection] = useState("Produce")
  const newItem = {
    id: uuid(),
    name: formInput,
    category: formCategorySelection
  }
  function handleFormChange(event) {
    setFormInput(event.target.value)
  }

  function handleFormCategoryChange(event) {
    setFormCategorySelection(event.target.value)
  }

  return (
    <form className="NewItem" onSubmit={(event) => {
      event.preventDefault()
      onItemFormSubmit(newItem)
      setFormInput("")
    }}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleFormChange} value={formInput} />
      </label>

      <label>
        Category:
        <select name="category" onChange={handleFormCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;

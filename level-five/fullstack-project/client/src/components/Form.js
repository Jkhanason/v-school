import React from 'react';

function Form(props) {
  const inputs = {
    "name": "",
    "department": "",
    "price": "",
    "inStock": '',
    "unitsOnHand": '',
  };
  const [newItemForm, setNewItemForm] = React.useState(inputs);

  function handleChange(e) {
    const {name, value, type, checked} = e.target;
    setNewItemForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault()
    props.addNewItem(newItemForm)
    setNewItemForm(inputs)
  }

  return (
    <form className="addNewItemForm" onSubmit={handleSubmit}>
      <h3 className="newItemFormTitle">Add a new item</h3>
      <input
        name='name'
        value={newItemForm.name}
        onChange={handleChange}
        required
        placeholder="Item Name">
      </input>
      <select
        value={newItemForm.department}
        onChange={handleChange}
        name="department"
        required>
        <option>Select a Department</option>
        <option value="62a0ad1e75dd0911590ed6ed">Grocery</option>
        <option value='62a0ad1575dd0911590ed6eb'>Produce</option>
        <option value='62a0ad3175dd0911590ed6ef'>Dairy</option>
      </select>
      <input
        name='price'
        value={newItemForm.price}
        onChange={handleChange}
        required
        type="number"
        placeholder="Item Price">
      </input>
      <label htmlFor="inStock">In Stock:
      <input
        name='inStock'
        checked={newItemForm.inStock}
        onChange={handleChange}
        required
        id="inStock"
        type="checkbox">
      </input></label>
      <input
        name="unitsOnHand"
        value={newItemForm.unitsOnHand}
        onChange={handleChange}
        required
        type="number"
        placeholder="Units on Hand">
      </input>
      <button>Add new Item</button>
    </form>
  )
}

export default Form
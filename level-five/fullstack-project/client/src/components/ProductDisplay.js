import React from 'react';

function ProductDisplay(props) {
  const item = props.item;
  const [editCountOn, setEditCountOn] = React.useState(false);
  const [editButtonOn, setEditButtonOn] = React.useState(true);
  const [showDeptOn, setShowDeptOn] = React.useState(false)
  const [countForm, setCountForm] = React.useState({ count: 0});
  const [editItemsForm, setEditItemsForm] = React.useState({
    name: item.name,
    price: item.price
  });

  function toggleAdjustButtons() {
    setEditCountOn(prev => !prev)
  }

  const handleCountChange = (event) => {
    const {name, value} = event.target;
    setCountForm(prev => ({
      ...prev,
      [name]: value
    }));
  }
  const handleEditChange = (event) => {
    const {name, value} = event.target;
    setEditItemsForm(prev => ({
      ...prev,
      [name]: value
    }));
  }

  function showEditItemsForm() {
    setEditButtonOn(prev => !prev)
  }

  function handleSubmit(event) {
    props.updateCount(item._id, countForm.count)
    toggleAdjustButtons()
    setCountForm({count: 0})
  }

  function submitEditItemsForm(e) {
    setEditButtonOn(prev => !prev)
    props.editItems(editItemsForm, item._id)
  }

  function handleMouseEnter() {
    setShowDeptOn(true)
  }

  function handleMouseLeave () {
    setShowDeptOn(false)
  }

  let test = ''
  if (item.department === '62a0ad1e75dd0911590ed6ed') {
    test = 'Grocery'
  } else if (item.department === '62a0ad3175dd0911590ed6ef') {
    test = "Dairy"
  } else {
    test = "Produce"
  }

  return (
    <div className='productDisplay' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <h3>{`${props.index}) ${item.name}`}</h3>
      <p><span>Price:</span> ${item.price}</p>
      <p><span>In Stock:</span> {item.inStock ? 'Yes' : 'No'}</p>
      <p><span>Units on Hand:</span> {item.unitsOnHand}</p>
      {props.all && showDeptOn &&
        <p><span id="showDept">**{test} item**</span></p>
      }
      <button className="editCountBtn" onClick={toggleAdjustButtons}>Adjust Count</button>

      {editButtonOn &&
        <button className="editItemBtn" onClick={showEditItemsForm}>Edit Item</button>
      }
      {editCountOn &&
        <form onSubmit={handleSubmit} className="adjustCountForm">
          <input type="number" name="count" value={countForm.count} onChange={handleCountChange}></input>
          <button className="editCountBtn">Save New Count</button>
        </form>
      }
      {!editButtonOn &&
      <>
        <form className="editItemsForm" onSubmit={submitEditItemsForm}>
          <input name="name" value={editItemsForm.name} onChange={handleEditChange}></input>
          <input name="price" value={editItemsForm.price} onChange={handleEditChange}></input>
          <button className="editItemBtn">Save Edits</button>
        </form>
        <button className="editItemBtn cancelBtn" onClick={showEditItemsForm}>Cancel Edits</button>
      </>
      }
    </div>
  )
}

export default ProductDisplay

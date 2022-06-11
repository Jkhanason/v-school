import React from 'react';
import {Link} from 'react-router-dom';

function Header () {

  const [text, setText] = React.useState('items across all Departments')

  const handleClick = (event) => {
    setText(event.target.title);
  }

  return (
    <div className="headerContainer">
      <h1>Welcome to your Store Replenishment System!</h1>
      <nav>
        <Link to='/' title="items across all Departments" onClick={handleClick}>Home</Link>
        <Link to='/grocery' title="Grocery Department items" onClick={handleClick}>Grocery</Link>
        <Link to='/dairy' title="Dairy Department items" onClick={handleClick}>Dairy</Link>
        <Link to='/produce' title="Produce Department items" onClick={handleClick}>Produce</Link>
      </nav>
      <picture>
        <source media="(min-width:900px)" srcSet="https://www.supermarketnews.com/sites/supermarketnews.com/files/P1040325.jpg"/>
        <source media="(min-width:465px)" srcSet="https://www.cheatsheet.com/wp-content/uploads/2018/06/wegmans.png"/>
        <img src="https://media.istockphoto.com/photos/cashier-working-at-the-grocery-store-picture-id534305878?k=6&m=534305878&s=170667a&w=0&h=CElCsed2yfgG10vsL0SPX6DOI2wAiVDsl4grvHWzxC8=" alt="Store cashier"/>
      </picture>
    <div>
      <h3 className="headerDynamicText">{`Current ${text}.`}</h3>
    </div>
    </div>
  )
}

export default Header


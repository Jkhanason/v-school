import React from 'react';
import {ThemeContext} from './themeContext';
import styled from 'styled-components'

const MyMain = styled.main`
  background-color: ${prop => prop.bgColor};`

function Main() {
  const {className, changeClass} = React.useContext(ThemeContext)
  return (
    <MyMain className={className}>
      <h1>Click the button to toggle the <span className={className}>{className}</span> theme!</h1>
      {/* <button onClick={changeClass}>Toggle Theme</button> */}
      <select onChange={changeClass}>
        <option value="light">light</option>
        <option value="dark">dark</option>
        <option value="grey">grey</option>
        <option value="gradient">gradient</option>
      </select>

    </MyMain>
  )
}

export default Main

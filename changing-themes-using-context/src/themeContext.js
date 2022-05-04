import React, {useState} from 'react';


const ThemeContext = React.createContext()

function ThemeContextProvider (props) {

  const [className, setClassName] = useState('light');

  function changeClass(event) {
    setClassName(event.target.value)
    console.log(event.target.value)
  }

  return (
    <ThemeContext.Provider
      value={{
        className: className,
        changeClass: changeClass}}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export {ThemeContext, ThemeContextProvider}
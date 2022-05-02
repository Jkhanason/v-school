import React, {useRef} from 'react';

//set state for color input values and gradient angle
function Colors() {
  const [colors, setColors] = React.useState({
    firstColor: '#23b9d7',
    secondColor: '#a41e1e',
    thirdColor: '#3dbd52',
    angle: '150'
  });

  const inputRef = useRef(null)

  //on click event to copy gradient info
  function copyText() {
    navigator.clipboard.writeText(textareaContent).then(res => console.log('Code copied to clipboard'))
  }

  function updateRef(event) {
    inputRef.current.focus()
    navigator.clipboard.writeText(event.target.value).then(res => console.log('Code copied to clipboard'))
  }

  //update state to match input values
  function handleChange(event) {
    const {name, value} = event.target;
    setColors(prevColor => ({
      ...prevColor,
      [name]: value
    }));
  }

  const gradient = `linear-gradient(${colors.angle}deg, ${colors.firstColor}, ${colors.secondColor}, ${colors.thirdColor})`;

  const textareaContent =
  `
background: ${gradient};

-moz-background: ${gradient};

-webkit: ${gradient};`

  return (
    <div className="colorsContainer">
      <div className="left">
        <div className="gradientDisplay" style={{background: gradient}}></div>
        <textarea ref={inputRef} readOnly onClick={updateRef} value={textareaContent} />
      </div>
      <div className="right">
        <label htmlFor="firstColor">Color 1:</label>
        <input
          name="firstColor"
          onChange={handleChange}
          value={colors.firstColor}
          type="color"
          id="firstColor"
          className="colorInput"
        ></input>
        <p>{colors.firstColor}</p>
        <label htmlFor="secondColor">Color 2:</label>
        <input
          name="secondColor"
          onChange={handleChange}
          value={colors.secondColor}
          type="color"
          id="secondColor"
          className="colorInput"
        ></input>
        <p>{colors.secondColor}</p>
        <label htmlFor="thirdColor">Color 3:</label>
        <input
          name="thirdColor"
          onChange={handleChange}
          value={colors.thirdColor}
          type="color"
          id="thirdColor"
          className="colorInput"
        ></input>
        <p>{colors.thirdColor}</p>
        <label htmlFor="direction">Angle:</label>
        <input
          name="angle"
          onChange={handleChange}
          value={colors.angle}
          type="number"
          id="angle"
          className="angle"
        ></input>
        <button onClick={copyText} className="copyBtn" style={{background: gradient}}> Copy code</button>
      </div>
    </div>
  )
}

export default Colors


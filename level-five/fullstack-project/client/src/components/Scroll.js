import React from 'react';


function Scroll() {
  const [scrollBtnOn, setScrollBtnOn] = React.useState(false);

  React.useEffect( () => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setScrollBtnOn(true)
      } else {
        setScrollBtnOn(false)
      }
    })
  }, []);

  function handleScroll() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  return (
    <div className='scrollBtnDiv'>
      <button onClick={handleScroll}>Return to Top</button>
    </div>

    )
  }
    export default Scroll
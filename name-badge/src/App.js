import React from 'react';

function App () {
  //create state for form input data
  const [formData, setFormData] = React.useState({
      firstName: '',
      lastName: '',
      email: '',
      placeOfBirth: '',
      phone: '',
      favoriteFood: '',
      comments: ''
  })

  //set state of boolean to validate textarea length
  const [isNotLongEnough, setIsNotLongEnough] = React.useState(true)

  //replace input state with form state and auto update
  function handleChange(event) {
    const {name, value} = event.target
      setFormData(prevFormData => ({
          ...prevFormData,
          [name]: value
        }))

    //validate textarea length
    if (name === 'comments' && value.length > 2) {
        setIsNotLongEnough(false)
    } else {
        setIsNotLongEnough(true)
    }
  }

  //create state for badge array
  const [badgeInfo, setBadgeInfo] = React.useState([])

  function handleSubmit(event) {
    event.preventDefault()
    //add form data to array on each submit
    setBadgeInfo(prevInfo => [...prevInfo, formData])
    //reset form data to blank
    setFormData({
        firstName: '',
        lastName: '',
        email: '',
        placeOfBirth: '',
        phone: '',
        favoriteFood: '',
        comments: ''
    })
  }

  //map over badge array and render badge field elements
  const badgeElement = badgeInfo.map((badgeItem, index) => {
    let color
    index % 2 === 0 ? color = 'blue' : color = 'red'
    return (
        <div key={index} className="badge-post-container">
            <p id="badge-title" style={{backgroundColor: color}}>Badge:</p>
            <p>Name: {badgeItem.firstName} {badgeItem.lastName}</p>
            <p>Phone: {badgeItem.phone.slice(0, 3)}-{badgeItem.phone.slice(3, 6)}-{badgeItem.phone.slice(6)}
            </p>
            <p>Place of Birth: {badgeItem.placeOfBirth}</p>
            <p>Favorite Food: {badgeItem.favoriteFood}</p>
            <p>Email: {badgeItem.email}</p>
            <p>{badgeItem.comments}</p>
        </div>
    )
  })

  return (
      <div className="badge-input-container">
          <form name="badgeForm" onSubmit={handleSubmit} >
              <input
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  onChange={handleChange}
                  value={formData.firstName}
                  minLength='3'
                  required
              />
              <input
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  onChange={handleChange}
                  value={formData.lastName}
                  minLength='3'
                  required
              />
              <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                  value={formData.email}
                  minLength='3'
                  required
              />
              <input
                  type="text"
                  placeholder="Place of Birth"
                  name="placeOfBirth"
                  onChange={handleChange}
                  value={formData.placeOfBirth}
                  minLength='3'
                  required
              />
              <input
                  type="tel"
                  placeholder="Phone: 5553335555"
                  name="phone"
                  onChange={handleChange}
                  value={formData.phone}
                  pattern="[0-9]{10}"
                  minLength="10"
                  maxLength="10"
                  required
              />
              <input
                  type="text"
                  placeholder="Favorite Food"
                  name="favoriteFood"
                  onChange={handleChange}
                  value={formData.favoriteFood}
                  minLength='3'
                  required
              />
              <textarea
                  placeholder="Tell us about yourself"
                  name="comments"
                  onChange={handleChange}
                  value={formData.comments}
                  required
              />
              <button disabled={isNotLongEnough}>Submit</button>
          </form>
          {badgeElement}
      </div>
  )
}


export default App;

import React from "react"

export default function Form() {
    const [formData, setFormData] = React.useState({
      firstName: "",
      lastName: "",
      email: "",
      comments: "",
      isFriendly: true,
    })
    
    console.log(formData)

    const handleChange = (event) => {
      const {name, value, type, checked} = event.target
      setFormData(prevFormData => {
        return {
          ...prevFormData,  
          [name]: type === "checkbox" ? checked : value
        }
      })
    }
    return (
        <div>
          <form>
              <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
              />
              <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
              />
              <input
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formData.email}
              />
              <textarea 
                placeholder="Please leave your comment here..."
                onChange={handleChange}
                name="comments"
                value={formData.comments}
              />
            <input 
                type="checkbox" 
                id="isFriendly" 
                checked={formData.isFriendly}
                onChange={handleChange}
                name="isFriendly"
            />
            <label htmlFor="isFriendly">Are you friendly?</label>
            <br />
          </form>
          <h2>First Name: {formData.firstName}</h2>
          <h2>Last Name: {formData.lastName}</h2>
          <h2>Email: {formData.email}</h2>
          <h2>Is Friendly: {formData.isFriendly.value}</h2>
        </div>
    )
}
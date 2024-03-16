import React from "react"

export default function Form() {
    const [formData, setFormData] = React.useState({
      firstName: "",
      lastName: "",
      email: "",
    })
    
    console.log(formData)

    const handleChange = (event) => {
      setFormData(prevFormData => {
        return {
          ...prevFormData,  
          [event.target.name]: event.target.value
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
          </form>
          <h2>First Name: {formData.firstName}</h2>
          <h2>Last Name: {formData.lastName}</h2>
          <h2>Email: {formData.email}</h2>
        </div>
    )
}
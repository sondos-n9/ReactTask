import { useState } from "react";
import "./Form.css";


function Form() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }

  return (
    <>




      <form className="form-group" onSubmit={handleSubmit}>
        <div className="main">
        
          <div > 
            <div className="row mb-3  ">
              <label className="col-sm-2 col-form-label"> firstName:

              </label>
            </div >
            <div className="row mb-3">
              <label className="col-sm-2 col-form-label ">lastName:


              </label>
            </div>
            <div className="row mb-3 ">
              <label className="col-sm-2 col-form-label class=form-text text-muted ">Education:

              </label>
            </div>
            <div className="row mb-3">
              <label className="col-sm-2 col-form-label">Email:


              </label>
            </div>
            <div className="row mb-3">
              <label className="col-sm-2 col-form-label">Phone:


              </label>
            </div>
            <div className="row mb-3">
              <label className="col-sm-2 col-form-label" >Experinece:


              </label>
            </div>
            <div className="row mb-3">
              <label className="col-sm-2 col-form-label">Address:


              </label>
            </div>
            </div>
            <div>
            <div>
              <input className="form-control" id="input1"
                type="text"
                name="firstName"
                value={inputs.firstName || ""}
                onChange={handleChange}
              /></div>
            <div>
              <input className="form-control" id="input2"
                type="text"
                name="lastName"
                value={inputs.lastName || ""}
                onChange={handleChange}
              /></div>
            <div>
              <input className="form-control" id="input3"
                type="text"
                name="education"
                value={inputs.education || ""}
                onChange={handleChange}
              /></div>
            <div>
              <input className="form-control" id="input4"
                type="email"
                name="email"
                value={inputs.email || ""}
                onChange={handleChange}
              /></div>
            <div>
              <input className="form-control" id="input5"
                type="number"
                name="phone"
                value={inputs.phone || ""}
                onChange={handleChange}
              /></div>
            <div>
              <input className="form-control" id="input6"
                type="text"
                name="experience"
                value={inputs.experience || ""}
                onChange={handleChange}
              /></div>
            <div>
              <input className="form-control" id="input7"
                type="text"
                name="address"
                value={inputs.address || ""}
                onChange={handleChange}
              />
              </div>
              </div>
        <button type="submit" class="btn btn-primary"> submit</button>
            </div>

      </form>

    </>
  )
}

export default Form;
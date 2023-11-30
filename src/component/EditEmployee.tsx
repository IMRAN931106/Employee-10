import { useState } from "react";
import { IEmployee } from "./Employee.type";
// import "./EmployeeForm.style.css"
import "./AddEmployee.style.css"

// ----props----
type Props = {
   onBackBtnClickHnd: () => void;
   data: IEmployee;
   onUpdateClickHnd: (data: IEmployee) => void;
}

const EditEmployee = (props: Props) => {
 // ------ props destructure ----
    const {data , onBackBtnClickHnd,onUpdateClickHnd } = props;
    // ----state----
    const [firstName, setFirstName] = useState(data.firstName);
    const [lastName, setLastName] = useState(data.lastName);
    const [email, setEmail] = useState(data.email);
// ---function----
    const onFirstNameChangehnd = (e: any) => {
      setFirstName(e.target.value)
  };
//   ----
  const onLastNameChangehnd = (e: any) => {
      setLastName(e.target.value)
  };
//   ----
  const onEmailChangehnd = (e: any) => {
      setEmail(e.target.value)
  };
// --email format--
  const isEmailValid = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
// ----
  const onSubmitBtnClickHnd = (e: any) => {
   e.preventDefault();

   if (firstName === "" || lastName === "" || email === "") {
    alert("Please fill in all fields");
    return;
  }
  if (!isEmailValid()) {
    alert("Please enter a valid email");
    return;
  };
//   -----create data object---
 const updateData: IEmployee = {
       id: data.id,
       firstName: firstName,
       lastName: lastName,
       email: email
   }
   onUpdateClickHnd(updateData);
//    ----pass backfunction---
   onBackBtnClickHnd()
};
// -------return----
   return (
      <>
      <div className="formContainer">
        <div className="formContainerInner">
          <div>
              <div className="headingH">Update Employee Details</div>
          </div>
          <form 
          onSubmit={onSubmitBtnClickHnd}
          className="formData"
          >
              <div className="InputDataFlied">
                  <label>First Name : </label>
                  <input type="text"
                      //    placeholder="Please Enter Your First Name" 
                      value={firstName}
                      onChange={onFirstNameChangehnd}
                  />
              </div>
              <div className="InputDataFlied">
                  <label>Last Name : </label>
                  <input type="text"
                      // placeholder="Please Enter Your Last Name"
                      value={lastName}
                      onChange={onLastNameChangehnd}
                  />
              </div>
              <div className="InputDataFlied">
                  <label>Email Add : </label>
                  <input type="text"
                      //    placeholder="Enter Your Email"
                      value={email}
                      onChange={onEmailChangehnd}
                  />
              </div>
              <div className="InputDataButton">
                  <input type="button" value="Back" onClick={onBackBtnClickHnd} />
                  <input type="submit" value="Update" />
              </div>
          </form>
          </div>
      </div>
  </>
   )
}

export default EditEmployee;
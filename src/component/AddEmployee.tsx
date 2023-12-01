import { useState } from "react"
import "./AddEmployee.style.css"
import { IEmployee } from "./Employee.type"

// ---prpos----
type Props = {
    onBackBtnClickHnd: () => void
    onSubmitClickHnd: (data: IEmployee) => void
};

const AddEmployee = (props: Props) => {
    // ------ props destructure ----
    const { onBackBtnClickHnd, onSubmitClickHnd } = props
    // --------------Declear state----------------------
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    // ---------------------------function-------------
    const onFirstNameChangehnd = (e: any) => {
        setFirstName(e.target.value)
    }
    const onLastNameChangehnd = (e: any) => {
        setLastName(e.target.value)
    }
    const onEmailChangehnd = (e: any) => {
        setEmail(e.target.value)
    }
    // ----Email format---
    const isEmailValid = () => {
        const emailformat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailformat.test(email);
    };
    // ----------------
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
        const data: IEmployee = {
            id: new Date().toJSON().toString(),
            firstName: firstName,
            lastName: lastName,
            email: email,
        };

        onSubmitClickHnd(data);
        //    ----pass backfunction---
        onBackBtnClickHnd();
    };
    // --------------return-----------
    return (
        <>
            <div className="formContainer">
                <div className="formContainerInner">
                    <div>
                        <div className="headingH">Add Employee Details</div>
                    </div>
                    <form onSubmit={onSubmitBtnClickHnd} className="formData">
                        <div className="InputDataFlied">
                            <label>First Name : </label>
                            <input type="text"
                                placeholder="Enter Your First Name"
                                value={firstName}
                                onChange={onFirstNameChangehnd}
                            />
                        </div>
                        <div className="InputDataFlied">
                            <label>Last Name : </label>
                            <input type="text"
                                placeholder="Enter Your Last Name"
                                value={lastName}
                                onChange={onLastNameChangehnd}
                            />
                        </div>
                        <div className="InputDataFlied">
                            <label>Email Add : </label>
                            <input type="text"
                                placeholder="Enter Your Email"
                                value={email}
                                onChange={onEmailChangehnd}
                            />
                        </div>
                        <div className="InputDataButton">

                            <input type="button" value="Back" onClick={onBackBtnClickHnd} />
                            <input type="submit" value="Add" onClick={onSubmitBtnClickHnd} />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}



export default AddEmployee;
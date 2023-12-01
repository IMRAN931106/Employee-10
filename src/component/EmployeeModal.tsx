import { IEmployee } from "./Employee.type"
import "./EmployeeModal.style.css"
// -------declear props--------
type Props = {
    onClose: () => void
    data: IEmployee
}

const EmployeeModal = (props: Props) => {
    // ------ props destructure ----
    const { onClose, data } = props;
    // ----return----
    return (
        <>
            {/* ----view employee list------ */}
            <div id="myModal" className="modal">
                <div className="modalContent">
                    <span className="close" onClick={onClose}>&times;</span>
                    <h3>Employee Details</h3>
                    <div>
                        <label>First Name : {data.firstName}</label>
                    </div>
                    <div>
                        <label>Last Name : {data.lastName}</label>
                    </div>
                    <div>
                        <label>Email : {data.email}</label>
                    </div>
                </div>
            </div>
        </>
    )
}


export default EmployeeModal;
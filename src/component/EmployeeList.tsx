import { useState } from "react";
import { IEmployee } from "./Employee.type"
import "./EmployeeList.style.css"
import EmployeeModal from "./EmployeeModal";
// -------Declear props---
type Props = {
    list: IEmployee[];
    onDeleteClickHnd: (data: IEmployee) => void;
    onEdit: (data: IEmployee) => void;
}

const EmployeeList = (props: Props) => {
    // ------ props destructure ----
    const { list, onDeleteClickHnd, onEdit } = props;
    // ----state---  
    const [showModal, setShowModal] = useState(false);
    const [employeeDataShow, setEmployeeDataShow] = useState(null as IEmployee | null);
    // -----function--
    const viewEmployeeDetails = (data: IEmployee) => {
        setEmployeeDataShow(data);
        setShowModal(true);
    };
    // ---
    const onCloseModal = () => {
        setShowModal(false)
    }
    // -----return--
    return (
        <>
            {/* <div>This is Employee List Page </div> */}
            <div>
                <article>
                    <div className="listHeader">Employee List</div>
                </article>
                <div className="tableMain">
                    <table className="table">
                        <thead style={{}}>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th style={{ textAlign: "center" }}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {list.map((employee) => {
                                return (
                                    <tr key={employee.id}>
                                        <td>{`${employee.firstName} ${employee.lastName}`}</td>
                                        <td>{employee.email}</td>
                                        <td>
                                            <div className="Allbutton">
                                                <input type="button" value="View" onClick={() => viewEmployeeDetails(employee)} />
                                                <input type="button" value="Edit" onClick={() => onEdit(employee)} />
                                                <input type="button" value="Delete" onClick={() => onDeleteClickHnd(employee)} />
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
                {showModal && employeeDataShow !== null && (<EmployeeModal onClose={onCloseModal} data={employeeDataShow} />)}
            </div>
        </>
    )
}


export default EmployeeList;
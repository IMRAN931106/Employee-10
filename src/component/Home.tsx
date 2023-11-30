import { useEffect, useState } from "react";
import { IEmployee, PageEnum } from "./Employee.type";
import "./Home.style.css";
import EmployeeList from "./EmployeeList";
import AddEmployee from "./AddEmployee";
import EditEmployee from "./EditEmployee";

const Home = () => {
    // -----------Declear state-
    const [employeeList, setEmployeeList] = useState([] as IEmployee[]);
    const [shownPage, setShownPage] = useState(PageEnum.list);
    const [dataEdit, setDataEdit] = useState({} as IEmployee);

    // ------------useEffect-----
    useEffect(() => {
        const listInString = window.localStorage.getItem("EmployeeList");
        if (listInString) {
            _setEmployeeList(JSON.parse(listInString));
        }
    }, []);

    // ------------------------function-------
    const onAddEmployeeClickHnd = () => {
        setShownPage(PageEnum.add)
    };
    // -----
    const showListPage = () => {
        setShownPage(PageEnum.list)
    };
    // ---store data in local 
    const _setEmployeeList = (list: IEmployee[]) => {
        setEmployeeList(list);
        window.localStorage.setItem("EmployeeList", JSON.stringify(list))
    };
    // ---add and append data object in array
    const addEmployee = (data: IEmployee) => {
        _setEmployeeList([...employeeList, data])
    };
    // ---delete employee in array
    const deleteEmployee = (data: IEmployee) => {
        const updatedList = employeeList.filter((employee) => employee !== data);
        _setEmployeeList(updatedList);
    };
    // ---
    const editEmployeeData = (data: IEmployee) => {
        setShownPage(PageEnum.edit);
        setDataEdit(data);
    };
    // ----
    const updateData = (data: IEmployee) => {
        const index = employeeList.findIndex((employee) => employee.id === data.id);
        if (index !== -1) {
            _setEmployeeList(employeeList.map((item, x) => index === x ? data : item));
        }
    };

    // ----return----------
    return (
        <>
            {/* <div className="container"> */}
            {/* ----header---- */}
            <article className="articale-header">
                <header>
                    <h1>
                       Employee Data 
                    </h1>
                </header>
            </article>
            {/* -----------------------------------------EmployeeList section---------------- */}
            <section className="section-content">
                {shownPage === PageEnum.list && (
                    <>
                        <input type="button" value="Add Employee" onClick={onAddEmployeeClickHnd} className="addEmployeeBtn" />
                        <EmployeeList list={employeeList} onDeleteClickHnd={deleteEmployee}
                            onEdit={editEmployeeData}
                        />
                    </>
                )}


                {shownPage === PageEnum.add && <AddEmployee onBackBtnClickHnd={showListPage} onSubmitClickHnd={addEmployee} />}
                {shownPage === PageEnum.edit && <EditEmployee data={dataEdit} onBackBtnClickHnd={showListPage} onUpdateClickHnd={updateData} />}

            </section>
            {/* </div> */}
        </>
    )
}


export default Home;
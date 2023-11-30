// ----type declear----------
export interface IEmployee {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
};

// -----enum---------
export enum PageEnum {
    list,
    add,
    edit,
}

// -----------------data hard code----------------

// export const dummyEmployeeList: IEmployee[] = [
//     {
//      id: new Date().toJSON().toString(),
//       firstName: "Imran",
//       lastName: "Ansari",
//       email: "dummy1@gmail.com",
//     },
// ];

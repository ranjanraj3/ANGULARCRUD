export interface Traveller {

    EmployeeID : number;
    FirstName:string;
    LastName:string;
    EmpCode:string;
    Position:string;
    Office:string;
}
export interface Travellers{
    travellers: Array<Traveller>
 }
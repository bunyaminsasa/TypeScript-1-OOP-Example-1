//! Abstract

abstract class Department {
  DepartmentName: string;
  constructor(_departmentName: string) {
    this.DepartmentName = _departmentName;
  }

  GetDepartmentName(): void {
    console.log("Department Name...: " + this.DepartmentName);
  }

  abstract GetDepartmentFloor(floor: number): void;
}
class ITDepartment extends Department {
  constructor(_departmentName: string) {
    super(_departmentName);
  }

  GetDepartmentFloor(floor: number): void {
    return console.log("Floor: " + floor);
  }
}

let _ITDepartment = new ITDepartment("IT");

//_ITDepartment.DepartmentName = "IT";
_ITDepartment.GetDepartmentFloor(7);
_ITDepartment.GetDepartmentName();

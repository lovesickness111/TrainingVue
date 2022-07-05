import BaseAPIConfig from '@/apis/BaseAPIConfig.js';

class EmployeeAPI{
    controller="";

    getTest(){
        return BaseAPIConfig.get(`https://catfact.ninja/fact`);
    }

    getEmployeeByID(empID){
        return BaseAPIConfig.get(`${this.controller}/getEmpById/${empID}`);
    }

   

   saveEmployee(emp){
        return BaseAPIConfig.get(`${this.controller}/save`, emp);
    }
}
export default new EmployeeAPI();
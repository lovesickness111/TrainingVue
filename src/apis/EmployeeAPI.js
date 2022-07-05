import BaseAPIConfig from '@/apis/BaseAPIConfig.js';

class EmployeeAPI{
    controller="";

    getTest(){
        return BaseAPIConfig.get(`https://catfact.ninja/fact`);
    }
/**
 * lấy nhân viên theo id
 * @param {*} empID id nv
 * @returns 
 */
    getEmployeeByID(empID){
        return BaseAPIConfig.get(`${this.controller}/getEmpById/${empID}`);
    }

   
/**
 * lưu nhân viên
 * @param {*} emp 
 * @returns 
 */
   saveEmployee(emp){
        return BaseAPIConfig.post(`${this.controller}/save`, emp);
    }
}
export default new EmployeeAPI();
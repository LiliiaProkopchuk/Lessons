'use strict';

class Employee {
    constructor() {
        this.list_of_employees = [];
    }
    addEmployee(surname, name, position, experience) {
        this.list_of_employees.push({
            "Surname": surname,
            "Name": name,
            "Position": position,
            "Work experience": experience
        });
        console.log(this.list_of_employees);
    }
    get getlist() {
        return this.list_of_employees;
    }
}

class EmpTable extends Employee {
    constructor(employee_list) {
        super();
        this.employee_list = employee_list;
    }
    getHtml() {

        let table = `<table border="1">
            <caption>List of company employees</caption>
            <tbody>
            <tr>
                <th>Surname</th>
                <th>Name</th>
                <th>Position</th>
                <th>Work experience</th>
            </tr>`;
        for (let i = 0; i < this.employee_list.length; i++) {
            table += `<tr>`;
            for (let key in this.employee_list[i]) {
                table += `<td>${this.employee_list[i][key]}</td>`
            }
            table += `</tr>`;
        }
        table += `</Tbody>
                  </table>`;
        return table;
    }
}


let addEmployee = () => {
    let surname = document.getElementById('var_surname').value,
        name = document.getElementById('var_name').value,
        position = document.getElementById('var_position').value,
        experience = document.getElementById('var_experience').value;
    list.addEmployee(surname, name, position, experience);

    document.getElementById('var_surname').value = '';
    name = document.getElementById('var_name').value = '';
    document.getElementById('var_position').value = '';
    document.getElementById('var_experience').value = '';
}

let showTable = () => {
    document.getElementById('task3_rez').innerHTML = table.getHtml();
}

let list = new Employee();
let employee_list = list.getlist;
let table = new EmpTable(employee_list);



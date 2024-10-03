// Task 1 - Create a Department Structure

let company = {
    departments:[
        {
            departmentName: 'Business',
            employees: [
                {
                    name: 'Joyce',
                    salary: 100000,
                    subordinates: [
                        {
                            name: 'Bob',
                            salary: 85000,
                            subordinates: [
                                {
                                    name: 'Mike',
                                    salary: 60000,
                                    subordinates: []
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'Billy',
                    salary: 90000,
                    subordinates: []
                }
            ]
        },
        {
            departmentName: 'Engineering',
            employees: [
                {
                    name: 'Will',
                    salary: 107000,
                    subordinates: [
                        {
                            name: 'Max',
                            salary: 73000,
                            subordinates: []
                        }
                    ]
                },
                {
                    name: 'Steve',
                    salary: 95000,
                    subordinates: []
                }
            ]
        }
    ]
 }


 // Task 2 - Create a Recursive Function to Calculate Total Salary for a Department

 function calculateDepartmentSalary(departments){
    let totalSalary = 0; //starting with total salary at 0 to sum the values

    for (let employees of departments.employees){
        totalSalary += employee.salary; // using for of to go through each employee again and sum their salaries 

        if (employee.subordinates && employee.subordinates.lengh > 0){ // chacking if the imployee has subordinates; if so, it calculates their total salary 
            totalSalary += calculateDepartmentSalary({employees: employee.subordinates});
        }
    }

    return totalSalary; 

 }

 let businessTotalSalary = calculateDepartmentSalary(company.departments[0]); // calculate total salary for business department
 console.log(`The total salary for the Business department is ${businessTotalSalary}.`); // console log the final value

 let engineeringTotalSalary = calculateDepartmentSalary(company.departments[1]); // calculate total salary for engineering department
 console.log(`The total salary for the Engineering department is ${engineeringTotalSalary}`); // console log the final value




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

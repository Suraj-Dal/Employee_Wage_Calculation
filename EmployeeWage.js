const IS_ABSENT = 0;
const WAGE_PER_HRS = 20;
const totalWorkingDays = 20;
let empCheck = Math.floor(Math.random() * 10) % 2;
    //UC2 to calculate Daily Wages of employee.
    let empHrs = 0;
    //UC3 to create function to get Working HRS.
    function getWorkingHrs(checkHrs)
    {
        switch (checkHrs)
        {
            case 1:
                return 8;
            case 2:
                return 4;
            default:
                return 0;
        }
    }
    //UC4 calculate Emp Wage for month
    let totalEmpHrs = 0;
    console.log("----------Employee Wage Calculator----------");
    for (let day = 0; day < totalWorkingDays; day++)
    {
        let checkHrs = (Math.floor(Math.random() * 10) % 3) + 1;
        empHrs = getWorkingHrs(checkHrs);
        totalEmpHrs += empHrs;
    }
    let totalWage = totalEmpHrs * WAGE_PER_HRS;
    console.log("Total Working Hrs: "+ totalEmpHrs +" \nWages of employee for day is: " + totalWage);
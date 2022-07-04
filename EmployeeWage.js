const IS_ABSENT = 0, WAGE_PER_HRS = 20, TOTAL_WORKING_DAYS = 20, MAX_WORKING_HRS = 160;
let empCheck = Math.floor(Math.random() * 10) % 2;
let empHrs = 0, totalEmpHrs = 0, totalWorkingDays = 0;

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
console.log("----------Employee Wage Calculator----------");
while (totalEmpHrs <= MAX_WORKING_HRS && totalWorkingDays < TOTAL_WORKING_DAYS) 
{
    // UC5 calculate Emp wage till condition of total working Hrs of 160 or max days of 20
    let checkHrs = (Math.floor(Math.random() * 10) % 3) + 1;
    empHrs = getWorkingHrs(checkHrs);
    totalEmpHrs += empHrs;
    totalWorkingDays++;
}

let totalWage = totalEmpHrs * WAGE_PER_HRS;
console.log("Total Working Days: "+ totalWorkingDays +"\nTotal Working Hrs: "+ totalEmpHrs +" \nWages of employee for day is: " + totalWage);
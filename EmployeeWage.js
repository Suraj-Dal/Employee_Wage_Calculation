const IS_ABSENT = 0;
let empCheck = Math.floor(Math.random() * 10) % 2;
//UC1 to check Emp Present or Absent.
if (empCheck == IS_ABSENT)
{
    console.log("Employee is Absent.");
    return;
}
else
{
    console.log("Employee is Present.");
    //UC2 to calculate Daily Wages of employee.
    let empHrs = 0;
    const WAGE_PER_HRS = 20;
    let checkHrs = (Math.floor(Math.random() * 10) % 2) + 1;
    //UC3 to create function to get Working HRS.
    function getWorkingHrs(checkHrs)
    {
        switch (checkHrs)
        {
            case 1:
                return 8;
            case 2:
                return 4;
        }
    }
    empHrs = getWorkingHrs(checkHrs);
    let empWage = (empHrs * WAGE_PER_HRS);
    console.log("Working Hrs: "+ empHrs +" \nWages of employee for day is: " + empWage);
}
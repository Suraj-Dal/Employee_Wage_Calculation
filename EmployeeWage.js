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
    let checkHrs = (Math.floor(Math.random() * 10) % 3) + 1;
    switch (checkHrs)
    {
        case 1:
            empHrs = 8;
            break;
        case 2:
            empHrs = 4;
            break;
    }
        let empWage = (empHrs * WAGE_PER_HRS);
        console.log("Wages of employee for day is: " + empWage);
}
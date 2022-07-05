const IS_ABSENT = 0, WAGE_PER_HRS = 20, TOTAL_WORKING_DAYS = 20, MAX_WORKING_HRS = 160;
let empCheck = Math.floor(Math.random() * 10) % 2;
let empHrs = 0, totalEmpHrs = 0, totalWorkingDays = 0;
let dailyWagesArr = new Array();

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

function dailyWage(empHrs)
{
    return empHrs * WAGE_PER_HRS;
}

//UC4 calculate Emp Wage for month
console.log("----------Employee Wage Calculator----------");
while (totalEmpHrs <= MAX_WORKING_HRS && totalWorkingDays < TOTAL_WORKING_DAYS) 
{
    // UC5 calculate Emp wage till condition of total working Hrs of 160 or max days of 20
    let checkHrs = (Math.floor(Math.random() * 10) % 3) + 1;
    empHrs = getWorkingHrs(checkHrs);
    dailyWagesArr.push(dailyWage(empHrs));
    totalEmpHrs += empHrs;
    totalWorkingDays++;
}

//UC 6 to store daily wage along with total wage.
let day = 1;
let dayWithWageDic = new Map; // UC 8 to use Map
dailyWagesArr.forEach(element => {
    console.log("Day "+ day +" Wage: "+ element);
    dayWithWageDic.set(day, element);
    day++;
});
let totalWage = dailyWage(totalEmpHrs);
console.log("Total Working Days: "+ totalWorkingDays +"\nTotal Working Hrs: "+ totalEmpHrs +" \nTotal Monthly Wage : " + totalWage);

//UC7A - total wage using daily wage.
let wageForDay = dailyWage(empHrs);
let monthlyWage = 0;
function sum(wageForDay)
{
    monthlyWage += wageForDay;
}
dailyWagesArr.forEach(sum);
console.log("Total monthly wage using foreach method: "+ monthlyWage);

//UC7C - Day when full day wage of 160 is earned.
function fullDayWage(wageForDay)
{
    console.log("Days When full day wage of 160 is earned:");
    dayWithWageDic.forEach((value, key) => {
        if (value == "160")
        console.log("Day "+ key +" Wage "+ value);
    })
}
fullDayWage(wageForDay);

//UC7D - first occurrence of full day wage.
for (var [key, value] of dayWithWageDic)
{
    if (value == "160")
    {
        var first = key;
        break;
    }
}
console.log("First occurrence of full day wage is at Day "+ first);

//UC7F part time wages
console.log("Days When part time wage of 80 is earned:");
dayWithWageDic.forEach((value, key) => {
    if (value == "80")
        console.log("Day "+ key +" Wage "+ value);
})

//UC7G no. of days employee worked.
let presentDays = 0;
dayWithWageDic.forEach((value, key) => {
    if (value != "0")
        presentDays++;
})
console.log("Employee worked for "+ presentDays +" Days.");
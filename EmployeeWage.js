const IS_ABSENT = 0, WAGE_PER_HRS = 20, TOTAL_WORKING_DAYS = 20, MAX_WORKING_HRS = 160;
let empCheck = Math.floor(Math.random() * 10) % 2;
let empHrs = 0, totalEmpHrs = 0, totalWorkingDays = 0;
let dailyWagesArr = new Array();
let empDailyHrsAndWage = new Array();
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
    // UC10 to store day, Hours and wage in one object.
    empDailyHrsAndWage.push({
        day:totalWorkingDays,
        dailyHrs:empHrs,
        dayWage:dailyWage(empHrs),
        toString()    {
            return "\nDay: "+ this.day +" Working Hours: "+ this.dailyHrs +" Wage: "+ this.dayWage
            }
    });
}
console.log("UC10:"+ empDailyHrsAndWage);

//UC 6 to store daily wage along with total wage.
let day = 1;
let dayWithWageDic = new Map; // UC 8 to use Map
dailyWagesArr.forEach(element => {
    //console.log("Day "+ day +" Wage: "+ element);
    dayWithWageDic.set(day, element);
    day++;
});
let totalWage = dailyWage(totalEmpHrs);
//console.log("Total Working Days: "+ totalWorkingDays +"\nTotal Working Hrs: "+ totalEmpHrs +" \nTotal Monthly Wage : " + totalWage);

//UC7A - total wage using daily wage.
let wageForDay = dailyWage(empHrs);
let monthlyWage = 0;
function sum(wageForDay)
{
    monthlyWage += wageForDay;
}
dailyWagesArr.forEach(sum);
//console.log("Total monthly wage using foreach method: "+ monthlyWage);

//UC7C - Day when full day wage of 160 is earned.
function fullDayWage(wageForDay)
{
    //console.log("Days When full day wage of 160 is earned:");
    dayWithWageDic.forEach((value, key) => {
       // if (value == "160")
        //console.log("Day "+ key +" Wage "+ value);
    });
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
//console.log("First occurrence of full day wage is at Day "+ first);

//UC7F part time wages
//console.log("Days When part time wage of 80 is earned:");
dayWithWageDic.forEach((value, key) => {
    //if (value == "80")
        //console.log("Day "+ key +" Wage "+ value);
})

//UC7G no. of days employee worked.
let presentDays = 0;
dayWithWageDic.forEach((value, key) => {
    if (value != "0")
        presentDays++;
})
console.log("Employee worked for "+ presentDays +" Days.");

//UC9- use Arrow functions
let noWorkDaysArr = new Array();
let fullWorkDaysArr = new Array();
let partTimeDaysArr = new Array();
dayWithWageDic.forEach((value, key)=>{
    if (value == "160")
        fullWorkDaysArr.push(key);
    else if (value == "80")
        partTimeDaysArr.push(key)
    else
        noWorkDaysArr.push(key);
});
console.log("No Working Days: "+ noWorkDaysArr);
console.log("Full Working Days: "+ fullWorkDaysArr);
console.log("Part time working Days: "+ partTimeDaysArr);

//UC11A - Total Hrs and Wages using Arrow function.
let totalHrsArrow = empDailyHrsAndWage
                    .filter(dailyHours => dailyHours.dailyHrs > 0)
                    .reduce((totalHrsArrow, dailyHours) => totalHrsArrow += dailyHours.dailyHrs, 0);
let totalWageArrow = empDailyHrsAndWage
                    .filter(dailyWages => dailyWages.dayWage > 0)
                    .reduce((totalWageArrow, dailyWages) => totalWageArrow += dailyWages.dayWage, 0);
console.log("UC11 - \nTotal Hours "+ totalHrsArrow +"\nTotal Wages: "+ totalWageArrow);

//UC11B - Full Work day 
console.log("UC11 B - Full Working Day using Arrow Function.")
empDailyHrsAndWage.filter(fullday => fullday.dailyHrs == 8)
                    .forEach(fullday => console.log(fullday.toString()));

//UC11C - Part time day
console.log("UC11 C - Part Time working days using Arrow functions.");
empDailyHrsAndWage.filter(partTime => partTime.dailyHrs == 4)
                    .forEach(partTime => console.log(partTime.toString()));

//UC11D - No working Days 
let noWorkDay = empDailyHrsAndWage.filter(noWork => noWork.dailyHrs == 0)
                                    .map(noWork => noWork.day);
console.log("UC11 D - No working days using Map functions.\n"+ noWorkDay);

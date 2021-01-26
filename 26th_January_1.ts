function broadbanddetails(accountnumber :number, userid :number, ipaddress :number) {
   // console.log("Account Number " + accountnumber + "UserId " + userid + "IP Address " + ipaddress);
}
function details(callbackbroadbanddetails , accnum :number, uid :number, ip :string) {
    callbackbroadbanddetails(accnum, uid, ip);
}
details(broadbanddetails, 113549823, 11128539, "10.245.56.98");
//-----------------------------------------------------------------------------------------------
function broadbanddetail(accountnum :number,userID :number,IPAddress :string)
{
  console.log(accountnum,userID,IPAddress)
}
function netdetails(callbackbroadbanddetail ,totalmbdownloaded :string,downloadspeed :string,uploadspeed :string,acnum :number,uid :number,ipadd :string)
{
  callbackbroadbanddetail(acnum,uid,ipadd)
  console.log(totalmbdownloaded,downloadspeed,uploadspeed)
}
netdetails(broadbanddetail,"21.26 GB","30.05 mbps","32.06 mbps",1135497,11128550,"10.245.97.123");
//--------------------------------------------------------------------------------------------------------
function employeeinfo(companyname :string,employeeage :number,employeegender :string,employeeidnumber :string,employeename :string)
{
  console.log(companyname,employeeage,employeegender,employeeidnumber,employeename)
}
function employeecontactdetail(callbackemployeeinfo,cname :string,age :number,gender :string,idnumber :string,name :string,email :string,address :string,city :string,contactnumber :number)
{
    callbackemployeeinfo(cname,age,gender,idnumber,name);
    console.log(email,address,city,contactnumber);
}
employeecontactdetail(employeeinfo,"jvt",5,"Male","ASUPB590F","Mr. Venkatesh", "venkatesh@gmail.com","BEML Main Road","Bangalore",9900367097);
//-------------------------------------------------------------------------------------------------------------
function passwordverification(password :string,confirmpassword :string)
{
   if(password == confirmpassword)
   {
     return 1;
   }
   else
   {
     return 0;
   }
}
function signupdetail(callbackpasswordverification,fname :string,lname :string,uname :string,pwd :string,cpwd :string,gender :string,mobile :number,email :string)
{
   var res = callbackpasswordverification(pwd,cpwd);
   if(res == 1)
   {
     console.log("Signed up successfully");
     console.log("Profile details :");
     console.log("First Name :"+fname+" Last Name :"+ lname +" Password :"+pwd+ "Email :"+email);
   }
   else
   {
     console.log("Password and confirm password doesnot match");
   }
}
signupdetail(passwordverification,"shomya","charan","shomya@123","balu","balu","female",784273782,"shomya@gmail.com");
//----------------------------------------------------------------------------------------------------
function homeloan(loanamount :number)
{
  var rateofinterest:number = 10.5;
  var loantenure:number = 240;
  var emival :number = loanamount * rateofinterest * (Math.pow(1+rateofinterest,loantenure))/(((Math.pow(1+rateofinterest,loantenure))-1));
  return emival;
}
function personalloan(loanamount :number)
{
  var rateofinterest :number = 17.5;
  var loantenure : number = 36;
  var emival :number = loanamount * rateofinterest * (Math.pow(1+rateofinterest,loantenure))/(((Math.pow(1+rateofinterest,loantenure))-1));
  return emival;
}
function loan(callbackhomeloan,callbackpersonalloan,fname :string,mobilenum :number,loan :string,amount :number)
{
    if(loan == "Home Loan")
    {
     var homeres :number =  callbackhomeloan(amount);
     console.log("Equated monthly installment For Home Loan :"+ homeres);
    }
    else if(loan == "Personal Loan")
    {
      var personalres :number = callbackpersonalloan(amount);
      console.log("Equated monthly installment for Personal Loan :"+personalres);
    }
    else
    {
      console.log("No such Scheme available");
    }
}
loan(homeloan,personalloan,"shomya",873848992,"Home Loan",500000);
loan(homeloan,personalloan,"shomya",873848992,"Personal Loan",500000);
loan(homeloan,personalloan,"shomya",873848992,"Car Loan",500000);
//----------------------------------------------------------------------------------------------------------------------------------------
function payslipcalculate(grosssalary :number): number
{
  var basic :number = (40 * grosssalary)/100;
  var hra :number= (40 * basic)/100;
  var emplpf :number = (12 * basic)/100;
  var totalsalary :number = basic+hra+emplpf;
  return totalsalary;
}
function payslip(callbackpayslipcalculate,empname :string,empcmp :string,empdesignation :string,cmplocation :string,gross :number)
{
   var sal :number = callbackpayslipcalculate(gross);
   console.log(empname +" salary is :Rs"+ sal);
}
payslip(payslipcalculate,"shomya","Intimetec","Trainee","Bangalore",5000000);
//--------------------------------------------------------------------------------------------------------------------------------------------
function calculateelectricitybill(unitsconsumed :number)
{
  
  if(unitsconsumed < 100)
  {
   var cost :number= unitsconsumed *1.5;
   return cost;
  }
  else if(unitsconsumed > 100 && unitsconsumed < 300)
  {
   var cost :number = 150 + ((unitsconsumed - 100)*2.5);
   return cost;
  }
  else if(unitsconsumed > 300 && unitsconsumed < 500)
  {
   var cost :number= 650 + ((unitsconsumed - 300)*4.5);
   return cost;
  }
  else
  {
   var cost :number= 1550 + ((unitsconsumed - 500)*6);
   return cost;
  }
}
function consumerdetail(callbackcalculateelectricitybill,consumername :string,consumerpassword :string,paymentmode :string,consumernumber :number,units :number)
{
  console.log("Consumer Name :"+consumername+" Payment Mode :"+paymentmode +"Consumer Number :"+consumernumber);
 var bill :number = callbackcalculateelectricitybill(units);
 console.log("Electricity Bill :Rs." +bill);
}
consumerdetail(calculateelectricitybill,"shomya","shomya@123","NetBanking",5347829,370);
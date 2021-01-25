
//call back function. In order to combine or tie the view(User Interface) with controller(javascript), we make use of callback function.
function CompanyInfo(companyname,designation,salary,location)
{
  console.log(companyname,"<br>",designation,"<br>",salary,"<br>",location)
}
function displaycompanyinfo(callback)
{
   callback("JvT","Programmer","2.3 or 230000","Bangalore")
}
displaycompanyinfo(CompanyInfo) //first this line will get executed.Then cotrol will go to line7. After this callback oject will point to CompanyInfo function.Then it goes to line 9.Afer line 9 it will call CompanyInfo function.
//-----------------------------------------------------------------------------------------------------------------------------------------------------
function broadbanddetail(accountnumber,userid,ipaddress)
{
  console.log(accountnumber,"<br>",userid,"<br>",ipaddress)
}
function details(profiledetailscallback)
{
  profiledetailscallback(1135497,11128550,"10.245.97.123")
}
details(broadbanddetail)
//--------------------------------------------------------------------------------------------------------------------------------------------------------
function broadbanddetails(accnumber,broadbanduserid,ipadd)
{
  console.log(accnumber,broadbanduserid)
   return ipadd
}
function netdetails(callbackbroadbanddetails)
{
  var result = callbackbroadbanddetails(1135497,11128550,"10.245.97.123") //This statement will call broadbanddetails function.
  TotalMBDownloaded = "21.26 Gb"
  MobileDownloadSpeed = "30.05 mbps"
  MobileUploadSpeed = "32.06 mbps"
  console.log("IPAddress:"+ result+"<br>"+TotalMBDownloaded)
}
netdetails(broadbanddetails)
//------------------------------------------------------------------------------------------------------------------------------------------------------
function visitordetails(NameOfPilgrim,BookingNumber,OrderNumber,Email,ProofID,AdharCardNumber,BookedDate,BookedTime,NumberOfPerson,ReportingTime)
{
  console.log(NameOfPilgrim,BookingNumber,OrderNumber,Email,ProofID,AdharCardNumber,BookedDate,BookedTime,NumberOfPerson)
   return 
}
function eventdetails(callbackvisitordetails)
{
  callbackvisitordetails("shomya","IS151110080016",010293849493,"shomya@gmail.com","AdharCard",26377826638,11062015,"11:36:46",4,"4:00PM")
  date = "Dec 1st"
  day = "Tuesday"
  time = "3:30 Am"
  Nameoftheseva = "Archana"
  Privilegestoseva = "Two small Laddu"
  Accomodationtype = "Rs. 500 Tirumala"
  Rate = "50 to 2000"
}
eventdetails(visitordetails)
//-----------------------------------------------------------------------------------------------------------------------------------------------------
function employeeinfo(organisationname,age,gender,idcardnumber,name)
{
  console.log(organisationname,age,gender,idcardnumber,name)
  return
}
function employeecontactdetails(callbackemployeeinfo)
{
  callbackemployeeinfo("jvt",5,"Male","ASUPB590F","Mr. Venkatesh") //this statement will call personalinfo function
  emailid = "venkatesh@gmail.com"
  address = "BEML Main Road"
  city = "Bangalore"
  state = "Karnataka"
  zip = 560075
  country = "India"
  MobileNumber = 9900367097
  console.log(emailid)
}
employeecontactdetails(employeeinfo)
//----------------------------------------------------------------------------------------------------------------------------------------------------
function driverdetails(lastname,firstname,middlename,employee,birthcity,dateofbirth)
{
  console.log(lastname,middlename,employee,birthcity,dateofbirth)
  return(firstname)
}
function licensedetails(callbackdriverdetails,callbackvehicledetails)
{
 var naam = callbackdriverdetails("Kumar","Pavan","Bijjavaram","Software Engineer","Rajampet","12-7-1992")
 LicenseNumber = "ka50201500006939"
 LicenseState = "Karnataka"
 LicenseCountry = "India"
 console.log("<br>"+"Name:"+ naam +"<br>"+"LicenseNumber :"+LicenseNumber+"<br>"+"LicenseState :"+LicenseState)
 callbackvehicledetails("Light motor","car","red","Kp98gtyihh457797","tc5678898335r45","BMW")
}
function vehicledetails(vehicletype,vehicle,colour,enginenumber,chassisnumber,company)
{
  console.log("<br>"+vehicletype+"<br>"+colour)
}
licensedetails(driverdetails,vehicledetails)
//-----------------------------------------------------------------------------------------------------------------------------------------------------
function systemproperties(rate,processor,ram,systemtype)
{
  console.log(rate,processor,ram,systemtype)
}
function upsspecification(model,ipvoltage,frequency,opvoltage,batterytype,batterycapacity,batterybackup,rechargetime,weight)
{
  console.log(model,ipvoltage,frequency,opvoltage)
}
function hardwaredetails(callbacksystemproperties,callbackupsspecification)
{
  callbacksystemproperties(4.5,"Intel core i5-2450 cpu","4.00Gb","64 bit operating system")
  callbackupsspecification("digital 600","230v ac","50 hz","230 v ac","sealed maintenance free","12 volt7 Ah","12 to 20 mints","5 to 6 hrs","6.1 kg")
}
hardwaredetails(systemproperties,upsspecification)
//------------------------------------------------------------------------------------------------------------------------------------------------------
function outstanding(totaloutstanding,unbilled)
{
  console.log(totaloutstanding,unbilled)
}
function lastpaymentmade(lastamount,date)
{
  console.log(lastamount,date)
}
function creditlimit(totalcredit,available)
{
  console.log(totalcredit,available)
}
function cashlimit(totalcash,availablecash)
{
  console.log(totalcash,availablecash)
}
function utilization(callbackoutstanding,callbacklastpaymentmade,callbackcreditlimit,callbackcashlimit)
{
 callbackoutstanding("Rs. 571.36","Rs. 0 ")
 callbacklastpaymentmade("Rs. 0","11-01-21")
 callbackcreditlimit("Rs.18000","Rs. 17428.64")
 callbackcashlimit("Rs. 3600","Rs. 3600")
}
utilization(outstanding,lastpaymentmade,creditlimit,cashlimit)
//-------------------------------------------------------------------------------------------------------------------------------------------------------------
function AccountInfo(firstname,lastname,username,password,confirmpassword,birthday,gender,mobile,email)
{
  if(password == confirmpassword)
  {
    return "Account Created Successfully!!"
  }
  else
  {
    return "oops!!Password and Confirm Password doesnot match"
  }
}
function createaccount(callbackAccountInfo)
{
var res = callbackAccountInfo("venkatesh","db","jvt","balu","balu","2-6-1986","Male",9900367097,"venkatesh.db@gmail.com")
console.log(res)
}
createaccount(AccountInfo)
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
function orderdetails(brand,productcode,colour,size,material,occassion,pattern,sleeve,gender)
{
  console.log("<br>"+brand+"<br>"+productcode)
  return
}
function shippingdetails(callbackorderdetails)
{
  callbackorderdetails("Scott International","APPSCOTT-INTERNSWIT610835D77A4441","Black","s","cotton","casual","solid","full sleeves","Male")
  EstimatedArrival = "9 days"
  ReturnPolicy = "Seller will accept return within a 15 days from date of delivery of the item"
  Address = "Jantha colony,Doddakannalli,Bangalore,Karnataka"
  email = "shomya@gmail.com"
  contactnumber = 8340257389
  console.log("<br>"+"EstimatedArrival : "+EstimatedArrival)
}
shippingdetails(orderdetails)
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------
function gadgetinfo(chipset,cpu,gpu,model,manufacturer,os,processor)
{
  return model
}
function platform(platformos,platformchipset,platformcpu,platformgpu)
{
  return platformos
}
function battery(nonremovable,standby,talktime,musicplay)
{
   return nonremovable
}
function body(dimensions,weight,sim)
{
  return sim
}
function callall(callbackgadgetinfo,callbackplatform,callbackbattery,callbackbody)
{
var gadgetmodel = callbackgadgetinfo("Apple A9","Dual core 1.84 GHz Twister","PowerVR GT7600","iphone","Apple","ios 4.0","1 GHZ")
var gadgetplatform =  callbackplatform("iOS 9","Apple A9","Dualcore 1.84 GHz Twister","PowerVRGT7600")
var gadgetbattery = callbackbattery("Li-Po 1715 mAh battery","upto 240 h(3G)","upto 14 h(3G)","upto 50 h")
var gadgetbody = callbackbody("138*67.1*7.1 mm","143 g","Nano sim")
  NetworkTechnology= "GSM/CDMA/HSPA/EVDO/LTE"
  console.log(gadgetmodel,gadgetplatform,gadgetbattery,gadgetbody,NetworkTechnology)
}
callall(gadgetinfo,platform,battery,body)
//-----------------------------------------------------------------------------------------------------------------------------------------------------------
function tvdetails(tvmodel,ledlightining,sizez,type,wirelessHDMI)
{
  console.log("<br>"+"TV Model :"+tvmodel)
  return
}
function laptopdetails(callbacktvdetails)
{
  callbacktvdetails("LG55LHX","Backlight","55 inches","scanning backlight","yes")
  laptopmodel = "LGp430"
  os = "Window 7 homebase"
  Processor = "second generation intel core i3,i5 or i7 processor"
  screen = "14.0 inch"
  Resolution = "1366*768"
  storage = "320 GB"
  cost = "Rs. 50,000"
  console.log("<br>"+"Laptop Model :"+laptopmodel)
}
laptopdetails(tvdetails)


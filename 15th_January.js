class Foodbill
{ 
  constructor(forder,fquant,sorder,squant,torder,tquant)
  {
    this.firstorder = forder
    this.firstorderquantity = fquant
    this.secondorder = sorder
    this.secondorderquantity = squant
    this.thirdorder = torder
    this.thirdorderquantity = tquant

  }
   calculateprice() 
   {
      if(this.firstorder == "Butter roti")
      {
        this.Rateofbutterroti = 65
        this.butterroticost = 65 * this.firstorderquantity
      }
      if(this.secondorder == "Masala Papad")
      {
        this.Rateofmasalapapad = 75
        this.masalapapadcost = 75 * this.secondorderquantity
      }
      if(this.thirdorder == "Paneer Kadai")
      {
        this.Rateofpaneerkadai = 325
        this.paneerkadaicost = 325 * this.thirdorderquantity
      }
      this.amounttobepaid = this.butterroticost + this.masalapapadcost+this.paneerkadaicost
      this.totalquantity = this.firstorderquantity+this.secondorderquantity+this.thirdorderquantity
      this.servicecharge = 73.50
      this.VAT = 77
      this.servicetax = 36.50
      this.totalamounttobepaid = this.amounttobepaid + (this.servicetax+this.VAT+this.servicecharge)
   }
   showbill()
     {
        console.log("TotalQuantity :"+ this.totalquantity+"service tax :"+this.servicetax+"VAT :"+this.VAT+"Service charge"+this.servicecharge)
        console.log("Total Amount :" + this.totalamounttobepaid)

    }   

}

let evelyn = new Foodbill("Butter roti",4,"Masala Papad",3,"Paneer Kadai",1)
evelyn.calculateprice()
evelyn.showbill()
//------------------------------------------------------------------------------------------------------
class  Appearance{

constructor(weight,height,gender,address,personalnumber,homenumber,state,country)
{
   this.Weight = weight                  
   this.Height = height
   this.Gender = gender
   this.Address = address
   this.PersonalNumber = personalnumber
   this.Homenumber = homenumber
   this.State = state
   this.Country = country
}

}

let abigail = new Appearance("50kg",5,"Black","Female","Doddakannalli",8340381395,78378726357,"Karnataka","India")
let harper = new Appearance("60kg",7,"Grey","Male","BTM",53663562635,7677881727388,"Karnataka","India")
console.log(harper.Weight)
//----------------------------------------------------------------------------------------------------------------
//class with constructor and method
class TheatreInformation{

constructor(theatrename,screen,moviename,certification,clas,pricepertkt,numberoftkt,seatnumbers,totalamount)
{
  this.TheatreName = theatrename
  this.Screen = screen
  this.MovieName = moviename
  this.MovieCertification = certification
  this.classy = clas
  this.PricePerTicket = pricepertkt
  this.NumberOfTkt = numberoftkt
  this.SeatNumbers = seatnumbers
  this.TotalAmount = totalamount
}
DisplayInformation()
{
 console.log(this.TheatreName,this.Screen,this.MovieName,this.TotalAmount)
}
DisplayGreetings()
{
  if(this.TotalAmount >500)
  { 
  return "expensive"
  }
  else
  {
   return "Good deal"
  }
}
}
let emily = new TheatreInformation("PSS Multiplex","Screen 3","jvt[c,cpp]","u","first","Rs 1000",5,"c1,c2,c3,c4,c5",1050)
    emily.DisplayInformation()
var msg = emily.DisplayGreetings()
console.log(msg)
//------------------------------------------------------------------------------------------------------------------------------------------
//use of static keyword
// every method of a class has this keyword.
//we declare the method as static when we donot want to  have this in our block.
//Inside a static method we can access static variable.

class PersonalInfo{
//we make constructor for initialisation purpose
 static Family = "charan"     // static variable

constructor(firstname,lastname,company,age,city,state)
{
   this.FirstName = firstname
   this.LastName = lastname
   this.CompanyName = company
   this.Age = age
   this.City = city
   this.State = state
}
  display(brotherfirstname,brotherlastname)
{
   this.BrotherFirstName = brotherfirstname
   this.BrotherLastName = brotherlastname
   return this.BrotherLastName
}
static accessstaticdata()
{
  console.log(PersonalInfo.Family)
}
}
let elizabeth = new PersonalInfo("shomya","charan","InTimeTec",22,"Patna","Bihar")
  var lname = elizabeth.display("Gaurav","charan")
   console.log(lname)
      
   PersonalInfo.accessstaticdata()
//-------------------------------------------------------------------------------------------------------------------------------------------------   
// Array Data Structure
details = ["ICICI Bank","SBI Bank","UCO Bank"]
console.log(details[1])
for(i = 0;i< details.length; i++)
{
  console.log(details[i])
}
//-----------------------------------------------------------------------------------------------------------------------------------------------
// we have used function for Data validation
function MobileInfo(totalmbdownloaded,mobiledownloadspeed,mobileuploadspeed)
{
  
  if(totalmbdownloaded > 100)
   {
     return "Exceed"
   }
   else
   {
     return "Data is left"
     }
}

let results = MobileInfo(121,30,32.06)
 console.log(results)
//------------------------------------------------------------------------------------------------------------------------------------------------------- 
let employeedetails = {
              setdata(name,designation,salary)
              {
                if(name == undefined)
                  {
                    console.log("Name Required")
                  }
                else if(designation == undefined)
                  {
                    console.log("Designation Required")
                  }
                else if(salary == undefined)
                  {
                    console.log("Provide Salary")
                  }
                else
                 {
                   this.EmployeeName = name
                   this.JobRole = designation
                   this.Salary = salary
                 }              
              },
            showemployeedetails()
            {
              console.log(this.EmployeeName,this.JobRole,this.Salary)
            }
   }
 employeedetails.setdata("shomya","Programmer",50000)
 employeedetails.showemployeedetails()
 employeedetails.setdata("shomya",undefined,24889)
//---------------------------------------------------------------------------------------------------------------------------------------------------------------
class mail
{
   constructor(sname,semail,recname,recmail,day,date)
  {
    this.sendername = sname
    this.senderemailid = semail
    this.receivername = recname
    this.receiveremailid = recmail
    this.dayofmail = day
    this.dateofmail = date
  }
  checkmailid()
  {
    if(this.senderemailid == "kasi.sivap@gmail.com" && this.receiveremailid == "venkatesh.db@gmail.com")
    {
      console.log("Mail sent successfully")
    }
    else
    {
      console.log("Invalid emailid")
    }
  }
}
let sofia = new mail("siva prasad","kasi.sivap@gmail.com","D b venkatesh","venkatesh.db@gmail.com","friday","Nov 27,2015")
    sofia.checkmailid();
let ella = new mail("shomya charan","shomyacharan@gmail.com","sushma","sushma@gmail.com","friday","Nov 28,2015")
    ella.checkmailid();  
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
class Employeeaddressproof
{
  constructor(name,age,gen,mailid,id,idnum)
  {
    this.empname = name
    this.age = age
    this.gender = gen
    this.emailid = mailid
    this.idproof = id
    this.idproofnumber = idnum  
  }
  checkidcard() 
  {
    if(this.idproof == "voter id" || this.idproof == "ration card")
    {
      return 1
    }
    else
    {
      return 0
    }
  }
}
let madison = new Employeeaddressproof("JVT",5,"Male","info@jvtechnologies.co.in","voter id","ASUSPB560F")
  var result = madison.checkidcard();
  if(result == 1)
  {
    console.log("Your response has been submitted")
  }
  else
   {
    console.log("Provide either voter id or ration card")
   }
//------------------------------------------------------------------------------------------------------------------------------------------------------
class electricitybill
 {  
   
   constructor(uname,pwd,cnumber,mode,bank,units)
   {
     this.username = uname
     this.password = pwd
     this.modeofpayment = mode
     this.bankname = bank
     this.unitsconsumed = units
     this.consumernumber = cnumber
   }
   calculatebill()
   {
       if(this.unitsconsumed < 100)
       {
         this.cost = this.unitsconsumed *1.5
       }
       else if(this.unitsconsumed > 100 && this.unitsconsumed < 300)
       {
         this.cost = 150 + ((this.unitsconsumed - 100)*2.5)
       }
       else if(this.unitsconsumed > 300 && this.unitsconsumed < 500)
       {
         this.cost = 650 + ((this.unitsconsumed - 300)*4.5)
       }
       else
       {
         this.cost = 1550 + ((this.unitsconsumed - 500)*6)
       }
   }
   showbill()
   {
    console.log("Electricity Bill To be paid" + this.cost)
   }
 }
 let scarlett = new electricitybill("shomya","shomya@ch12",234571625,"net banking","sbi",370)
 scarlett.calculatebill()
 scarlett.showbill()


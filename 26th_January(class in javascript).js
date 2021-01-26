//Another way of creating class in javascript.
var jvt = (function()
          {
            function jvt(fname,lname,company,place,designation)
            {
              this.firstname = fname
              this.lastname = lname
              this.organization = company
              this.location = place
              this.jobprofile = designation
            }
            jvt.prototype.display = function()
            {
            document.writeln("First Name :"+this.firstname+"  location :"+this.location)            
            }
         return jvt;
         }());
 let shomya = new jvt("shomya","charan","Intimetec","Bangalore","Trainee")
     shomya.display()
//--------------------------------------------------------------------------
var corporate = (function()
                {
                 function corporate(name,jobrole,salary,festival)          //constructor
                 {
                  this.companyname = name
                  this.jobprofile = jobrole
                  this.income = salary
                  this.occassion = festival
                 }
   corporate.prototype.checkbonus = function()
                                    {
                                      if(this.occassion == undefined)
                                      {
                                        document.writeln("No Bonus")
                                      }
                                      else
                                      {
                                        if(this.occassion == "Diwali")
                                        {
                                          document.writeln("You Got a bonus of Rs.5000")
                                        }
                                        else if(this.location == "Holi")
                                        {
                                         document.writeln("You Got a bonus of Rs. 4500")
                                        }
                                        else
                                        {
                                         document.writeln("You Got a bonus of Rs. 4000")
                                        }
                                     }
                                    }
                                 return corporate;
               }());
  let charan = new corporate("JVT","Programmer","2.3 or 23000","Diwali")
      charan.checkbonus()
  let sita = new corporate("Jvt","Designer","4.5 or 45000",undefined)
     sita.checkbonus()
 //---------------------------------------------------------------------
 var broadbandinfo = (function()
                     {
                       function broadbandinfo(accnum,id,ip,totaldownload,downloadspeed,uploadspeed)
                       {
                         this.accountnumber = accnum
                         this.userid = id
                         this.ipaddress = ip
                         this.totalmbdownloaded = totaldownload
                         this.mobiledownloadspeed = downloadspeed
                         this.mobileuploadspeed = uploadspeed
                       }
     broadbandinfo.prototype.checklimit =function()
                                          {
                                          if(this.totalmbdownloaded > 30)
                                           {
                                             return 1
                                           }
                                           else
                                           {
                                            this.remaining = 30 - this.totalmbdownloaded
                                            return this.remaining
                                           }                      
                                          }
      broadbandinfo.prototype.showinfo = function()
                                         {
                                         document.writeln("Account Number :"+this.accountnumber)
                                         }
                               return broadbandinfo;
                     }());
    let clara = new broadbandinfo(113456,111285550,"10.245.97.123",21.26,30.05,32.06)
    var check =  clara.checklimit()
    if(check == 1)
    {
     document.writeln("Data Pack Exhausted")
    }
    else
    {
      document.writeln("Remaining Data is :"+check)
    }
    clara.showinfo()
//----------------------------------------------------------------------
var onlineshop = (function()
                 {
                   function onlineshop(name,uname,pwd,cpwd,email,contactnumber,location)
                   {
                     this.customerfirstname = name
                     this.username = uname
                     this.signuppassword = pwd
                     this.signupconfirmpassword = cpwd
                     this.customeremail = email
                     this.customercontactnumber = contactnumber
                     this.customerlocation = location
                   }
    onlineshop.prototype.signuppasswordverification = function()
                                                      {
                                                        if(this.signuppassword == this.signupconfirmpassword)
                                                          {
                                                                return 1
                                                          }
                                                        else
                                                          {
                                                                return 0
                                                          }
                                                      }
   onlineshop.prototype.login = function(signinuser,signinpassword)
                                {
                                  this.loginusername = signinuser
                                  this.loginpassword = signinpassword
                                  if(this.loginusername == this.username && this.loginpassword == this.signuppassword)
                                  {
                                     return 1
                                  }
                                  else
                                  {
                                     return 0
                                  }
                                }
   onlineshop.prototype.productdetails = function(brand,colour,material,occass,size,gender)
                                         {
                                          this.productbrand = brand
                                          this.productcolour = colour
                                          this.fabric = material
                                          this.occassion = occass
                                          this.productsize = size
                                          this.prductgender = gender
                                         
                                         }
   onlineshop.prototype.showproductdetails = function()
                                              {
                                               document.writeln("Brand :"+this.productbrand+" Material :"+this.fabric)
                                              }
   onlineshop.prototype.shippingdetails = function(delivery,returnpol)
                                          {
                                            this.productdelivery = delivery
                                            this.returnpolicy = returnpol                                         
                                          }
   onlineshop.prototype.showshippingdetails = function()
                                              {
                                               document.writeln("Delivery :"+this.productdelivery+"Return Policy :"+this.returnpolicy)
                                              }
                           return onlineshop;
    }());  
let george = new onlineshop("shomya","shomya@123","balu","balu","shomya@gmail.com",9824367268,"Bangalore")                                        
 var signupres = george.signuppasswordverification()      
 if(signupres == 1)
 {
   document.writeln("Signed Up Successfully")
   var loginres = george.login("shomya@123","balu")
   if(loginres == 1)
   {
     document.writeln("Logged in successfully")
    george.productdetails("scott inernational","black","cotton","casual","s","Men");
    george.showproductdetails()
    george.shippingdetails("Expected delivery 9 days","Return within 15 days of product delivery")
    george.showshippingdetails()
   }
   else
   {
    document.writeln("Invalid Username and password")
   }
 }
 else
 {
   document.writeln("Password and confirm password doesnot match")
 }
 //----------------------------------------------------------------
var electricitybill = (function()
                      {
                        function electricitybill(uname,pwd,consumerno,modeofpayment,bank,units)
                        {
                         this.username = uname
                         this.password = pwd
                         this.consumernumber = consumerno
                         this.paymentmode = modeofpayment
                         this.bankname = bank
                         this.unitsconsumed = units
                        }
    electricitybill.prototype.calculatebill = function()
                                              {
                                               
                                                 if(this.unitsconsumed < 100)
                                                   {
                                                     this.cost = this.unitsconsumed *2.5;
                                                   }
                                                 else if(this.unitsconsumed > 100 && this.unitsconsumed < 300)
                                                   {
                                                     this.cost = 150 + ((this.unitsconsumed - 100)*3.5);
                                                   }
                                                 else if(this.unitsconsumed > 300 && this.unitsconsumed < 500)
                                                   {
                                                     this.cost = 650 + ((this.unitsconsumed - 300)*4.5);
                                                   }
                                                 else
                                                   {
                                                    this.cost = 1550 + ((this.unitsconsumed - 500)*6);
                                                   }                                             
                                              }
     electricitybill.prototype.showbill = function()
                                          {
                                            document.writeln("Electricity Bill Rs.:"+this.cost)
                                          }
    return electricitybill;
    }());
  let liliana = new electricitybill("shomya","shomya@ch12",234571625,"net banking","sbi",370)
      liliana.calculatebill()
     liliana.showbill()
 //---------------------------------------------------------------------------
 var payslip = (function()
               {
                function payslip(name,company,role,framework,location,gross)  //constructor
                {
                  this.employeename = name
                  this.companyname = company
                  this.jobprofile = role
                  this.framework = framework
                  this.location = location
                  this.grosssalary = gross
                }
    payslip.prototype.calculatepayslip = function()
                                         {
                                             this.basic = (40 * this.grosssalary)/100;
                                             this.hra = (40 * this.basic)/100;
                                             this.emplpf = (12 * this.basic)/100;
                                         }
    payslip.prototype.showpayslip = function()
                                    {
                                    //  document.writeln("Basic :Rs"+this.basic+"HRA :Rs"+this.hra+"Emplpf :Rs"+this.emplpf)
                                    }
          return payslip;
       }());
 let zara = new payslip("shomya","Intimetec","Trainee","Angular","Bangalore",50000)
    zara.calculatepayslip()
    zara.showpayslip()
//------------------------------------------------------------------
var emi = (function()
          {
            function emi(loan,amount)  //constructor
            {
              this.loantype = loan
              this.loanamount = amount
            }
  emi.prototype.emicalculation = function()    //emicalculation method
                                 {
                                    if(this.loantype == "Home Loan")
                                      {
                                        this.rateofinterest = 10.5
                                        this.loantenure = 240
                                        this.emival = this.loanamount * this.rateofinterest * (Math.pow(1+this.rateofinterest,this.loantenure))/(((Math.pow(1+this.rateofinterest,this.loantenure))-1))
                                        return this.emival
                                       } 
                                    else if(this.loantype == "Personal Loan")
                                      {
                                        this.rateofinterest = 17.5
                                        this.loantenure = 36
                                        this.emival = this.loanamount * this.rateofinterest * (Math.pow(1+this.rateofinterest,this.loantenure))/(((Math.pow(1+this.rateofinterest,this.loantenure))-1))
                                        return this.emival
                                      }
                                  else
                                     {
                                         return 0
                                     }
                          }
           return emi;
   }());
 let anabella = new emi("Home Loan",5000000)
   var emires =  anabella.emicalculation()
   if(emires != 0)
   {
    document.writeln("EMI :Rs."+ emires)
   }
   else
   {
    document.writeln("No scheme available")
   }
   let anabell = new emi("Personal Loan",5003400)
    var emiresult =  anabell.emicalculation()
   if(emiresult != 0)
   {
    document.writeln("EMI :Rs."+ emiresult)
   }
   else
   {
     document.writeln("No scheme available")
   } 
 //-----------------------------------------------------------------------
 var foodbill = (function()
                {
                 function foodbill(forder,fquant,sorder,squant,torder,tquant)   //constructor
                 {
                  this.firstorder = forder
                  this.firstorderquantity = fquant
                  this.secondorder = sorder
                  this.secondorderquantity = squant
                  this.thirdorder = torder
                  this.thirdorderquantity = tquant                
                 }
   foodbill.prototype.calculateprice = function()                 //calculateprice method
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
   foodbill.prototype.showbill = function()                       //showbillmethod
                                        {
                                          document.writeln("TotalQuantity :"+ this.totalquantity+"service tax :"+this.servicetax+"VAT :"+this.VAT+"Service charge"+this.servicecharge)
                                          document.writeln("Total Amount :" + this.totalamounttobepaid)
                                        }
        return foodbill;
  }());
  let gaurav = new foodbill("Butter roti",4,"Masala Papad",3,"Paneer Kadai",1)
      gaurav.calculateprice()
      gaurav.showbill()
//--------------------------------------------------------------------------
var faredetails = (function()
                  {
                    function faredetails(name,age,gender,birth,distance,tname)   //constructor
                    {
                      this.passengername = name
                      this.passengerage = age
                      this.passengergender = gender
                      this.seatnumber = birth
                      this.distancecovered = distance
                      this.trainname = tname
                    }
   faredetails.prototype.calculatefare = function()
                                         {
                                           if(this.trainname == "Rajdhani")
                                           {
                                             if(this.distancecovered > 200 && this.distancecovered < 350)
                                              {
                                               this.ticketfare = 420
                                               this.servicecharge = 23
                                               this.totalfare = this.ticketfare + this.servicecharge
                                               document.writeln("Total Fare :" + this.totalfare +"Train Name "+this.trainname+"Distance :"+this.distancecovered+"Km")
                                              }
                                             else if(this.distancecovered > 350 && this.distancecovered <500)
                                               {
                                                this.ticketfare = 800
                                                this.servicetax = 35
                                                this.totalfare = this.ticketfare + this.servicetax
                                                 document.writeln("Total Fare :" + this.totalfare +"Train Name "+this.trainname+"Distance :"+this.distancecovered+"Km")
                                               }
                                               else
                                                 {
                                                   document.writeln("Rajdhani is not in this route")
                                                 }
                                           }
                                           else if(this.trainname == "Delhi Express")
                                           {
                                              if(this.distancecovered > 400 && this.distancecovered < 700)
                                               {
                                                this.ticketfare = 1500
                                                this.servicetax = 70
                                                this.totalfare = this.ticketfare + this.servicetax
                                                 document.writeln("Total Fare :" + this.totalfare +"Train Name "+this.trainname+"Distance :"+this.distancecovered+"Km")
                                               }
                                             else if(this.distancecovered >700 && this.distancecovered <1200)
                                               {
                                                 this.ticketfare = 2800
                                                 this.servicetax = 100
                                                 this.totalfare = this.ticketfare + this.servicetax
                                                  document.writeln("Total Fare :" + this.totalfare +"Train Name "+this.trainname+"Distance :"+this.distancecovered+"Km")
                                                }
                                              else
                                               {
                                             document.writeln("Delhi express not in this route")
                                               }
                                           }
                                           else
                                           {
                                             document.writeln("No Train Available")
                                           }
                                         }
                   return faredetails;
  }());
  let katy = new faredetails("Arun",27,"Male",7,323,"Rajdhani")
      katy.calculatefare()
  let kat = new faredetails("Kat",23,"Female",8,550,"Delhi Express")
      kat.calculatefare()
 //----------------------------------------------------------------------

//INHERITANCE EXAMPLES
-----------------------------------------------------------------------------------------------------------------------
class employe
{  
    protected employeename :string;
    protected highestdegree :string;
    protected dateofbirth :string;
    protected experience :string;
    constructor(ename :string,degr :string,birthdate :string,IT :string)
    {
       this.employeename = ename;
       this.highestdegree = degr;
       this.dateofbirth = birthdate;
       this.experience = IT;
    }
    displayemployeedetails()
    {
        console.log(this.employeename,this.highestdegree,this.experience);
    }
}
class contactemployee extends employe
{
    private address :string;
    private residencenumber :number;
    private personalnumber :number;
    private emailid :string;
    constructor(name :string,degree :string,dob :string,it :string,addres :string,homenumber :number,phonenumber :number,email :string)
    {
        super(name,degree,dob,it);
        this.address = addres;
        this.residencenumber = homenumber;
        this.personalnumber = phonenumber;
        this.emailid = email;
    }
    displayemployeecontactdetails()
    {
        console.log(this.address,this.personalnumber,this.emailid);
    }
}
let alexandra = new contactemployee("Jai venkateshwara","B.tech","2/6/1988","1 years","Jantha colony,dodakannali",98262871827,98822538299,"venkatesh@gmail.com");
    alexandra.displayemployeedetails();
    alexandra.displayemployeecontactdetails();
//---------------------------------------------------------------------------------------------------------------------

class employ
{
    
    protected firstname :string;
    protected lastname :string;
    protected organization :string;
    protected jobrole :string;
    private contactnumber :number;
    private location :string;
    constructor(empfname :string,emplname :string,empcomp :string,designation :string,contactnumb :number,location :string)
    {
      this.firstname = empfname;
      this.lastname = emplname;
      this.organization = empcomp;
      this.jobrole = designation;
      this.contactnumber = contactnumb;
      this.location = location;
    }
}
class payslip extends employ
{   private grosssalary :number;
    private basic :number;
    private hra :number;
    private emplpf :number;
    constructor(fname :string,lname :string,comp :string,desig :string,contact :number,location :string,gross :number)
    {
      super(fname,lname,comp,desig,contact,location);
      this.grosssalary = gross;
    }
    calculatepayslip()
    {
         this.basic = (40 * this.grosssalary)/100;
         this.hra = (40 * this.basic)/100;
         this.emplpf = (12 * this.basic)/100;
    }
    displaypayslip()
    {
      console.log("First Name :"+ this.firstname,"Last Name :"+this.lastname+"Basic :"+this.basic+"HRA :"+this.hra+"EmplPF :"+this.emplpf);
    }
}
let aishley = new payslip("shomya","charan","Intimetec","Trainee",8773892739,"Bangalore",70000);
   aishley.calculatepayslip();
    aishley.displaypayslip();
//--------------------------------------------------------------------------------------------------------------------------------------------------------
class employee
{   protected employeefirstname :string;
    protected employeelastname :string;
    protected organization :string;
    private companylocation :string;
    private jobrole :string;
    constructor(efname :string,elname :string,ecompany :string,elocation :string,designation :string)
    {
        this.employeefirstname = efname;
        this.employeelastname = elname;
        this.organization = ecompany;
        this.companylocation = elocation;
        this.jobrole = designation;
    }
}
class emi extends employee
{   private loanamount :number;
    private rateofinterest :number;
    private duration :number;
    private emival :number;
    constructor(fname :string,lname :string,company :string,location :string,desig :string,loan :number,rate :number,time :number)
    {
        super(fname,lname,company,location,desig);
        this.loanamount = loan;
        this.rateofinterest = rate;
        this.duration = time;
    }
    calculateemi()
    {
        this.emival = this.loanamount * this.rateofinterest * (Math.pow(1+this.rateofinterest,this.duration))/(((Math.pow(1+this.rateofinterest,this.duration))-1));
    }
    displaydetails()
    {
        console.log("First Name :"+this.employeefirstname+"Last Name :"+this.employeelastname,"EMI :"+this.emival);
    }
}
let brianna = new emi("shomya","charan","Intimetec","Bangalore","Trainee",5000000,10.5,240);
    brianna.calculateemi();
    brianna.displaydetails();
//--------------------------------------------------------------------------------------------------------------------------------------------------
class employeee
{   
    protected employeefirstname :string;
    protected employeelastname : string;
    private contactnumber : number;
    protected loantype :string;
    protected loanamount :number;
    constructor(efname :string,elname :string,contactnumb :number,loanty :string,lamount :number)
    {
      this.employeefirstname = efname;
      this.employeelastname = elname;
      this.contactnumber = contactnumb;
      this.loantype = loanty;
      this.loanamount = lamount;
    }
}
class emii extends employeee
{
    private rateofinterest :number;
    private loantenure :number;
    emival :number;
    constructor(fname :string,lname :string,contact :number,loan :string,amount :number)
    {
      super(fname,lname,contact,loan,amount);
    }
    calculateemi() : number
    {  
        if(this.loantype == "Home Loan")
        {
          this.rateofinterest = 10.5;
          this.loantenure = 240;
          this.emival = this.loanamount * this.rateofinterest * (Math.pow(1+this.rateofinterest,this.loantenure))/(((Math.pow(1+this.rateofinterest,this.loantenure))-1));
          return this.emival;
        } 
        else if(this.loantype == "Personal Loan")
        {
          this.rateofinterest = 17.5;
          this.loantenure = 36;
          this.emival = this.loanamount * this.rateofinterest * (Math.pow(1+this.rateofinterest,this.loantenure))/(((Math.pow(1+this.rateofinterest,this.loantenure))-1));
          return this.emival;
        }
        else
        {
          return 0;
        }
    }

}
let bailey = new emii("shomya","charan",8394929399,"Home Loan",5000000);
   var equatedmonthlyinstallment :number = bailey.calculateemi();
   if(equatedmonthlyinstallment != 0)
   {
       console.log("Equated Monthly Installment :"+ equatedmonthlyinstallment);
   }
   else
   {
       console.log("No schemes available");
   }
let mary = new emii("karan","sharma",7487382929,"Personal Loan",7980000);
     var equatedmonthlyinstallment :number = mary.calculateemi();
   if(equatedmonthlyinstallment != 0)
   {
       console.log("Equated Monthly Installment :"+ equatedmonthlyinstallment);
   }
   else
   {
       console.log("No schemes available");
   }
//---------------------------------------------------------------------------------------------------------------------
class driverdetails
{
    private driverfirstname :string;
    private driverlastname :string;
    private drivermiddlename :string;
    private jobprofile :string;
    private dateofbirth :string;
    private stateofbirth :string;
    constructor(lastname :string,firstname :string,middlename :string,jobrole :string,birthdate :string,birthstate :string)
    {
      this.driverlastname = lastname;
      this.driverfirstname = firstname;
      this.drivermiddlename = middlename;
      this.jobprofile = jobrole;
      this.dateofbirth = birthdate;
      this.stateofbirth = birthstate;
    }
    showdriverdetails()
    {
      console.log("Last Name :"+this.driverlastname+"First Name :"+this.driverlastname+"Middle Name :"+this.drivermiddlename);
    }
}
class licensedetails extends driverdetails
{
    private licensenumber :string;
    private licensestate :string;
    private licensecountry :string;

    constructor(lname :string,fname :string,mname :string,designation :string,dob :string,birth :string,licnumber :string,licstate :string,liccountry :string)
    {
    super(lname,fname,mname,designation,dob,birth);
    this.licensenumber = licnumber;
    this.licensestate = licstate;
    this.licensecountry = liccountry;

    }
    showlicensedetails()
    {
     console.log("License Number :"+this.licensenumber+"License State :"+this.licensestate);
    }
}
let athena = new licensedetails("Kumar","Pavan","Bijjavaram","software engineer","12-07-1992","rajampet","ka502012632689","karnataka","India");
   athena.showdriverdetails();
   athena.showlicensedetails();
//---------------------------------------------------------------------------------------------------------------------------------------------
class onlineshopping
{  
    protected customerfirstname :string;
    protected customerusername :string;
    protected signuppassword :string;
    protected signupconfirmpassword :string;
    protected emailid :string;
    private customercontactnumber :number;
    private location :string;
    constructor(fname :string,username :string,password :string,confirmpassword :string,email :string,contactnumber :number,location :string)
    {
      this.customerfirstname = fname;
      this.customerusername = username;
      this.signuppassword = password;
      this.signupconfirmpassword = confirmpassword;
      this.emailid = email;
      this.customercontactnumber = contactnumber;
      this.location = location;
    }
    signuppasswordvalidation(): number
    {
        if(this.signuppassword == this.signupconfirmpassword)
        {
            return 1;
        }
        else
        {
            return 0;
        }
    }
}
class shipping extends onlineshopping
{
    private productbrand :string;
    private productcolour :string;
    private material :string;
    private occassion :string;
    private productsize :string;
    private gender :string;
    private loginusername :string;
    private loginpassword :string;
    private expecteddelivery :string;
    private returnpolicy :string;
    constructor(name :string,uname :string,pwd :string,cpwd :string,email :string,contactnumber :number,location :string)
    {
       super(name,uname,pwd,cpwd,email,contactnumber,location);
    }
    login(loginuname :string, loginpwd :string): number
    {
       this.loginusername = loginuname;
       this.loginpassword = loginpwd;
       if(this.loginpassword == this.signuppassword)
       {
           return 1;
       }
       else
       {
           return 0;
       }
    }
    productdetails(brand :string,colour :string,fabric :string,occassion :string,size :string,gender :string)
    {   
        this.productbrand = brand;
        this.productcolour = colour;
        this.material = fabric;
        this.occassion = occassion;
        this.productsize = size;
        this.gender = gender;
      
    }
    showproductdetails()
    {
        console.log("Brand :"+this.productbrand+"Material :"+this.material+"Size :"+this.productsize);
    }
    shippingdetails(delivery :string,returnpol :string)
    {
      this.expecteddelivery = delivery;
      this.returnpolicy = returnpol;
    }
    showshippingdetails()
    {
        console.log("Expected Delivery :",this.expecteddelivery);
        console.log("Return Policy :"+this.returnpolicy);
    }
}
let andrea = new shipping("shomya","shomya@123","balu","balu","shomya@gmail.com",9824367268,"Bangalore");
   var check :number = andrea.signuppasswordvalidation();
   if(check == 1)
   {
       console.log("Signed Up successfully");
      var logincheck :number = andrea.login("shomya@123","balu");
       if(logincheck == 1)
       {
           console.log("Logged in successfully");
           andrea.productdetails("scott inernational","black","cotton","casual","s","Men");
           andrea.showproductdetails();
           andrea.shippingdetails("Expected delivery 9 days","Return within 15 days of product delivery");
           andrea.showshippingdetails();
       }
       else
       {
           console.log("Invalid password");
       }
   }
   else
   {
       console.log("Password and confirm password doesnot match");
   }
  
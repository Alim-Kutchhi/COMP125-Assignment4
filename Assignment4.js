function FirstName()
{
    var fname = document.forms["form"]["txtFirst"].value;

    if(fname == "")
    {
       alert("First Name is required");  
       return false;  
    }
    else
    {
    return true;
    }

}

function LastName()
{
    var lname = document.forms["form"]["txtLast"].value;

    if(lname == "")
    {
       alert("Last Name is required");  
       return false;  
    }
    else
    {
    return true;
    }

}

function Address()
{
    var address = document.forms["form"]["txtAdd"].value;

    if(address == "")
    {
       alert("Address is required");  
       return false;  
    }
    else
    {
    return true;
    }
}

function City()
{
    var city = document.forms["form"]["txtCity"].value;

    if(city == "")
    {
       alert("City is required");  
       return false;  
    }
    else
    {
    return true;
    }
}

function PostalCode()
{
    var postalCode = document.forms["form"]["txtPC"].value;

    

    if(postalCode == "")
    {
       alert("Postal Code is required");  
       return false;  
    }

    var validPC = /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/;

    if(!postalCode.match(validPC))
    {
        alert("Invalid Postal Code entry (Must be Canadian format)");
        return false;
    }
    else
    {
    return true;
    }
}

function ProvinceValues()
{
    var province = document.forms["form"]["txtPro"].value;

    var initials = ["ON","QC","ON","MN","SK","AB","BC"];
    
    
    if(province == "")
    {
        alert("Province field is required");
        return false;
    }
    if(!initials.includes(province))
    {
        alert("Invalid initials for Province");  
        return false;
    }
    else
    {
    return true;
    }
}

function Age()
{
    var age = document.forms["form"]["numAge"].value;

    if(age == "")
    {
       alert("Age is required");  
       return false;  
    }

    if(age < 18)
    {
        alert("Age is lower than the requirement (Must be 18 or older to register");
        return false;
    }
    else
    {
    return true;
    }
}

function VerifyAndConfirmPassword() 
{  
    var pw = document.forms["form"]["passPass"].value;
    var pwC = document.forms["form"]["passCPass"].value;

    if(pw == "") 
    {  
       alert("Password field is required");  
       return false;  
    }
   
    if(pw.length < 6) 
    {  
       alert("Password length must be atleast 6 characters");  
       return false
    }

    var validPass =/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/;;

    if(!pw.match(validPass))
    {
        alert("Password requires at least one capital and lowercase letter , one number, and one special character")
        return false;
    }

    if(pwC == "") 
    {  
        alert("Confirm Password field is required");  
        return false;  
    }

    if(pw != pwC)
    {
      alert("Passwords do not match");
      return false;
    }

    else
    {
    return true;
    }
} 


function Email()
{
    var email = document.forms["form"]["txtEmail"].value;
    var validEmail = /.+\@.+\..+/;

    if(email == "")
    {
       alert("Email is required");  
       return false;  
    }

    if(!email.match(validEmail))
    {
    alert("Invalid email address");    
    return false;
    }

    else
    {
    return true;
    }



}

function Confirmation()
{
    if(FirstName() && LastName() && Address() && City() && PostalCode() && ProvinceValues() && Age() && VerifyAndConfirmPassword()  && Email())
    {
        alert("Sucessfully submitted the form.");
    }
}


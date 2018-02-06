

function ValidateForm()
{
//Creating field variables 
    var name = document.ContactForm.Name;
    var email = document.ContactForm.Email;
    var phone = document.ContactForm.Telephone;
    var nocall = document.ContactForm.DoNotCall;
    var what = document.ContactForm.Subject;
    var comment = document.ContactForm.Comment;
//Checking if name field is valid(if it's empty- open alert window )
    if (name.value == "")
    {
        window.alert("Please enter your name.");
        name.focus();
        return false;
    }
//Checking if email field is valid(if it's empty or doesn't contains "@", "."- open alert window)  
    if (email.value == "")
    {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }
    if (email.value.indexOf("@") < 0)
    {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }
    if (email.value.indexOf(".") < 0)
    {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }
//Checking if phone field is empty
    if ((nocall.checked == false) && (phone.value == ""))
    {
        window.alert("Please enter your telephone number.");
        phone.focus();
        return false;
    }
//Checking if user has selected item from dropping list "What we can help you with?"
    if (what.selectedIndex < 1)
    {
        alert("Please tell us how we can help you.");
        what.focus();
        return false;
    }
//Checking if comment field is valid(if it's empty- open alert window)  
    if (comment.value == "")
    {
        window.alert("Please provide a detailed description or comment.");
        comment.focus();
        return false;
    }
    return true;
}
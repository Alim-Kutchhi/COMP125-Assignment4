const form = document.forms["form"];
function isFilled()
{
  let ret = true; //return value;
  // check every fields in the form
  for(let i = 0; i < form.length; i++)
  {
    const id = form[i].name || form[i].id;
    if (!id || id == "passCPass")
      continue;

    const field = form[id],
          value = field.value;

    let r = true,
        msg = "";

    switch(id)
    {
      case "txtPro":
        r = ["ON" , "QC" , "ON" , "MN" , "SK" , "AB" , "BC"].includes(value.toUpperCase());
        if (!r)
          msg = "Invalid initials for Province";

        break;

      case "numAge":
        r = value > 12;
        if (!r)
          msg = "Age is lower than the requirement (Must be 13 or older to register";

        break;

      case "passPass":
        r = value.length > 5;
        if (!r)
          msg = "Password length must be atleast 6 characters";

        const escape = /[-\/\\^$*+?.()|[\]{}]/g,
              specialCharsAllow = "~`!@#$%^&*()-_+=", //list of required characters
              specialCharsDisallow = "[]\{}|;':\",./<>?", //list of not allowed characters
              specialCharsGood = value.match(new RegExp("[" + specialCharsAllow.replace(escape, '\\$&') + "]"));

        if (!specialCharsGood)
          msg += (msg ? "\n" : "") + `Required special characters ${specialCharsAllow}`;

        const specialCharsBad = value.match(new RegExp("[" + specialCharsDisallow.replace(escape, '\\$&') + "]"));
        if (specialCharsBad)
          msg += (msg ? "\n" : "") + `Not allowed ${specialCharsDisallow}`;

        r &= specialCharsGood ? true : false;
        r &= specialCharsBad ? false : true;

        const cr = value == form.passCPass.value;
        r &= cr;
        form.passCPass.classList.toggle("error", !cr); //set/reset error class on passCPass
        if (cr)
          form.passCPass.removeAttribute("title");
        else
        {
          msg += (msg ? "\n" : "") +"Passwords do not match"
          form.passCPass.setAttribute("title", msg);
        }
        break;
    }
    field.classList.toggle("error", !r); //set/reset error class on current field

    if (msg)
      field.setAttribute("title", msg); //add tooltip
    else
      field.removeAttribute("title");

    ret &= r; //combine total return value with current using bitwise AND
  }
  return ret ? true : false;
}


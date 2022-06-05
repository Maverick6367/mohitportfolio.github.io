

// ..................................................................................................
validation = () => {
  let fName = document.getElementById("fName").value;
  let lName = document.getElementById("lName").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let pass = document.getElementById("pass").value;
  let cpass = document.getElementById("cpass").value;

  let fNameErr = document.getElementById("fNameErr");
  let lNameErr = document.getElementById("lNameErr");
  let emailErr = document.getElementById("emailErr");
  let phoneErr = document.getElementById("phoneErr");
  let passErr = document.getElementById("passErr");
  let cPassErr = document.getElementById("cPassErr");

  //   First Name.............................................................................................
  if (fName == "") {
    // fNameErr.innerHTML = `**name can't be empty`;
    document.getElementById("fName").style.borderColor = "red";
    return false;
  } else {
    fNameErr.innerHTML = ``;
    document.getElementById("fName").style.borderColor = "green";
  }
  // FirsT Name should not be number
  if (!isNaN(fName)) {
    // fNameErr.innerHTML = `**name can't be in numbers`;
    document.getElementById("fName").style.borderColor = "red";
    return false;
  } else {
    fNameErr.innerHTML = ``;
    document.getElementById("fName").style.borderColor = "green";
  }
  // First name length checkup
  if (fName.length <= 2 || fName.length > 20) {
    // fNameErr.innerHTML = `**enter valid length`;
    document.getElementById("fName").style.borderColor = "red";
    return false;
  } else {
    fNameErr.innerHTML = ``;
    document.getElementById("fName").style.borderColor = "green";
  }

  //   Last name.............................................................................................
  if (lName == "") {
    // lNameErr.innerHTML = `**name can't be empty`;
    document.getElementById("lName").style.borderColor = "red";
    return false;
  } else {
    lNameErr.innerHTML = ``;
    document.getElementById("lName").style.borderColor = "green";
  }
  //   Last name can't be number
  if (!isNaN(lName)) {
    // lNameErr.innerHTML = `**name can't be in numbers`;
    document.getElementById("lName").style.borderColor = "red";
    return false;
  } else {
    lNameErr.innerHTML = ``;
    document.getElementById("lName").style.borderColor = "green";
  }
  // last name length checkup

  if (lName.length <= 2 || lName.length > 20) {
    // lNameErr.innerHTML = `**enter valid length`;
    document.getElementById("lName").style.borderColor = "red";
    return false;
  } else {
    lNameErr.innerHTML = ``;
    document.getElementById("lName").style.borderColor = "green";
  }

  //   Email.............................................................................................
  if (email == "") {
    // emailErr.innerHTML = `**email can't be empty`;
    document.getElementById("email").style.borderColor = "red";
    return false;
  } else {
    emailErr.innerHTML = ``;
    document.getElementById("email").style.borderColor = "green";
  }
  //checking thier is some characters before @ --> automatically checked by HTML
  // Checking if thier are more than 2 or 3 characters after .

  if (
    email.charAt(email.length - 4) != "." &&
    email.charAt(email.length - 3) != "."
  ) {
    // emailErr.innerHTML = `**.(dot) invalid position`;
    document.getElementById("email").style.borderColor = "red";
    return false;
  } else {
    emailErr.innerHTML = ``;
    document.getElementById("email").style.borderColor = "green";
  }

  //   Phone.............................................................................................
  if (phone == "") {
    // phoneErr.innerHTML = `**phone can't be empty`;
    document.getElementById("phone").style.borderColor = "red";
    return false;
  } else {
    phoneErr.innerHTML = ``;
    document.getElementById("phone").style.borderColor = "green";
  }
  //   Making sure Phone is only is numbers

  if (isNaN(phone)) {
    // phoneErr.innerHTML = `**enter valid phone on.`;
    document.getElementById("phone").style.borderColor = "red";
    return false;
  } else {
    phoneErr.innerHTML = ``;
    document.getElementById("phone").style.borderColor = "green";
  }
  // Checking the length of phone number according to india
  if (phone.length !== 10) {
    // phoneErr.innerHTML = `**enter valid phone no`;
    document.getElementById("phone").style.borderColor = "red";
    return false;
  } else {
    phoneErr.innerHTML = ``;
    document.getElementById("phone").style.borderColor = "green";
  }

  //   Password.............................................................................................
  if (pass == "") {
    // passErr.innerHTML = `**pass can't be empty`;
    document.getElementById("pass").style.borderColor = "red";
    return false;
  } else {
    passErr.innerHTML = ``;
    document.getElementById("pass").style.borderColor = "green";
  }
  //   Password length

  if (pass.length < 8) {
    // passErr.innerHTML = `**enter min 8 characters`;
    document.getElementById("pass").style.borderColor = "red";
    return false;
  } else {
    passErr.innerHTML = ``;
    document.getElementById("pass").style.borderColor = "green";
  }
  //   Confirm Password.............................................................................................
  if (cpass == "") {
    // cPassErr.innerHTML = `**pass can't be empty`;
    document.getElementById("cpass").style.borderColor = "red";
    return false;
  } else {
    cPassErr.innerHTML = ``;
    document.getElementById("cpass").style.borderColor = "green";
  }
  //   Confirm password (confirm pass)
  if (cpass != pass) {
    // cPassErr.innerHTML = `**password does not match`;
    document.getElementById("cpass").style.borderColor = "red";
    return false;
  } else {
    cPassErr.innerHTML = ``;
    document.getElementById("cpass").style.borderColor = "green";
  }

  // let resultFinal = document.getElementById('heading').value;
  // resultFinal.innerHTML = ` Form Submmited`;

  return true;
};

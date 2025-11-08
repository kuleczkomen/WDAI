function validateForm () {
   let emailInput = document.forms["myForm"]["email"].value;
   let msgInput = document.forms["myForm"]["msg"].value;

   if(emailInput === "") {
      alert("Pole e-mail nie może być puste");
      return false;
   }
   if(msgInput === "") {
      alert("Wiadomość nie może być pusta");
      return false;
   }
   if(!emailInput.includes("@")) {
      alert("Nieprawidłowy adres email");
      return false;
   }

   alert("Dziękujemy za przesłanie wiadomości!");

   return true;
}

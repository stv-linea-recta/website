function formSubmit(){

  var email = document.querySelector('input[name="email"]').value;
  var asso = "";
    if (document.querySelector('input[name="association"]:checked') !== null) {asso = document.querySelector('input[name="association"]:checked').value};
  var name = document.querySelector('input[name=naam]').value;
  var food = "";
    if (document.querySelector('input[name="food"]:checked') !== null) {food = document.querySelector('input[name="food"]:checked').value};
  var drink = "";
    if (document.querySelector('input[name="drink"]:checked') !== null) {drink = document.querySelector('input[name="drink"]:checked').value};
  var alerg = document.querySelector('input[name=alergie]').value;
  var conf = document.querySelector('input[name=conform]').checked;
  var loop = "No,+I+will+not+be+running";
  if (document.querySelector('input[name="loper"]').checked == true)  {
    loop = "Yes,+I+will+run"};
  

  if (email == "" || asso == "" || name == "" || food == "" || drink == "" || !conf) {
    if (email == "") {
      document.getElementById("emailTab").classList.add("missing")    
    }
    if (asso == "") {
      document.getElementById("assoTab").classList.add("missing")    
    }
    if (name == "") {
      document.getElementById("nameTab").classList.add("missing")    
    }
    if (food == "") {
      document.getElementById("foodTab").classList.add("missing")    
    }
    if (drink == "") {
      document.getElementById("drinkTab").classList.add("missing")    
    }
    if (!conf) {
      document.getElementById("confTab").classList.add("missing")    
    }
    return
  }

  var formBody = "&entry.914717106=" + email +
      "&entry.700889170=" + asso+
      "&entry.1409203078="+ name+
      "&entry.1617134631="+ food+
      "&entry.1681928436="+ drink+
      "&entry.1528867571="+ alerg+
      "&entry.1167124418="+ loop;


  var url ="https://docs.google.com/forms/d/e/1FAIpQLSfZF2U9VWiL7XuHDCu-GK5wySX13FeSKIbqycMEShL_9--lww/formResponse?usp=pp_url"+ formBody;

  document.getElementById("success").style.display = "inline";
  document.getElementById("form").style.display = "none";
  fetch(url);
}
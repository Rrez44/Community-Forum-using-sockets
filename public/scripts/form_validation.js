function openForm() {
    document.getElementById("bigDiv").style.display = "block";
    $('#yourCart').css('z-index','10000');
    $('#yourCart').css('background','white');
    $('body').css('overflow', 'hidden');
    $(".section1").css('display','none');

}

function closeForm() {
  document.getElementById("bigDiv").style.display = "none";
  $('body').css('overflow', '');
  $(".section1").css('display','');
  $('#yourCart').css('z-index','');
  $('#yourCart').css('background','');
      }


function changeBackground(){ 
    var currentTime = new Date().getHours();
    if (7 <= currentTime && currentTime < 20) {
        document.body.style.backgroundColor = "#212121";
        document.body.style.color="white";
    }
    else {
        document.body.style.backgroundColor = "#212121";
    }
    
}
var submit_form = new Array() ;
function validation(){
    email_validation();
    name_surname_adress_city_validation();
    postalCode_validation();
    pnumber_validation();
    for(var i=0;i < submit_form.length ;i++){
        if (submit_form[i]==false)
            return false;
    }
    return true;
}
function email_validation(){
    const email_pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    const email = document.getElementById("email").value;
    if(email.match(email_pattern)){
        document.getElementById("email").setAttribute("style","border:1px green solid ");
        submit_form[0] = true;}
    else{
        document.getElementById("email").setAttribute("style","border:1px red solid ");
        submit_form[0] = false;}
}
function name_surname_adress_city_validation(){
    var is_valid = new Array();

    const name_pattern = /^([a-zA-Z]){2,30}$/;
    const adress_pattern = /^([a-zA-Z ]){2,30}$/;
    const name = document.getElementById("name").value;

    if(name.match(name_pattern)){
        document.getElementById("name").setAttribute("style","border:1px green solid ");
        is_valid[0] = true;}
    else {
        document.getElementById("name").setAttribute("style","border:1px red solid ");
        is_valid[0] = false;}

    const surname = document.getElementById("surname").value;
    if(surname.match(name_pattern)){
        document.getElementById("surname").setAttribute("style","border:1px green solid ");
        is_valid[1] = true;}
    else {
        document.getElementById("surname").setAttribute("style","border:1px red solid ");
        is_valid[1] = false;}

    const adress = document.getElementById("adress").value;
    if(adress.match(adress_pattern)){
        document.getElementById("adress").setAttribute("style","border:1px green solid ");
        is_valid[2]=true;
    }
    else {
        document.getElementById("adress").setAttribute("style","border:1px red solid ");
        is_valid[2]=false;
    }

    const city = document.getElementById("_city").value;
    if(city.match(adress_pattern)){
        document.getElementById("_city").setAttribute("style","border:1px green solid ");
        is_valid[3]=true;
    }
    else {
        document.getElementById("_city").setAttribute("style","border:1px red solid ");
        is_valid[3]=false;
    }

   var i = 0 ;
    while(i < is_valid.length){
        if (is_valid[i] == false ){
            submit_form[1] = false;
            break;
        }
        else 
            submit_form[1] = true;
        i++;
    }
    
}
function postalCode_validation(){
    const pcode = document.getElementById("pcode").value;
    submit_form[2] = true;
    if(isNaN(pcode)){
        document.getElementById("pcode").setAttribute("style","border:1px red solid ");
        submit_form[2] = false;
    }
    else if (pcode.length<4 || pcode.length>5){
        document.getElementById("pcode").setAttribute("style","border:1px red solid ");
        submit_form[2] = false;
    }
    else if((/\./).test(pcode)){
        document.getElementById("pcode").setAttribute("style","border:1px red solid ");
        submit_form[2] = false;
    }
    else{
        document.getElementById("pcode").setAttribute("style","border:1px green solid ");
        submit_form[2] = true;
    }

}
function pnumber_validation(){
const select = document.getElementById("mySelect").value;

switch(select){
    case "" : 
        document.getElementById("phone").setAttribute("style","border:1px red solid "); 
        submit_form[3] = false;
        break;
    case "Albania" : 
        var phonenumber = document.getElementById("phone").value;
        var alb_pattern = /^\+?\(?355\)?[-.\s]?\d{2}[-.\s]?\d{3}[-.\s]?\d{3}?/;
        if(alb_pattern.exec(phonenumber)){
            document.getElementById("phone").setAttribute("style","border:1px green solid ");
            submit_form[3] = true;
        }
        else {
            document.getElementById("phone").setAttribute("style","border:1px red solid "); 
            submit_form[3] = false;
        }
        break;
    case "Kosovo" : 
        var kos_pattern = /^\+?\(?383\)?[-.\s]?\d{2}[-.\s]?\d{3}[-.\s]?\d{3}?/;
        var phonenumber = document.getElementById("phone").value;
        if(kos_pattern.exec(phonenumber)){
            document.getElementById("phone").setAttribute("style","border:1px green solid ");
            submit_form[3] = true;
        }
        else {
            document.getElementById("phone").setAttribute("style","border:1px red solid "); 
            submit_form[3] = false;
        }
        break;
    case "Montenegro" : 
        var mont_pattern = /^\+?\(?382\)?[-.\s]?\d{2}[-.\s]?\d{3}[-.\s]?\d{3}?/;
        var phonenumber = document.getElementById("phone").value;
        if(mont_pattern.exec(phonenumber)){
            document.getElementById("phone").setAttribute("style","border:1px green solid ");
            submit_form[3] = true;
        }
        else {
            document.getElementById("phone").setAttribute("style","border:1px red solid "); 
            submit_form[3] = false;
        }
        break;
    case "North Macedonia" :
        var northM_pattern = /^\+?\(?389\)?[-.\s]?\d{2}[-.\s]?\d{6}?/;
        var phonenumber = document.getElementById("phone").value;
        if(northM_pattern.exec(phonenumber)){
            document.getElementById("phone").setAttribute("style","border:1px green solid ");
            submit_form[3] = true;
        }
        else {
            document.getElementById("phone").setAttribute("style","border:1px red solid "); 
            submit_form[3] = false;
        }
        break;
    default : 
        var srb_pattern = /^\+?\(?381\)?[-.\s]?\d{2}[-.\s]?\d{3}[-.\s]?\d{2}[-.\s]?\d{2}?/;
        var phonenumber = document.getElementById("phone").value;
        if(srb_pattern.exec(phonenumber)){
            document.getElementById("phone").setAttribute("style","border:1px green solid ");
            submit_form[3] = true;
        }
        else {
            document.getElementById("phone").setAttribute("style","border:1px red solid "); 
            submit_form[3] = false;
        }
        break;
}
}
function change_placeholder(e){
    switch(e.value){
        case "" : 
            document.getElementById("phone").placeholder = "Phone number" ;
            break;
        case "Albania": 
            document.getElementById("phone").placeholder = "+355-XX-XXX-XXX" ;
            break;
        case "Kosovo": 
            document.getElementById("phone").placeholder = "+383-XX-XXX-XXX" ;
            break;
        case "Montenegro":
            document.getElementById("phone").placeholder = "+382-XX-XXX-XXX" ;
            break;
        case "North Macedonia":
            document.getElementById("phone").placeholder = "+389-XX-XXXXXX" ;
            break;
        default :
            document.getElementById("phone").placeholder = "+381-XX-XXX-XX-XX" ;
            break;
    }
}

function add (){
    let weob=document.getElementById("workex");
    let newnode=document.createElement("textarea");
    newnode.classList.add("form-control");
    newnode.classList.add("edfield");
    newnode.classList.add("mt-3");
    newnode.setAttribute("rows",3);
    newnode.setAttribute('placeholder','enter here');
    let edbottonob=document.getElementById("edbotton");
    weob.insertBefore(newnode,edbottonob);

}

function addedu (){
    let eweob=document.getElementById("educate");
    let enewnode=document.createElement("textarea");
    enewnode.classList.add("form-control");
    enewnode.classList.add("edu");
    enewnode.classList.add("mt-3");
    enewnode.setAttribute("rows",3);
    enewnode.setAttribute('placeholder','enter here');
    let edubottonob=document.getElementById("edubotton");
    eweob.insertBefore(enewnode,edubottonob);

}

function exper (){
    let exweob=document.getElementById("experid");
    let exnewnode=document.createElement("textarea");
    exnewnode.classList.add("form-control");
    exnewnode.classList.add("exp");
    exnewnode.classList.add("mt-3");
    exnewnode.setAttribute("rows",3);
    exnewnode.setAttribute('placeholder','enter here');
    let exbottonob=document.getElementById("exbotton");
    exweob.insertBefore(exnewnode,exbottonob);

}

function project (){
    let prweob=document.getElementById("proid");
    let prnewnode=document.createElement("textarea");
    prnewnode.classList.add("form-control");
    prnewnode.classList.add("pro");
    prnewnode.classList.add("mt-3");
    prnewnode.setAttribute("rows",3);
    prnewnode.setAttribute('placeholder','enter here');
    let prbottonob=document.getElementById("prbotton");
    prweob.insertBefore(prnewnode,prbottonob);

}

function hobby (){
    let howeob=document.getElementById("hoid");
    let honewnode=document.createElement("textarea");
    honewnode.classList.add("form-control");
    honewnode.classList.add("ho");
    honewnode.classList.add("mt-3");
    honewnode.setAttribute("rows",3);
    honewnode.setAttribute('placeholder','enter here');
    let hobottonob=document.getElementById("hobotton");
    howeob.insertBefore(honewnode,hobottonob);

}


function added(){
    let wridd=document.getElementById("wrid");
    let wrbotton=document.createElement("textarea");
    wrbotton.classList.add("form-control");
    wrbotton.classList.add("workfield");
    wrbotton.classList.add("mt-3");
    wrbotton.setAttribute("rows",3);
    wrbotton.setAttribute('placeholder','enter here');
    let wkbbefore=document.getElementById("wkbotton");
    wridd.insertBefore(wrbotton,wkbbefore);
}



function ad(){
    let hbbtn=document.getElementById("hobi");
    let hbbbotton=document.createElement("textarea");
    hbbbotton.classList.add("form-control");
    hbbbotton.classList.add("hobifield");
    hbbbotton.classList.add("mt-3");
    hbbbotton.setAttribute("rows",3);
    hbbbotton.setAttribute('placeholder','enter here');
    let hbbbbefore=document.getElementById("hbbotton");
    hbbtn.insertBefore(hbbbotton,hbbbbefore);
}


function genreate(){

    let number1=document.getElementById("numberinfo").value;
    let length1 = number1.length;
    let mail_character = document.getElementById("emailinfo").value;
    if(length1=="10"){
        if (mail_character.includes("@") || mail_character.includes("."))
        {
            document.getElementById("reso-gen").style.display='none';
           document.getElementById("template").style.display='block';
        }
        else{
            alert("check the entered email!")
        }
    }
    else
    {
        alert("Check the entered number!!!");
    }

   let nameinfoe = document.getElementById("nameinfo").value;
   let filll=document.getElementById("namet");
   filll.innerHTML=nameinfoe;
//    document.getElementById("name2").innerHTML=nameinfoe;
   document.getElementById("prot").innerHTML=document.getElementById("proinfo").value;
   document.getElementById("numid").innerHTML=document.getElementById("numberinfo").value;
//    document.getElementById("numtinfo").className = "fa fa-phone ";
   document.getElementById("numid").style.color="#969595";
   document.getElementById("numid").style.position="relative"
   document.getElementById("numid").style.left="1em"

   document.getElementById("emailid").innerHTML=document.getElementById("emailinfo").value;
   document.getElementById("emailid").style.color="#969595";
   document.getElementById("emailid").style.position="relative"
   document.getElementById("emailid").style.left="1em"

   document.getElementById("facebookid").innerHTML=document.getElementById("facebookinfo").value;
   document.getElementById("facebookid").style.color="#969595";
   document.getElementById("facebookid").style.position="relative"
   document.getElementById("facebookid").style.left="1em"

   document.getElementById("instagramid").innerHTML=document.getElementById("Instagraminfo").value;
   document.getElementById("instagramid").style.color="#969595";
   document.getElementById("instagramid").style.position="relative"
   document.getElementById("instagramid").style.left="1em"

   document.getElementById("linkedid").innerHTML=document.getElementById("LinkedIninfo").value;
   document.getElementById("linkedid").style.color="#969595";
   document.getElementById("linkedid").style.position="relative"
   document.getElementById("linkedid").style.left="1em"


   



  document.getElementById("address").innerHTML=document.getElementById("Addressinfo").value;
//    document.getElementById("addressid").style.color="#969595";
//    document.getElementById("addressid").style.position="relative"
//    document.getElementById("addressid").style.left="1em"

let educat=document.getElementsByClassName("edu");
let str3="";
for(let e of educat){
 str3= str3+ `<li>${e.value} </li>`;
}
document.getElementById('education').innerHTML=str3;

let exucat=document.getElementsByClassName("exp");
let str4="";
for(let e of exucat){   
 str4= str4+ `<li>${e.value} </li>`;
}
document.getElementById('experience').innerHTML=str4;

let prcat=document.getElementsByClassName("pro");
let str5="";
for(let e of prcat){   
 str5= str5+ `<li>${e.value} </li>`;
}
document.getElementById('projects').innerHTML=str5;


let hocat=document.getElementsByClassName("ho");
let str6="";
for(let e of hocat){   
 str6= str6+ `↷ <p>${e.value} </p>`;
}
document.getElementById('hobbies').innerHTML=str6;



let work=document.getElementsByClassName("workfield");
let str="";
for(let e of work){
 str= str+ `<li>${e.value} </li>`;
}
document.getElementById('skills').innerHTML=str;

let educa=document.getElementsByClassName("edfield");
let str1="";
for(let e of educa){
 str1= str1+ `<li>${e.value} </li>`;
}
document.getElementById('award').innerHTML=str1;

let hobi=document.getElementsByClassName("hobifield");
   let str2="";
   for(let e of hobi){
    
    str2= str2+ `<li>${e.value} </li>`;
   }
   document.getElementById('language').innerHTML=str2;

   



 
//    document.getElementById("objectt").innerHTML=document.getElementById("objecteid").value;
//    document.getElementById("p1").innerHTML=document.getElementById("procteid").value;

  

   
   

   let file=document.getElementById("imgfield").files[0];
   let reader=new FileReader();

   reader.readAsDataURL(file);

   reader.onloadend=function(){
    document.getElementById("myimag").src=reader.result;
   };

  

}
function printr(){
    let printButton=document.getElementById("color");
    printButton.style.visibility = 'hidden';
    window.print();
    printButton.style.visibility = 'visible';
}

// // function myFunction() {
//     setAttribute(" hidden-print");
//     window.print();
// }
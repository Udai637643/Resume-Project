
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
function genreate(){
    let number1=document.getElementById("contactinfo").value;
    let length1 = number1.length;
    let mail_character = document.getElementById("emailinfo").value;
    if(length1=="10"){
        if (mail_character.includes("@") || mail_character.includes("."))
        {
            document.getElementById("reso-gen").style.display='none';
            document.getElementById("template").style.display='block';
        }
        else{
            alert("Check the entered Email!");
        }
    }
    else
    {
        alert("Check the entered number!!!");
    }
    console.log('hello');
   let nameinfoe = document.getElementById("nameinfo").value;
   let filll=document.getElementById("namet");
   filll.innerHTML=nameinfoe;
   document.getElementById("name2").innerHTML=nameinfoe;
   document.getElementById("contt").innerHTML=document.getElementById("contactinfo").value;
   document.getElementById("addret").innerHTML=document.getElementById("Addressinfo").value;
   document.getElementById("fbt").innerHTML=document.getElementById("facebookinfo").value;
   document.getElementById("email").innerHTML=document.getElementById("emailinfo").value;
   document.getElementById("linkedt").innerHTML=document.getElementById("LinkedIninfo").value;
   document.getElementById("objectt").innerHTML=document.getElementById("objecteid").value;

   let work=document.getElementsByClassName("workfield");
   let str="";
   for(let e of work){
    str= str+ `<li>${e.value} </li>`;
   }
   document.getElementById('workid').innerHTML=str;

   let educa=document.getElementsByClassName("edfield");
   let str1="";
   for(let e of educa){
    str1= str1+ `<li>${e.value} </li>`;
   }
   document.getElementById('edid').innerHTML=str1;

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
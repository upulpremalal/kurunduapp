
function getservices(){
    window.open("services.html" , target="main")
}
function getinfo(){
    window.open("info.html" , target="main")
}
function gethome(){
    window.open("home.html" , target="main")
}
function getcontacts(){
    window.open("contacts.html" , target="main")
}
function getabout(){
    window.open("about.html" , target="main")
}
function alvis(){
    al.style.visibility="hidden";
   
}

function mor(){
   box1.src="1b.gif";
   box2.src="2b.gif";
   box3.src="3b.gif";
   box4.src="4b.gif";
   box5.src="5b.gif";
   box6.src="6b.gif";
   box7.src="7b.gif";
   box8.src="8b.gif";
   box9.src="9b.gif";
   box10.src="10b.gif";
   box11.src="11b.gif";
   box12.src="12b.gif";
   box13.src="13b.gif";
}

function mov1(){
    box1.src="a1.gif";
}

function mov2(){
    box2.src="a2.gif";
}

function mov3(){
    box3.src="a3.gif";
}

function mov4(){
    box4.src="a4.gif";
}

function mov5(){
    box5.src="a5.gif";
}

function mov6(){
    box6.src="a6.gif";
}

function mov7(){
    box7.src="a7.gif";
}

function mov8(){
    box8.src="a8.gif";
}

function mov9(){
    box9.src="a9.gif";
}

function mov10(){
    box10.src="a10.gif";
}

function mov11(){
    box11.src="a11.gif";
}

function mov12(){
    box12.src="a12.gif";
}

function mov13(){
    box13.src="a13.gif";
}



var a = 0;

function gofront(){
    a +=1;
    //alert(a);

    if(a>1 && a<13){al.style.visibility="visible";}else{al.style.visibility="hidden";}
    if(a==1){box1.src="a1.gif";box2.innerHTML="ඉඩමක් තෝරා ගැනීම";}
    if(a==2){box1.src="a2.gif";box2.innerHTML="බිම සකස් කිරීම";}
    if(a==3){box1.src="a3.gif";box2.innerHTML="කුරුඳු තවානක්";}
    if(a==4){box1.src="a4.gif";box2.innerHTML="පැළ සිටවීම";}
    if(a==5){box1.src="a5.gif";box2.innerHTML="කුරුඳු පැළ";}
    if(a==6){box1.src="a6.gif";box2.innerHTML="කුරුඳු වගාව නඩත්තු කිරීම";}
    if(a==7){box1.src="a7.gif";box2.innerHTML="වැඩුණු කුරුඳු ගස්";}
    if(a==8){box1.src="a8.gif";box2.innerHTML="කුරුඳු කැපීම";}
    if(a==9){box1.src="a9.gif";box2.innerHTML="කුරුඳු තැලීම";}
    if(a==10){box1.src="a10.gif";box2.innerHTML="කුරුඳු කූරු සකස් කිරීම";}
    if(a==11){box1.src="a11.gif";box2.innerHTML="කුරුඳු මිටි";}
    if(a==12){box1.src="a12.gif";box2.innerHTML="කුරුඳු නිෂ්පාදන";}
    if(a==13){box1.src="a13.gif";box2.innerHTML="කුරුඳු තෙල්";a=0;}
       
}

function goback(){
    a -=1;
    //alert(a);
    if(a>1 && a<13){al.style.visibility="visible";}else{al.style.visibility="hidden";}
    if(a==1){box1.src="a1.gif";box2.innerHTML="ඉඩමක් තෝරා ගැනීම";}
    if(a==2){box1.src="a2.gif";box2.innerHTML="බිම සකස් කිරීම";}
    if(a==3){box1.src="a3.gif";box2.innerHTML="කුරුඳු තවානක්";}
    if(a==4){box1.src="a4.gif";box2.innerHTML="පැළ සිටවීම";}
    if(a==5){box1.src="a5.gif";box2.innerHTML="කුරුඳු පැළ";}
    if(a==6){box1.src="a6.gif";box2.innerHTML="කුරුඳු පැළ රැක බලා ගැනීම";}
    if(a==7){box1.src="a7.gif";box2.innerHTML="වැඩුණු කුරුඳු ගස්";}
    if(a==8){box1.src="a8.gif";box2.innerHTML="කුරුඳු කැපීම";}
    if(a==9){box1.src="a9.gif";box2.innerHTML="කුරුඳු තැලීම";}
    if(a==10){box1.src="a10.gif";box2.innerHTML="කුරුඳු කූරු සකස් කිරීම";}
    if(a==11){box1.src="a11.gif";box2.innerHTML="කුරුඳු මිටි";}
    if(a==12){box1.src="a12.gif";box2.innerHTML="කුරුඳු නිෂ්පාදන";}
    if(a==13){box1.src="a13.gif";box2.innerHTML="කුරුඳු තෙල්";}
    
}

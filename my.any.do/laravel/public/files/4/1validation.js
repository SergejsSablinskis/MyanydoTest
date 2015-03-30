function valid()
{
    document.getElementById('message1').style.display= "inline-block";
    var val= document.forms["postIT"]["Title"].value.length;
    var val1= document.forms["postIT"]["Title"].value;
    if(val1.match(/\W/))
    {
        document.forms["postIT"]["submit"].disabled = true;
        document.getElementById('message1').innerHTML = 'Please do not use special characters and space';
    }
    else if (val < 3)
    {
        document.forms["postIT"]["submit"].disabled = true;
        document.getElementById('message1').innerHTML = 'Title must be at least 3 characters';
    }
    else
    {
        document.getElementById('message1').style.display= "none";
        document.forms["postIT"]["submit"].disabled = false;
        document.getElementById('message1').innerHTML = "";
    }
}


function editvalid()
{
    document.getElementById('message2').style.display= "inline-block";
    var val= document.forms["Edit"]["Title"].value.length;
    var val1= document.forms["Edit"]["Title"].value;
    if(val1.match(/\W/))
    {
        document.forms["Edit"]["edit"].disabled = true;
        document.getElementById('message2').innerHTML = 'Please do not use special characters and space';
    }
    else if (val < 3)
    {
        document.forms["Edit"]["edit"].disabled = true;
        document.getElementById('message2').innerHTML = 'Title must be at least 3 characters';
    }
    else
    {
        document.getElementById('message2').style.display= "none";
        document.forms["Edit"]["edit"].disabled = false;
        document.getElementById('message2').innerHTML = "";
    }
}
var able1="";
var able2="";
var able3="";

function loginvalid()
{

    var val= document.forms["LOG"]["username"].value.length;
    var val1= document.forms["LOG"]["username"].value;
    if(val1.match(/\W/))
    {
        able1 = "false";
        document.forms["LOG"]["register"].disabled = true;
        document.getElementById('message').innerHTML = 'Please do not use special characters and space';
    }
    else if (val < 3)
    {able1 = "false";
        document.forms["LOG"]["register"].disabled = true;
        document.getElementById('message').innerHTML = 'Username must be at least 3 characters';
    }
    else
    {
 able1 = "true";
        document.getElementById('message').innerHTML = "";
        if(able1=="true" && able2=="true" && able3=="true")
        document.forms["LOG"]["register"].disabled = false;

    }
}
function passvalid()
{

    var val= document.forms["LOG"]["pass"].value.length;
    var val1= document.forms["LOG"]["pass"].value;
    if(!val1.match(/\W/))
    {
able2="false";
        document.forms["LOG"]["register"].disabled = true;
        document.getElementById('message1').innerHTML = 'Please  use special characters for safety';
    }
    else if (val < 7)
    {
        able2="false";
        document.forms["LOG"]["register"].disabled = true;
        document.getElementById('message1').innerHTML = 'Password must be at least 7 characters';
    }
    else
    {
able2="true";
        document.getElementById('message1').innerHTML = "";
        if(able1=="true" && able2=="true" && able3=="true")
        document.forms["LOG"]["register"].disabled = false;

    }
}
function check()
{

    var val= document.forms["LOG"]["checkpass"].value;
    var val1= document.forms["LOG"]["pass"].value;
    if(val1>val ||val1<val )
    {
        able3="false";
        document.forms["LOG"]["register"].disabled = true;
        document.getElementById('message2').innerHTML = "Password doesn't match!";
    }

    else
    {
        able3="true";
        document.getElementById('message2').innerHTML = "";
        if(able1=="true" && able2=="true" && able3=="true")
        document.forms["LOG"]["register"].disabled = false;

    }
}

function loginvalid1()
{

    var val= document.forms["LOG1"]["username"].value.length;
    var val1= document.forms["LOG1"]["username"].value;
    var val2 = document.forms["LOG1"]["pass"].value.length;
    var val3= document.forms["LOG1"]["pass"].value;
    var val0= document.forms["LOG1"]["checkpass"].value;
    if(val1.match(/\W/))
    {

        document.forms["LOG1"]["edit"].disabled = true;
        document.getElementById('message11').innerHTML = 'Please do not use special characters and space';
    }
    else if (val < 3)
    {
        document.forms["LOG1"]["edit"].disabled = true;
        document.getElementById('message11').innerHTML = 'Username must be at least 3 characters';
    }
    else
    {

        document.getElementById('message11').innerHTML = "";
        if(!val2 < 7 && val3.match(/\W/))

            document.forms["LOG1"]["edit"].disabled = false;

    }
}
function passvalid1()
{

    var val= document.forms["LOG1"]["username"].value.length;
    var val1= document.forms["LOG1"]["username"].value;
    var val2 = document.forms["LOG1"]["pass"].value.length;
    var val3= document.forms["LOG1"]["pass"].value;
    var val0= document.forms["LOG1"]["checkpass"].value;
    if(!val3.match(/\W/))
    {

        document.forms["LOG1"]["edit"].disabled = true;
        document.getElementById('message12').innerHTML = 'Please  use special characters for safety';
    }
    else if (val2 < 7)
    {

        document.forms["LOG1"]["edit"].disabled = true;
        document.getElementById('message12').innerHTML = 'Password must be at least 7 characters';
    }
    else
    {

        document.getElementById('message12').innerHTML = "";
        if(!val < 3 && val1.match(/\W/) && (val0>val3 ||val0<val3))
            document.forms["LOG1"]["edit"].disabled = false;

    }
}
function check1()
{
    var val= document.forms["LOG1"]["username"].value.length;
    var val1= document.forms["LOG1"]["username"].value;
    var val2 = document.forms["LOG1"]["pass"].value.length;


    var val= document.forms["LOG1"]["checkpass"].value;
    var val1= document.forms["LOG1"]["pass"].value;
    if(val1>val ||val1<val )
    {

        document.forms["LOG1"]["edit"].disabled = true;
        document.getElementById('message23').innerHTML = "Password doesn't match!";
    }

    else
    {

        document.getElementById('message23').innerHTML = "";
if(!val < 3 &&  val1.match(/\W/)  )
            document.forms["LOG1"]["edit"].disabled = false;

    }
}
function categcheck()
{

    var val= document.forms["CAT"]["newcateg"].value.length;
    var val1= document.forms["CAT"]["newcateg"].value;
     if (val < 3)
    {
        document.forms["CAT"]["category"].disabled = true;
        document.getElementById('message9').innerHTML = 'Category name must be at least 3 characters';
    }
    else
    {

        document.getElementById('message9').innerHTML = "";
        document.forms["CAT"]["category"].disabled = false;

    }
}function categcheck2()
{

    var val= document.forms["CAT"]["newcateg"].value.length;
    var val1= document.forms["CAT"]["newcateg"].value;
    if (val < 3)
    {
        document.forms["CAT"]["post"].disabled = true;
        document.getElementById('message9').innerHTML = 'Category name must be at least 3 characters';
    }
    else
    {

        document.getElementById('message9').innerHTML = "";
        document.forms["CAT"]["post"].disabled = false;

    }
}
function confirmation()
{
    if(confirm("Are you sure that you want to delete this?"))
    return true;
    else return false;



}
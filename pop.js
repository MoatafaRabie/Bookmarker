
function dod(){
    if(document.getElementById("name").value.length<3)
    {
        document.getElementById("name").focus()
        
        document.getElementById("ttt").style.display="flow-root";
       return false;
        
    }
    else{
        
        document.getElementById("ttt").style.display="none";
        document.getElementById("name").style.border=" rgb(87, 175, 109);"
        return true;
    }
}
    var bookmarkRegex=/^[A-Za-z]{3,}$/;
    var urlRegex=/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
    function valed(){
        var mos= document.getElementById("urll").value;
        if(urlRegex.test(mos))
            {
                
                return true;
                console.log("gooood");
            }
        else{
            return false;
            console.log("bad");
        }
    }
    function num(s){
        if(valed())
            {
                console.log("gooood1");
                document.getElementById("bbb").style.display="none";
            }
        else{
            document.getElementById("bbb").style.display="flow-root";
            s.focus();
            console.log("bad1");
        }

    }
 


function bas(a){
    if(valed() == true && dod() ==true)
        {
    
    var name2 =document.getElementById("name").value;
    document.getElementById("name1").innerHTML =name2;
    document.getElementById("visit").value=document.getElementById("urll").value;
    document.getElementById("indix").style.display="contents";
        }
    else{
        alert("your input is valid");
    }
}    

function openn(){
    open(document.getElementById('urll').value);
    
}
function closee(){
    document.getElementById("indix").style.display="none";
}

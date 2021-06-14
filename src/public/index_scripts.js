function prnt(){
   var cur = document.getElementById("editor");
   console.log(cur.innerHTML);
}


function sendCode() {
   var xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = ()=>{
      if(xhttp.readyState===4){
         if(xhttp.status===200)
            console.log("Output: " + xhttp.responseText);
         else
            console.log("Error: " + xhttp.responseText);

         document.getElementById("output").value = xhttp.responseText;
         document.getElementById("output").disabled = true;

         setTimeout(()=>alert("compiled and run succesfully"), 500);
      }
   }
   xhttp.open("POST", "/", true);
   xhttp.setRequestHeader("Content-type", "text/code");
   var j = document.getElementById("editor").value;
   console.log(j);
   xhttp.send(j);
}

export {prnt, sendCode};
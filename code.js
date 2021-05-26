let texts = ["I have a question about the service","I want to speak to an employee","how do you do"];

window.onload = function(){

    let x = document.getElementById("dropdown_items");
    let ans = "<ul>";
    for(let i =0; i<3;i+=1)
    {
      let t= "\""+texts[i]+"\"";
      ans+="<li onclick = \"setValue("+i+")\">"+texts[i]+"</li>";
    }

    ans+= "</ul>"

    x.innerHTML = ans;
}
function showDropDownItems() {
    let x = document.getElementById("dropdown_items");
    
    
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function setValue(index)
  {
    let i = parseInt(index);
    let x = document.getElementById("dropdown_text");
    x.innerHTML = texts[i];
    showDropDownItems()
  }
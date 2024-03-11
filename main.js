const content = document.getElementById("mthr")
const tru = document.getElementById("true")
const btn = document.getElementById("myButton")


btn.onclick = ()=>{
    content.style.display = "none"
    tru.style.display = "flex"
  setTimeout(function() {
   window.location.href = "fake.html";
  }, 8000); // 3000 تمثل تأخير لمدة 3 ثوانٍ

}


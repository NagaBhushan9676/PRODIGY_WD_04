AOS.init();
var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-content");
var sidebar = document.querySelector("#sideNav");

function openPop(tabName){

    for(tabLink of tabLinks){
        tabLink.classList.remove("active-link");
    }
    for(tabContent of tabContents){
        tabContent.classList.remove("active");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active");
}
function openNav(){
    sidebar.style.right = "0";
}
function closeNav(){
    sidebar.style.right = "-250px";
}

  const scriptURL = 'https://script.google.com/macros/s/AKfycbxpsKMuP0IgRUBliiBKNV4cSN_d0oZP_WV1zXCHPp_lXUJsqFGfVC-Gn6Kf_Q6bWHrxFA/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response =>{
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        }, 5000)
      })
      .catch(error => console.error('Error!', error.message))
  })


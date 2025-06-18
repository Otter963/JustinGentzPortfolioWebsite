/*
Reference:
Title: How to make a portfolio website using HTML CSS JS | Complete responsive website design
Author:GreatStack
Date: 2022, July 14
Availability: https://youtu.be/0YFrGy_mzjY?si=Ov4rLueFSznqQ2Tg
*/

var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");
function openTab(tabName){
    for (tabLink of tabLinks){
       tabLink.classList.remove("active-link");
    }
        for (tabContent of tabContents){
       tabContent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");
}

//for the side menu

var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}

function closemenu(){
    sidemenu.style.right = "-200px";
}

//for the contact form spreadsheet

const scriptURL = 'https://script.google.com/macros/s/AKfycbz8j1WBvwfpRsA9R0ClTcZjCXfYHplk1kZCy16WGIlf9XLqLnI144MrPt-VD990UoO3/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully!"
        setTimeout(function(){
            msg.innerHTML = ""
        }, 5000)//after 5 seconds
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
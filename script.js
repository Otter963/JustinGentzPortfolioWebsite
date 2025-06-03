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
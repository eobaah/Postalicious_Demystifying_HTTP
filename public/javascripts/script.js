// window.onload = selectTab();


function selectTab(event, reqres) {
   console.log(event)
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(reqres).style.display = "block";
    event.currentTarget.className += " active";
}

let httpVerb = document.querySelector('.http-verb').value
console.log(httpVerb)
// check where the data is
// get the data from the input fields
// construct a request object using that data

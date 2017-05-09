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

function buildRequest() {
  let httpVerb = document.querySelector('.http-verb').value
  let hostInput = document.getElementById('host-url').value
  let queryData= document.querySelectorAll('.query-data')
  let headersData= document.querySelectorAll('.headers-data')

  var jsonArr = []

  for(let x of queryData) {
    jsonArr.push(x.value)
  }
  var jsonedObj = JSON.stringify(jsonArr)
  console.log(jsonedObj)
}

// // populate with header information
// var myHeaders = new Headers();
// myHeaders.append("Content-Type", "text/plain");
// myHeaders.append("Content-Length", content.length.toString());
// myHeaders.append("X-Custom-Header", "ProcessThisImmediately");
//
//
// // populate HTTP request message body
// var myInit = { method: 'GET',
//                headers: myHeaders,
//                mode: 'cors',
//                cache: 'default' };
//
// var myRequest = new Request('flowers.jpg', myInit);
//
// fetch(myRequest).then(function(response) {
//   return response.blob();
// }).then(function(myBlob) {
//   var objectURL = URL.createObjectURL(myBlob);
//   myImage.src = objectURL;
// });

// check where the data is
// get the data from the input fields
// construct a request object using that data

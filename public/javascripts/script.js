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
  let queryData = document.querySelectorAll('.query-data')
  let headersData = document.querySelectorAll('.headers-data')

  let jsonArr = []

  for(let x of queryData) {
    jsonArr.push(x.value)
  }

  for(let x of headersData) {
    jsonArr.push(x.value)
  }

  let queryObj = {
    [jsonArr[0]]:jsonArr[1],
    [jsonArr[2]]:jsonArr[3],
    [jsonArr[4]]:jsonArr[5]
  }
 console.log("querydata",queryObj)

  let headerObj = {
    [jsonArr[6]]:jsonArr[7],
    [jsonArr[8]]:jsonArr[9],
    [jsonArr[10]]:jsonArr[11]
  }
  console.log("header:",headerObj)


  // populate HTTP request message body
  var myInit = { method: 'POST',
                 headers: JSON.stringify(headerObj),
                 body: JSON.stringify(queryObj)
  };

  var myRequest = new Request(hostInput, myInit);

  fetch(myRequest)
    .then(function(response) {
      return response.json();
  }).then(function(myjson) {

  });
}

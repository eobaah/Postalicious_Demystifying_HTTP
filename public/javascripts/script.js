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

let queryData = document.querySelectorAll('.query-data')
let headersData = document.querySelectorAll('.headers-data')
let jsonArr = []

function buildData() {

  for (let x of queryData) {
    jsonArr.push(x.value)
  }

  for (let x of headersData) {
    jsonArr.push(x.value)
  }
  let queryParams = {
    [jsonArr[0]]: jsonArr[1],
    [jsonArr[2]]: jsonArr[3],
    [jsonArr[4]]: jsonArr[5]
  }
  let headerData = {
    [jsonArr[6]]: jsonArr[7],
    [jsonArr[8]]: jsonArr[9],
    [jsonArr[10]]: jsonArr[11]
  }

  let jsonObj = {
    "Method": document.querySelector('.http-verb').value,
    "Host": document.getElementById('host-url').value,
    "Query Parameters": queryParams,
    "Headers": headerData
  }
  return jsonObj

}

function buildRequest() {
  let incomingData = document.querySelector('.textBody')
  return incomingData.value = JSON.stringify(buildData())
}


// populate HTTP request message body
function finalBuild() {
  buildRequest()
  let myRequest = buildData()

  fetch('/request/build', {
      "Method": myRequest.Method,
      "Host": myRequest.Host,
      "Query Parameters": myRequest["Query Parameters"],
      "Headers": myRequest.Headers
    })
    .then(function(response) {
      if (response.status !== 200) {
        console.log('It looks like something went wrong. Status Code: ' + response.status)
        return
      }
      response.json().then(function(data) {})
      console.log('this has things', data)
    });
}

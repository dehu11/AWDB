var url = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";
var xhrbtn = document.querySelector("#xhr");
var fetchbtn = document.querySelector("#fetch");
var axiosbtn = document.querySelector("#axios");
var quoteText = document.querySelector("#quote");

xhrbtn.addEventListener("click", function() {
	var XHR = new XMLHttpRequest();

	XHR.onreadystatechange = function() {
		if(XHR.readyState == 4 && XHR.status == 200) {
			var quote = JSON.parse(XHR.responseText);
			quoteText.innerText = quote;
		}
	}

	XHR.open("GET", url);
	XHR.send();
});

fetchbtn.addEventListener("click", function() {
	fetch(url)
	.then(function(res) {
		res.json().then(function(quote) {
			quoteText.innerText = quote[0];
		})
	})
	.catch(function(quote) {
		aler("error");
	})
});

$("#jquery").click(function() {
	$.getJSON(url)
	.done(function(quote) {
		quoteText.innerText = quote;
	})
	.fail(function() {
		alert("error");
	})
});

axiosbtn.addEventListener("click", function() {
	axios.get(url)
	.then(function(res) {
		quoteText.innerText = res.data;
	})
	.catch(function() {
		alert("error");
	})
})
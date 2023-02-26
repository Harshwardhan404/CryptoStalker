
var typed = new Typed(".name", {
    strings: ["Welcome To the World of Crypto"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
  })



setInterval(fetchfirst, 2000)

function fetchfirst() {

let requestOptions = {
    method: 'GET', 
    key : "705dd000-ca69-4d25-90cd-431d4c69d9a0"
  
  };

let a = fetch("https://api.coincap.io/v2/assets/", requestOptions);
a.then((response) => {
  return response.json();
}).then((value) => {
  let dataIn = value.data;
  // console.log(dataIn);
  let tableData = "";
  dataIn.map((values) => {
    tableData += `<tr>
      <td>${values.rank}</td>
      <td>${values.name}</td>
      <td>${values.priceUsd}</td>
      <td>${values.volumeUsd24Hr}</td>
      <td>${values.marketCapUsd}</td>
      
      
    </tr>
`;
  });
  document.getElementById("table_body").innerHTML = tableData;
}).catch((err)=> {
  console.log("some Error Occured while Fetching")
})
}

fetchfirst()



fetch('https://min-api.cryptocompare.com/data/v2/news/?lang=EN&api_key=35a6d4b5719e3f4a5b589778d61214aa0a94e17453ffd571c1091f8fa366957a')
	.then(response => response.json())

	.then((response) =>{ 
    document.getElementById("titleNews1").innerHTML = response.Data[0].title
    document.getElementById("titleNews2").innerHTML = response.Data[1].title
   document.getElementById("titleNews3").innerHTML = response.Data[2].title
   document.getElementById("titleNews4").innerHTML = response.Data[3].title
   document.getElementById("titleNews5").innerHTML = response.Data[4].title
    document.getElementById("titleNews6").innerHTML = response.Data[5].title
    document.getElementById("titleNews7").innerHTML = response.Data[6].title
    document.getElementById("titleNews8").innerHTML = response.Data[7].title
    document.getElementById("titleNews9").innerHTML = response.Data[8].title
    document.getElementById("titleNews10").innerHTML = response.Data[9].title

    document.getElementsByClassName("newsBody")[0].innerHTML = response.Data[0].body
    document.getElementsByClassName("newsBody")[1].innerHTML = response.Data[1].body
    document.getElementsByClassName("newsBody")[2].innerHTML = response.Data[2].body
    document.getElementsByClassName("newsBody")[3].innerHTML = response.Data[3].body
    document.getElementsByClassName("newsBody")[4].innerHTML = response.Data[4].body
    document.getElementsByClassName("newsBody")[5].innerHTML = response.Data[5].body
    document.getElementsByClassName("newsBody")[6].innerHTML = response.Data[6].body
    document.getElementsByClassName("newsBody")[7].innerHTML = response.Data[7].body
    document.getElementsByClassName("newsBody")[8].innerHTML = response.Data[8].body
    document.getElementsByClassName("newsBody")[9].innerHTML = response.Data[9].body


let a = response.Data[0].imageurl
let b = response.Data[1].imageurl
let c = response.Data[2].imageurl
let d = response.Data[3].imageurl
let e = response.Data[4].imageurl
let f = response.Data[5].imageurl
let g = response.Data[6].imageurl
let h = response.Data[7].imageurl
let i = response.Data[8].imageurl
let j = response.Data[9].imageurl

  document.getElementsByClassName("newsImage")[0].innerHTML = `<img src = ${a}>`
     document.getElementsByClassName("newsImage")[1].innerHTML =  `<img src = ${b}>`
    document.getElementsByClassName("newsImage")[2].innerHTML = `<img src = ${c}>`
    document.getElementsByClassName("newsImage")[3].innerHTML = `<img src = ${d}>`
    document.getElementsByClassName("newsImage")[4].innerHTML = `<img src = ${e}>`
    document.getElementsByClassName("newsImage")[5].innerHTML = `<img src = ${f}>`
    document.getElementsByClassName("newsImage")[6].innerHTML = `<img src = ${g}>`
    document.getElementsByClassName("newsImage")[7].innerHTML = `<img src = ${h}>`
    document.getElementsByClassName("newsImage")[8].innerHTML = `<img src = ${i}>`
    document.getElementsByClassName("newsImage")[9].innerHTML = `<img src = ${j}>`
   

  console.log(response.Data)
  
  })
.catch(err => console.error(err));  


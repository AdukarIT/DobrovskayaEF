let parent = document.getElementsByTagName("BODY")[0];
let ul = document.createElement("ul");
ul.setAttribute('id','list');
let li = document.createElement("li");
let a = document.createElement("a");
a.setAttribute("id", "link");
parent.appendChild(ul);
ul.appendChild(li);
li.appendChild(a);
document.getElementById("link").href = "http://google.com";
let data = "http://google.com";
a.appendChild(document.createTextNode(data));

let li1 = document.createElement("li");
let a1 = document.createElement("a");
a1.setAttribute("id", "link1");
ul.appendChild(li1);
li1.appendChild(a1);
document.getElementById("link1").href = "/tutorial";
let data1 = "/tutorial.html";
a1.appendChild(document.createTextNode(data1));

let li2 = document.createElement("li");
let a2 = document.createElement("a");
a2.setAttribute("id", "link2");
ul.appendChild(li2);
li2.appendChild(a2);
document.getElementById("link2").href = "local/path";
let data2 = "local/path";
a2.appendChild(document.createTextNode(data2));

let li3 = document.createElement("li");
let a3 = document.createElement("a");
a3.setAttribute("id", "link3");
ul.appendChild(li3);
li3.appendChild(a3);
document.getElementById("link3").href = "ftp://ftp.com/my.zip";
let data3 = "ftp://ftp.com/my.zip";
a3.appendChild(document.createTextNode(data3));

let li4 = document.createElement("li");
let a4 = document.createElement("a");
a4.setAttribute("id", "link4");
ul.appendChild(li4);
li4.appendChild(a4);
document.getElementById("link4").href = "http://nodejs.org";
let data4 = "http://nodejs.org";
a4.appendChild(document.createTextNode(data4));

let li5 = document.createElement("li");
let a5 = document.createElement("a");
a5.setAttribute("id", "link5");
ul.appendChild(li5);
li5.appendChild(a5);
document.getElementById("link5").href = "http://internal.com/test";
let data5 = "http://internal.com/test";
a5.appendChild(document.createTextNode(data5));

let colorLight = "a[href*='://']";
let redirect = document.querySelectorAll(colorLight);
for (let i = 0; i < redirect.length; i++) {
      redirect[i].classList.add("ligth");
    }

let firstLi = ul.getElementsByTagName('LI')[0];
let newFirstElem = ul.getElementsByTagName('LI')[1];
ul.insertBefore(newFirstElem, firstLi);

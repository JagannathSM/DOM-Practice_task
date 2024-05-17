function fun(){
    var a = document.getElementById("test").value;
    var arr = a.split('');
    console.log(arr.length);

    var spam = document.createElement('spam');
    spam.innerHTML= `${arr.length}|`;

    document.body.append(spam);
}

var div = document.createElement("div");
var p = document.createElement("p");
p.innerHTML = `Text Charecter Counter`;

var inputfield = document.createElement("textarea");
inputfield.setAttribute("id","test");
inputfield.setAttribute("oninput","fun()");
inputfield.setAttribute("rows","10")
inputfield.setAttribute("cols","60")

div.append(p,inputfield)

document.body.append(div);
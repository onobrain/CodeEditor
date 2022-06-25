let codes = document.getElementById("codesArea")
let play = document.getElementById("Run");
let remove = document.getElementById("trash");
let result = document.getElementById("outputs")

play.onclick = ()=>{
    result.innerHTML = codes.value;
    localStorage.setItem('RESULT' , codes.value);
};

remove.onclick = ()=>{
    result.innerHTML = "";
}

onload=()=>{
    if(localStorage.getItem("RESULT") != null){
        codes.value = localStorage.getItem("RESULT")
    }else{
        codes.value = 
            `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
    `
    }
}
var qqq = {"ID": "234234", 
"Message": "jgu", "Global": {"New": "6554", "Old":8798}, "Countries":[{"ID":"57667", 
"Country":"Afhganistan"},{"ID":"24353", "Country":"Albania"},]}



for (i= 0; i <2; i++){
if (qqq.Countries[i].Country === "Afhganistan"){
console.log(qqq.Countries[i].ID)
}
else{
console.log("no")
}
}

------------
var url= "https://api.covid19api.com/summary"  
$.get(url,function(data){
for (var i= 0; i <211; i++){
    var fff= $(data.Countries[i].Country).toLocaleString()
    console.log(fff)

    if (fff == "Argentina"){
        var ttt= `
            <div> ${(data.Countries[i].TotalConfirmed).toLocaleString()}
                </div>
            `
            document.getElementById("data").innerHTML = xxx

    }
    else{
    console.log("no")
    }
}

}







)
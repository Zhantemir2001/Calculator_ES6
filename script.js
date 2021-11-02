getBid = () => {
  var Bid=document.getElementById("bid").value;
    Bid=parseInt(Bid);
    console.log(Bid);
    return Bid;
}

getName = () => {
  var name=document.getElementById("name").value;
    console.log(name);
    return name;
}

getTextArea = () => {
  var text=document.getElementById("textarea").value;
    console.log(text);
    return text;
}




getSelectedEducation = () => {
  var Selectededucation=document.getElementById("education").value;
    console.log(Selectededucation);
    return Selectededucation;
}

getSelectedNetworth = () => {
  var SelectedNetworth=document.getElementById("networth").value;
    console.log(SelectedNetworth);
    return SelectedNetworth;
}

getSelectedCaste = () => {
  var SelectedCaste=document.getElementById("caste").value;
    console.log(SelectedCaste);
    return SelectedCaste;
}

getSelectedAge = () => {
  var ele = document.getElementsByName('age');
            var age;
            for(i = 0; i < ele.length; i++) {
                if(ele[i].checked){
                var age=ele[i].value;
                }
            }
    return age;
}


function getSelectedCheck(){
    var myArray=[];
    var form = document.getElementById('forms');
  
    form.querySelectorAll('input').forEach(function (input) {
    if(input.type === 'checkbox' && input.checked) {
      myArray.push(input.value);
    }
  })
    console.log(myArray)
    return myArray;
}

document.getElementById('btn').addEventListener("click", function() {
    let element = document.getElementById("id01");
element.innerHTML = "Final price";
    
    
    
 let price=getBid();
  let name=getName();
    let text=getTextArea();
    

var education=getSelectedEducation();
  var networth=getSelectedNetworth();
  var caste=getSelectedCaste();
  var age=getSelectedAge();
  
var Myarray=[];
  Myarray=getSelectedCheck();
    
    var coefficentEducation;
    if(education=="undergraduate"){
        coefficentEducation=1.5;
    }
    else if(education=="college"){
          coefficentEducation=1.2;  
            }
    else if(education=="high_school"){
        coefficentEducation=1.05;
    }
    else {
        coefficentEducation=0.95;
    }
    
    var coefficentNetworth;
    if(networth=="rich"){
        coefficentNetworth=2;
    }
    else if(networth=="medium"){
        coefficentNetworth=1.5;
    }
    else {
        coefficentNetworth=1.2;
    }
    
    var CasteIncrease;
    if(caste=="brahmin"){
        CasteIncrease=100;
    }
    else if(caste=="Kshatriya"){
        CasteIncrease=50;
    }
    else if(caste=="vaishya"){
        CasteIncrease=20;
    }
    else if(caste=="shudra"){
        CasteIncrease=10;
    }
    else CasteIncrease=-50;
    
    
    var coefficentAge;
    if(age=="1823"){
        coefficentAge=1.5;
    }
    else if(age=="2427"){
        coefficentAge=1.2;
    }
    else coefficentAge=0.95;
    
    var Myarray=[];
    var instrument=0,cooking=0,easygoing=0,singing=0,persongossips=0;
    Myarray=getSelectedCheck();
    
    for(var i=0;i<Myarray.length;i++){
        if(Myarray[i]=="instrument"){
            instrument=10;
        }
        else if(Myarray[i]=="cooking"){
            cooking=20;
        }
        else if(Myarray[i]=="easygoing"){
            easygoing=15;
        }
        else if(Myarray[i]=="singing"){
            singing=10;
        }
        
        else if(Myarray[i]=="parents"){
            price=price*0.85;
        }
        else if(Myarray[i]=="charecter"){
            price=price*0.9;
        }
        else if(Myarray[i]=="person"){
            persongossips=-20;
        }
    }
    
    price=(price*coefficentEducation*coefficentNetworth+instrument+cooking+easygoing+singing+persongossips+CasteIncrease)*coefficentAge;
    
       let person = {
bride_name: name,
bride_price: price,
letter_to_bride: text
}
    
    
    document.getElementById("demo").innerHTML =`Total price is for ${person.bride_name} is ${person.bride_price}$ and with the following love letter: "${person.letter_to_bride}"` ;
});



    



  

    
    
          
    
    
    
    
    
  


    


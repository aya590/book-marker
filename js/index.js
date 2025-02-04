//^ elements 

var inputName = document.getElementById("name")
var inputurl =document.getElementById("url")
var datacontainer= document.getElementById("datacontainer")
console.log(datacontainer)

var datalist=[];


var nameRegex=/^(.*[a-zA-Z].*){3,}$/

var urlRegex =/^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(:\d{1,5})?(\/[^\s]*)?$/
// if (localStorage.getItem("datalist") ) {
//    datalist = JSON.parse(localStorage.getItem("dataList"))
//    }
 
var datalist  = JSON.parse(localStorage.getItem("datalist")) || [];
displayalldata();


function adddata(){

   if(validate( nameRegex,inputName  ) &&
   validate(urlRegex,inputurl  )){
      var data ={
         name : inputName.value,
         url : inputurl.value,
      }
 
      datalist.push(data);
      
      localStorage.setItem("datalist",JSON.stringify(datalist) );
 
      displaydata(datalist.length-1);
      crlearinputs()
   }else{
      var messageDiv = document.getElementById('massage'); // حدد عنصر الرسالة
        messageDiv.classList.remove('d-none'); // احذف كلاس الإخفاء (إذا كان موجودًا)
        messageDiv.classList.add('d-block'); 
   ;
   }
    
}


 function displaydata(index) {
    var datahtml=`

    <td> ${   (index) +1 }</td>
    <td>${   datalist[index].name}</td>
    <td> <button class="btn visit-button " id='visitButton'><a target ="_blank" href="${ datalist[index].url}"></a> <i class="fa-solid fa-eye pe-2"></i>Visit</button></td>
    <td> <button class="btn delet-button"  onclick='deletdata(${index})'> <i class="fa-solid fa-trash-can"></i>Delete </button> </td>
       
`
datacontainer.innerHTML+= datahtml;
 }




function crlearinputs(){
   inputName.value=""
   inputurl.value=""
}




 function deletdata(index){

    datalist.splice(index,1);
    localStorage.setItem("datalist",JSON.stringify(datalist) );
    
    displayalldata();
    console.log(delet)
    
 }




 function displayalldata(){
   datacontainer.innerHTML = "";
    for (var i = 0; i < datalist.length; i++) {
      displaydata(i);
    }
      
 }

 function validate( regex,element ) {
   if (regex.test(element.value)) {
     element.classList.add("is-valid","mb-3",);
     element.classList.remove("is-invalid");
     element.nextElementSibling.classList.add("d-none");
   
     
     return true;
   }
 
   element.classList.remove("is-valid");
   element.classList.add("is-invalid");
   element.nextElementSibling.classList.remove("d-none");
  
   return false;
   
 }
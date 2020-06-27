function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('nameV').value
   //check if the value is emptey or not 
   if(formText == ""){
    alert("You Should Enter Text !");
   }
   else{
       //call function postData to fetch and print the results  
    Client.postD(formText);
    console.log("::: Form Submitted ::: " + formText);

   }


}

export { handleSubmit }

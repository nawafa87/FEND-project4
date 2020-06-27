function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('nameV').value;
    validateData(formText);
   

}
function validateData(formText){
    if(formText == ""){        
        alert("You Should Enter Text !");
        return false;
       }
       else{
           //call function postData to fetch and print the results  
        Client.postD(formText);
        console.log("::: Form Submitted ::: " + formText);
        return true;
       }
    
     
}
export { handleSubmit }

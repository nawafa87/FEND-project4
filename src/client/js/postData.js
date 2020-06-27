
function postD (textf){
    postData(textf);
}
const postData =  async(textf = {})=>{
    const response = await fetch(`http://localhost:8081/test`,{
        method: 'POST', 
        credentials: 'same-origin',
        headers: {
        'Content-Type': 'application/json',
    },
   // Body data type must match "Content-Type" header        
    body: JSON.stringify({value:textf}),   
    });

    try{    
        const newData = await response.json();
        console.log(newData);
        updateUI(newData);
        return newData;
    }
    catch(error){
        console.log("error",error);
    }
}
export function updateUI(newData){
    document.getElementById('polarity').innerHTML = `<b id=po>polarity:</b> ${newData.polarity}`;
    document.getElementById('subjectivity').innerHTML = `<b id=sub>subjectivity:</b> ${newData.subjectivity}`;
    document.getElementById('text').innerHTML = `<b id=texte>text:</b> ${newData.text}`;
    document.getElementById('polarity_confidence').innerHTML = `<b id=pro>polarity_confidence:</b> ${newData.polarity_confidence}`;
    document.getElementById('subjectivity_confidence').innerHTML = `<b id=subco>subjectivity_confidence:</b> ${newData.subjectivity_confidence}`;
}
export {postD}
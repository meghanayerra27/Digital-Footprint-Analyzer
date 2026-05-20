// utils.js

// Format date (for reports)
function formatDate(date){

    const d = new Date(date);

    return d.getDate() + "-" + 
           (d.getMonth() + 1) + "-" + 
           d.getFullYear();
}


// Truncate long text
function truncateText(text, length){

    if(text.length > length){
        return text.substring(0, length) + "...";
    }

    return text;
}


// Generate random ID
function generateID(){

    return "ID-" + Math.floor(Math.random() * 100000);

}


// Show alert message
function showAlert(message){

    alert(message);

}


// Convert risk score to risk level
function getRiskLevel(score){

    if(score <= 30){
        return "Low";
    }
    else if(score <= 70){
        return "Medium";
    }
    else{
        return "High";
    }

}
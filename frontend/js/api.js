// api.js

// Backend API URL
const API_BASE_URL = "http://127.0.0.1:5000";


// Send username/email to backend for analysis
async function analyzeUser(username){

    try{

        const response = await fetch(`${API_BASE_URL}/analyze`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username
            })
        });

        const data = await response.json();

        return data;

    }
    catch(error){
        console.error("API Error:", error);
    }

}


// Get analysis results
async function getResults(){

    try{

        const response = await fetch(`${API_BASE_URL}/results`);

        const data = await response.json();

        return data;

    }
    catch(error){
        console.error("API Error:", error);
    }

}
// =========================
// SEARCH FORM
// =========================

const form = document.getElementById("searchForm");


// HASH FUNCTION

function hashCode(str) {

    let hash = 0;

    for (let i = 0; i < str.length; i++) {

        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }

    return hash;
}


// RISK SCORE

function getScore(name) {

    return Math.abs(hashCode(name)) % 100;
}


// FORM SUBMIT

if (form) {

    form.addEventListener("submit", function(event) {

        event.preventDefault();

        // GET USERNAME

        const username = document.getElementById("username").value;


        // GENERATE RISK SCORE

        const risk = getScore(username);


        // CREATE REPORT DATA

        const data = {

            username: username,

            risk_score: risk,

            social_score: (risk + 10) % 100,

            leak_score: (risk + 20) % 100,

            search_score: (risk + 30) % 100,

            security_score: (risk + 40) % 100,

            risk_level:
                risk > 70 ? "High" :
                risk > 40 ? "Medium" : "Low"
        };


        // SAVE REPORT

        localStorage.setItem(
            "reportData",
            JSON.stringify(data)
        );


        // SAVE USERNAME

        localStorage.setItem("username", username);

        // REDIRECT

        window.location.href = "dashboard.html";

    });

}


// =========================
// SHOW USERNAME
// =========================

const userDisplay = document.getElementById("userName");


if (userDisplay) {

    const user = localStorage.getItem("username");

    if (user) {

        userDisplay.innerText = "User: " + user;
    }
}


// =========================
// GENERATE REPORT
// =========================

function generateReport() {

    const data = JSON.parse(
        localStorage.getItem("reportData")
    );

    if (!data) {

        alert("No analysis found!");

        return;
    }

    window.location.href = "report.html";
}
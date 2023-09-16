

document.getElementById("submitbtn").addEventListener("click", async (e) => {
    e.preventDefault();

    let apiKey = "ema_live_Rt8Wrm9rs6UMkqJa8uCut4k8ci1R01I9KqyU8qYa"; 
    let email = document.getElementById("email").value;
    let url = `https://api.emailvalidation.io/v1/info?apikey=${apiKey}&email=${email}`;

    try {
        let res = await fetch(url);
        let result = await res.json();
        let str = '';

        for (let key of Object.keys(result)) {
            str += `<div>${key}: ${result[key]}</div>`;
        }

        document.getElementById("resultcont").innerHTML = str;
    } catch (error) {
        console.error("An error occurred:", error);
    }
});

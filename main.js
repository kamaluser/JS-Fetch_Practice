onLoadDatas();


function onLoadDatas() {
    fetch("https://gorest.co.in/public/v2/users", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer 0ef15f68fdbd829665a7b94d0d7382d3de9ff03cc9d6e0f2de0b94cf86f901fc"
        },
    })
        .then(response => response.json())
        .then(datas => {
            datas.forEach(data => {
                let tr = document.createElement("tr");
                tr.innerHTML = `
                        <td>${data.id}</td>
                        <td>${data.name}</td>
                        <td>${data.email}</td>
                        <td>${data.gender}</td>
                        <td>${data.status}</td>
            `
                document.querySelector(".table tbody").appendChild(tr);
            });
        })
}
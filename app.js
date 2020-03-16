


function getApi(){
    
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://kawalcovid19.harippe.id/api/summary', true);

    xhr.onload = function(){
        if(this.status === 200){

            const response = JSON.parse(this.responseText);
            
            
            let confirmed = '';
            let recovered= '';
            let deaths= '';
            let activeCare= '';
            // let lastUpdatedAt= '';

                    console.log(response);
                    confirmed += `<h3>${response.confirmed.value}</h3>`
                    recovered += `<h3>${response.recovered.value}</h3>`
                    deaths += `<h3>${response.deaths.value}</h3>`
                    activeCare += `<h3>${response.activeCare.value}</h3>`
                    // lastUpdatedAt += `<p>${response.lastUpdateAt.value}</p>`
       

            document.getElementById('output').innerHTML = confirmed;
            document.getElementById('activeCare').innerHTML = activeCare;
            document.getElementById('recovered').innerHTML = recovered;
            document.getElementById('deaths').innerHTML = deaths;
            
        }
    }

    xhr.send();

 
}

setTimeout(function(){ 
    getApi(); 
}, 1000);
/**
*
* author: Pirmansyah
*
*
**/

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
            let lastUpdatedAt= '';
               
                    confirmed += `<h3>${response.confirmed.value}</h3>`
                    recovered += `<h3>${response.recovered.value}</h3>`
                    deaths += `<h3>${response.deaths.value}</h3>`
                    activeCare += `<h3>${response.activeCare.value}</h3>`
                    lastUpdatedAt += `<small class="lastupdate">${response.metadata.lastUpdatedAt}</small>`
    
            document.getElementById('output').innerHTML = confirmed;
            document.getElementById('activeCare').innerHTML = activeCare;
            document.getElementById('recovered').innerHTML = recovered;
            document.getElementById('deaths').innerHTML = deaths;
            document.getElementById('lastupdate').innerHTML = lastUpdatedAt;            
        }
    }
    xhr.send();
}
 const createClock = setInterval(getApi, 1000);


 function getDataProvinsiItem(){

    const baseUrl = 'https://api.kawalcorona.com/indonesia/provinsi/';


     const xhr = new XMLHttpRequest;

     xhr.open('GET', `${baseUrl}`, true);

     xhr.onload = function(){
         if(this.status === 200){
            let option = document.getElementById('provinsi-item');
            const response = JSON.parse(this.responseText);
            const td = document.getElementById('hasil');
            let counter = 1;
            response.forEach(result => {
                option.innerHTML += `<option value="${result.attributes.Provinsi}">${result.attributes.Provinsi}</option>`;

                td.innerHTML += `
                    <tr>
                    <th id="urutan" scope="row">${counter++}</th>
                    <td>${result.attributes.Provinsi}</td>
                    <td>${result.attributes.Kasus_Posi}</td>
                    <td>${result.attributes.Kasus_Semb}</td>
                    <td>${result.attributes.Kasus_Meni}</td>
                    </tr>
                `;
                // const prov = document.getElementById('provinsi-item');
                // prov.addEventListener('keyup', function(){
                //     const provinsi = document.getElementById('provinsi');

                //     provinsi.innerText = result.attributes.Provinsi;
                // });
            })
         }
     }

     xhr.send();
 }

getDataProvinsiItem();


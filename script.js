// async function getCoronaData(){
//     const coronaData = await fetch('https://www.hpb.health.gov.lk/api/get-current-statistical');
//     const  blob=await coronaData.blob();
//     console.log(coronaData);
//   const ar= document.getElementById('txtTot').src=URL.createObjectURL(blob);
//     console.log(ar);
// }
//
// getCoronaData()
//     .then(coronaData=>{
//         console.log("Hey Fucker..!")
//     })
//     .catch(error=>{
//     console.log("Error !")
//     console.log(error);
// });

TestAPI();

function TestAPI() {
    fetch('https://www.hpb.health.gov.lk/api/get-current-statistical')
        .then(responese => responese.json())
        .then(data => {
            $('#txtTot').html(data.data.local_new_cases)
            $('#txtTotDeath').html(data.data.local_deaths)
            $('#txtTotRecover').html(data.data.local_recovered)
            console.log(data)
        }).catch(error => {
        console.log(error);
    })
    console.log("TestAPI")
}



fetch('https://www.hpb.health.gov.lk/api/get-current-statistical')
    .then(response => response.json())
    .then(data => {
        var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['New Case', 'Total Case', 'Total Recover ', 'Total Death'],
                datasets: [{
                    label: 'Patient',
                    data: [
                        data.data.local_new_cases,
                        data.data.local_total_cases,
                        data.data.local_recovered,
                        data.data.local_deaths,
                    ],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    })







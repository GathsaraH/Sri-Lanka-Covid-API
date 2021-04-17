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

function TestAPI(){
    fetch('https://www.hpb.health.gov.lk/api/get-current-statistical')
        .then(responese=>responese.json())
        .then(data=>{
            $('#txtTot').html(data.data.local_new_cases)
            console.log(data)
        }).catch(error=>{
            console.log(error);
    })
    console.log("TestAPI")
}
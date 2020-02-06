let url ='https://api.coindesk.com/v1/bpi/currentprice.json';
let label = document.getElementById('rate').innerHTML;

function findRate(){
    

    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(myJson =>{
            let price = `${myJson.bpi.USD.rate}`;
            console.log(price);
            document.getElementById('rate').innerHTML = price;
        });
    
}


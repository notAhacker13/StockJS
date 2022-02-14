// https://priceapi.moneycontrol.com/pricefeed/bse/equitycash/{STOCK NAME}
function getStocks() {
    var url = "http://localhost:1234/stocks";
    var url2 = "https://priceapi.moneycontrol.com/pricefeed/bse/equitycash";
    fetch(url)
        .then((res) => res.json())
        .then((data) => data.map((api1) => {
            fetch(`${url2}/${api1.name}`)
                .then((res) => res.json())
                .then((api2) => {
                    var element = `
                    <div class="box" style="height:450px;float:left;margin-left:2%;margin-top:2%;border:1px solid black; padding:10px 10px; padding-bottom:10px; background-color:whitesmoke; ">
                    <img src="${api1.img}" style="height:250px;width:315px;"/>
                    <div style="padding-left:10px; margin-bottom:15px;">
                    <h1>${api2.data.company}</h1>
                    <p><b>Current Price:</b>  ${api2.data.pricecurrent}</p>
                    <p><b>Price Change:</b> ${api2.data.pricechange}</p>
                    <p><b>Price Change Percent:</b> ${api2.data.pricepercentchange}</p>
                    <br>
                    
                    </div>
                    </div>`

                    // document.getElementById("display").appendChild(element);
                    $('#display').append(element);
                })
        }));
}
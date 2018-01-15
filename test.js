cryptoSocket = require("crypto-socket");

cryptoSocket.start("bitfinex","ETHBTC")

setInterval(
  function(){
            cryptoSocket.echoExchange()
                
  },1000
);

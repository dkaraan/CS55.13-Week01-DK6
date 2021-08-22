let theHttp = require("http");

//create server to access object and methods and properties
//NOTE: createServer takes in arguments for http server
//1: the function will run when the servers gets http request from the browser
    //so its browser request --> server receive/response --> request received back to browser

let myServer = theHttp.createServer(

  //function inside the the function
  function(request,response){

    console.log( request.url);//the request url will grab the response after the html link ie:
    //https://CS5513-Week01-DK6.srjcethanwilde.repl.co/INSERT-ADDRESS-HERE

    let sendText;
    if(request.url === "/bnuu"){
      sendText = "  ()()\n" + 
                  " ('.')\n" +
                  "(')(') LOOK IT'S BNUU~~~~~~~!\n";
    }
    else{
      sendText = "<(^.^)>\n";
    }


    //we will need to send back a response to the browser
    //writeHead() creates a http response header including status code (ie 200 ok) and content
      //would look liek this writeHead( statuscode integer, object value)
    response.writeHead(200, {"Content-Type": "text/plain"});

    //end() returns some data and sends it to browser
    response.end(sendText + "\n");
  }
);

//listen() takes 2 arguements: 1 tcp port #, string of the ip address to listen (0.0.0.0)
myServer.listen(8080, "0.0.0.0")

console.log('server starting');
const http= require(`http`);
/*Node.js has a built-in module called HTTP,
which allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP).
The HTTP module can create an HTTP server that listens to server ports and gives a 
response back to the client. */

const server = http.createServer( (req, res) =>{
    // '()=>' is called call-back function
    // req: request object contain the information what user sends
    console.log(req.url, req.method);
    // in our case(for localhost:3000), url is '/' and method is 'GET'
});

server.listen(3000, `localhost`, ()=> {
    // here '() =>' function fires when server starts listening
    console.log(`listening for requests on port no 3000`);
}); 
// here '3000' is a port number 
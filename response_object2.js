const http= require(`http`);
const fs= require(`fs`);
// --> LODASH
const _= require('lodash');
/*Lodash is a JavaScript library that helps programmers write more concise and maintainable JavaScript.
 It can be broken down into several main areas: Utilities: for simplifying common programming tasks 
 such as determining type as well as simplifying math operations.*/

const server = http.createServer( (req, res) =>{
    //console.log(req.url, req.method);
    // req.url can be used to redirect a user from page to other page
    
    //LODASH
    // const num =_.random(0,20);
    // console.log(num);

    // LODASH- what if we want a function to be executed only once

    // const greet = _.once(() => {
    //     console.log(`hello hoomans!`)
    // });

    // greet();

    res.setHeader(`Content-type`, `text/html`);

    let path = `../views/`;
    // using switch statement
    switch(req.url){

        // We will add the status code here and not in the readFile section
        case `/`:
            path += `index.html` // if case is `/`, then path will be become `../views/index.html`
            res.statusCode = 200;
            break;
        
        case `/about`:
            path += `about.html` // if case is `/about`, then path will be become `../views/about.html`
            res.statusCode = 200;
            break;

        // -->>  REDIRECTS 
        // Since my website so popualar, what if an user searched for "/about-us"
        // Agar koi user /about ki jagah /about-us search karta h to usko automatically /about wale page pe redirect kar dena h
        case `/about-us`:
            path += `about.html` // if case is `/about`, then path will be become `../views/about.html`
            res.statusCode = 301;
            // 301 shaows that the resource has already been moved to some other place
            res.setHeader('Location', '/about');
            res.end();
            break;

            // NOTE:
// Making all this raw redirects becomes too messy when website becomes little bigger. 

// EXPRESS (A Third party package) provides a better solution for this

        default:
            path += `404.html` // if case is default, then path will become `../views/404.html`
            res.statusCode =404;
            break;
        }

    // send an html file
    fs.readFile(path, (err, data) => {
        if(err){
            console.log(err);
            res.end();
        }
        else {
            //res.write(data);
            // We do not need to write the above line rather we 
            // can pass the data directly by writing "res.end(data);"
            
            // --> To check the STATUS CODE of the response
            // res.statusCode = 200;
            // if we will add our status code here, it will show a same status for different responses.
            // So we will not add our status code here!!   
            res.end(data);
        }
    })
});

server.listen(3000, `localhost`, ()=> {
    console.log(`listening for requests on port no 3000`);
}); 






// TO install a live server, "nodemon" globally
// type `npm install -g nodemon`
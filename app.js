const express = require('express');
const morgan= require('morgan');
// express app
const app = express();

// register view engine
app.set(`view engine`, `ejs`);  // meaning of this line is: "view engine that uses ejs"


// listen for the requests
app.listen(3000);

// Keeping all the CSS in a seperate file
app.use(express.static(`public`));

// Use of Morgan
app.use (morgan(`dev`));

// Middleware
// app.use((req, res) => {
//     console.log(`new request made:`);
//     console.log(`host: `, req.hostname);
//     console.log(`path: `, req.path);
//     console.log(`method: `, req.method);
//     next(); // to goto the next middleware

// });
// app.use((req, res) => {
//     console.log(`In the next middleware: `);
//     next(); 
// });

app.get( `/`, (req, res) => {
    const blogs = [
        {title: `Cock finds beaches`, snippet: `But on the beaches' water was not salty, huehue!`},
        {title: `Cock finds beaches`, snippet: `But on the beaches' water was not salty, huehue!`},
        {title: `Cock finds beaches`, snippet: `But on the beaches' water was not salty, huehue!`},
    ];
    // res.send(`<h1>Home page</h1>`);
    // res.sendFile(`./views/index.html`, { root: __dirname});
    // since we are using view and an ejs file, we need to replace the above lines with the lines 
    // lines written below:
    res.render(`index`, { title: `Home`, blogs }); // With this, Express will automatically find the index.ejs file from the VIEWS folder
});

app.get( `/about`, (req, res) => {
    res.render('about', { title: `About` });

});

app.get(`/blogs/create`, (req, res)=> {
    res.render(`create`, { title: `Create a new blog` });
})

// 404
// The position of 4O4 is important and it must lies at the bottom most position
app.use( (req, res)=>{
    res.render('404', { title: `4O4` });
});

// --> VIEW ENGINES- helps to change the web pages dynamically
/*  View engines are useful for rendering web pages. There are many view engines available
    in the market like Mustache, Handlebars, EJS, etc but the most popular among them is EJS 
    which simply stands for Embedded JavaScript. It is a simple templating language/engine that
    lets its user generate HTML with plain javascript. 
    
    --> EJS
    What is EJS?
    What is the "E" for? "Embedded?" Could be. How about "Effective," "Elegant," or just "Easy"? 
    EJS is a simple templating language that lets you generate HTML markup with plain JavaScript.
    No religiousness about how to organize things. No reinvention of iteration and control-flow. 
    It's just plain JavaScript.
    */


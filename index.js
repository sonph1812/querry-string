const http = require('http');
const url = require('url');
// const StringDecoder = require('string_decoder').StringDecoder;
const server = http.createServer(function (req, res){
    const  parseUrl = url.parse(req.url,true);
    const  queryStringObject = parseUrl.query;
    res.end("hello")
    console.log(queryStringObject)
})
server.listen(3000,function (){
    console.log("the server is listening on port 3000")

})
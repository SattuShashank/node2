const http=require('http');

const server=http.createServer((req,res)=>{
   if(req.url === '/')
   {
    res.end('welcome to our home page')
   }
   if(req.url === '/about')
   {
    res.end('Here is our short history')
   }
   res.end(`
    <h1>OOps!</h1>
    <p>We can't seem to find the page u are looking for</p>
    <a href="/">Back home</a>
    `)
   res.write('Welcome to our home page')
   res.end()
})

server.listen(5000)
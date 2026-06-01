@echo off
cd /d D:\Work\Project\project
echo Starting request-book server...
echo Open http://localhost:8765 in your browser
echo Press Ctrl+C to stop
node -e "const http=require('http');const fs=require('fs');const path=require('path');const base=__dirname;const mime={'.html':'text/html','.jsx':'application/javascript','.js':'application/javascript','.css':'text/css','.png':'image/png','.jpg':'image/jpeg','.xlsx':'application/octet-stream','.pdf':'application/pdf'};http.createServer((req,res)=>{let f=path.join(base,req.url==='/'?'index.html':req.url.split('?')[0]);if(!fs.existsSync(f)){res.writeHead(404);res.end('404');return;}res.writeHead(200,{'Content-Type':mime[path.extname(f)]||'text/plain','Cache-Control':'no-cache, no-store, must-revalidate'});res.end(fs.readFileSync(f));}).listen(8765,'0.0.0.0',()=>console.log('Server ready: http://localhost:8765'))"
pause

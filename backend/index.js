import express from 'express'
const app = express();

for(let i = 1;  i < 4; i++) {
    app.listen(8000+i,()=>{
        console.log(`server started at 800${i}`)
    })
}
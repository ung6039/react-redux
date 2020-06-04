const express= require('express')
const app = express();

app.all('/*',function (req,res,next) {
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Headers","X-Requested-With");
    next();
});

app.listen(3355,()=>{
    console.log("Server Start","http://localhost:3355")
})

const request= require("request")
const xml2js = require("xml2js")

app.get('/news',(req,res)=>{
    var fd = encodeURIComponent(req.query.fd)
    var url ="http://newssearch.naver.com/search.naver?where=rss&query="+fd;
    var parser = new xml2js.Parser({
        explicitArray:false
    })

    request({url:url},(err,request,xml)=>{
        parser.parseString(xml,function (err,pJson) {
            console.log(pJson.rss.channel.item)
            res.json(pJson.rss.channel.item)
        })
    })
})
const Client = require("mongodb").MongoClient

app.get('/recipe',(req,res)=>{
    var page=req.query.page;// request.getParameter("page")
    var rowSize=9;
    var skip=(page*rowSize)-rowSize;
    var url="mongodb://211.238.142.181:27017";
    // 연결
    Client.connect(url,(err,client)=>{
        // Database (mydb)
        var db=client.db("mydb")
        // Table => Collection => recipe
        db.collection("recipe").find({}).skip(skip).limit(rowSize)
            .toArray((err,docs)=>{
                res.json(docs)
                client.close()
            })
    })
})

app.get('/category',(req,res)=>{

    var url="mongodb://211.238.142.181:27017";
    // 연결
    Client.connect(url,(err,client)=>{
        // Database (mydb)
        var db=client.db("mydb")
        // Table => Collection => recipe
        db.collection("category").find({}).toArray((err,docs)=>{
                res.json(docs)
                client.close()
            })
    })
})

app.get('/cate_food',(req,res)=>{
    var cno = req.query.cno;
    var url="mongodb://211.238.142.181:27017";
    // 연결
    Client.connect(url,(err,client)=>{
        // Database (mydb)
        var db=client.db("mydb")
        // Table => Collection => recipe
        db.collection("food").find({cno:Number(cno)})
            .toArray((err,docs)=>{
            res.json(docs)
            console.log(docs)
            client.close()
        })
    })
})

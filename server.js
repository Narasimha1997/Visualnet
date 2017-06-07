var server=require('express')
var file_output=require('fs')
var file_upload=require('express-fileupload')
var nueral_execute=require('sync-exec')

var app=server()
app.use(file_upload())


app.get('/platform-nueralnet',function(req,res){
    res.sendFile(__dirname+'/html.htm')
})

app.post('/visualnet', function(req,res){
    var file=req.files.image_data
    file.mv('images/image.jpg',function(err){
        if(err) throw err
        nueral_execute("python3 deep_nueron.py")
        res.sendFile(__dirname+'/result.txt')
    })
})
app.listen(3000)

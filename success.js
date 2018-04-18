var MongoClient = require('mongodb').MongoClient;
var dbUrl = "mongodb://localhost:27017/";


(function() {
  var fs, http, qs, server, url, finalcount;

  http = require('http');

  url = require('url');

  qs = require('querystring');

  fs = require('fs');

  server = http.createServer(function(req, res) {
		var request = req;
		var response = res;
    var action, form, formData, msg, publicPath, urlData, stringMsg;
    urlData = url.parse(req.url, true);
    action = urlData.pathname;
    publicPath = __dirname + "\\public\\";
   console.log(req.url);
    if (action === "/register") {
       console.log("register");
			console.log(req.method);
      if (req.method === "POST") {
        console.log("action = post");
        formData = '';
        msg = '';
        return req.on('data', function(data) {
          formData += data;
          
          console.log("form data="+ formData);
          return req.on('end', function() {
            var user;
            user = qs.parse(formData);
          //  user.id = "123456";
            msg = JSON.stringify(user);
						stringMsg = JSON.parse(msg);
						console.log("mess="+msg);
            console.log("mess="+formData);
           // res.writeHead(200, {
            //  "Content-Type": "application/json",
             // "Content-Length": msg.length
            //});
						MongoClient.connect(dbUrl, function(err, db) {
  					if (err) throw err;
  					var dbo = db.db("mydb");
  					var myobj = stringMsg;
  					dbo.collection("customers").insertOne(myobj, function(err, res) {
    				if (err) throw err;
    				console.log("1 document inserted");
    				db.close();
  					});
					});
						
            return res.end("good");
          });
        });
				
      } 
			
			else {
				sendFileContent(res, "Register.html", "text/html");
      }
    }else if (action === "/login") {
       console.log("login");
      if (req.method === "POST") {
        console.log("action = post");
        formData = '';
        msg = '';
        return req.on('data', function(data) {
          formData += data;
          
          console.log("form data="+ formData);
          return req.on('end', function() {
            var user;
            user = qs.parse(formData);
            user.id = "123456";
            msg = JSON.stringify(user);
						stringMsg = JSON.parse(msg);
						console.log("mess="+msg);
            console.log("mess="+formData);
           // res.writeHead(200, {
            //  "Content-Type": "application/json",
             // "Content-Length": msg.length
            //});
						MongoClient.connect(dbUrl, function(err, db) {
  					if (err) throw err;
  					var dbo = db.db("mydb");
  					var myobj = stringMsg;
  					
						//dbo.collection("customers").insertOne(myobj, function(err, res) {
    				//if (err) throw err;
    				//console.log("1 document inserted");
    				//db.close();
  					//});
						
							
							//dbo.collection("customers").find({}).toArray(function(err, result) {
   // if (err) throw err;
    //console.log(result);
    //db.close();
  //});
							
							
			//				var myquery = { Name: 'apple' };
		//					dbo.collection("customers").deleteOne(myquery, function(err, obj) {
    //if (err) throw err;
    //console.log("1 document deleted");
    //db.close();
  //});
							
							
							// count=dbo.collection("customers").find({"Name" : "ALEX"}).count();
							//console.log("total count="+dbo.collection("customers").find({"Name" : "ALEX"}).count());
							
							dbo.collection("customers").count({"Name" : "ALEX"}, function (error, count) {
  						console.log(error, count);
							
								finalcount=count;
							});
							
							
							
							dbo.collection("customers").find({}).toArray(function(err, result) {
    if (err) throw err;
								for (var x=0; x<result.length; x++)
									if(result[x].email==myobj.email){
								
										    db.close();	
							
							return res.end("email");
										
									}

	});
						
							
			//				dbo.collection("customers").find({"Name": "ALEX"}).toArray(function(err, result) {
    //if (err) throw err;
    //console.log(result);
    //db.close();
	//}); 
							
								console.log("final count="+finalcount);
						
					});
						
          });
        });
				
      } else {
        //form = publicPath + "ajaxSignupForm.html";
        form = "login.html";
        return fs.readFile(form, function(err, contents) {
          if (err !== true) {
            res.writeHead(200, {
              "Content-Type": "text/html"
            });
            return res.end(contents);
          } else {
            res.writeHead(500);
            return res.end;
          }
        });
      }
    } 
		   else if (action === "/favlist") {
       console.log("favlist");
      if (req.method === "POST") {
        console.log("action = post");
        formData = '';
        msg = '';
        return req.on('data', function(data) {
          formData += data;
          
          console.log("form data="+ formData);
          return req.on('end', function() {
            var user;
            user = qs.parse(formData);
            user.id = "123456";
            msg = JSON.stringify(user);
						stringMsg = JSON.parse(msg);
						console.log("mess="+msg);
            console.log("mess="+formData);
           // res.writeHead(200, {
            //  "Content-Type": "application/json",
             // "Content-Length": msg.length
            //});
						MongoClient.connect(dbUrl, function(err, db) {
  					if (err) throw err;
  					var dbo = db.db("mydb");
  					var myobj = stringMsg;
  					
						//dbo.collection("customers").insertOne(myobj, function(err, res) {
    				//if (err) throw err;
    				//console.log("1 document inserted");
    				//db.close();
  					//});
						
							
							//dbo.collection("customers").find({}).toArray(function(err, result) {
   // if (err) throw err;
    //console.log(result);
    //db.close();
  //});
							
							
			//				var myquery = { Name: 'apple' };
		//					dbo.collection("customers").deleteOne(myquery, function(err, obj) {
    //if (err) throw err;
    //console.log("1 document deleted");
    //db.close();
  //});
							
							
							// count=dbo.collection("customers").find({"Name" : "ALEX"}).count();
							//console.log("total count="+dbo.collection("customers").find({"Name" : "ALEX"}).count());
							
							dbo.collection("customers").count({"Name" : "ALEX"}, function (error, count) {
  						console.log(error, count);
							
								finalcount=count;
							});
							
							var myquery;
							var newvalues;
							
									if(myobj.like1!=null){							
								 	myquery = { email:myobj.email};
								 	newvalues = { $set: { like1:myobj.like1 } };}
								
									if(myobj.like2!=null){							
								  myquery = { email:myobj.email};
								  newvalues = { $set: { like2:myobj.like2 } };}
							
									if(myobj.like3!=null){							
								  myquery = { email:myobj.email};
								  newvalues = { $set: { like3:myobj.like3 } };}
							
									if(myobj.like4!=null){							
								 	myquery = { email:myobj.email};
								 	newvalues = { $set: { like4:myobj.like4 } };}
								
									if(myobj.like5!=null){							
								  myquery = { email:myobj.email};
								  newvalues = { $set: { like5:myobj.like5 } };}
							
									if(myobj.like6!=null){							
								  myquery = { email:myobj.email};
								  newvalues = { $set: { like6:myobj.like6 } };}
								
if(myobj.like1!=null||myobj.like2!=null||myobj.like3!=null||myobj.like4!=null||myobj.like5!=null||myobj.like6!=null){
   	 	 dbo.collection("customers").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    db.close();
				 
  });
							}			
dbo.collection("customers").find({}).toArray(function(err, result) {
    if (err) throw err; console.log(result);
								for (var x=0; x<result.length; x++)
									if(result[x].email==myobj.email){
											return res.end("like1="+result[x].like1+"like2="+result[x].like2+"like3="+result[x].like3+"like4="+result[x].like4+"like5="+result[x].like5+"like6="+result[x].like6);
									}	

	});
							
							
			//				dbo.collection("customers").find({"Name": "ALEX"}).toArray(function(err, result) {
    //if (err) throw err;
    //console.log(result);
    //db.close();
	//}); 
							
								console.log("final count="+finalcount);
						
					});
						
          });
        });
				
      } else {
        //form = publicPath + "ajaxSignupForm.html";
        form = "favlist.html";
        return fs.readFile(form, function(err, contents) {
          if (err !== true) {
            res.writeHead(200, {
              "Content-Type": "text/html"
            });
            return res.end(contents);
          } else {
            res.writeHead(500);
            return res.end;
          }
        });
      }
    }else if( action==="/newpage"){
       res.writeHead(200, {
        "Content-Type": "text/html"
      });
      return res.end("<h1>�w����{Node.js�泾���O2</h1><p><a href=\"/Signup\">���U</a></p>");
    }
		
		else if(request.url === "/index"){
		//sendFileContent(response, "callajax.html", "text/html");
		sendFileContent(response, "index.html", "text/html");
	}	
		
		else if(request.url === "/apis"){
		//sendFileContent(response, "callajax.html", "text/html");
		sendFileContent(response, "apis.html", "text/html");
	}	
	
		else if(request.url === "/favlist"){
		//sendFileContent(response, "callajax.html", "text/html");
		sendFileContent(response, "favlist.html", "text/html");
	}	
		
		
	else	if(request.url === "/login"){
		//sendFileContent(response, "callajax.html", "text/html");
		sendFileContent(response, "123.html", "text/html");
	}
    
		else if(/^\/[a-zA-Z0-9\/]*.js$/.test(request.url.toString())){
		sendFileContent(response, request.url.toString().substring(1), "text/javascript");
	}
	else if(/^\/[a-zA-Z0-9\/]*.css$/.test(request.url.toString())){
		sendFileContent(response, request.url.toString().substring(1), "text/css");
	}
	else if(/^\/[a-zA-Z0-9\/]*.jpg$/.test(request.url.toString())){
		sendFileContent(response, request.url.toString().substring(1), "image/jpg");
	}
	else if(/^\/[a-zA-Z0-9\/]*.min.css$/.test(request.url.toString())){
		sendFileContent(response, request.url.toString().substring(1), "text/css");
	}	
	else if(/^\/[a-zA-Z0-9\/]*.min.js$/.test(request.url.toString())){
		sendFileContent(response, request.url.toString().substring(1), "text/javascript");
	}	
	else if(/^\/[a-zA-Z0-9\/]*.bundle.min.js$/.test(request.url.toString())){
		sendFileContent(response, request.url.toString().substring(1), "text/javascript");
	}	
	else if(/^\/[a-zA-Z0-9\/]*.ico$/.test(request.url.toString())){
		sendFileContent(response, request.url.toString().substring(1), "image/x-icon");
	}	
	else if(/^\/[a-zA-Z0-9\/]*.font-awesome.min.css$/.test(request.url.toString())){
		sendFileContent(response, request.url.toString().substring(1), "text/css");
	}
	else if(/^\/[a-zA-Z0-9\/]*.contact_me.js$/.test(request.url.toString())){
		sendFileContent(response, request.url.toString().substring(1), "text/javascript");
	}
	else if(/^\/[a-zA-Z0-9\/]*.easing.min.js$/.test(request.url.toString())){
		sendFileContent(response, request.url.toString().substring(1), "text/javascript");
	}
	else if(/^\/[a-zA-Z0-9\/]*.fontawesome-webfont.woff2$/.test(request.url.toString())){
		sendFileContent(response, request.url.toString().substring(1), "application/x-font-woff");
	}
	else if(/^\/[a-zA-Z0-9\/]*.mapimage.png$/.test(request.url.toString())){
		sendFileContent(response, request.url.toString().substring(1), "image/png");
	}
		
		
		
    else {
      
      console.log("callhtml");
		sendFileContent(res, "index.html", "text/html");

     
      //res.writeHead(200, {
      //  "Content-Type": "text/html"
     // });
      //return res.end("<h1>�w����{Node.js�泾���O</h1><p><a href=\"/Signup\">���U</a></p>");
    }
  });

  server.listen(8080);

  console.log("Server is running�Atime is" + new Date());

  
  
  
  
  
function sendFileContent(response, fileName, contentType){
	fs.readFile(fileName, function(err, data){
		if(err){
			response.writeHead(404);
			response.write("Not Found!");
		}
		else{
			response.writeHead(200, {'Content-Type': contentType});
			response.write(data);
		}
		response.end();
	});
}
}).call(this);



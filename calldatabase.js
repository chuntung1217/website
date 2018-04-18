(function() {
  var fs, http, qs, server, url;

  http = require('http');

  url = require('url');

  qs = require('querystring');

  fs = require('fs');

  server = http.createServer(function(req, res) {
    var action, form, formData, msg, publicPath, urlData;
    urlData = url.parse(req.url, true);
		var request = req;
		var response = res;
    action = urlData.pathname;
    publicPath = __dirname + "\\public\\";
   console.log(req.url);
    if (action === "/register") {
       console.log("register");
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
           // user.id = "123456";
            msg = JSON.stringify(user);
						console.log("mess="+msg);
           // console.log("mess="+formData);
           // res.writeHead(200, {
             //"Content-Type": "application/json",
             // "Content-Length": msg.length
           // });
						
            return res.end();
          });
        });
      } else {
        //form = publicPath + "ajaxSignupForm.html";
        form = "Register.html";
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
    } else if( action==="/newpage"){
       res.writeHead(200, {
        "Content-Type": "text/html"
      });
      return res.end("<h1>歡迎光臨Node.js菜鳥筆記2</h1><p><a href=\"/Signup\">註冊</a></p>");
    }
    
		
	else if(request.url === "/index"){
		//sendFileContent(response, "callajax.html", "text/html");
		sendFileContent(response, "index.html", "text/html");
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
      //return res.end("<h1>歡迎光臨Node.js菜鳥筆記</h1><p><a href=\"/Signup\">註冊</a></p>");
    }
  });

  server.listen(9001);

  console.log("Server is running，time is" + new Date());

  
  
  
  
  
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



function route(handle,pathname,response,post_data){
	console.log('About to route a request for '+ pathname);

	if (typeof handle[pathname] === 'function') {
		//(F)
		//return handle[pathname]();	

		handle[pathname](response,post_data);

	} else {
		console.log('No request handle found for '+pathname);
		//(F)
		//return '404 Not Found!';

		response.writeHead(200,{'Content-Type':'Text/plain'});
		response.write('404,Not Found!');
		response.end();
	}

}

exports.route = route;
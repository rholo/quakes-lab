app.service = {
	// ejemplo get
	get:function (url,params) {
		return $j.get(url,params);
	},
	post:function (url,params) {
		return $j.post(url,params);
	},
	getParams: function (url, params) {
		return $j.ajax({
            url:url,
			dataType:'JSONP',
			crossDomain : true,
			type :'GET',
			cache : true,
			jsonpCallback :'eqfeed_callback',
            //beforeSend: headers,
            data: params
		});
	}
};

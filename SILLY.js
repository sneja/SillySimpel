var SILLY = (function(module){
	
	module.DoIt = function(resultObject){
		resultObject.prepend(Date());
	};
	
	return module;
}(SILLY || {} ));
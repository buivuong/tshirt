module.exports = {
	promiseWhile: function(predicate, action){
		function loop(){
			if(!predicate()) return;
			return Promise.resolve(action()).then(loop);
		}
		return Promise.resolve().then(loop);
	},
	loadPluginsSync: function(arrayJS){
		var stop = 0;
		return this.promiseWhile(function(){
			return stop === -1 || stop < arrayJS.length;
		}, function(){
			return new Promise(function(resolve, reject){
				setTimeout(function(){
					$.ajax({
						url: arrayJS[stop],
						dataType: 'script',
						cache: true,
						success: function(data, textStatus, jqxhr){
							stop++;
							resolve();
						}
					})
					.fail(function(jqxhr, textStatus){
						reject();
						stop = -1;
					})
				}, 250);
			});
		})
	}
}
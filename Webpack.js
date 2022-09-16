var functions = {};

functions["BdApi.Webpack"] = function() {
	function getBulk(queries) {
		var modules = [];
		name = queries.toLowerCase();
		webpackChunkdiscord_app.push([
			[Math.random()],
			{},
			(r)=>{
				modules.push(
					...Object
					.values(r.c)
					.filter(m => m?.exports && ((m.exports?.default && Object.keys(m.exports.default).some(key => key.toLowerCase().includes(name))) || (m.exports?.default?.prototype && Object.keys(m.exports.default.prototype).some(key => key.toLowerCase().includes(name))) || Object.keys(m.exports).some(key => key.toLowerCase().includes(name))))
				)
			}
		]);
		return modules;
	}

	function getModule() {
		var o;
		webpackChunkdiscord_app.push(
			[[Math.random()],
			{},
			(r)=>{o=o||Object.values(r.c).find(m=>m?.exports?.default&&m.exports.default[n])}]
		);
		return o;
	}

	function waitForModule() {
		// soon
	}
};
class Patcher {
	static after(caller, moduleToPatch, functionName, callback) {
		// soon
	}
	static before(caller, moduleToPatch, functionName, callback) {
		// soon
	}
	static getPatchesByCaller(caller) {
		// soon
	}
	static instead(caller, moduleToPatch, functionName, callback) {
		let module = Webpack.getModule(moduleToPatch);
		module.functionName = function () {
			eval(callback)
		}
	}
	static unpatchAll(caller) {
		// soon
	}
}
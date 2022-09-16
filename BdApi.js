class BdApi {
	static alert(title, content) {
		alert(content);
	}
	static clearCSS(id) {
		var style = document.getElementById(id);
		if (style.tagName == "STYLE")
		{
			document.getElementById(id).remove();
			return true;
		}
		else {
			return false;
		}
	}
	static deleteData(pluginName, key) {
		// soon
	}
	static disableSetting([collection], category, id) {
		// soon
	}
	static enableSetting([collection], category, id) {
		// soon
	}
	static findModule(filter) {
		// soon
	}
	static findAllModules(filter) {
		// soon
	}
	static findModuleByProps(...props) {
		// soon
	}
	static findModuleByPrototypes(...protos) {
		// soon
	}
	static findModuleByDisplayName(name) {
		// soon
	}
	static getCore() {
		// soon
	}
	static getData(pluginName, key) {
		// soon
	}
	static getInternalInstance(node) {
		// soon
	}
	static openDialog(
		mode = "open",
		defaultPath,
		filters = [],
		title = null,
		message = null,
		showOverwriteConfirmation = false,
		showHiddenFiles = false,
		promptToCreate = false,
		openDirectory = false,
		openFile = true,
		multiSelections = false,
		modal = false
	) {
		alert(message);
	}
	static injectCSS(id, styleString) {
		const style = document.createElement('style');
		style.id = id;
		style.textContent = styleString;
		document.body.append(style);
	}
	static linkJS(id, url) {
		// soon
	}
	static loadData(pluginName, key) {
		// soon
	}
	static monkeyPatch(module, methodName, options) {
		// soon
	}
	static onRemoved(node, callback) {
		// soon
	}
	static saveData(pluginName, key, data) {
		// soon
	}
	static setData(pluginName, key, data) {
		// soon
	}
	static showConfirmationModal(title, content, options = {}) {
		confirm(content);
	}
	static showToast(content, options = {}) {
		DragoncordAPI.showNotification(content);
	}
	static suppressErrors(method, message) {
		// soon
	}
	static testJSON(data) {
		// soon
	}
	static toggleSetting(id) {
		// soon
	}
	static unlinkJS(id) {
		// soon
	}
}

BdApi.Webpack = Webpack;
BdApi.Patcher = Patcher;
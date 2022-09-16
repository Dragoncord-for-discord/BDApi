let plugins = []

class AddonAPI {
	static isEnabled(idOrFile) {
		for (plugin of plugins) {
			if (plugin == idOrFile) {
				return true;
			}
			else {
				return false;
			}
		}
	}
	static enable(idOrFile) {
		plugins.push(idOrFile);
	}
	static disable(idOrFile) {
		var index = plugins.indexOf(idOrFile);
		if (index > -1) {
			plugins.splice(index, 1);
		}
		return plugins;
	}
	static toggle(idOrFile) {
		for (plugin of plugins) {
			if (plugin == idOrFile) {
				plugins.remove(idOrFile);
			}
			else {
				plugins.push(idOrFile);
			}
		}
	}
	static get(idOrFile) {
		for (plugin of plugins) {
			if (plugin == idOrFile) {
				return plugin;
			}
		}
	}
	static getAll() {
		return plugins;
	}
	static reload(idOrFile) {
		for (plugin of plugins) {
			if (plugin == idOrFile) {
				AddonAPI.disable(idOrFile);
				AddonAPI.enable(idOrFile);
			}
		}
	}
}
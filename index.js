'use strict';
const path = require('path');
const fs = require('fs');
const plist = require('plist');

// Fixes some inconsistencies when running `plist.parse`
// https://github.com/TooTallNate/plist.js/issues/75
const fix = obj => {
	for (const key of Object.keys(obj)) {
		const val = obj[key];

		if (val === null || val === undefined) {
			obj[key] = '';
		} else if (Array.isArray(val)) {
			obj[key] = val.map(fix);
		} else if (typeof val === 'object') {
			obj[key] = fix(val);
		}
	}

	return obj;
};

module.exports = class Variables {

	constructor() {
		this.file = path.join(process.env[`alfred_preferences`], 'workflows', process.env[`alfred_workflow_uid`], 'info.plist');
		this.data = fix(plist.parse(fs.readFileSync(this.file, 'utf8')));
	}

	get(key) {
		return this.data.variables[key] || undefined;
	}

	set(key, val) {
		this.data.variables[key] = val;
		fs.writeFileSync(this.file, plist.build(this.data));
	}

	has(key) {
		return this.data.variables.hasOwnProperty(key);
	}
};

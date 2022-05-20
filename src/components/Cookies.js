function setCookie(name /*STRING*/, value /*STRING*/, days /*NUMBER*/) {
	let expires = "";
	if (days) {
		const date = new Date();
		date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
		expires = `; expires=${date.toUTCString()}`;
	}

	document.cookie = `${name}=${value || ""}${expires}; path=/`;
	
}

function getCookie(name /*STRING*/) {
	const nameEQ = `${name}=`;
	var ca = [];
	if (typeof document !== "undefined") {
		try {
			ca = document.cookie.split(";");
		} catch (error) {
			console.warn(error);
		}
	}
	
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.startsWith(" ")) {
			c = c.slice(1, c.length);
		}
		if (c.startsWith(nameEQ)) {
			return c.slice(nameEQ.length, c.length);
		}
	}
	return null;
}

function eraseCookie(name /*STRING*/) {
	document.cookie = `${name}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
}

function getParameterByName(name /*STRING*/) {
	const url = window.location.href;
	name = name.replace(/[[\]]/g, "\\$&");
	const regex = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`);
	const results = regex.exec(url);
	if (!results) {
		return null;
	}
	if (!results[2]) {
		return "";
	}
	return decodeURIComponent(results[2].replaceAll("+", " "));
}

export { setCookie, getCookie, eraseCookie, getParameterByName };
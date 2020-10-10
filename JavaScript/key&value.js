function keysAndValues(obj) {
	let key_arr = Object.keys(obj);
	let val_arr = key_arr.map(key => {
		return obj[key]
	})
	return [key_arr, val_arr]
}

console.log(keysAndValues({
    'a': 1,
    'b': 2,
    'c': 3,
}));
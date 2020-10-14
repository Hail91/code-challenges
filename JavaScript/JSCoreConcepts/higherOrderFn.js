// Returns a function that can access the outer function scope with parameter 'n'
// That function then returns the sum of both parameter n and parameter s.
function add(n) {
	return function(s) { 
		return n + s
	}
}

console.log(add(10)(20))
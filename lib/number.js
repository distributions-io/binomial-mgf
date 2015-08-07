'use strict';

// FUNCTIONS //

var exp = Math.exp,
	pow = Math.pow;


// MGF //

/**
* FUNCTION: mgf( x, n, p )
*	Evaluates the moment-generating function (MGF) for a Binomial distribution with number of trials `n` and success probability `p` at a value `t`.
*
* @param {Number} t - input value
* @param {Number} n - number of trials
* @param {Number} p - success probability
* @returns {Number} evaluated MGF
*/
function mgf( t, n, p ) {
	var base = 1 - p + p * exp(t);
	return pow( base, n );
} // end FUNCTION mgf()


// EXPORTS //

module.exports = mgf;

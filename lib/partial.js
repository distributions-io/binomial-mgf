'use strict';

// FUNCTIONS //


// PARTIAL //

/**
* FUNCTION: partial( n, p )
*	Partially applies number of trials `n` and success probability `p` and returns a function for evaluating the moment-generating function (MGF) for a Binomial distribution.
*
* @param {Number} n - number of trials
* @param {Number} p - success probability
* @returns {Function} MGF
*/
function partial( n, p ) {

	/**
	* FUNCTION: mgf( t )
	*	Evaluates the moment-generating function (MGF) for a Binomial distribution.
	*
	* @private
	* @param {Number} t - input value
	* @returns {Number} evaluated MGF
	*/
	return function mgf( t ) {

	};
} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;

'use strict';

// MODULES //

var partial = require( './partial.js' );


// MGF //

/**
* FUNCTION: mgf( out, arr, n, p )
*	Evaluates the moment-generating function (MGF) for a Binomial distribution with number of trials `n` and success probability `p` for each array element.
*
* @param {Array|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array} out - output array
* @param {Array} arr - input array
* @param {Number} n - number of trials
* @param {Number} p - success probability
* @returns {Number[]|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array} output array
*/
function mgf( y, x, n, p ) {
	var len = x.length,
		fcn,
		i;

	fcn = partial( n, p );
	for ( i = 0; i < len; i++ ) {
		if ( typeof x[ i ] === 'number' ) {
			y[ i ] = fcn( x[ i ] );
		} else {
			y[ i ] = NaN;
		}
	}
	return y;
} // end FUNCTION mgf()


// EXPORTS //

module.exports = mgf;

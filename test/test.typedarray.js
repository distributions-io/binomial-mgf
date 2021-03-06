/* global describe, it, require */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Check whether an element is a finite number
	isFiniteNumber = require( 'validate.io-finite' ),

	// Module to be tested:
	mgf = require( './../lib/typedarray.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'typed-array mgf', function tests() {
	var validationData = require( './fixtures/typedarray.json' ),
		n = validationData.n,
		p = validationData.p;

	it( 'should export a function', function test() {
		expect( mgf ).to.be.a( 'function' );
	});

	it( 'should evaluate the  moment-generating function', function test() {
		var data, actual, expected, i;

		data = new Float64Array( validationData.data );
		actual = new Float64Array( data.length );

		actual = mgf( actual, data, n, p );

		expected = new Float64Array( validationData.expected.map( function( d ) {
			return d === 'Inf' ? Infinity : d;
		}) );

		for ( i = 0; i < actual.length; i++ ) {
			if ( isFiniteNumber( actual[ i ] )&& isFiniteNumber( expected[ i ] ) ) {
				assert.closeTo( actual[ i ], expected[ i ], 1e-1 );
			}
		}
	});

	it( 'should return an empty array if provided an empty array', function test() {
		assert.deepEqual( mgf( new Int8Array(), new Int8Array(), n, p ), new Int8Array() );
	});

});

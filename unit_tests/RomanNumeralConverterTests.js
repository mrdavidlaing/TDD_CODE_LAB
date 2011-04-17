describe("RomanNumeralConverter unit tests", function() {
	var convert = function(number) {
		return new TDD.RomanNumeralConverter().convert(number);
	};
	
	it("romanNumeral For One Is I", function() {
		expect(convert(1)).toEqual("I");
	});
});


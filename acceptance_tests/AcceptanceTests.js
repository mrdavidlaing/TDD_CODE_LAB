describe("AcceptanceTests", function() {
	var convert = function(number) {
		return new TDD.RomanNumeralConverter().convert(number);
	};
	
	it("romanNumeralForOneIsI", function() {
		expect(convert(1)).toEqual("I");
	});
	
	it("romanNumeralForTwoIsII", function() {
		expect(convert(2)).toEqual("II");
	});
	
	it("romanNumeralForThreeIsIII", function() {
		expect(convert(3)).toEqual("III");
	});
	
	it("romanNumeralForFourIsIV", function() {
		expect(convert(4)).toEqual("IV");
	});
	
	it("romanNumeralForFiveIsV", function() {
		expect(convert(5)).toEqual("V");
	});
	
	it("romanNumeralForSixIsVI", function() {
		expect(convert(6)).toEqual("VI");
	});
	
	it("romanNumeralForNineIsIX", function() {
		expect(convert(9)).toEqual("IX");
	});
	
	it("romanNumeralForTenIsX", function() {
		expect(convert(10)).toEqual("X");
	});
	
	it("romanNumeralForElevenIsXI", function() {
		expect(convert(11)).toEqual("XI");
	});
	
	it("romanNumeralForFourteenIsXIV", function() {
		expect(convert(14)).toEqual("XIV");
	});
	
	it("romanNumeralForFifteenIsXV", function() {
		expect(convert(15)).toEqual("XV");
	});
		
	it("romanNumeralForNineteenIsXIX", function() {
		expect(convert(19)).toEqual("XIX");
	});
	
	it("romanNumeralForTwentyIsXX", function() {
		expect(convert(20)).toEqual("XX");
	});
	
	it("romanNumeralForFortyIsXL", function() {
		expect(convert(40)).toEqual("XL");
	});
	
	it("romanNumeralForFortyNineIsXLIX", function() {
		expect(convert(49)).toEqual("XLIX");
	});
	
	it("romanNumeralForFiftyIsL", function() {
		expect(convert(50)).toEqual("L");
	});
	
	it("romanNumeralForFiftyOneIsLI", function() {
		expect(convert(51)).toEqual("LI");
	});
	
	it("romanNumeralForNinetyIsXC", function() {
		expect(convert(90)).toEqual("XC");
	});
	
	it("romanNumeralForNinetyNineIsXCIX", function() {
		expect(convert(99)).toEqual("XCIX");
	});
	
	it("romanNumeralForOneHundredIsC", function() {
		expect(convert(100)).toEqual("C");
	});
	
	it("romanNumeralForOneHundredAndOneIsCI", function() {
		expect(convert(101)).toEqual("CI");
	});
	
	it("romanNumeralForFourHundredIsCD", function() {
		expect(convert(400)).toEqual("CD");
	});
	
	it("romanNumeralForFourHundredNinetyNineIsCDXCIX", function() {
		expect(convert(499)).toEqual("CDXCIX");
	});
	
	it("romanNumeralForFiveHundredIsD", function() {
		expect(convert(500)).toEqual("D");
	});
	
	it("romanNumeralForFiveHundredAndOneIsDI", function() {
		expect(convert(501)).toEqual("DI");
	});
	
	it("romanNumeralForNineHundredIsCM", function() {
		expect(convert(900)).toEqual("CM");
	});
	
	it("romanNumeralForNineHundredNinetyNineIsCMXCIX", function() {
		expect(convert(999)).toEqual("CMXCIX");
	});
	
	it("romanNumeralForOneThousandIsM", function() {
		expect(convert(1000)).toEqual("M");
	});
	
	it("romanNumeralForOneThousandAndOneIsMI", function() {
		expect(convert(1001)).toEqual("MI");
	});
	
	it("romanNumeralFor4999IsMMMMCMXCIX", function() {
		expect(convert(4999)).toEqual("MMMMCMXCIX");
	});
	
});
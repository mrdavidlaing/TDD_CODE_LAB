# TDD CODE LAB - Javascript

## Getting started

### With a browser
#### Prerequisites
* A (modern) browser
* A text editor

#### Instructions
* Open Run_UnitTests.html in a browser - [A]
* Edit /src & /unit_tests in your favourite text editor
* Refresh [A] to re-run the tests

When you have finished; open Run_AcceptanceTests.html in a browser

### Using JsTestDriver
#### Prerequisites
* A (modern) browser
* Java & Ant
* A text editor

#### Instructions
* Start the jsTestDriver server: ```ant start-jstestdriver```
* Capture a jsTestDriver browser slave by opening: ```http://localhost:4224/capture```
* Edit /src & /unit_tests in your favourite text editor
* ```ant run-unit-tests```

When you have finished run: ```ant run-acceptance-tests```

### Using JsTestDriver & Eclipse IDE for JavaScript Web Developers
#### Prerequisites
* [Eclipse IDE for JavaScript Web Developers](http://www.eclipse.org/downloads/packages/eclipse-ide-javascript-web-developers/heliosr)
* [JsTestDriver eclipse plugin](http://code.google.com/p/js-test-driver/wiki/UsingTheEclipsePlugin)

#### Instructions
* Import the project
* Create a new Run definition, using jstestdriver.unit.conf
* Edit /src & /unit_tests - each save should rerun the tests

When you have finished; open Run_AcceptanceTests.html in a browser

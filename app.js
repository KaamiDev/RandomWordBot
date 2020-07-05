var fs = require('fs');
var svg2img = require('svg2img');

var svgString = `
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1200" height="675" viewBox="0 0 1200 675">
  <defs>
    <pattern id="pattern" preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 400 400">
    </pattern>
    <clipPath id="clip-Web_1920_1">
      <rect width="1200" height="675"/>
    </clipPath>
  </defs>
  <g id="Web_1920_1" data-name="Web 1920 – 1" clip-path="url(#clip-Web_1920_1)">
    <rect width="1200" height="675" fill="#3772ff"/>
    <rect id="Rectangle_1" data-name="Rectangle 1" width="1027" height="189" rx="31" transform="translate(87 243)" fill="#2c6bff"/>
    <text id="ALPHABET" x="50%" text-anchor="middle" y="54%" fill="#fff" font-size="65" font-family="OpenSans-Bold, Open Sans" font-weight="700">ALPHABET</text>
    <text id="WordGenerator_by_Kaami_-_kaamidev.com" data-name="WordGenerator by Kaami - kaamidev.com" transform="translate(50 637)" fill="#fff" font-size="25" font-family="OpenSans-Bold, Open Sans" font-weight="700"><tspan x="0" y="0">WordGenerator</tspan><tspan y="0" xml:space="preserve" font-family="OpenSans-Regular, Open Sans" font-weight="400"> by </tspan><tspan y="0">Kaami</tspan><tspan y="0" xml:space="preserve" font-family="OpenSans-Regular, Open Sans" font-weight="400"> - </tspan><tspan y="0" font-family="OpenSans-Regular, Open Sans" font-weight="400" text-decoration="underline">Word #1</tspan></text>
    <rect id="_33z8YTL4_400x400" data-name="33z8YTL4_400x400" width="40" height="40" rx="20" transform="translate(38 607)" fill="url(#pattern)"/>
  </g>
</svg>`;

svg2img(svgString, function(error, buffer) {
	//returns a Buffer
	fs.writeFileSync('foo1.png', buffer);
});

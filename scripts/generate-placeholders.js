const fs = require('fs');
const path = require('path');

// Create SVG placeholder images
const createPlaceholder = (name, text) => {
  const svg = `
    <svg width="800" height="400" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#0A192F"/>
      <text x="50%" y="50%" font-family="monospace" font-size="24" fill="#64FFDA" text-anchor="middle" dominant-baseline="middle">
        ${text}
      </text>
    </svg>
  `;

  fs.writeFileSync(path.join(__dirname, `../public/projects/${name}.svg`), svg);
};

// Create placeholder images
createPlaceholder('nanofriend', 'NanoFriend App');
createPlaceholder('vendor-risk', 'Vendor Risk Assessment Toolkit');
createPlaceholder('password-audit', 'Password Audit Remediation Plan');

console.log('Placeholder images generated successfully!'); 
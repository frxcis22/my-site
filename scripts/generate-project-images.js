const fs = require('fs');
const path = require('path');

// Create projects directory if it doesn't exist
const projectsDir = path.join(__dirname, '../public/projects');
if (!fs.existsSync(projectsDir)) {
  fs.mkdirSync(projectsDir, { recursive: true });
}

// Project image configurations
const projectImages = [
  {
    filename: 'vendor-risk.jpg',
    title: 'Vendor Risk Assessment',
    color: '#00ff9d',
    bgColor: '#0a0a0a'
  },
  {
    filename: 'data-security.jpg',
    title: 'Data Security Platform',
    color: '#00ff9d',
    bgColor: '#1a1a1a'
  },
  {
    filename: 'security-assessment.jpg',
    title: 'Security Assessment',
    color: '#00ff9d',
    bgColor: '#0a0a0a'
  },
  {
    filename: 'mobile-app.jpg',
    title: 'Mobile Application',
    color: '#00ff9d',
    bgColor: '#1a1a1a'
  },
  {
    filename: 'network-analysis.jpg',
    title: 'Network Analysis',
    color: '#00ff9d',
    bgColor: '#0a0a0a'
  },
  {
    filename: 'tprm-system.jpg',
    title: 'TPRM System',
    color: '#00ff9d',
    bgColor: '#1a1a1a'
  },
  {
    filename: 'threat-analysis.jpg',
    title: 'Threat Analysis',
    color: '#00ff9d',
    bgColor: '#0a0a0a'
  }
];

// Generate SVG placeholder for each project
projectImages.forEach(project => {
  const svgContent = `
<svg width="400" height="300" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="300" fill="${project.bgColor}"/>
  <rect x="20" y="20" width="360" height="260" fill="none" stroke="${project.color}" stroke-width="2" rx="10"/>
  <text x="200" y="150" font-family="monospace" font-size="16" fill="${project.color}" text-anchor="middle">${project.title}</text>
  <text x="200" y="180" font-family="monospace" font-size="12" fill="${project.color}" text-anchor="middle" opacity="0.7">Project Image</text>
</svg>`;

  const filePath = path.join(projectsDir, project.filename.replace('.jpg', '.svg'));
  fs.writeFileSync(filePath, svgContent);
  console.log(`Generated: ${project.filename.replace('.jpg', '.svg')}`);
});

console.log('Project images generated successfully!'); 
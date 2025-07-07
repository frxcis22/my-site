# Resume Implementation Guide

## Overview

Your portfolio now includes a comprehensive resume system with both a downloadable PDF and an interactive web component. Here's how to maintain and update your resume information.

## Files Overview

### 1. PDF Resume Generation
- **File**: `scripts/generate-resume.js`
- **Purpose**: Generates a professional PDF resume
- **Output**: `public/resume.pdf`

### 2. Interactive Resume Component
- **File**: `src/components/Resume.tsx`
- **Purpose**: Displays resume information on the website
- **Features**: Tabbed sections, animations, download button

### 3. Resume Data
- **File**: `src/data/resume.ts`
- **Purpose**: Centralized data storage for resume information
- **Benefits**: Easy to update, type-safe, reusable

## How to Update Your Resume

### Option 1: Update the Data File (Recommended)

1. **Edit** `src/data/resume.ts`
2. **Update** your information in the `resumeData` object
3. **Save** the file
4. **Restart** the development server

### Option 2: Update the PDF Script

1. **Edit** `scripts/generate-resume.js`
2. **Update** the content in the PDF generation script
3. **Run** `node scripts/generate-resume.js`
4. **Check** the updated PDF in `public/resume.pdf`

## Resume Sections

### Contact Information
```typescript
contact: {
  name: 'Francis Fallah Bockarie',
  location: 'Sharon Hill, PA',
  email: 'francis.bockarie@example.com',
  phone: '(555) 123-4567',
  linkedin: 'linkedin.com/in/francisbockarie',
  github: 'github.com/francisbockarie'
}
```

### Professional Summary
A brief overview of your background and career goals.

### Education
- Degree and major
- School name
- Graduation date
- GPA
- Relevant coursework

### Experience
Each job entry includes:
- Job title
- Company name
- Employment period
- Brief description
- Key achievements (bullet points)

### Skills
Organized by categories:
- Security Tools
- Operating Systems
- Networking
- Programming/Scripting
- Cloud Platforms
- Security Frameworks

### Certifications
- Certification name
- Status (In Progress, Completed, Planned)

### Projects
- Project title
- Description
- Key achievements

## Customization Tips

### Adding New Sections
1. Update the `sections` array in `Resume.tsx`
2. Add the corresponding content in `resume.ts`
3. Add the rendering logic in the component

### Styling Changes
- Edit `src/app/globals.css` for global styles
- Modify the Resume component for specific styling
- Use Tailwind CSS classes for quick styling

### PDF Customization
- Modify `scripts/generate-resume.js` for PDF layout changes
- Adjust fonts, spacing, and formatting
- Add new sections as needed

## Best Practices

### Content Updates
- Keep information current and accurate
- Use action verbs for achievements
- Quantify results when possible
- Tailor content for cybersecurity roles

### Technical Skills
- Group related skills together
- Include proficiency levels if relevant
- Add new technologies as you learn them
- Remove outdated skills

### Experience Descriptions
- Focus on cybersecurity-related achievements
- Highlight security tools and methodologies
- Emphasize problem-solving and analytical skills
- Include compliance and risk management experience

## Commands

### Generate PDF Resume
```bash
node scripts/generate-resume.js
```

### Start Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

## File Structure
```
my-site/
├── scripts/
│   └── generate-resume.js          # PDF generation script
├── src/
│   ├── components/
│   │   └── Resume.tsx              # Interactive resume component
│   └── data/
│       └── resume.ts               # Resume data
├── public/
│   └── resume.pdf                  # Generated PDF resume
└── RESUME_GUIDE.md                 # This guide
```

## Troubleshooting

### PDF Not Generating
- Check if `pdfkit` is installed: `npm install pdfkit`
- Ensure the `public` directory exists
- Check for syntax errors in the script

### Component Not Updating
- Restart the development server
- Clear browser cache
- Check for TypeScript errors

### Styling Issues
- Verify Tailwind CSS is properly configured
- Check for conflicting CSS classes
- Ensure responsive design works on mobile

## Next Steps

1. **Update Personal Information**: Replace placeholder contact details with your actual information
2. **Add Real Experience**: Update with your actual work experience and achievements
3. **Customize Skills**: Add your specific technical skills and tools
4. **Add Projects**: Include relevant cybersecurity projects and achievements
5. **Update Certifications**: Add your actual certifications and their status
6. **Test Everything**: Ensure both PDF and web versions display correctly

## Support

If you encounter any issues:
1. Check the console for error messages
2. Verify all dependencies are installed
3. Ensure file paths are correct
4. Test on different browsers and devices

Your resume system is now fully integrated into your portfolio and ready for customization! 
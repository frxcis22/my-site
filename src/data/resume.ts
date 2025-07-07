export interface ResumeData {
  contact: {
    name: string;
    location: string;
    email: string;
    phone: string;
    linkedin: string;
    github: string;
  };
  summary: string;
  education: {
    degree: string;
    school: string;
    graduation: string;
    gpa: string;
    coursework: string[];
  };
  experience: Array<{
    title: string;
    company: string;
    period: string;
    description: string;
    achievements: string[];
  }>;
  skills: Record<string, string[]>;
  certifications: Array<{
    name: string;
    status: string;
  }>;
  projects: Array<{
    title: string;
    description: string;
    achievements: string[];
  }>;
}

export const resumeData: ResumeData = {
  contact: {
    name: 'Francis Fallah Bockarie',
    location: 'Sharon Hill, PA',
    email: 'francisbock20@gmail.com',
    phone: '6104833022',
    linkedin: 'linkedin.com/in/francisbockarie',
    github: 'github.com/francisbockarie'
  },
  summary: 'IT Security & Risk professional with experience in vulnerability assessments, incident response, and technical support. Demonstrates strong leadership, communication, and problem-solving skills through cross-functional projects and student-led initiatives. Adept at implementing security frameworks and building secure applications to support enterprise goals. Passionate about safeguarding digital environments through proactive and scalable strategies.',
  education: {
    degree: 'Bachelor of Science in Information Technology Security & Risk Analysis',
    school: 'Pennsylvania State University – Brandywine',
    graduation: 'August 2019 - May 2024',
    gpa: '3.8/4.0',
    coursework: ['Network Security', 'Risk Management', 'Information Assurance', 'Security Architecture']
  },
  experience: [
    {
      title: 'Audio/Visual Technician & Security Assistant',
      company: 'The Institute\'s Knowledge Company',
      period: 'July 2024 – Present',
      description: 'Maintaining corporate conference room systems and leading vendor risk assessments while supporting data security platform implementation.',
      achievements: [
        'Maintained and supported corporate conference room systems through daily diagnostics and AV checks',
        'Coordinated multimedia setup for high-level meetings, including visuals and hybrid audio-visual solutions',
        'Led the development of vendor assessments in OneTrust, writing and customizing over 70% of the third-party risk questionnaire used to evaluate the security, risk, compliance, Governance, and data privacy posture of external vendors',
        'Supported implementation and training efforts for Varonis Data Security Platform, assisting in monitoring sensitive data access, configuring alerts, and aligning governance with internal risk policies'
      ]
    },
    {
      title: 'IT Intern – Infrastructure & Security',
      company: 'United States Liability Insurance (USLI)',
      period: 'March 2023 – May 2024',
      description: 'Conducted internal threat analysis and provided technical support while researching cybersecurity trends to strengthen IT infrastructure.',
      achievements: [
        'Conducted internal threat analysis and helped reduce risk exposure through patching and awareness',
        'Provided end-user technical support for over 200 employees, resolving hardware/software issues',
        'Researched cybersecurity trends and suggested improvements to strengthen the IT infrastructure',
        'Partnered with cross-functional teams to reinforce endpoint protection and IT compliance efforts'
      ]
    },
    {
      title: 'Engineering Technician (Contractor)',
      company: 'Communication Test Design, Inc. (CTDI)',
      period: 'June 2024 – July 2024',
      description: 'Performed diagnostics and QA testing on telecommunications hardware while supporting engineers with configuration and repairs.',
      achievements: [
        'Performed diagnostics and QA testing on telecommunications hardware to meet specs',
        'Supported engineers with hardware configuration, repairs, and technical documentation',
        'Assisted in reducing testing cycle time by 10% through accurate reporting and efficient troubleshooting'
      ]
    }
  ],
  skills: {
    'Security & Risk': ['Vulnerability Assessment', 'Risk Analysis', 'Incident Response', 'Compliance', 'Third-party Risk Management', 'Project Management', 'IST Integration'],
    'Tools': ['Wireshark', 'MySQL', 'OneTrust', 'Varonis', 'Jira', 'Active Directory'],
    'Programming': ['Java', 'Python', 'HTML', 'CSS', 'JavaScript', 'Command Line (CMD)'],
    'Other': ['Microsoft Office Suite', 'Technical Documentation']
  },
  certifications: [
    { name: 'CompTIA Security+', status: 'In Progress' },
    { name: 'Certified in Vendor Risk Management', status: 'In Progress' },
    { name: 'AWS Cloud Practitioner', status: 'In Progress' },
    { name: 'Microsoft Azure Fundamentals', status: 'Planned' }
  ],
  projects: [
    {
      title: 'Vendor Risk Assessment System',
      description: 'Led development of comprehensive vendor assessment framework in OneTrust',
      achievements: [
        'Customized over 70% of third-party risk questionnaire',
        'Evaluated security, risk, compliance, governance, and data privacy posture of external vendors',
        'Implemented scalable assessment process for enterprise vendor management'
      ]
    },
    {
      title: 'Data Security Platform Implementation',
      description: 'Supported Varonis Data Security Platform deployment and training',
      achievements: [
        'Assisted in monitoring sensitive data access and configuring alerts',
        'Aligned governance with internal risk policies',
        'Provided training and support for platform users'
      ]
    }
  ]
}; 
import { Component } from '@angular/core';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent {

  after10thOptions: string[] = [
    'All',
    'Intermediate',
    'Vocational Courses',
    'ITI',
    'Polytechnic',
    'Skill Development Courses'
  ];

  selectedAfter10th = 'All';

  groupOptionsMap: { [key: string]: string[] } = {
    'Intermediate': ['All', 'MPC', 'BiPC', 'MEC', 'CEC', 'HEC'],
    'Vocational Courses': [
      'All',
      'Agriculture',
      'Automobile Engineering Technician',
      'Banking & Financial Services',
      'Computer Hardware & Networking',
      'Computer Science & Engineering',
      'Electrical Technician',
      'Electronics Technology',
      'Fashion Designing',
      'Food Processing',
      'General Insurance',
      'Hotel Management & Catering',
      'Medical Lab Technician',
      'Multimedia & Animation',
      'Office Assistantship',
      'Retail Management',
      'Tourism & Travel Techniques',
      'Web Designing'
    ], 
    'ITI': ['All', 'Electrician', 'Fitter', 'Welder', 'Turner', 'Machinist', 'Mechanic Diesel', 'Mechanic Motor Vehicle (MMV)', 'Refrigeration & AC Technician', 'Electronics Mechanic', 'Instrument Mechanic'],
    'Polytechnic': ['All', 'Diploma in Computer Science Engineering (CSE)', 'Diploma in Mechanical Engineering', 'Diploma in Civil Engineering', 'Diploma in Electrical Engineering', 'Diploma in Electronics & Communication Engineering (ECE)', 'Diploma in Automobile Engineering', 'Diploma in Chemical Engineering', 'Diploma in Information Technology (IT)'],
    'Skill Development Courses': ['All', 'Basic Computer Skills', 'Advanced Excel & MS Office', 'Tally & GST Accounting', 'Digital Marketing', 'Web Development (Frontend Basics)', 'Graphic Design', 'UI/UX Design Basics', 'Data Entry Operator Training']
  };

  groupOptions: string[] = ['All'];
  selectedGroup = 'All';
  // Final Degree Options Map

  degreeOptionsMap: { [key: string]: string[] } = {

    // ================= INTERMEDIATE =================

    'MPC': [
      'All',
      'BTech Computer Science Engineering (CSE)',
      'BTech Information Technology (IT)',
      'BTech Artificial Intelligence & Data Science',
      'BTech Artificial Intelligence & Machine Learning',
      'BTech Electronics & Communication Engineering (ECE)',
      'BTech Electrical & Electronics Engineering (EEE)',
      'BTech Mechanical Engineering',
      'BTech Civil Engineering',
      'BTech Aeronautical Engineering',
      'BTech Automobile Engineering',
      'BTech Biotechnology',
      'BTech Chemical Engineering',
      'BSc Mathematics',
      'BSc Physics',
      'BSc Statistics',
      'BSc Computer Science',
      'BSc Data Science',
      'BCA',
      'BCom',
      'BCom Computers',
      'BA',
      'BBA',
      'BArch',
      'Commercial Pilot Training',
      'Hotel Management'
    ],

    'BiPC': [
      'All',
      'MBBS',
      'BDS',
      'BAMS',
      'BHMS',
      'BUMS',
      'Veterinary Science',
      'BPharm',
      'Pharm D',
      'BSc Nursing',
      'BPT Physiotherapy',
      'BSc Biotechnology',
      'BSc Microbiology',
      'BSc Agriculture',
      'BSc Food Technology',
      'BSc Nutrition',
      'BSc Chemistry',
      'BSc Zoology',
      'BSc Botany',
      'BCA',
      'BCom',
      'BA',
      'BBA'
    ],

    'MEC': [
      'All',
      'BCom General',
      'BCom Computers',
      'BCom Accounting & Finance',
      'BCom Banking & Insurance',
      'BCom Taxation',
      'BBA',
      'BBM',
      'BCA',
      'BA Economics',
      'BA English',
      'BA Political Science',
      'CA Foundation',
      'CS Foundation',
      'CMA',
      'Hotel Management',
      'Digital Marketing'
    ],

    'CEC': [
      'All',
      'BCom General',
      'BCom Computers Application',
      'BCom Accounting & Finance',
      'BCom Banking & Insurance',
      'BBA',
      'BBM',
      'BCA',
      'BA Economics',
      'BA History',
      'BA Political Science',
      'BA Journalism',
      'CA Foundation',
      'CS Foundation',
      'CMA',
      'Hotel Management',
      'Event Management'
    ],

    'HEC': [
      'All',
      'BA History',
      'BA Economics',
      'BA Political Science',
      'BA Sociology',
      'BA Public Administration',
      'BA Journalism',
      'BCom General',
      'BBA',
      'BSc',
      'Hotel Management',
      'Fashion Designing',
      'Fine Arts',
      'Event Management'
    ],

    // ================= POLYTECHNIC =================

    'Diploma in Computer Science Engineering (CSE)': [
      'All',
      'BTech Lateral Entry Computer Science Engineering (CSE)',
      'BTech Lateral Entry Information Technology (IT)',
      'BTech Lateral Entry Artificial Intelligence & Data Science',
      'BSc Computer Science',
      'BCA',
      'MCA',
      'Software Development',
      'Web Development',
      'Data Science'
    ],

    'Diploma in Mechanical Engineering': [
      'All',
      'BTech Lateral Entry Mechanical Engineering',
      'BTech Production Engineering',
      'BTech Automobile Engineering',
      'Industrial Design',
      'CNC Programming',
      'CAD/CAM'
    ],

    'Diploma in Civil Engineering': [
      'All',
      'BTech Lateral Entry Civil Engineering',
      'Construction Management',
      'Structural Engineering',
      'AutoCAD Civil',
      'Surveying'
    ],

    'Diploma in Electrical Engineering': [
      'All',
      'BTech Lateral Entry Electrical Engineering',
      'Electrical & Electronics Engineering',
      'Power Systems',
      'Industrial Electrical Technician'
    ],

    'Diploma in Electronics & Communication Engineering (ECE)': [
      'All',
      'BTech Lateral Entry Electronics & Communication Engineering (ECE)',
      'Embedded Systems',
      'VLSI Design',
      'Communication Systems',
      'IoT Development'
    ],

    'Diploma in Automobile Engineering': [
      'All',
      'BTech Lateral Entry Automobile Engineering',
      'Automobile Design',
      'EV Technology',
      'Automobile Service Engineering'
    ],

    'Diploma in Chemical Engineering': [
      'All',
      'BTech Lateral Entry Chemical Engineering',
      'Petrochemical Technology',
      'Industrial Safety',
      'Process Engineering'
    ],

    'Diploma in Information Technology (IT)': [
      'All',
      'BTech Lateral Entry Information Technology (IT)',
      'Cyber Security',
      'Cloud Computing',
      'Software Engineering',
      'Full Stack Development'
    ],

    // ================= ITI =================

    'Electrician': [
      'All',
      'Diploma Electrical Engineering',
      'Industrial Electrician',
      'Power Technician',
      'Electrical Supervisor'
    ],

    'Fitter': [
      'All',
      'Diploma Mechanical Engineering',
      'Machine Maintenance',
      'Industrial Technician'
    ],

    'Welder': [
      'All',
      'Welding Technology',
      'Fabrication Technology',
      'Pipe Welding'
    ],

    'Turner': [
      'All',
      'CNC Programming',
      'Tool & Die Making',
      'Machine Operator'
    ],

    'Machinist': [
      'All',
      'Machine Tool Maintenance',
      'CNC Machinist',
      'Production Technology'
    ],

    'Mechanic Diesel': [
      'All',
      'Automobile Engineering',
      'Diesel Mechanic',
      'Heavy Vehicle Maintenance'
    ],

    'Mechanic Motor Vehicle (MMV)': [
      'All',
      'Automobile Engineering',
      'EV Technician',
      'Vehicle Maintenance'
    ],

    'Refrigeration & AC Technician': [
      'All',
      'HVAC Technician',
      'Cooling Systems',
      'AC Maintenance'
    ],

    'Electronics Mechanic': [
      'All',
      'Embedded Systems',
      'Electronics Engineering',
      'Mobile Service Technician'
    ],

    'Instrument Mechanic': [
      'All',
      'Instrumentation Engineering',
      'Process Control Systems',
      'Industrial Automation'
    ],
    // ================= VOCATIONAL INTERMEDIATE GROUPS =================

// ================= VOCATIONAL COURSES =================

'Agriculture': [
  'All',
  'BSc Agriculture',
  'BSc Horticulture',
  'BSc Forestry',
  'BSc Food Technology',
  'Agricultural Engineering',
  'Organic Farming',
  'Seed Technology'
],

'Automobile Engineering Technician': [
  'All',
  'Diploma Automobile Engineering',
  'BTech Automobile Engineering',
  'Mechanical Engineering',
  'EV Technology',
  'Vehicle Maintenance',
  'Automobile Design'
],

'Banking & Financial Services': [
  'All',
  'BCom General',
  'BCom Banking & Insurance',
  'BCom Accounting & Finance',
  'BBA Finance',
  'BA Economics',
  'CA Foundation',
  'CS Foundation',
  'CMA',
  'Banking Operations'
],

'Computer Hardware & Networking': [
  'All',
  'BCA',
  'BSc Computer Science',
  'BSc Information Technology',
  'Hardware Technician',
  'Network Administrator',
  'Desktop Support Engineer',
  'Cyber Security',
  'CCNA Networking',
  'Server Administration'
],

'Computer Science & Engineering': [
  'All',
  'BTech Computer Science Engineering (CSE)',
  'BTech Information Technology (IT)',
  'BSc Computer Science',
  'BSc Data Science',
  'BCA',
  'Software Development',
  'Cyber Security',
  'Artificial Intelligence',
  'Web Development'
],

'Electrical Technician': [
  'All',
  'Diploma Electrical Engineering',
  'BTech Electrical & Electronics Engineering (EEE)',
  'Industrial Electrician',
  'Power Systems',
  'Electrical Wiring',
  'Control Panel Technician'
],

'Electronics Technology': [
  'All',
  'Diploma Electronics & Communication Engineering',
  'BTech Electronics & Communication Engineering (ECE)',
  'Embedded Systems',
  'VLSI Design',
  'IoT Development',
  'Electronics Service Technician'
],

'Fashion Designing': [
  'All',
  'Fashion Technology',
  'Fashion Designing',
  'Textile Designing',
  'Costume Designing',
  'Boutique Management',
  'Apparel Designing'
],

'Food Processing': [
  'All',
  'BSc Food Technology',
  'Food Processing Technology',
  'Nutrition & Food Science',
  'Dairy Technology',
  'Quality Control Technician'
],

'General Insurance': [
  'All',
  'BCom Insurance',
  'BBA Insurance Management',
  'Insurance Management',
  'Risk Management',
  'Financial Services'
],

'Hotel Management & Catering': [
  'All',
  'Hotel Management',
  'Catering Technology',
  'Hospitality Management',
  'Tourism Management',
  'Food & Beverage Service'
],

'Medical Lab Technician': [
  'All',
  'BSc Medical Lab Technology',
  'BSc Nursing',
  'BPharm',
  'Pharm D',
  'Medical Laboratory Technician',
  'Healthcare Assistant'
],

'Multimedia & Animation': [
  'All',
  'Graphic Design',
  'Animation',
  'VFX',
  'Video Editing',
  'UI/UX Design',
  'Multimedia Designing'
],

'Office Assistantship': [
  'All',
  'BCom',
  'BBA',
  'Office Administration',
  'Data Entry Operator',
  'Advanced Excel',
  'Tally & GST',
  'Secretarial Practice'
],

'Retail Management': [
  'All',
  'BBA Retail Management',
  'BCom',
  'BBA',
  'Sales & Marketing',
  'Store Operations',
  'Supply Chain Management'
],

'Tourism & Travel Techniques': [
  'All',
  'Tourism Management',
  'Travel & Tourism',
  'Hotel Management',
  'Hospitality Management',
  'Airline & Airport Management'
],

'Web Designing': [
  'All',
  'Web Development',
  'Frontend Development',
  'HTML CSS JavaScript',
  'UI/UX Design',
  'Angular Development',
  'React Development',
  'Full Stack Development'
],
  };

  degreeOptions: string[] = ['All'];
  selectedDegree = 'All';


higherOptionsMap: { [key: string]: string[] } = {

  // ================= MPC =================

  'BTech Computer Science Engineering (CSE)': [
    'All',
    'MTech Computer Science Engineering',
    'MTech Artificial Intelligence',
    'MTech Data Science',
    'MCA',
    'MBA',
    'MS Computer Science',
    'Software Engineer',
    'Full Stack Developer',
    'AI Engineer',
    'Cyber Security Engineer'
  ],

  'BTech Information Technology (IT)': [
    'All',
    'MTech Information Technology',
    'MCA',
    'MBA',
    'Cloud Computing',
    'Cyber Security',
    'Software Architect'
  ],

  'BTech Artificial Intelligence & Data Science': [
    'All',
    'MTech AI & Data Science',
    'Machine Learning',
    'Deep Learning',
    'Data Scientist',
    'AI Research',
    'MBA'
  ],

  'BTech Artificial Intelligence & Machine Learning': [
    'All',
    'MTech AI & ML',
    'Data Science',
    'Machine Learning Engineer',
    'AI Engineer',
    'MBA'
  ],

  'BTech Electronics & Communication Engineering (ECE)': [
    'All',
    'MTech ECE',
    'Embedded Systems',
    'VLSI Design',
    'Communication Systems',
    'IoT Development'
  ],

  'BTech Electrical & Electronics Engineering (EEE)': [
    'All',
    'MTech EEE',
    'Power Systems',
    'Electrical Design',
    'Industrial Automation'
  ],

  'BTech Mechanical Engineering': [
    'All',
    'MTech Mechanical Engineering',
    'Automobile Engineering',
    'Production Engineering',
    'Industrial Design',
    'MBA'
  ],

  'BTech Civil Engineering': [
    'All',
    'MTech Civil Engineering',
    'Structural Engineering',
    'Construction Management',
    'AutoCAD',
    'Surveying'
  ],

  'BTech Aeronautical Engineering': [
    'All',
    'MTech Aeronautical Engineering',
    'Aircraft Maintenance',
    'Aerospace Engineering'
  ],

  'BTech Automobile Engineering': [
    'All',
    'MTech Automobile Engineering',
    'EV Technology',
    'Vehicle Design',
    'Automobile Service Engineering'
  ],

  'BTech Biotechnology': [
    'All',
    'MTech Biotechnology',
    'MSc Biotechnology',
    'Genetic Engineering',
    'Research Scientist'
  ],

  'BTech Chemical Engineering': [
    'All',
    'MTech Chemical Engineering',
    'Petrochemical Technology',
    'Industrial Safety',
    'Process Engineering'
  ],

  'BSc Mathematics': [
    'All',
    'MSc Mathematics',
    'Data Analytics',
    'Actuarial Science',
    'Teaching'
  ],

  'BSc Physics': [
    'All',
    'MSc Physics',
    'Research',
    'Space Science',
    'Teaching'
  ],

  'BSc Statistics': [
    'All',
    'MSc Statistics',
    'Data Science',
    'Business Analytics',
    'Actuarial Science'
  ],

  'BSc Computer Science': [
    'All',
    'MSc Computer Science',
    'MCA',
    'MBA',
    'Software Development',
    'Data Science'
  ],

  'BSc Data Science': [
    'All',
    'MSc Data Science',
    'AI & ML',
    'Business Analytics',
    'Data Engineering'
  ],

  'BCA': [
    'All',
    'MCA',
    'MSc Computer Science',
    'MBA',
    'Software Development',
    'Web Development'
  ],

  'BCom': [
    'All',
    'MCom',
    'MBA',
    'CA',
    'CS',
    'CMA',
    'Banking'
  ],

  'BCom Computers': [
    'All',
    'MCom',
    'MBA',
    'MCA',
    'Data Analytics',
    'Software Testing'
  ],

  'BA': [
    'All',
    'MA',
    'MBA',
    'Journalism',
    'Public Administration',
    'Teaching'
  ],

  'BBA': [
    'All',
    'MBA',
    'PGDM',
    'HR Management',
    'Marketing Management',
    'Finance Management'
  ],

  'BArch': [
    'All',
    'MArch',
    'Interior Design',
    'Urban Planning'
  ],

  'Commercial Pilot Training': [
    'All',
    'Airline Pilot',
    'Aviation Management',
    'Airport Operations'
  ],

  'Hotel Management': [
    'All',
    'MBA Hotel Management',
    'Hospitality Management',
    'Tourism Management'
  ],

  // ================= BiPC =================

  'MBBS': [
    'All',
    'MD',
    'MS',
    'Medical Research',
    'Hospital Administration'
  ],

  'BDS': [
    'All',
    'MDS',
    'Dental Surgery',
    'Orthodontics'
  ],

  'BAMS': [
    'All',
    'MD Ayurveda',
    'Ayurvedic Research'
  ],

  'BHMS': [
    'All',
    'MD Homeopathy',
    'Homeopathy Practice'
  ],

  'BUMS': [
    'All',
    'Unani Medicine',
    'Research'
  ],

  'Veterinary Science': [
    'All',
    'MVSc',
    'Animal Research',
    'Veterinary Practice'
  ],

  'BPharm': [
    'All',
    'MPharm',
    'Pharmaceutical Management',
    'Drug Research'
  ],

  'Pharm D': [
    'All',
    'Clinical Research',
    'Hospital Pharmacy',
    'Pharmacology'
  ],

  'BSc Nursing': [
    'All',
    'MSc Nursing',
    'Hospital Administration',
    'Healthcare Management'
  ],

  'BPT Physiotherapy': [
    'All',
    'MPT',
    'Sports Physiotherapy',
    'Rehabilitation'
  ],

  // ================= MEC / CEC / HEC =================

  'BCom General': [
    'All',
    'MCom',
    'MBA',
    'CA',
    'CS',
    'CMA'
  ],

  'BCom Accounting & Finance': [
    'All',
    'MCom',
    'MBA Finance',
    'CA',
    'Financial Analyst'
  ],

  'BCom Banking & Insurance': [
    'All',
    'MBA Banking',
    'Insurance Management',
    'Bank PO'
  ],

  'BBA Finance': [
    'All',
    'MBA Finance',
    'Investment Banking',
    'Financial Planning'
  ],

  'BA Economics': [
    'All',
    'MA Economics',
    'MBA',
    'UPSC',
    'Banking'
  ],

  'BA English': [
    'All',
    'MA English',
    'Journalism',
    'Teaching'
  ],

  'BA Political Science': [
    'All',
    'MA Political Science',
    'Public Administration',
    'UPSC'
  ],

  'BA History': [
    'All',
    'MA History',
    'Archaeology',
    'Teaching'
  ],

  'BA Journalism': [
    'All',
    'Mass Communication',
    'Digital Media',
    'News Reporting'
  ],


  'Web Development': [
    'All',
    'Full Stack Development',
    'Angular Development',
    'React Development',
    'Software Engineer'
  ],

  'Graphic Design': [
    'All',
    'UI/UX Design',
    'Animation',
    'VFX',
    'Multimedia Design'
  ],

  'Animation': [
    'All',
    '3D Animation',
    'VFX',
    'Game Design'
  ],

'BSc Biotechnology': [
  'All',
  'MSc Biotechnology',
  'Genetic Engineering',
  'Bioinformatics',
  'Research Scientist'
],

'BSc Botany': [
  'All',
  'MSc Botany',
  'Plant Science',
  'Agricultural Research',
  'Teaching'
],

'BSc Microbiology': [
  'All',
  'MSc Microbiology',
  'Clinical Research',
  'Lab Research'
],

'BSc Agriculture': [
  'All',
  'MSc Agriculture',
  'Agricultural Engineering',
  'Organic Farming'
],

'BSc Food Technology': [
  'All',
  'MSc Food Technology',
  'Food Safety',
  'Nutrition Science'
],

'BSc Nutrition': [
  'All',
  'MSc Nutrition',
  'Dietician',
  'Healthcare Nutrition'
],

'BSc Chemistry': [
  'All',
  'MSc Chemistry',
  'Chemical Research',
  'Industrial Chemistry'
],

'BSc Zoology': [
  'All',
  'MSc Zoology',
  'Animal Research',
  'Wildlife Science'
],

'BCom Taxation': [
  'All',
  'MCom',
  'MBA Finance',
  'CA',
  'GST Practitioner',
  'Tax Consultant'
],

'CA Foundation': [
  'All',
  'CA Intermediate',
  'CA Final',
  'Auditing',
  'Financial Analyst'
],

'CS Foundation': [
  'All',
  'CS Executive',
  'CS Professional',
  'Company Secretary'
],

'CMA': [
  'All',
  'Cost Accountant',
  'Financial Planning',
  'Management Accounting'
],

'BBM': [
  'All',
  'MBA',
  'Business Management',
  'HR Management'
],

'BA Sociology': [
  'All',
  'MA Sociology',
  'Social Work',
  'Teaching',
  'NGO Management'
],

'BA Public Administration': [
  'All',
  'MA Public Administration',
  'UPSC',
  'Government Jobs',
  'Public Policy'
],

'BSc': [
  'All',
  'MSc',
  'MBA',
  'Research',
  'Teaching'
],

'Fashion Designing': [
  'All',
  'Fashion Technology',
  'Textile Designing',
  'Boutique Management',
  'Apparel Designing'
],

'Fine Arts': [
  'All',
  'Master of Fine Arts',
  'Graphic Arts',
  'Animation',
  'Painting'
],

'Event Management': [
  'All',
  'MBA Event Management',
  'Corporate Events',
  'Wedding Planning'
],

'Digital Marketing': [
  'All',
  'SEO Specialist',
  'Social Media Marketing',
  'Content Marketing',
  'MBA Marketing'
],

'BSc Information Technology': [
  'All',
  'MSc Information Technology',
  'Cyber Security',
  'Cloud Computing'
],

'Hardware Technician': [
  'All',
  'Hardware Networking',
  'Desktop Engineer',
  'Server Maintenance'
],

'Network Administrator': [
  'All',
  'Network Security',
  'CCNA',
  'Cloud Networking'
],

'Desktop Support Engineer': [
  'All',
  'IT Support',
  'System Administration'
],

'Cyber Security': [
  'All',
  'Ethical Hacking',
  'Network Security',
  'Cyber Forensics'
],

'CCNA Networking': [
  'All',
  'CCNP',
  'Network Administration',
  'Cloud Networking'
],

'Server Administration': [
  'All',
  'Cloud Administration',
  'Linux Administration',
  'Windows Server'
],

'Software Development': [
  'All',
  'Full Stack Development',
  'Software Engineer',
  'Application Developer'
],

'Artificial Intelligence': [
  'All',
  'Machine Learning',
  'Deep Learning',
  'AI Engineer'
],
'VFX': [
  'All',
  'Animation',
  'Game Design',
  '3D Modeling'
],

'Video Editing': [
  'All',
  'Film Editing',
  'Motion Graphics'
],

'UI/UX Design': [
  'All',
  'Product Design',
  'Frontend UI Development'
],

'Multimedia Designing': [
  'All',
  'Graphic Design',
  'Animation'
],

'Office Administration': [
  'All',
  'Business Administration',
  'Office Management'
],

'Data Entry Operator': [
  'All',
  'Office Assistant',
  'Computer Operator'
],

'Advanced Excel': [
  'All',
  'MIS Executive',
  'Data Analytics'
],

'Tally & GST': [
  'All',
  'Accounting',
  'GST Practitioner'
],

'Secretarial Practice': [
  'All',
  'Office Secretary',
  'Administration'
],

'Sales & Marketing': [
  'All',
  'MBA Marketing',
  'Retail Sales'
],

'Store Operations': [
  'All',
  'Retail Management',
  'Inventory Management'
],

'Supply Chain Management': [
  'All',
  'Logistics',
  'Operations Management'
],

'Travel & Tourism': [
  'All',
  'Airline Management',
  'Tourism Operations'
],

'Airline & Airport Management': [
  'All',
  'Airport Operations',
  'Cabin Crew'
],

'Frontend Development': [
  'All',
  'Angular Development',
  'React Development'
],

'HTML CSS JavaScript': [
  'All',
  'Frontend Developer',
  'Web Designer'
],

'Angular Development': [
  'All',
  'Frontend Engineer',
  'Full Stack Development'
],

'React Development': [
  'All',
  'Frontend Engineer',
  'MERN Stack Developer'
],

'Full Stack Development': [
  'All',
  'Software Engineer',
  'Web Application Development'
],
// ================= POLYTECHNIC MISSING =================

'BTech Lateral Entry Computer Science Engineering (CSE)': [
  'All',
  'MTech Computer Science Engineering',
  'MCA',
  'Software Engineer',
  'Data Science',
  'AI Engineer'
],

'BTech Lateral Entry Information Technology (IT)': [
  'All',
  'MTech Information Technology',
  'Cloud Computing',
  'Cyber Security',
  'Software Architect'
],

'BTech Lateral Entry Artificial Intelligence & Data Science': [
  'All',
  'MTech AI & Data Science',
  'Machine Learning',
  'Deep Learning',
  'AI Engineer'
],

'MCA': [
  'All',
  'Software Architect',
  'Full Stack Developer',
  'Data Scientist',
  'Cloud Engineer'
],

'Data Science': [
  'All',
  'Machine Learning',
  'AI Engineer',
  'Data Analyst'
],

'BTech Lateral Entry Mechanical Engineering': [
  'All',
  'MTech Mechanical Engineering',
  'Production Engineering',
  'Industrial Design'
],

'BTech Production Engineering': [
  'All',
  'MTech Production Engineering',
  'Manufacturing Engineering'
],

'Industrial Design': [
  'All',
  'Product Design',
  'CAD Designer'
],

'CNC Programming': [
  'All',
  'CNC Operator',
  'Tool Design',
  'Manufacturing'
],

'CAD/CAM': [
  'All',
  'Mechanical Design',
  'Product Engineering'
],

'BTech Lateral Entry Civil Engineering': [
  'All',
  'MTech Civil Engineering',
  'Structural Engineering',
  'Construction Management'
],

'Construction Management': [
  'All',
  'Project Management',
  'Site Engineer'
],

'Structural Engineering': [
  'All',
  'MTech Structural Engineering',
  'Construction Design'
],

'AutoCAD Civil': [
  'All',
  'Civil Drafting',
  'Structural Drafting'
],

'Surveying': [
  'All',
  'Land Survey',
  'GIS Mapping'
],

'BTech Lateral Entry Electrical Engineering': [
  'All',
  'MTech Electrical Engineering',
  'Power Systems',
  'Industrial Automation'
],

'Electrical & Electronics Engineering': [
  'All',
  'MTech EEE',
  'Power Systems',
  'Electrical Design'
],

'Power Systems': [
  'All',
  'Electrical Utilities',
  'Industrial Power Management'
],

'Industrial Electrical Technician': [
  'All',
  'Electrical Maintenance',
  'Control Panel Design'
],

'BTech Lateral Entry Electronics & Communication Engineering (ECE)': [
  'All',
  'MTech ECE',
  'Embedded Systems',
  'VLSI Design'
],

'Embedded Systems': [
  'All',
  'IoT Development',
  'Firmware Engineering'
],

'VLSI Design': [
  'All',
  'Chip Design',
  'Semiconductor Industry'
],

'Communication Systems': [
  'All',
  'Networking',
  'Wireless Communication'
],

'IoT Development': [
  'All',
  'Embedded IoT',
  'Automation Systems'
],

'BTech Lateral Entry Automobile Engineering': [
  'All',
  'MTech Automobile Engineering',
  'EV Technology',
  'Vehicle Design'
],

'Automobile Design': [
  'All',
  'Vehicle Modeling',
  'Automobile CAD'
],

'EV Technology': [
  'All',
  'Electric Vehicle Design',
  'Battery Technology'
],

'Automobile Service Engineering': [
  'All',
  'Service Manager',
  'Automobile Maintenance'
],

'BTech Lateral Entry Chemical Engineering': [
  'All',
  'MTech Chemical Engineering',
  'Process Engineering',
  'Industrial Safety'
],

'Petrochemical Technology': [
  'All',
  'Oil & Gas Industry',
  'Refinery Operations'
],

'Industrial Safety': [
  'All',
  'Safety Engineering',
  'Factory Safety'
],

'Process Engineering': [
  'All',
  'Chemical Plant Operations',
  'Industrial Processing'
],

// ================= ITI MISSING =================

'Diploma Electrical Engineering': [
  'All',
  'BTech Electrical Engineering',
  'Power Systems',
  'Electrical Design'
],

'Industrial Electrician': [
  'All',
  'Electrical Maintenance',
  'Industrial Automation'
],

'Power Technician': [
  'All',
  'Power Plant Operations',
  'Electrical Utilities'
],

'Electrical Supervisor': [
  'All',
  'Industrial Supervision',
  'Electrical Inspection'
],

'Diploma Mechanical Engineering': [
  'All',
  'BTech Mechanical Engineering',
  'Production Engineering'
],

'Machine Maintenance': [
  'All',
  'Maintenance Engineer',
  'Industrial Maintenance'
],

'Industrial Technician': [
  'All',
  'Factory Operations',
  'Machine Operations'
],

'Welding Technology': [
  'All',
  'Pipe Welding',
  'Fabrication'
],

'Fabrication Technology': [
  'All',
  'Steel Fabrication',
  'Industrial Fabrication'
],

'Pipe Welding': [
  'All',
  'Industrial Welding',
  'Oil & Gas Welding'
],

'Tool & Die Making': [
  'All',
  'Tool Design',
  'Manufacturing'
],

'Machine Operator': [
  'All',
  'CNC Operations',
  'Machine Maintenance'
],

'Machine Tool Maintenance': [
  'All',
  'Industrial Maintenance',
  'Machine Servicing'
],

'CNC Machinist': [
  'All',
  'Manufacturing',
  'Production Operations'
],

'Production Technology': [
  'All',
  'Manufacturing Engineering',
  'Industrial Production'
],

'Automobile Engineering': [
  'All',
  'Vehicle Design',
  'EV Technology'
],

'Diesel Mechanic': [
  'All',
  'Heavy Vehicle Maintenance',
  'Engine Maintenance'
],

'Heavy Vehicle Maintenance': [
  'All',
  'Transport Maintenance',
  'Fleet Management'
],

'Vehicle Maintenance': [
  'All',
  'Automobile Service',
  'Garage Operations'
],

'HVAC Technician': [
  'All',
  'Cooling Systems',
  'AC Plant Operations'
],

'Cooling Systems': [
  'All',
  'Refrigeration Engineering',
  'HVAC Operations'
],

'AC Maintenance': [
  'All',
  'HVAC Service',
  'Cooling Plant Maintenance'
],

'Electronics Engineering': [
  'All',
  'Embedded Systems',
  'VLSI Design'
],

'Mobile Service Technician': [
  'All',
  'Mobile Hardware',
  'Electronics Repair'
],

'Instrumentation Engineering': [
  'All',
  'Industrial Automation',
  'Process Control'
],

'Process Control Systems': [
  'All',
  'Automation Engineering',
  'Industrial Systems'
],

'Industrial Automation': [
  'All',
  'PLC Programming',
  'Automation Engineer'
],

// ================= SKILL DEVELOPMENT COURSES =================

'Basic Computer Skills': [
  'All',
  'Computer Operator',
  'Office Assistant',
  'Data Entry'
],

'Advanced Excel & MS Office': [
  'All',
  'MIS Executive',
  'Data Analyst',
  'Office Administration'
],

'Tally & GST Accounting': [
  'All',
  'Accountant',
  'GST Practitioner',
  'Tax Consultant'
],

'Web Development (Frontend Basics)': [
  'All',
  'Frontend Developer',
  'Angular Developer',
  'React Developer'
],

'UI/UX Design Basics': [
  'All',
  'UI Designer',
  'UX Researcher',
  'Product Designer'
],

'Data Entry Operator Training': [
  'All',
  'Office Assistant',
  'Back Office Executive'
],
// ================= POLYTECHNIC EXTRA MISSING =================

'Software Engineering': [
  'All',
  'MTech Software Engineering',
  'Software Architect',
  'Application Development'
],

'Cloud Computing': [
  'All',
  'Cloud Architect',
  'AWS Engineer',
  'Azure Administrator'
],
// ================= VOCATIONAL EXTRA MISSING =================

'Agricultural Engineering': [
  'All',
  'MTech Agricultural Engineering',
  'Farm Machinery',
  'Irrigation Systems'
],

'Organic Farming': [
  'All',
  'Organic Agriculture',
  'Agri Business',
  'Sustainable Farming'
],

'Seed Technology': [
  'All',
  'Plant Breeding',
  'Agricultural Research'
],

'Banking Operations': [
  'All',
  'Bank PO',
  'Financial Services',
  'MBA Banking'
],

'Electrical Wiring': [
  'All',
  'Electrical Technician',
  'Industrial Wiring',
  'Maintenance'
],

'Control Panel Technician': [
  'All',
  'Industrial Automation',
  'PLC Programming'
],

'Electronics Service Technician': [
  'All',
  'Consumer Electronics',
  'Electronics Repair'
],

'Fashion Technology': [
  'All',
  'Textile Technology',
  'Fashion Merchandising'
],

'Textile Designing': [
  'All',
  'Textile Technology',
  'Fabric Design'
],

'Costume Designing': [
  'All',
  'Fashion Styling',
  'Film Costume Design'
],

'Boutique Management': [
  'All',
  'Fashion Business',
  'Retail Fashion Management'
],

'Apparel Designing': [
  'All',
  'Garment Technology',
  'Fashion Production'
],

'Food Processing Technology': [
  'All',
  'Food Manufacturing',
  'Quality Assurance'
],

'Nutrition & Food Science': [
  'All',
  'Clinical Nutrition',
  'Food Research'
],

'Dairy Technology': [
  'All',
  'Milk Processing',
  'Food Engineering'
],

'Quality Control Technician': [
  'All',
  'Quality Assurance',
  'Industrial Quality Control'
],

'BCom Insurance': [
  'All',
  'MBA Insurance',
  'Insurance Advisor',
  'Risk Analyst'
],

'BBA Insurance Management': [
  'All',
  'MBA Insurance',
  'Insurance Operations'
],

'Insurance Management': [
  'All',
  'Risk Management',
  'Insurance Consulting'
],

'Risk Management': [
  'All',
  'Financial Risk Analyst',
  'Insurance Risk Assessment'
],

'Financial Services': [
  'All',
  'Investment Banking',
  'Financial Planning'
],

'Catering Technology': [
  'All',
  'Food Production',
  'Hotel Operations'
],

'Hospitality Management': [
  'All',
  'Hotel Administration',
  'Tourism Management'
],

'Food & Beverage Service': [
  'All',
  'Restaurant Management',
  'Hospitality Services'
],

'BSc Medical Lab Technology': [
  'All',
  'MSc Medical Lab Technology',
  'Clinical Research',
  'Lab Management'
],

'Medical Laboratory Technician': [
  'All',
  'Clinical Diagnostics',
  'Lab Supervision'
],

'Healthcare Assistant': [
  'All',
  'Hospital Administration',
  'Patient Care Management'
],

// ================= SKILL DEVELOPMENT EXTRA =================

'Computer Operator': [
  'All',
  'Office Administration',
  'Data Entry Operations'
],

'Data Entry': [
  'All',
  'Back Office Executive',
  'Computer Operations'
],

'Data Analyst': [
  'All',
  'Business Analytics',
  'Data Science'
],

'Angular Developer': [
  'All',
  'Frontend Engineer',
  'Full Stack Developer'
],

'React Developer': [
  'All',
  'Frontend Engineer',
  'MERN Stack Developer'
],

'UI Designer': [
  'All',
  'UX Designer',
  'Product Designer'
],

'UX Researcher': [
  'All',
  'Product Research',
  'User Experience Design'
],

'Product Designer': [
  'All',
  'UI/UX Design',
  'Design Systems'
],

'Back Office Executive': [
  'All',
  'Office Administration',
  'Operations Executive'
],
'Pharmacy': [
  'All',
  'MPharm',
  'Clinical Research',
  'Drug Inspector',
  'Pharmaceutical Industry'
],

'Healthcare Management': [
  'All',
  'Hospital Administration',
  'Healthcare Operations',
  'Medical Coding'
],
'Mechanical Design': [
  'All',
  'CAD Engineer',
  'Product Design Engineer',
  'Industrial Design'
],

'Electrical Design': [
  'All',
  'Power Systems',
  'Industrial Automation',
  'Control Systems'
],
// ================= MISSING HIGHER OPTION MAPS =================

'Tourism Management': [
  'All',
  'MBA Tourism Management',
  'Travel Operations',
  'Hospitality Management',
  'Tour Manager'
],
'Healthcare Diagnostics': [
  'All',
  'Clinical Research',
  'Medical Lab Management',
  'Hospital Administration'
],

'Hotel Administration': [
  'All',
  'Hotel Operations',
  'Hospitality Services',
  'Tourism Management'
],

'Travel Operations': [
  'All',
  'Tourism Management',
  'Airline Operations',
  'Travel Consultancy'
],

'Food Production': [
  'All',
  'Culinary Arts',
  'Hotel Kitchen Operations',
  'Restaurant Management'
],

'Restaurant Management': [
  'All',
  'Hospitality Management',
  'Food & Beverage Operations',
  'Hotel Administration'
],

'Clinical Diagnostics': [
  'All',
  'Lab Research',
  'Clinical Research',
  'Healthcare Diagnostics'
],

'Lab Management': [
  'All',
  'Healthcare Administration',
  'Clinical Operations',
  'Medical Research'
],

'Patient Care Management': [
  'All',
  'Healthcare Management',
  'Hospital Administration',
  'Clinical Coordination'
],

'Textile Technology': [
  'All',
  'Fashion Technology',
  'Garment Manufacturing',
  'Textile Engineering'
],

'Fashion Merchandising': [
  'All',
  'Retail Fashion Management',
  'Fashion Business',
  'Brand Management'
],

'Fabric Design': [
  'All',
  'Textile Designing',
  'Fashion Designing',
  'Print Design'
],

'Fashion Styling': [
  'All',
  'Costume Designing',
  'Fashion Media',
  'Personal Styling'
],

'Garment Technology': [
  'All',
  'Apparel Production',
  'Textile Manufacturing',
  'Fashion Technology'
],

'Food Manufacturing': [
  'All',
  'Food Processing Industry',
  'Quality Assurance',
  'Food Engineering'
],

'Quality Assurance': [
  'All',
  'Industrial Quality',
  'Food Safety',
  'Process Auditing'
],

'Milk Processing': [
  'All',
  'Dairy Technology',
  'Food Processing',
  'Quality Control'
],

'Insurance Advisor': [
  'All',
  'Insurance Management',
  'Risk Assessment',
  'Financial Planning'
],

'Insurance Operations': [
  'All',
  'Insurance Administration',
  'Claims Management',
  'Risk Management'
],

'Insurance Consulting': [
  'All',
  'Financial Consulting',
  'Risk Analysis',
  'Insurance Planning'
],

'Financial Risk Analyst': [
  'All',
  'Risk Management',
  'Investment Analysis',
  'Financial Consulting'
],

'Consumer Electronics': [
  'All',
  'Electronics Repair',
  'Embedded Systems',
  'Service Engineering'
],

'Electronics Repair': [
  'All',
  'Mobile Service Technician',
  'Hardware Maintenance',
  'Consumer Electronics'
],

'PLC Programming': [
  'All',
  'Industrial Automation',
  'Control Systems',
  'Automation Engineer'
],

'Automation Engineer': [
  'All',
  'Industrial Automation',
  'Robotics',
  'Control Engineering'
],

'Computer Operations': [
  'All',
  'System Operations',
  'IT Support',
  'Office Automation'
],

'Business Analytics': [
  'All',
  'Data Science',
  'MBA Business Analytics',
  'Data Analyst'
],

'Application Development': [
  'All',
  'Software Engineering',
  'Full Stack Development',
  'Mobile App Development'
]
};

  higherOptions: string[] = ['All'];
  selectedHigher = 'All';
  relatedDegreesForHigher: string[] = [];
  higherOverviewMap: { [key: string]: any } = {
    
    'MTech Computer Science Engineering': {
      title: 'MTech Computer Science Engineering',
      about: 'Advanced postgraduate program focusing on deeper topics in computer science such as algorithms, distributed systems, machine learning and research methods.',
      whyChoose: 'Choose MTech CSE to specialise, move into R&D roles, or prepare for PhD and higher-level technical leadership.',
      eligibilityCriteria: ['BTech / BE in Computer Science or related field; qualifying scores (GPA) as required; GATE score preferred by many institutes.'],
      admissionProcess: 'Apply via GATE score based counselling or institute-specific entrance + interview rounds; follow university timelines.',
      courseDuration: 'Typically 2 years (full-time).',
      popularCourses: ['MTech - Computer Science', 'MTech - Artificial Intelligence', 'MTech - Data Science'],
      specializations: ['Algorithms', 'Machine Learning', 'Distributed Systems', 'Computer Vision', 'Networks', 'Security'],
      subjects: ['Advanced Algorithms', 'Distributed Systems', 'Machine Learning', 'Database Systems', 'Research Methodology'],
      skills: ['Advanced problem solving', 'Research techniques', 'System design', 'Machine learning workflows'],
      careerOptions: ['Research Scientist', 'Senior Software Engineer', 'AI Specialist', 'System Architect'],
      governmentJobs: ['Indian Space Research Organization (ISRO) - Scientist/Engineer', 'DRDO Scientist B/C (if eligible via exams)'],
      privateJobs: ['Senior Software Developer', 'ML Engineer', 'Data Scientist', 'R&D Engineer'],
      researchOpportunities: ['PhD positions', 'Research assistant roles at universities and institutes'],
      studyAbroadOptions: ['MS/PhD programs in US/Europe with research assistantships'],
      entranceExams: ['GATE', 'Institute-specific PG entrances'],
      scholarships: ['Institute scholarships (merit-based)', 'Government fellowships for GATE-qualified students'],
      topUniversities: ['IITs', 'NITs', 'IIITs', 'Top private engineering colleges'],
      salaryInfo: 'Entry-level packages vary; with an MTech, opportunities in R&D and specialist roles often command higher starting salaries.',
      futureScope: 'Strong for research, teaching, and advanced industry roles; opens leadership and specialist career paths.',
      videoLinks: [
        'https://www.youtube.com/watch?v=example_overview_playlist',
        'https://www.youtube.com/playlist?list=example_mtech_cse'
      ],
      interviewPrepLinks: [
        'https://www.geeksforgeeks.org/',
        'https://interviewbit.com/',
        'https://leetcode.com/'
      ],
      courseLinks: [
        'https://www.coursera.org/specializations/machine-learning',
        'https://www.edx.org/learn/computer-science'
      ],
      governmentJobLinks: [
        'https://www.upsc.gov.in/',
        'https://ssc.nic.in/'
      ],
      websites: [
        'https://iitb.ac.in/',
        'https://nptel.ac.in/'
      ],
      relatedResources: [
        'https://arxiv.org/',
        'https://dblp.org/'
      ],
      faqs: ['What is the typical duration?', 'How to apply using GATE?'],
      conclusion: 'MTech CSE strengthens theoretical foundations and research capability, helping graduates access specialized roles and academic tracks.'
    },
    
    'MBA': {
      title: 'Master of Business Administration (MBA)',
      about: 'A professional postgraduate degree focused on business management, leadership, strategy and functional areas such as finance, marketing, operations and HR.',
      whyChoose: 'Choose MBA to accelerate into management roles, switch careers, gain leadership skills and access higher-paying corporate positions.',
      eligibilityCriteria: ['Undergraduate degree in any discipline; work experience preferred for many top programs; valid entrance test scores (CAT/MAT/XAT/GMAT) where applicable.'],
      admissionProcess: 'Apply via national/state/NBSE entrance exams and institute-specific selection processes including group discussion and personal interview.',
      courseDuration: 'Typically 2 years full-time; part-time and executive MBA formats available.',
      popularCourses: ['MBA – Finance', 'MBA – Marketing', 'MBA – Human Resources', 'MBA – Operations', 'MBA – Business Analytics'],
      specializations: ['Finance', 'Marketing', 'Operations', 'Human Resources', 'Business Analytics', 'Strategy', 'Supply Chain'],
      subjects: ['Managerial Economics', 'Accounting & Finance', 'Marketing Management', 'Organisational Behaviour', 'Operations Research', 'Strategy'],
      skills: ['Leadership', 'Strategic Thinking', 'Communication', 'Financial Analysis', 'People Management'],
      careerOptions: ['Product Manager', 'Business Analyst', 'Consultant', 'Finance Manager', 'Marketing Manager'],
      governmentJobs: ['Management roles in PSUs, public sector banks via exams'],
      privateJobs: ['Consulting firms', 'Banks', 'FMCG', 'Tech product & growth teams'],
      researchOpportunities: ['Management research, PhD (Business Schools)'],
      studyAbroadOptions: ['MBA programs in Europe, US, and Asia; exchange semesters and dual degrees'],
      entranceExams: ['CAT', 'MAT', 'XAT', 'GMAT', 'CMAT'],
      scholarships: ['Institute scholarships, merit-based awards, need-based funding'],
      topUniversities: ['IIMs', 'XLRI', 'ISB', 'FMS', 'SPJIMR'],
      salaryInfo: 'Wide range — from mid-level packages to high pay in consulting and investment banking; average depends on specialization and institute.',
      applicationTimeline: ['Prepare for entrance test (6-9 months)', 'Apply to shortlisted schools (Nov–Mar)', 'Interviews and offer rounds (Jan–May)'],
      sampleCurriculum: ['Core management courses in year 1; electives and capstone projects in year 2; internships between years.'],
      certifications: ['PMP, Six Sigma, CFA (for finance-focused), Google Data Analytics (for analytics-focused)'],
      recommendedOnlineCourses: ['Business Strategy (Coursera)', 'Financial Accounting (edX)', 'Marketing Analytics (Coursera)'],
      faqs: ['Is work experience required? Not mandatory for all programs but helpful for executive formats.', 'Can I switch to tech? Yes, with analytics/product specialisations.'],
      conclusion: 'MBA is suitable for those seeking management careers, leadership roles or career pivots into business functions.'
    },
    
    'MCA': {
      title: 'Master of Computer Applications (MCA)',
      about: 'Postgraduate degree in computer applications and software development intended for graduates from computer-related and non-computer backgrounds.',
      whyChoose: 'Choose MCA to deepen applied computing skills, enter software development, or prepare for advanced technical roles.',
      eligibilityCriteria: ['Bachelor degree (BCA, BSc CS or related) with minimum marks; some institutes accept other disciplines with bridge courses; entrance tests like NIMCET.'],
      admissionProcess: 'Institute-specific entrance exams or merit-based admissions; check university timelines.',
      courseDuration: 'Typically 2 years (some older patterns 3 years).',
      popularCourses: ['MCA – Software Development', 'MCA – Systems', 'MCA – Data Science'],
      specializations: ['Software Engineering', 'Data Science', 'Cloud Computing', 'Cyber Security'],
      subjects: ['Programming (Java/Python)', 'Data Structures & Algorithms', 'Database Systems', 'Software Engineering', 'Web Technologies'],
      skills: ['Programming', 'System Design', 'Database Management', 'Problem Solving'],
      careerOptions: ['Software Developer', 'Full Stack Developer', 'Database Administrator', 'Systems Analyst'],
      entranceExams: ['NIMCET', 'Institute-specific tests'],
      topUniversities: ['State universities, reputed private institutes'],
      salaryInfo: 'Competitive for software roles; depends on specialization and portfolio.',
      recommendedOnlineCourses: ['Full Stack Web Development (Coursera)', 'Data Structures (GeeksforGeeks)'],
      conclusion: 'MCA is a practical choice for hands-on software careers and product development roles.'
    },
    
    'MSc Data Science': {
      title: 'MSc Data Science',
      about: 'A postgraduate degree blending statistics, machine learning, data engineering and domain-focused analytics.',
      whyChoose: 'Choose MSc Data Science to become a data scientist, analyst or ML engineer with strong statistical foundations.',
      eligibilityCriteria: ['Bachelor degree in mathematics, statistics, computer science, engineering or related fields.'],
      admissionProcess: 'Institute-specific entrance tests or merit-based selection.',
      courseDuration: 'Typically 1-2 years.',
      popularCourses: ['MSc Data Science', 'MSc Applied Statistics & Data Science'],
      specializations: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Big Data'],
      subjects: ['Probability & Statistics', 'Machine Learning', 'Data Mining', 'Big Data Tools', 'Data Visualization'],
      skills: ['Statistical Modelling', 'Machine Learning', 'Data Wrangling', 'Visualization'],
      careerOptions: ['Data Scientist', 'Data Analyst', 'ML Engineer', 'Business Intelligence Analyst'],
      topUniversities: ['Top universities offering dedicated data science programs'],
      recommendedOnlineCourses: ['Andrew Ng ML (Coursera)', 'Data Science Specializations (Coursera)'],
      conclusion: 'MSc Data Science is well suited for analytical careers in industry and research.'
    },
    
    'MD': {
      title: 'Doctor of Medicine (MD)',
      about: 'Postgraduate medical degree for physicians specialising in clinical fields (e.g., Internal Medicine, Paediatrics).',
      whyChoose: 'MD prepares doctors for specialist clinical practice, teaching and medical research.',
      eligibilityCriteria: ['MBBS degree with internship completion; qualifying NEET-PG or institute-specific exams in some countries.'],
      admissionProcess: 'Selection via NEET-PG or state/institute-level entrance exams; interviews in some institutions.',
      courseDuration: 'Typically 3 years.',
      careerOptions: ['Consultant Physician', 'Specialist Doctor', 'Medical Educator', 'Clinical Researcher'],
      topUniversities: ['Medical colleges and teaching hospitals'],
      conclusion: 'MD leads to specialist clinical practice and higher opportunities in healthcare leadership.'
    },
    
    'MPharm': {
      title: 'Master of Pharmacy (MPharm)',
      about: 'Advanced postgraduate qualification in pharmacy with specialisations in pharmaceutics, pharmacology, quality assurance and regulatory affairs.',
      whyChoose: 'Choose MPharm to enter pharmaceutical R&D, regulatory affairs, clinical research or higher education.',
      eligibilityCriteria: ['BPharm degree with required minimum marks; institute-specific entrance tests in some cases.'],
      courseDuration: 'Typically 2 years.',
      careerOptions: ['Clinical Research Associate', 'Regulatory Affairs Specialist', 'Formulation Scientist', 'Pharma QA/QC'],
      topUniversities: ['Top pharmacy colleges and universities'],
      conclusion: 'MPharm opens industry and research roles in the pharmaceutical sector.'
    },
    
    'LLM': {
      title: 'Master of Laws (LLM)',
      about: 'Postgraduate degree in law allowing specialisation in areas such as constitutional law, corporate law, international law and intellectual property.',
      whyChoose: 'Choose LLM to specialise legally, pursue academia, or work in policy, corporate legal teams and international organisations.',
      eligibilityCriteria: ['LLB or equivalent law degree; some institutes expect prior legal practice or academic merit.'],
      courseDuration: 'Typically 1-2 years.',
      careerOptions: ['Legal Advisor', 'Corporate Counsel', 'Policy Analyst', 'Academic/Researcher'],
      entranceExams: ['Institute-specific entrances and merit lists'],
      conclusion: 'LLM deepens legal expertise and enables specialist legal careers.'
    }
  };
  selectedHigherOverview: any = null;

  onAfter10thChange(value: string) {
    this.selectedAfter10th = value;
    this.selectedGroup = 'All';
    this.selectedDegree = 'All';
    this.selectedHigher = 'All';

    if (value && this.groupOptionsMap[value]) {
      this.groupOptions = this.groupOptionsMap[value];
    } else {
      this.groupOptions = ['All'];
    }

    this.degreeOptions = ['All'];
    this.higherOptions = ['All'];
  }

  onGroupChange(value: string) {
    this.selectedGroup = value;
    this.selectedDegree = 'All';
    this.selectedHigher = 'All';
    this.selectedHigherOverview = null;

    if (value && this.degreeOptionsMap[value]) {
      this.degreeOptions = this.degreeOptionsMap[value];
    } else {
      this.degreeOptions = ['All'];
    }

    if (value && this.groupHigherMap[value]) {
      this.higherOptions = this.groupHigherMap[value];
    } else {
      this.higherOptions = ['All'];
    }

    if (value && !this.groupOverviewMap[value]) {
      this.groupOverviewMap[value] = this.buildGenericGroupOverview(value);
    }
  }

  buildGenericGroupOverview(groupKey: string) {
    const options = this.degreeOptionsMap[groupKey] || this.groupOptionsMap[this.selectedAfter10th] || [];
    const subjects = options && options.length > 1 ? options.slice(1, 7) : [];
    const coursesAfter = options && options.length > 1 ? options.slice(1, 12) : [];
    const higher = this.groupHigherMap[groupKey] || [];

    return {
      title: `${groupKey} Group Overview`,
      about: `${groupKey} provides career and vocational pathways related to ${groupKey}. Explore courses, certifications and job roles in this area.`,
      whyChoose: `Choose ${groupKey} to gain practical skills and direct industry-oriented training leading to employability and higher studies.`,
      subjects: subjects,
      subjectDetails: {},
      skills: ['Practical Skills', 'Technical Knowledge', 'Job Readiness', 'Problem Solving', 'Communication'],
      skillDetails: [],
      coursesAfter: coursesAfter,
      careerOptions: coursesAfter.slice(0, 6),
      governmentExams: [],
      governmentJobs: [],
      privateJobs: coursesAfter.slice(0, 6),
      higherEducation: higher,
      bestPaths: coursesAfter.slice(0, 5).map(c => `${c} → higher studies`),
      salaryInfo: 'Salary varies by role and region; vocational training often leads to skilled-jobs and steady income.',
      futureScope: 'Industry-relevant skills and certifications increase employability and long-term prospects.',
      topColleges: [],
      topUniversities: [],
      entranceExams: [],
      videoLinks: [
        'https://www.youtube.com/results?search_query=' + encodeURIComponent(groupKey + ' career guidance'),
        'https://www.youtube.com/results?search_query=' + encodeURIComponent(groupKey + ' jobs'),
        'https://www.youtube.com/results?search_query=' + encodeURIComponent(groupKey + ' skills')
      ],
      websites: [
        'https://www.ncs.gov.in/',
        'https://www.skillindia.gov.in/',
        'https://www.aicte-india.org/'
      ],
      certificationLinks: [
        'https://www.coursera.org/',
        'https://www.udemy.com/',
        'https://www.nptel.ac.in/'
      ],
      universityLinks: [
        'https://www.aicte-india.org/',
        'https://www.ugc.gov.in/'
      ],
      interviewPrepLinks: [
        'https://www.indiabix.com/',
        'https://www.geeksforgeeks.org/'
      ],
      courseLinks: [
        'https://www.coursera.org/',
        'https://www.edx.org/'
      ],
      governmentJobLinks: [
        'https://www.upsc.gov.in/',
        'https://ssc.nic.in/'
      ],
      relatedResources: [
        'https://www.nirfindia.org/',
        'https://www.studyinindia.gov.in/'
      ],
      faqs: [],
      conclusion: `${groupKey} offers practical pathways for students looking for job-oriented training and specialised skills.`
    };
  }

  onDegreeChange(value: string) {
    this.selectedDegree = value;
    this.selectedHigher = 'All';
    this.selectedHigherOverview = null;

    if (value && this.higherOptionsMap[value]) {
      this.higherOptions = this.higherOptionsMap[value];
    } else if (this.selectedGroup && this.groupHigherMap[this.selectedGroup]) {
      this.higherOptions = this.groupHigherMap[this.selectedGroup];
    } else {
      this.higherOptions = ['All'];
    }

    try {
    } catch (e) {}
  }

 
  onHigherChange(value: string) {
    this.selectedHigher = value;
    this.relatedDegreesForHigher = [];

    if (!value || value === 'All') return;

    for (const deg of Object.keys(this.higherOptionsMap || {})) {
      const arr = this.higherOptionsMap[deg] || [];
      if (arr.indexOf(value) !== -1) {
        this.relatedDegreesForHigher.push(deg);
      }
    }

    for (const g of Object.keys(this.groupHigherMap || {})) {
      const arr = this.groupHigherMap[g] || [];
      if (arr.indexOf(value) !== -1) {
        const degs = this.degreeOptionsMap[g] || [];
        degs.forEach(d => {
          if (d !== 'All' && this.relatedDegreesForHigher.indexOf(d) === -1) {
            this.relatedDegreesForHigher.push(d);
          }
        });
      }
    }

    try {
    } catch (e) {}

    this.selectedHigherOverview = this.getSelectedHigherOverview();
  }

  selectRelatedDegree(deg: string) {
    if (!deg) return;
    this.selectedDegree = deg;
    this.onDegreeChange(deg);
  }

  buildOverviewForKey(key: string) {
    if (!key) return null;
    const related = this.higherOptionsMap[key] || this.degreeOptionsMap[key] || [];

    const popular = related.slice(1, 6);
    const special = related.slice(1, 5);
    const subjects = related.slice(1, 6);

    return {
      title: key,
      about: `${key} is an advanced/professional option related to ${this.selectedDegree || 'this field'}.`,
      whyChoose: `Choose ${key} for specialised knowledge and career advancement.`,
      eligibilityCriteria: ['Relevant undergraduate qualification; minimum marks or entrance test as applicable.'],
      admissionProcess: 'Entrance test / merit / interview depending on institution.',
      courseDuration: 'Typically 1-3 years depending on program and country.',
      courseFees: 'Varies by institute; public universities typically lower than private institutions.',
      averageSalaryRange: 'Depends on specialization and institute; ranges vary widely by country and sector.',
      popularCourses: popular,
      specializations: special,
      sampleCurriculum: subjects.length ? subjects : ['Core courses depend on program and institute'],
      subjects: subjects,
      skills: ['Advanced domain knowledge', 'Research & Analysis', 'Leadership', 'Communication'],
      internships: ['Industry internships', 'Research assistantships', 'Capstone projects'],
      certifications: ['Relevant professional certificates and short courses depending on specialization'],
      recommendedOnlineCourses: ['MOOCs and specializations from Coursera/edX/Pluralsight relevant to the field'],
      careerOptions: popular,
      governmentJobs: [],
      privateJobs: popular,
      researchOpportunities: ['PhD', 'Research assistantships', 'Industry R&D roles'],
      studyAbroadOptions: [],
      entranceExams: [],
      scholarships: [],
      topUniversities: [],
      salaryInfo: 'Salaries generally increase with postgraduate specialisation; check local job portals for up-to-date ranges.',
      futureScope: 'Advanced qualifications help access research, leadership and niche industry roles.',
      videoLinks: ['https://www.youtube.com/results?search_query=' + encodeURIComponent(key)],
      websites: [],
      interviewPrepLinks: [
        'https://www.indiabix.com/',
        'https://www.geeksforgeeks.org/',
        'https://www.interviewbit.com/',
        'https://www.ambitionbox.com/interviews',
        'https://www.freshersworld.com/'
      ],
      courseLinks: [
        'https://www.coursera.org/',
        'https://www.udemy.com/',
        'https://www.nptel.ac.in/',
        'https://www.edx.org/',
        'https://www.skillindia.gov.in/',
        'https://www.geeksforgeeks.org/'
      ],
      governmentJobLinks: [
        'https://www.upsc.gov.in/',
        'https://ssc.nic.in/',
        'https://ibps.in/',
        'https://www.rrbcdg.gov.in/',
        'https://psc.ap.gov.in/',
        'https://www.employmentnews.gov.in/'
      ],
      relatedResources: [
        'https://www.ncs.gov.in/',
        'https://www.aicte-india.org/',
        'https://www.ugc.gov.in/',
        'https://www.nirfindia.org/',
        'https://www.studyinindia.gov.in/'
      ],
      faqs: [],
      conclusion: `A ${key} builds on prior study and opens specialised career paths.`
    };
  }

  getDegreeRelatedHigherOverviews() {
    const deg = this.selectedDegree;
    if (!deg || deg === 'All') return [];
    const list = this.higherOptionsMap[deg] || [];
    return list.filter(x => x && x !== 'All').map(x => this.buildOverviewForKey(x));
  }

  degreeDetails: { [key: string]: any } = {};

  groupOverviewMap: { [group: string]: { title: string; about: string; whyChoose: string; subjects: string[]; subjectDetails?: { [subject: string]: string }; skills: string[]; skillDetails?: string[]; degreeSpecializations?: string[]; coursesAfter: string[]; careerOptions: string[]; governmentExams: string[]; governmentJobs: string[]; privateJobs: string[]; higherEducation: string[]; bestPaths: string[]; salaryInfo: string; futureScope: string; topColleges: string[]; topUniversities?: string[]; entranceExams: string[]; videoLinks: string[]; websites: string[]; certifications?: string[]; certificationLinks?: string[]; universityLinks?: string[]; industriesHiringCECStudents?: string[]; advantages?: string[]; challenges?: string[]; dailyActivities?: string[]; studentSuitableFor?: string[]; faqs: string[]; conclusion: string; [extra: string]: any } } = {
  'CEC': {
  title: 'CEC Group Overview',

  about: 'CEC (Commerce, Economics & Civics) is one of the most popular commerce-oriented intermediate groups chosen by students who are interested in business, finance, economics, management, banking, administration and public services. This group helps students understand how businesses operate, how money flows in the economy, how governments function and how financial systems are managed. CEC develops both theoretical and practical knowledge related to commerce and administration. Students who are good at communication, planning, logical thinking, calculations and decision-making usually perform very well in this stream. Unlike science groups, CEC focuses more on business systems, economics, trade, management and accounting concepts which are highly useful in real-world careers and entrepreneurship.',

  whyChoose: 'CEC is an excellent choice for students who want careers in commerce, banking, accounting, finance, taxation, management, civil services, law, economics and business administration. It provides a strong academic base for professional courses like CA, CMA, CS, MBA and BCom. Students who are not interested in heavy science subjects but still want high-paying and respected careers can confidently choose CEC. This stream also opens opportunities in both government and private sectors. CEC students can later move into finance companies, multinational corporations, startups, banking industries, public administration and even entrepreneurship.',

  subjects: [
    'Economics',
    'Commerce',
    'Accountancy',
    'Business Studies',
    'Civics',
    'Mathematics (optional in some colleges)'
  ],

  subjectDetails: {
    Economics: 'Economics teaches how markets, money, production, trade, inflation, employment and economic systems work at national and international levels.',
    Commerce: 'Commerce explains trade, business activities, management principles, marketing, banking and entrepreneurship concepts.',
    Accountancy: 'Accountancy focuses on financial records, bookkeeping, balance sheets, profit and loss statements and taxation basics.',
    BusinessStudies: 'Business Studies helps students understand business organizations, management, leadership, communication and business operations.',
    Civics: 'Civics explains government systems, constitution, democracy, public administration and citizen rights.',
    Mathematics: 'Optional mathematics improves logical thinking, calculations and helps in higher studies like BCom Computers, Statistics and Finance.'
  },

  skills: [
    'Analytical Thinking',
    'Numerical Ability',
    'Communication Skills',
    'Business Understanding',
    'Financial Awareness',
    'Problem Solving',
    'Decision Making',
    'Leadership Skills',
    'Presentation Skills',
    'Management Skills',
    'Critical Thinking',
    'Time Management'
  ],

  skillDetails: [
    'Students learn how to analyze business situations and make practical decisions.',
    'CEC improves financial calculation and accounting abilities.',
    'Students develop communication and presentation skills useful in management careers.',
    'Business and management understanding helps in entrepreneurship and startup building.',
    'Economic knowledge improves awareness about markets and government policies.'
  ],

  coursesAfter: [
    'BCom',
    'BCom Computers',
    'BBA',
    'BA Economics',
    'BA Public Administration',
    'CA Foundation',
    'CS Foundation',
    'CMA',
    'Bachelor of Management Studies',
    'Hotel Management',
    'Digital Marketing Courses',
    'Law (Integrated LLB)',
    'Banking & Finance Courses'
  ],

  degreeSpecializations: [
    'Accounting & Finance',
    'Banking',
    'Taxation',
    'Business Analytics',
    'Human Resource Management',
    'Marketing',
    'International Business',
    'Computer Applications',
    'Financial Technology (FinTech)',
    'E-Commerce'
  ],

  careerOptions: [
    'Accountant',
    'Financial Analyst',
    'Business Analyst',
    'Bank PO',
    'Tax Consultant',
    'Investment Advisor',
    'Auditor',
    'Company Secretary',
    'Chartered Accountant',
    'Marketing Executive',
    'HR Executive',
    'Business Development Executive',
    'Entrepreneur',
    'Economist',
    'Stock Market Analyst'
  ],

  governmentExams: [
    'SSC',
    'Bank PO',
    'IBPS',
    'RRB',
    'UPSC',
    'State PSCs',
    'LIC AAO',
    'EPFO',
    'Insurance Exams',
    'Railway Recruitment Exams'
  ],

  governmentJobs: [
    'Tax Inspector',
    'Auditor',
    'Bank Clerk',
    'Bank PO',
    'Government Accountant',
    'Revenue Officer',
    'SSC Officer',
    'Insurance Assistant',
    'Administrative Officer',
    'Finance Department Officer'
  ],

  privateJobs: [
    'Accountant',
    'Audit Associate',
    'Financial Analyst',
    'Business Development Executive',
    'HR Executive',
    'Marketing Associate',
    'Banking Associate',
    'Tax Consultant',
    'Operations Executive',
    'Investment Advisor'
  ],

  higherEducation: [
    'MCom',
    'MBA',
    'CA',
    'CS',
    'CMA',
    'MA Economics',
    'PGDM',
    'LLB',
    'MBA Finance',
    'MBA Marketing',
    'MBA HR',
    'Master in International Business'
  ],

  bestPaths: [
    'BCom → MCom → MBA',
    'BCom → CA',
    'BBA → MBA',
    'CEC → CS → Corporate Law Careers',
    'CEC → CMA → Financial Careers',
    'BA Economics → MA Economics → Economist',
    'BCom Computers → IT Finance Careers'
  ],

  salaryInfo: 'Entry-level salaries generally range between INR 2.5–6 LPA depending on skills, degree and company. CA, MBA and Finance professionals can earn INR 8–25 LPA or even higher in multinational companies. Banking professionals, investment analysts and management graduates have strong salary growth opportunities with experience.',

  futureScope: 'CEC has a very strong future scope because industries always require finance experts, accountants, managers, auditors, analysts and administrators. The rise of digital banking, fintech companies, startups, e-commerce and global business has increased demand for commerce professionals. Students with additional certifications and practical skills can secure excellent jobs in India and abroad.',

  topColleges: [
    'St. Xavier\'s College',
    'SRCC',
    'Loyola College',
    'Christ University',
    'Narsee Monjee College',
    'Hindu College',
    'Delhi University Colleges',
    'Osmania University',
    'Andhra University',
    'Jain University'
  ],

  topUniversities: [
    'Delhi University',
    'Osmania University',
    'Andhra University',
    'Christ University',
    'Jain University',
    'Mumbai University',
    'Madras University',
    'ICFAI University',
    'Amity University'
  ],

  entranceExams: [
    'CA Foundation',
    'CS Foundation',
    'CMA Foundation',
    'CUET',
    'IPMAT',
    'SET',
    'NPAT',
    'College-specific entrance exams'
  ],

  certifications: [
    'Tally ERP',
    'GST Certification',
    'Digital Marketing',
    'Financial Modeling',
    'MS Excel Advanced',
    'Stock Market Courses',
    'Business Analytics',
    'Accounting Certification',
    'SAP FICO Basics'
  ],

  certificationLinks: [
    'https://www.icai.org/',
    'https://www.icsi.edu/',
    'https://www.icmai.in/',
    'https://www.coursera.org/',
    'https://www.udemy.com/',
    'https://www.skillindia.gov.in/',
    'https://www.nptel.ac.in/'
  ],

  universityLinks: [
    'https://www.du.ac.in/',
    'https://www.osmania.ac.in/',
    'https://www.andhrauniversity.edu.in/',
    'https://christuniversity.in/',
    'https://www.jainuniversity.ac.in/'
  ],

  videoLinks: [
    'https://www.youtube.com/results?search_query=CEC+overview',
    'https://www.youtube.com/results?search_query=careers+after+CEC',
    'https://www.youtube.com/results?search_query=BCom+career+guidance',
    'https://www.youtube.com/results?search_query=CA+Foundation+preparation',
    'https://www.youtube.com/results?search_query=commerce+career+options'
  ],

  websites: [
    'https://www.icai.org/',
    'https://www.icsi.edu/',
    'https://www.icmai.in/',
    'https://www.nseindia.com/',
    'https://www.bseindia.com/'
  ],

  industriesHiringCECStudents: [
    'Banking',
    'Finance',
    'Insurance',
    'Taxation',
    'Accounting Firms',
    'Stock Market Companies',
    'Consulting Firms',
    'E-Commerce Companies',
    'Corporate Businesses',
    'Government Departments'
  ],

  advantages: [
    'Wide range of career opportunities',
    'Good opportunities in banking and finance',
    'Can pursue professional certifications',
    'Less practical/lab pressure compared to science streams',
    'Strong opportunities for government jobs',
    'Useful for entrepreneurship and startups'
  ],

  challenges: [
    'Professional courses like CA require strong dedication',
    'Competition is high in finance and banking sectors',
    'Students must improve communication and practical skills',
    'Accounting concepts require regular practice'
  ],

  dailyActivities: [
    'Preparing balance sheets',
    'Analyzing business case studies',
    'Learning economic trends',
    'Working on financial calculations',
    'Reading business news',
    'Practicing accounting entries'
  ],

  studentSuitableFor: [
    'Students interested in business and finance',
    'Students with good communication skills',
    'Students who enjoy management and leadership',
    'Students interested in banking or government jobs',
    'Students who want professional commerce careers'
  ],

  faqs: [
    'Is CEC good for commerce careers? Yes, it is one of the best commerce streams.',
    'Can CEC students become Chartered Accountants? Yes.',
    'Can CEC students prepare for UPSC? Yes.',
    'Is mathematics compulsory in CEC? No, it depends on the college.',
    'Can CEC students get high salaries? Yes, especially after MBA, CA, CS or finance specializations.',
    'Is CEC better for banking careers? Yes, it provides strong basics for banking and finance exams.'
  ],

  conclusion: 'CEC is one of the best groups for students who are interested in commerce, finance, accounting, management, economics and administration. It offers excellent higher education opportunities, professional certifications, government job preparation and corporate career growth. Students who build strong communication, analytical and financial skills during CEC can achieve successful careers in both India and international markets.'
}
    ,
'MPC': {
  title: 'MPC Group Overview',

  about: 'MPC (Mathematics, Physics & Chemistry) is one of the most popular science-oriented intermediate groups chosen by students who are interested in engineering, technology, software, research, artificial intelligence, robotics, data science and pure sciences. MPC develops strong analytical thinking, mathematical ability, logical reasoning and problem-solving skills. This group mainly focuses on scientific concepts, calculations, experiments and technical knowledge. Students who enjoy mathematics, solving problems, coding, innovation and technology generally perform very well in MPC. It is considered the best stream for engineering and technical careers.',

  whyChoose: 'MPC is an excellent choice for students who want careers in engineering, software development, architecture, research, defence technology, artificial intelligence, machine learning and technical industries. It provides a strong academic base for professional courses like BTech, BSc, BCA, Data Science and Engineering specializations. Students who are interested in technology and innovation can confidently choose MPC because it offers excellent career growth, high salaries and global opportunities.',

  subjects: [
    'Mathematics',
    'Physics',
    'Chemistry',
    'English',
    'Computer Science (optional in some colleges)'
  ],

  subjectDetails: {
    Mathematics: 'Mathematics develops logical reasoning, calculations, algebra, trigonometry, statistics and problem-solving skills required for engineering and technology careers.',
    Physics: 'Physics explains concepts related to motion, electricity, energy, mechanics, electronics and scientific principles used in engineering.',
    Chemistry: 'Chemistry teaches chemical reactions, compounds, materials, industrial chemistry and laboratory concepts.',
    English: 'English improves communication, comprehension and presentation abilities useful in professional careers.',
    ComputerScience: 'Computer Science introduces programming, coding basics, software concepts and computational thinking.'
  },

  skills: [
    'Analytical Thinking',
    'Problem Solving',
    'Logical Reasoning',
    'Numerical Ability',
    'Programming Basics',
    'Scientific Thinking',
    'Research Skills',
    'Technical Knowledge',
    'Creativity',
    'Innovation Skills',
    'Decision Making',
    'Time Management'
  ],

  skillDetails: [
    'Students develop advanced mathematical and logical problem-solving abilities.',
    'MPC improves analytical and technical thinking useful for engineering and software careers.',
    'Scientific experiments improve observation and research skills.',
    'Programming and technology understanding help in IT careers and innovation.',
    'Students gain confidence in calculations and technical applications.'
  ],

  coursesAfter: [
    'BTech',
    'BE',
    'BSc Mathematics',
    'BSc Physics',
    'BSc Chemistry',
    'BCA',
    'BArch',
    'Data Science',
    'Artificial Intelligence',
    'Machine Learning',
    'Commercial Pilot Training',
    'Animation & Gaming',
    'Defence Courses'
  ],

  degreeSpecializations: [
    'Computer Science Engineering',
    'Artificial Intelligence',
    'Mechanical Engineering',
    'Civil Engineering',
    'Electrical Engineering',
    'Electronics & Communication',
    'Aeronautical Engineering',
    'Robotics',
    'Cyber Security',
    'Data Science',
    'Cloud Computing',
    'Software Engineering'
  ],

  careerOptions: [
    'Software Engineer',
    'Civil Engineer',
    'Mechanical Engineer',
    'Data Scientist',
    'AI Engineer',
    'Architect',
    'Research Scientist',
    'Pilot',
    'Cyber Security Analyst',
    'Game Developer',
    'Robotics Engineer',
    'Network Engineer',
    'Web Developer',
    'Machine Learning Engineer',
    'Defence Scientist'
  ],

  governmentExams: [
    'JEE Main',
    'JEE Advanced',
    'EAMCET',
    'BITSAT',
    'VITEEE',
    'NDA',
    'ISRO Recruitment',
    'DRDO Exams',
    'Railway Technical Exams',
    'SSC Technical Exams'
  ],

  governmentJobs: [
    'ISRO Scientist',
    'DRDO Engineer',
    'Railway Engineer',
    'Public Sector Engineer',
    'Defence Technical Officer',
    'Electrical Department Engineer',
    'Government Research Scientist',
    'Junior Engineer',
    'Indian Army Technical Officer',
    'Space Research Engineer'
  ],

  privateJobs: [
    'Software Developer',
    'Web Developer',
    'Data Analyst',
    'AI Engineer',
    'Cloud Engineer',
    'Network Engineer',
    'System Administrator',
    'Technical Support Engineer',
    'Design Engineer',
    'Automation Engineer'
  ],

  higherEducation: [
    'MTech',
    'MS',
    'MBA',
    'MSc',
    'PhD',
    'Research Programs',
    'MBA Technology Management',
    'Master in Data Science'
  ],

  bestPaths: [
    'MPC → BTech → Software Engineer',
    'MPC → IIT → Research Careers',
    'MPC → Data Science → AI Careers',
    'MPC → Civil Engineering → Government Engineer',
    'MPC → NDA → Defence Careers',
    'MPC → BSc → MSc → Scientist'
  ],

  salaryInfo: 'Engineering and software graduates generally start with salaries between INR 3–12 LPA depending on skills, specialization and company. AI Engineers, Data Scientists and Software Developers in top companies may earn INR 15–40 LPA or higher with experience.',

  futureScope: 'MPC has one of the strongest future scopes because technology, software, automation, robotics, AI and engineering industries are growing rapidly worldwide. Students with technical skills and certifications can secure excellent jobs in India and abroad.',

  topColleges: [
    'IITs',
    'NITs',
    'IIITs',
    'BITS Pilani',
    'VIT',
    'SRM University',
    'JNTU',
    'Delhi Technological University',
    'Anna University',
    'Osmania University'
  ],

  topUniversities: [
    'IIT Delhi',
    'IIT Bombay',
    'BITS Pilani',
    'JNTU',
    'Anna University',
    'VIT University',
    'SRM University',
    'Osmania University'
  ],

  entranceExams: [
    'JEE Main',
    'JEE Advanced',
    'EAMCET',
    'BITSAT',
    'VITEEE',
    'SRMJEEE',
    'NDA'
  ],

  certifications: [
    'Python Programming',
    'Java Full Stack',
    'Cloud Computing',
    'Data Science',
    'Cyber Security',
    'AI & Machine Learning',
    'Web Development',
    'Networking',
    'AutoCAD',
    'Robotics'
  ],

  certificationLinks: [
    'https://www.coursera.org/',
    'https://www.udemy.com/',
    'https://www.nptel.ac.in/',
    'https://www.skillindia.gov.in/',
    'https://www.geeksforgeeks.org/'
  ],

  universityLinks: [
    'https://www.iitb.ac.in/',
    'https://www.bits-pilani.ac.in/',
    'https://vit.ac.in/',
    'https://www.jntuh.ac.in/'
  ],

  videoLinks: [
    'https://www.youtube.com/results?search_query=MPC+overview',
    'https://www.youtube.com/results?search_query=engineering+careers+after+MPC',
    'https://www.youtube.com/results?search_query=JEE+preparation',
    'https://www.youtube.com/results?search_query=software+engineering+career+guidance',
    'https://www.youtube.com/results?search_query=data+science+career'
  ],

  websites: [
    'https://jeemain.nta.nic.in/',
    'https://eamcet.tsche.ac.in/',
    'https://www.isro.gov.in/',
    'https://www.drdo.gov.in/'
  ],

  industriesHiringMPCStudents: [
    'Software Industry',
    'Engineering Industry',
    'AI & Robotics',
    'Data Science Companies',
    'Manufacturing Industry',
    'Construction Companies',
    'Defence Sector',
    'Research Organizations',
    'Automobile Industry',
    'Electronics Industry'
  ],

  advantages: [
    'Best stream for engineering and software careers',
    'Excellent salary opportunities',
    'Global career opportunities',
    'Strong technical knowledge',
    'High demand in IT and AI industries',
    'Wide range of engineering specializations'
  ],

  challenges: [
    'Requires strong mathematical understanding',
    'Competitive entrance exams',
    'Regular practice is necessary',
    'Technical subjects can be difficult for some students'
  ],

  dailyActivities: [
    'Solving mathematical problems',
    'Conducting physics and chemistry experiments',
    'Learning coding basics',
    'Practicing calculations',
    'Studying scientific concepts',
    'Working on technical projects'
  ],

  studentSuitableFor: [
    'Students interested in engineering and technology',
    'Students who enjoy mathematics and logic',
    'Students interested in software and coding',
    'Students interested in scientific research',
    'Students aiming for technical careers'
  ],

  faqs: [
    'Is MPC required for engineering? Yes.',
    'Can MPC students become software engineers? Yes.',
    'Is MPC good for AI and Data Science? Yes.',
    'Can MPC students prepare for NDA? Yes.',
    'Is mathematics compulsory in MPC? Yes.',
    'Does MPC have good salary opportunities? Yes.'
  ],

  conclusion: 'MPC is one of the best groups for students interested in engineering, software, AI, research and technology careers. It offers excellent higher education opportunities, global career growth and high-paying technical jobs.'
},

'BiPC': {
  title: 'BiPC Group Overview',

  about: 'BiPC (Biology, Physics & Chemistry) is one of the most popular medical-oriented intermediate groups chosen by students who are interested in medicine, healthcare, pharmacy, nursing, biotechnology and life sciences. This group mainly focuses on biological systems, medical sciences, laboratory concepts and healthcare knowledge. Students who enjoy studying living organisms, human body systems, medical treatments and scientific research generally perform very well in BiPC. It is considered the best stream for medical and healthcare careers.',

  whyChoose: 'BiPC is an excellent choice for students who want careers in medicine, healthcare, pharmacy, nursing, biotechnology, physiotherapy and research. It provides strong academic knowledge required for MBBS, BDS, BPharmacy and other medical-related courses. Students interested in helping people, healthcare services and biological sciences can confidently choose BiPC.',

  subjects: [
    'Biology',
    'Physics',
    'Chemistry',
    'Botany',
    'Zoology',
    'English'
  ],

  subjectDetails: {
    Biology: 'Biology explains living organisms, genetics, human body systems, cells and life processes.',
    Physics: 'Physics teaches medical equipment principles, energy, electricity and scientific calculations.',
    Chemistry: 'Chemistry explains chemical reactions, medicines, compounds and laboratory concepts.',
    Botany: 'Botany focuses on plant biology, plant systems and environmental science.',
    Zoology: 'Zoology explains animal biology, anatomy and physiological systems.',
    English: 'English improves communication and comprehension skills useful in healthcare professions.'
  },

  skills: [
    'Observation Skills',
    'Laboratory Skills',
    'Medical Knowledge',
    'Research Skills',
    'Communication Skills',
    'Patient Care',
    'Scientific Thinking',
    'Analytical Thinking',
    'Problem Solving',
    'Time Management'
  ],

  skillDetails: [
    'Students learn healthcare and patient care concepts.',
    'BiPC improves laboratory and scientific observation skills.',
    'Research abilities improve through biology and medical studies.',
    'Students gain knowledge about medicines and healthcare systems.'
  ],

  coursesAfter: [
    'MBBS',
    'BDS',
    'BPharmacy',
    'BSc Nursing',
    'Physiotherapy',
    'Biotechnology',
    'Veterinary Science',
    'BSc Agriculture',
    'BAMS',
    'BHMS',
    'Medical Lab Technology'
  ],

  degreeSpecializations: [
    'General Medicine',
    'Dentistry',
    'Pharmacy',
    'Nursing',
    'Biotechnology',
    'Physiotherapy',
    'Microbiology',
    'Genetics',
    'Cardiology',
    'Neurology'
  ],

  careerOptions: [
    'Doctor',
    'Dentist',
    'Pharmacist',
    'Nurse',
    'Lab Technician',
    'Research Scientist',
    'Physiotherapist',
    'Nutritionist',
    'Biotechnologist',
    'Veterinary Doctor'
  ],

  governmentExams: [
    'NEET',
    'EAMCET Medical',
    'AIIMS Entrance',
    'JIPMER',
    'Government Nursing Exams'
  ],

  governmentJobs: [
    'Government Doctor',
    'Medical Officer',
    'Government Nurse',
    'Lab Technician',
    'Research Scientist',
    'Health Department Officer'
  ],

  privateJobs: [
    'Hospital Staff',
    'Pharma Industry Jobs',
    'Clinical Research',
    'Healthcare Executive',
    'Medical Representative'
  ],

  higherEducation: [
    'MD',
    'MS',
    'MPharmacy',
    'MSc',
    'PhD',
    'Medical Research Programs'
  ],

  bestPaths: [
    'BiPC → MBBS → Doctor',
    'BiPC → BPharmacy → Pharmacist',
    'BiPC → Nursing → Healthcare Careers',
    'BiPC → Biotechnology → Research'
  ],

  salaryInfo: 'Doctors, pharmacists and healthcare professionals generally earn good salaries depending on specialization and experience. Medical specialists can earn INR 10–50 LPA or higher.',

  futureScope: 'BiPC has excellent future scope because healthcare, medical research, biotechnology and pharmaceutical industries are growing rapidly worldwide.',

  topColleges: [
    'AIIMS',
    'JIPMER',
    'CMC Vellore',
    'NIMS',
    'Osmania Medical College'
  ],

  topUniversities: [
    'AIIMS Delhi',
    'JIPMER',
    'NTR University of Health Sciences',
    'Osmania University'
  ],

  entranceExams: [
    'NEET',
    'AIIMS Entrance',
    'JIPMER Entrance'
  ],

  certifications: [
    'Medical Coding',
    'Clinical Research',
    'Pharmacy Certifications',
    'Nutrition Courses',
    'Healthcare Management'
  ],

  certificationLinks: [
    'https://www.nmc.org.in/',
    'https://www.coursera.org/',
    'https://www.udemy.com/'
  ],

  universityLinks: [
    'https://www.aiims.edu/',
    'https://jipmer.edu.in/'
  ],

  videoLinks: [
    'https://www.youtube.com/results?search_query=BiPC+overview',
    'https://www.youtube.com/results?search_query=medical+careers+after+BiPC',
    'https://www.youtube.com/results?search_query=NEET+preparation'
  ],

  websites: [
    'https://neet.nta.nic.in/',
    'https://www.nmc.org.in/'
  ],

  industriesHiringBiPCStudents: [
    'Hospitals',
    'Healthcare Industry',
    'Pharmaceutical Companies',
    'Biotechnology Industry',
    'Research Laboratories'
  ],

  advantages: [
    'Best stream for medical careers',
    'Excellent respect in society',
    'Strong healthcare opportunities',
    'Good salary growth',
    'Global demand for healthcare professionals'
  ],

  challenges: [
    'Medical entrance exams are highly competitive',
    'Requires long-term study commitment',
    'Medical education can be expensive'
  ],

  dailyActivities: [
    'Studying biology concepts',
    'Learning medical terminology',
    'Performing laboratory experiments',
    'Practicing diagrams and anatomy'
  ],

  studentSuitableFor: [
    'Students interested in medicine and healthcare',
    'Students who enjoy biology',
    'Students interested in helping people',
    'Students aiming for doctor or healthcare careers'
  ],

  faqs: [
    'Is BiPC required for MBBS? Yes.',
    'Can BiPC students become doctors? Yes.',
    'Is NEET compulsory for MBBS? Yes.',
    'Can BiPC students join pharmacy? Yes.'
  ],

  conclusion: 'BiPC is the best group for students interested in medicine, healthcare, pharmacy and biological science careers. It offers excellent opportunities in hospitals, research and global healthcare industries.'
},
  'MEC': {
  title: 'MEC Group Overview',

  about: 'MEC (Mathematics, Economics & Commerce) is one of the best intermediate groups for students interested in finance, economics, analytics, business management, banking and commerce-related careers. This group combines mathematical calculations with economic and commercial knowledge. MEC helps students understand financial systems, economic policies, business operations, accounting concepts and analytical thinking. Students who enjoy calculations, statistics, market analysis, economics and finance generally perform very well in MEC. It is considered an excellent stream for careers in banking, finance, investment analysis, economics and business analytics.',

  whyChoose: 'MEC is an excellent choice for students who want careers in banking, finance, economics, business analytics, management, investment sectors and commerce industries. It provides a strong academic foundation for BCom, BBA, Economics, MBA, CA, CMA and analytics-related courses. Students who enjoy mathematics and business-related subjects can confidently choose MEC because it offers strong career opportunities in both government and private sectors.',

  subjects: [
    'Mathematics',
    'Economics',
    'Commerce',
    'Accountancy',
    'Business Studies',
    'English'
  ],

  subjectDetails: {
    Mathematics: 'Mathematics improves logical reasoning, statistics, calculations and analytical abilities useful in finance and analytics careers.',
    Economics: 'Economics teaches economic systems, trade, inflation, banking, markets and financial policies.',
    Commerce: 'Commerce explains business activities, trade, management and entrepreneurship concepts.',
    Accountancy: 'Accountancy focuses on bookkeeping, balance sheets, financial records and taxation basics.',
    BusinessStudies: 'Business Studies develops understanding about management, leadership and organizational operations.',
    English: 'English improves communication and presentation skills useful in professional careers.'
  },

  skills: [
    'Analytical Thinking',
    'Numerical Ability',
    'Financial Awareness',
    'Problem Solving',
    'Business Understanding',
    'Statistical Skills',
    'Decision Making',
    'Communication Skills',
    'Leadership Skills',
    'Management Skills'
  ],

  skillDetails: [
    'Students develop strong mathematical and financial analysis abilities.',
    'MEC improves business understanding and economic reasoning skills.',
    'Students gain knowledge about banking, investments and finance systems.',
    'Analytical thinking helps in business analytics and market analysis careers.'
  ],

  coursesAfter: [
    'BCom',
    'BBA',
    'BA Economics',
    'BCom Computers',
    'Business Analytics',
    'CA Foundation',
    'CMA',
    'CS Foundation',
    'Digital Marketing',
    'Banking & Finance Courses'
  ],

  degreeSpecializations: [
    'Finance',
    'Banking',
    'Business Analytics',
    'Economics',
    'Taxation',
    'Marketing',
    'Human Resource Management',
    'International Business',
    'FinTech',
    'Accounting'
  ],

  careerOptions: [
    'Financial Analyst',
    'Business Analyst',
    'Economist',
    'Bank PO',
    'Investment Banker',
    'Accountant',
    'Tax Consultant',
    'Market Analyst',
    'Business Consultant',
    'Stock Market Analyst'
  ],

  governmentExams: [
    'Bank PO',
    'IBPS',
    'SSC',
    'UPSC',
    'APPSC',
    'RRB',
    'LIC AAO'
  ],

  governmentJobs: [
    'Statistical Officer',
    'Economist',
    'Bank Clerk',
    'Bank PO',
    'Government Accountant',
    'SSC Officer',
    'Finance Department Officer'
  ],

  privateJobs: [
    'Financial Analyst',
    'Business Consultant',
    'Investment Advisor',
    'Banking Associate',
    'Tax Consultant',
    'Operations Executive',
    'Finance Executive'
  ],

  higherEducation: [
    'MBA',
    'MCom',
    'MA Economics',
    'CA',
    'CMA',
    'CS',
    'PGDM'
  ],

  bestPaths: [
    'MEC → BCom → MBA',
    'MEC → Economics → Economist',
    'MEC → Banking Careers',
    'MEC → Business Analytics',
    'MEC → CA/CMA'
  ],

  salaryInfo: 'Commerce and finance graduates generally start with salaries between INR 3–8 LPA depending on skills and specialization. MBA graduates, analysts and finance professionals may earn INR 10–25 LPA with experience.',

  futureScope: 'MEC has excellent future scope because finance, banking, analytics, investment and business industries are growing rapidly. Demand for finance professionals and analysts is increasing globally.',

  topColleges: [
    'SRCC',
    'Christ University',
    'Loyola College',
    'St. Xavier’s College',
    'Narsee Monjee College'
  ],

  topUniversities: [
    'Delhi University',
    'Christ University',
    'Mumbai University',
    'Osmania University',
    'Andhra University'
  ],

  entranceExams: [
    'CUET',
    'IPMAT',
    'CA Foundation',
    'CMA Foundation',
    'SET'
  ],

  certifications: [
    'Financial Modeling',
    'Business Analytics',
    'Advanced Excel',
    'Stock Market Courses',
    'Digital Marketing',
    'Tally ERP',
    'GST Certification'
  ],

  certificationLinks: [
    'https://www.icai.org/',
    'https://www.coursera.org/',
    'https://www.udemy.com/'
  ],

  universityLinks: [
    'https://www.du.ac.in/',
    'https://christuniversity.in/'
  ],

  videoLinks: [
    'https://www.youtube.com/results?search_query=MEC+overview',
    'https://www.youtube.com/results?search_query=finance+careers+after+MEC',
    'https://www.youtube.com/results?search_query=business+analytics+career'
  ],

  websites: [
    'https://www.rbi.org.in/',
    'https://www.nseindia.com/',
    'https://www.bseindia.com/'
  ],

  industriesHiringMECStudents: [
    'Banking',
    'Finance',
    'Investment Companies',
    'Analytics Firms',
    'Insurance Companies',
    'Consulting Firms'
  ],

  advantages: [
    'Excellent for banking and finance careers',
    'Strong analytical and numerical skills',
    'Good opportunities in analytics and business sectors',
    'High salary growth opportunities',
    'Useful for competitive exams'
  ],

  challenges: [
    'Requires good mathematical understanding',
    'Finance and banking sectors are competitive',
    'Students need practical analytical skills'
  ],

  dailyActivities: [
    'Analyzing market trends',
    'Practicing financial calculations',
    'Learning economics concepts',
    'Studying business case studies'
  ],

  studentSuitableFor: [
    'Students interested in finance and economics',
    'Students who enjoy mathematics',
    'Students interested in banking careers',
    'Students aiming for analytical careers'
  ],

  faqs: [
    'Is MEC good for finance careers? Yes.',
    'Can MEC students become analysts? Yes.',
    'Is MEC useful for banking jobs? Yes.',
    'Can MEC students pursue MBA? Yes.'
  ],

  conclusion: 'MEC is one of the best groups for students interested in finance, economics, banking and analytics careers. It offers excellent higher education opportunities and strong career growth in both government and private sectors.'
},

'HEC': {
  title: 'HEC Group Overview',

  about: 'HEC (History, Economics & Civics) is one of the best humanities-oriented intermediate groups chosen by students interested in public administration, civil services, law, journalism, politics, education, social sciences and humanities careers. This group focuses on historical knowledge, government systems, economics, political science and social awareness. Students who enjoy reading, writing, research, communication and social studies generally perform very well in HEC. It is considered an excellent stream for UPSC preparation, public service and humanities-related careers.',

  whyChoose: 'HEC is an excellent choice for students who want careers in civil services, law, journalism, politics, teaching, public administration, social work and humanities. It provides a strong academic base for UPSC, APPSC, law courses and social science degrees. Students interested in current affairs, government systems, history and public policy can confidently choose HEC.',

  subjects: [
    'History',
    'Economics',
    'Civics',
    'Political Science',
    'Sociology',
    'English'
  ],

  subjectDetails: {
    History: 'History teaches ancient, medieval and modern historical events, civilizations and cultural development.',
    Economics: 'Economics explains financial systems, trade, markets and economic development.',
    Civics: 'Civics teaches constitution, democracy, governance and public administration concepts.',
    PoliticalScience: 'Political Science focuses on political systems, government structures and international relations.',
    Sociology: 'Sociology explains society, social behavior and cultural systems.',
    English: 'English improves writing, communication and presentation abilities.'
  },

  skills: [
    'Critical Thinking',
    'Communication Skills',
    'Research Skills',
    'Writing Skills',
    'Public Speaking',
    'Analytical Thinking',
    'Social Awareness',
    'Leadership Skills',
    'Decision Making',
    'Presentation Skills'
  ],

  skillDetails: [
    'Students develop strong communication and writing abilities.',
    'HEC improves public administration and governance understanding.',
    'Research and analytical thinking improve through humanities subjects.',
    'Students gain awareness about society, politics and public systems.'
  ],

  coursesAfter: [
    'BA',
    'BA Political Science',
    'BA Economics',
    'BA History',
    'LLB',
    'Journalism',
    'Mass Communication',
    'Public Administration',
    'BBA',
    'Social Work'
  ],

  degreeSpecializations: [
    'Political Science',
    'Public Administration',
    'History',
    'Economics',
    'Journalism',
    'Mass Communication',
    'International Relations',
    'Sociology',
    'Law',
    'Public Policy'
  ],

  careerOptions: [
    'Civil Servant',
    'Lawyer',
    'Journalist',
    'Teacher',
    'Professor',
    'Political Analyst',
    'Social Worker',
    'Public Relations Officer',
    'Content Writer',
    'Historian'
  ],

  governmentExams: [
    'UPSC',
    'APPSC',
    'SSC',
    'Group 1',
    'Group 2',
    'Railway Exams',
    'Police Recruitment Exams'
  ],

  governmentJobs: [
    'IAS Officer',
    'IPS Officer',
    'Group Officer',
    'Public Administration Officer',
    'Government Teacher',
    'Social Welfare Officer'
  ],

  privateJobs: [
    'Journalist',
    'Content Writer',
    'NGO Executive',
    'Public Relations Executive',
    'Media Analyst',
    'Research Associate'
  ],

  higherEducation: [
    'MA',
    'MBA',
    'LLB',
    'PhD',
    'Journalism & Mass Communication',
    'Public Administration'
  ],

  bestPaths: [
    'HEC → UPSC → IAS/IPS',
    'HEC → LLB → Lawyer',
    'HEC → Journalism → Media Careers',
    'HEC → BA → MA → Lecturer'
  ],

  salaryInfo: 'Humanities and public administration graduates generally start with salaries between INR 2.5–6 LPA. Civil servants, lawyers and media professionals may earn much higher salaries with experience.',

  futureScope: 'HEC has strong future scope in civil services, media, public administration, education, politics and law-related careers. Government sector opportunities are especially strong for HEC students.',

  topColleges: [
    'St. Stephen’s College',
    'Lady Shri Ram College',
    'Delhi University Colleges',
    'Loyola College',
    'Osmania University'
  ],

  topUniversities: [
    'Delhi University',
    'Jawaharlal Nehru University',
    'Osmania University',
    'Andhra University'
  ],

  entranceExams: [
    'CUET',
    'CLAT',
    'UPSC',
    'State PSC Exams'
  ],

  certifications: [
    'Public Speaking',
    'Digital Journalism',
    'Content Writing',
    'Foreign Languages',
    'Social Media Management'
  ],

  certificationLinks: [
    'https://www.coursera.org/',
    'https://www.udemy.com/',
    'https://www.upsc.gov.in/'
  ],

  universityLinks: [
    'https://www.du.ac.in/',
    'https://www.jnu.ac.in/'
  ],

  videoLinks: [
    'https://www.youtube.com/results?search_query=HEC+overview',
    'https://www.youtube.com/results?search_query=UPSC+career+guidance',
    'https://www.youtube.com/results?search_query=law+careers+after+HEC'
  ],

  websites: [
    'https://www.upsc.gov.in/',
    'https://psc.ap.gov.in/'
  ],

  industriesHiringHECStudents: [
    'Government Departments',
    'Media Industry',
    'Law Firms',
    'NGOs',
    'Educational Institutions',
    'Public Relations Companies'
  ],

  advantages: [
    'Best for UPSC and government jobs',
    'Excellent communication skill development',
    'Strong opportunities in law and journalism',
    'Good for public administration careers',
    'Useful for social science careers'
  ],

  challenges: [
    'Requires strong reading and writing skills',
    'Competitive government exams',
    'Students need strong current affairs knowledge'
  ],

  dailyActivities: [
    'Reading current affairs',
    'Writing essays and reports',
    'Studying political systems',
    'Analyzing historical events'
  ],

  studentSuitableFor: [
    'Students interested in civil services',
    'Students who enjoy reading and writing',
    'Students interested in law and politics',
    'Students interested in social sciences'
  ],

  faqs: [
    'Is HEC good for UPSC? Yes.',
    'Can HEC students become lawyers? Yes.',
    'Is HEC useful for journalism careers? Yes.',
    'Can HEC students pursue MBA? Yes.'
  ],

  conclusion: 'HEC is one of the best groups for students interested in civil services, law, journalism, education and humanities careers. It offers excellent opportunities in government services, media and social science sectors.'
}
  };

  groupHigherMap: { [group: string]: string[] } = {
    'MPC': ['All', 'MTech', 'MSc Mathematics', 'MSc Physics', 'MCA', 'MBA'],
    'BiPC': ['All', 'MD/MS (via NEET)', 'MSc Biotechnology', 'MPharm', 'MSc Nursing'],
    'MEC': ['All', 'MCom', 'MBA', 'MA Economics', 'MFA (Design)'],
    'CEC': ['All', 'MCom', 'MBA', 'CA (Chartered Accountancy route)', 'CS'],
    'HEC': ['All', 'MA', 'LLB', 'MBA', 'MPhil']
  };


  getSelectedDegreeFullDetails() {
    const key = this.selectedDegree;
    if (!key || key === 'All') return null;

    const base = this.degreeDetails[key] || {} as any;


    let parentGroup: string | null = null;
    for (const g of Object.keys(this.degreeOptionsMap)) {
      const arr = this.degreeOptionsMap[g] || [];
      if (arr.indexOf(key) !== -1) {
        parentGroup = g;
        break;
      }
    }

    const groupOverview = parentGroup ? (this.groupOverviewMap[parentGroup] || null) : null;

    const groupShownInSide = !!(groupOverview && (!this.selectedHigher || this.selectedHigher === 'All') && this.selectedGroup === parentGroup && key && key !== 'All');

    const subjectsFromDegree = this.degreeOptionsMap[key] ? this.degreeOptionsMap[key].slice(1, 8) : [];
    const higherFromDegree = this.higherOptionsMap[key] || [];

    const full = {
      title: key,
      overview: base.overview || (groupShownInSide ? `${key} is a professional program that opens pathways into related industries and higher studies.` : (groupOverview ? groupOverview.about : (`${key} is a professional program that opens pathways into related industries and higher studies.`))),
      eligibility: base.eligibility || ['Completion of relevant prior qualification; subject-specific cutoffs may apply.'],
      duration: base.duration || 'Typically 3-4 years (varies by program)',
      subjectsCovered: base.subjects || (subjectsFromDegree.length ? subjectsFromDegree : (groupShownInSide ? ['Core subject list depends on program'] : (groupOverview ? groupOverview.subjects : ['Core subject list depends on program']))),
      skills: base.skills || (groupShownInSide ? ['Domain skills, problem solving, communication, teamwork'] : (groupOverview ? groupOverview.skills : ['Domain skills, problem solving, communication, teamwork'])),
      careerOpportunities: base.opportunities || (groupShownInSide ? ['Industry roles, research, entrepreneurship'] : (groupOverview ? groupOverview.careerOptions : ['Industry roles, research, entrepreneurship'])),
      governmentJobs: base.governmentJobs || (groupShownInSide ? ['Role depends on exams and qualifications'] : (groupOverview ? groupOverview.governmentJobs : ['Role depends on exams and qualifications'])),
      privateJobs: base.jobRoles || (groupShownInSide ? ['Private sector positions related to the discipline'] : (groupOverview ? groupOverview.privateJobs : ['Private sector positions related to the discipline'])),
      higherStudies: base.higherStudies || (higherFromDegree.length ? higherFromDegree : (parentGroup && this.groupHigherMap[parentGroup] ? this.groupHigherMap[parentGroup] : ['MSc / ME / MCA / MBA (program dependent)'])),
      entranceExams: base.entranceExams || (groupOverview ? groupOverview.entranceExams : ['University/State/National entrance exams as applicable']),
      salary: base.salary || (groupOverview ? groupOverview.salaryInfo : 'Salary varies by role, experience and location — see job portals for current ranges.'),
      futureScope: base.futureScope || (groupOverview ? groupOverview.futureScope : 'Evolving industry demand; advanced specialisations increase prospects.'),
      topCompanies: base.topCompanies || (groupOverview ? groupOverview.topColleges : ['Company listings vary by region — consult placement reports.']),
      relatedVideos: base.videoLinks || (groupOverview && groupOverview.videoLinks ? groupOverview.videoLinks : ['https://www.youtube.com/results?search_query=' + encodeURIComponent(key)]),
      faqs: base.faqs || (groupOverview ? groupOverview.faqs : ['Frequently asked questions vary by program; consult official college pages.']),
      conclusion: base.conclusion || (groupOverview ? groupOverview.conclusion : ('Choosing ' + key + ' should align with your interests and long-term goals.')),
      category: base.category || (groupOverview ? groupOverview.title : 'Other')
    };

    return full;
  }


  getSelectedHigherOverview() {
    const key = this.selectedHigher;
    if (!key || key === 'All') return null;

    let related = this.higherOptionsMap[key] || this.degreeOptionsMap[key] || [];

    try {
    } catch (e) {}

    if (!related || related.length === 0) {
      const derived: string[] = [];
      for (const deg of Object.keys(this.higherOptionsMap || {})) {
        const arr = this.higherOptionsMap[deg] || [];
        if (arr.indexOf(key) !== -1) {
          if (derived.indexOf(deg) === -1) derived.push(deg);
        }
      }

      for (const g of Object.keys(this.groupHigherMap || {})) {
        const arr = this.groupHigherMap[g] || [];
        if (arr.indexOf(key) !== -1) {
          const degs = this.degreeOptionsMap[g] || [];
          degs.forEach(d => {
            if (d !== 'All' && derived.indexOf(d) === -1) derived.push(d);
          });
        }
      }

      if (derived.length) {
        related = ['All', ...derived];
      }
    }

    let subjectsFallback: string[] = [];
    if (related && related.length > 1) {
      const firstRelated = related[1];
      if (this.degreeOptionsMap[firstRelated]) {
        subjectsFallback = this.degreeOptionsMap[firstRelated].slice(1, 6);
      }
    }

 const overview = {
  title: key,

  about: (related && related.length > 1)
    ? `${key} is a common postgraduate or higher education option pursued after ${related.slice(1, 4).join(', ')}. This course helps students gain advanced subject knowledge, professional expertise, research abilities and specialised technical or managerial skills. ${key} improves career opportunities in both government and private sectors and helps students secure higher-level positions with better salary packages. Students who complete ${key} can work in industries, multinational companies, research organizations, educational institutions, startups and public sector departments depending on their specialization.`
    : `${key} is an advanced study option that builds on undergraduate knowledge and opens specialised career paths. It provides deeper understanding, practical exposure, leadership abilities and professional expertise required for higher-level careers and industry growth.`,

  whyChoose:
    `Choose ${key} for deeper domain expertise, advanced practical knowledge, research opportunities and better career prospects. ${key} helps students improve professional qualifications, technical abilities, communication skills and industry exposure. Higher education also increases opportunities for promotions, leadership positions, international careers and specialized roles.`,

  eligibilityCriteria: [
    'Relevant undergraduate degree from a recognized university',
    'Minimum percentage or CGPA as required by the institution',
    'Some colleges may require entrance exams',
    'Certain specializations may require work experience',
    'Reservation and category rules may apply as per institution norms'
  ],

  admissionProcess:
    'Students can apply through university entrance exams, national-level tests, merit-based admissions or direct admissions depending on the institution. Admission usually includes application submission, document verification, entrance exam scores, counseling and fee payment.',

  courseDuration:
    related.length === 0
      ? 'Varies depending on the program, usually between 1 to 3 years'
      : 'Course duration varies by specialization and institution, typically between 1 to 3 years',

  popularCourses: related.slice(1, 8),

  specializations: related.slice(1, 6),

  subjects: subjectsFallback.length
    ? subjectsFallback
    : related.slice(1, 6),

  skills: [
    'Advanced Domain Knowledge',
    'Research & Analysis',
    'Problem Solving',
    'Leadership Skills',
    'Communication Skills',
    'Project Management',
    'Critical Thinking',
    'Decision Making',
    'Technical Expertise',
    'Presentation Skills'
  ],

  skillDetails: [
    'Students gain advanced practical and theoretical subject knowledge.',
    'Research and analytical skills improve significantly.',
    'Leadership and communication abilities help in management roles.',
    'Industry-oriented projects improve practical exposure and professional confidence.',
    'Higher education improves technical expertise and career specialization.'
  ],

  careerOptions: related.slice(1, 6),

  governmentJobs: [
    'Professor',
    'Research Officer',
    'Government Specialist',
    'Administrative Officer',
    'Public Sector Officer',
    'Technical Officer',
    'Scientist',
    'Lecturer'
  ],

  privateJobs: related.slice(1, 6),

  researchOpportunities: [
    'PhD Programs',
    'Research Assistant Roles',
    'Industry Research & Development',
    'Government Research Projects',
    'International Research Collaborations',
    'Innovation and Startup Research'
  ],

  studyAbroadOptions: [
    'USA',
    'Canada',
    'UK',
    'Australia',
    'Germany',
    'Singapore',
    'Europe Universities'
  ],

  entranceExams: [
    'GATE',
    'CAT',
    'GRE',
    'GMAT',
    'NET',
    'SET',
    'University-specific entrance exams'
  ],

  scholarships: [
    'Government Scholarships',
    'Merit Scholarships',
    'Research Fellowships',
    'Minority Scholarships',
    'State Government Fee Reimbursement',
    'International Scholarships'
  ],

  topUniversities: [
    'IITs',
    'NITs',
    'Delhi University',
    'JNU',
    'Osmania University',
    'Andhra University',
    'BITS Pilani',
    'VIT University'
  ],

  certifications: [
    'Advanced Technical Certifications',
    'Research Certifications',
    'Professional Industry Certifications',
    'Project Management Certifications',
    'Data Analytics Certifications',
    'Digital Skills Certifications'
  ],

  certificationLinks: [
    'https://www.coursera.org/',
    'https://www.udemy.com/',
    'https://www.nptel.ac.in/',
    'https://www.skillindia.gov.in/'
  ],

  universityLinks: [
    'https://www.du.ac.in/',
    'https://www.jnu.ac.in/',
    'https://www.andhrauniversity.edu.in/',
    'https://www.osmania.ac.in/'
  ],

  salaryInfo:
    'Postgraduate qualifications generally improve salary potential significantly. Freshers may earn around INR 4–12 LPA depending on specialization, skills and company. Experienced professionals and specialists can earn much higher salaries in India and abroad.',

  futureScope:
    'Higher education provides strong future scope in research, management, academics, technology, healthcare, finance, analytics and industry-specialized careers. Students with advanced qualifications often receive better career growth, international opportunities and leadership positions.',

  industriesHiring: [
    'IT Companies',
    'Research Organizations',
    'Government Departments',
    'Healthcare Industry',
    'Finance & Banking',
    'Education Sector',
    'Manufacturing Industry',
    'Consulting Firms',
    'Multinational Companies'
  ],

  advantages: [
    'Better salary opportunities',
    'Advanced subject expertise',
    'Higher-level career positions',
    'International career opportunities',
    'Research and innovation exposure',
    'Professional networking opportunities'
  ],

  challenges: [
    'Higher competition in admissions',
    'Advanced-level academic difficulty',
    'Some programs may require entrance preparation',
    'Research and project work can be time-consuming'
  ],

  dailyActivities: [
    'Research and project work',
    'Attending lectures and seminars',
    'Practical lab or field work',
    'Industry internships',
    'Preparing presentations and reports',
    'Collaborative learning and discussions'
  ],

  studentSuitableFor: [
    'Students interested in specialization',
    'Students aiming for leadership roles',
    'Students interested in research and innovation',
    'Students planning higher salaries and career growth',
    'Students aiming for international opportunities'
  ],

  videoLinks: [
    'https://www.youtube.com/results?search_query=' + encodeURIComponent(key + ' career guidance'),
    'https://www.youtube.com/results?search_query=' + encodeURIComponent(key + ' overview'),
    'https://www.youtube.com/results?search_query=' + encodeURIComponent(key + ' jobs and salary')
  ],

  websites: [
    'https://www.aicte-india.org/',
    'https://www.ugc.gov.in/',
    'https://www.nirfindia.org/'
  ],

  interviewPrepLinks: [
    'https://www.indiabix.com/',
    'https://www.geeksforgeeks.org/',
    'https://www.interviewbit.com/',
    'https://www.ambitionbox.com/interviews',
    'https://www.freshersworld.com/'
  ],
  courseLinks: [
    'https://www.coursera.org/',
    'https://www.udemy.com/',
    'https://www.nptel.ac.in/',
    'https://www.edx.org/',
    'https://www.skillindia.gov.in/',
    'https://www.geeksforgeeks.org/'
  ],
  governmentJobLinks: [
    'https://www.upsc.gov.in/',
    'https://ssc.nic.in/',
    'https://ibps.in/',
    'https://www.rrbcdg.gov.in/',
    'https://psc.ap.gov.in/',
    'https://www.employmentnews.gov.in/'
  ],
  relatedResources: [
    'https://www.ncs.gov.in/',
    'https://www.aicte-india.org/',
    'https://www.ugc.gov.in/',
    'https://www.nirfindia.org/',
    'https://www.studyinindia.gov.in/'
  ],

  faqs: [
    `What are the career opportunities after ${key}? Multiple opportunities are available in both government and private sectors.`,
    `Is ${key} useful for higher salaries? Yes, advanced qualifications usually improve salary potential.`,
    `Can students pursue research after ${key}? Yes, many students continue with PhD and research careers.`,
    `Does ${key} provide international opportunities? Yes, many specializations have global demand.`,
    `Are scholarships available for ${key}? Yes, government and private scholarships are available.`
  ],

  conclusion:
    `A ${key} helps students deepen expertise, improve professional skills and expand career opportunities. It provides strong advantages for higher salaries, leadership roles, research careers and specialized industry positions in India and abroad.`
};

    return overview;
  }
}

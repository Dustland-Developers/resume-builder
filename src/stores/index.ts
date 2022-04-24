import create from 'zustand';
import produce from 'immer';
import { Item, Resume } from './index.interface';

const INITIAL_DATA = {
  basics: {
    name: 'Jane Doe',
    label: 'Frontend Developer',
    image: 'https://www.linkpicture.com/q/generated_photos_5e68893b6d3b380006f22f8b.jpg',
    email: 'janedoe@email.com',
    phone: '+91 9876543210',
    url: 'www.github.com/sadanandpai/',
    summary:
      'I am a web developer having expertise in frontend development and exposure to back- end development. I design and develop web applications using the latest technologies to deliver the product with quality code.',
    location: {
      address: '',
      postalCode: '',
      city: 'Benglauru',
      countryCode: '',
      region: '',
    },
    relExp: '4 years',
    totalExp: '6 Years',
    objective:
      'Eager to expand my skill set through external trainings to help boost all major front desk KPIs. Hoping to leverage organizational skills to help ABC Corp introduce time-saving schemes for all executives.',
    profiles: [
      {
        network: 'linkedin',
        username: 'sadanandpai',
        url: 'https://www.linkedin.com/in/sadanandpai/',
      },
      {
        network: 'github',
        username: 'sadanandpai',
        url: 'https://github.com/sadanandpai/',
      },
      {
        network: 'hackerrank',
        username: 'paicube',
        url: 'https://www.hackerrank.com/paicube/',
      },
      {
        network: 'leetcode',
        username: 'paicube',
        url: 'https://leetcode.com/paicube/',
      },
    ],
  },

  skills: {
    languages: [
      { name: 'JavaScript', level: 5 },
      { name: 'HTML5', level: 5 },
      { name: 'CSS', level: 5 },
    ],
    frameworks: [
      { name: 'React', level: 4 },
      { name: 'Angular', level: 4 },
    ],
    technologies: [
      { name: 'Algorithms', level: 3 },
      { name: 'Progressive Web Apps', level: 3 },
      { name: 'SQL', level: 3 },
      { name: 'Data Structures', level: 3 },
    ],
    libraries: [
      { name: 'jQuery', level: 3 },
      { name: 'Redux', level: 3 },
    ],
    databases: [{ name: 'Firebase', level: 3 }],
    practices: [
      { name: 'Component based architecture', level: 3 },
      { name: 'Agile methodology', level: 3 },
      { name: 'Design Patterns', level: 3 },
      { name: 'Test Driven Development', level: 3 },
      { name: 'MVC', level: 3 },
    ],
    tools: [
      { name: 'Git', level: 3 },
      { name: 'VS Code', level: 3 },
      { name: 'Jira', level: 3 },
      { name: 'Webpack', level: 3 },
      { name: 'Eclipse', level: 3 },
      { name: 'Bitbucket', level: 3 },
    ],
  },

  work: [
    {
      company: 'Company 1',
      position: 'Senior Software Developer',
      website: '',
      startDate: 'Apr 2021',
      endDate: 'present',
      years: '2.5 years',
      highlights: [],
      summary:
        '* Use my extensive experience with front end development to define the structure and components for the project, making sure they are reusable\n* Keep the code quality high reviewing code from other developers and suggesting improvements\n* Interact with the designer to suggest changes and to make sure the view he has about the design is translated into actual functionality\n* E-commerce maintenance **with Fastcommerce**, a Brazilian e-commerce platform',
    },
    {
      company: 'Company 2',
      position: 'Software Developer',
      website: '',
      startDate: 'Jun 2015',
      endDate: 'Dec 2017',
      years: '2.5 years',
      highlights: [],
      summary:
        "* Develop web applications based on Sharepoint, Drupal 8 and Episerver\n* Lead a team of 10 front end developers, giving support to the client's multi-cultural team, providing feedback, clarifying requirements and helping with technical questions\n* Keep the Project Manager and the IT Leads updated on the overall progress of the projects and manage the tasks distributed to the team\n* Keep the code and the features implemented by the other developers in accordance to the requirements",
    },
    {
      company: 'Company 3',
      position: 'Trainee Developer',
      website: '',
      startDate: 'Aug 2011',
      endDate: 'May 2015',
      years: '1 year',
      highlights: [],
      summary:
        '* Design easy user interfaces and great user experiences for the digital platforms of small companies\n* Wordpress development, including themes creation or customization, custom plugins development and training\n* E-commerce maintenance with Fastcommerce, a Brazilian e-commerce platform\n* E-commerce development with Magento, customizing preexisting themes \n* Integrate external services such as payment services, delivery, etc into Magento solutions\n* VPS configuration and optimization (Apache & Nginx)',
    },
  ],

  education: [
    {
      institution: 'MIT, University',
      website: 'https://www.mit.edu/',
      studyType: 'MS',
      area: 'Cloud technology',
      startDate: '2014',
      endDate: '2016',
      score: '68%',
      courses: [],
    },
    {
      institution: 'NMAMIT, Nitte',
      website: 'https://www.mit.edu/',
      studyType: 'B.Tech (VTU)',
      area: 'Computer Science',
      startDate: '2010',
      endDate: '2014',
      score: '8.3 CGPA',
      courses: [],
    },
  ],
};

export const useResumeStore = create<Resume>((set) => ({
  ...INITIAL_DATA,
}));

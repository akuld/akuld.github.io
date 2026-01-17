
import { Project, LinkItem, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'autonomous-drone',
    title: 'Autonomous Navigation Drone',
    shortDescription: 'Computer vision-based navigation system for indoor exploration.',
    fullDescription: 'Developed a robust SLAM (Simultaneous Localization and Mapping) system for a quadcopter to navigate GPS-denied environments. Using OpenCV and ROS, the drone can identify obstacles and map its surroundings in real-time. The project involved integrating IMU data with visual odometry to maintain stable flight even in turbulent conditions.',
    category: 'Robotics',
    tags: ['ROS', 'Python', 'OpenCV', 'C++', 'SLAM'],
    imageUrl: 'https://picsum.photos/800/600?random=1',
    galleryUrls: [
      'https://picsum.photos/800/600?random=11',
      'https://picsum.photos/800/600?random=12',
      'https://picsum.photos/800/600?random=13'
    ],
    githubUrl: 'https://github.com/example/drone-project',
    date: 'Spring 2024'
  },
  {
    id: 'solar-car-optimization',
    title: 'Solar Car Aerodynamics',
    shortDescription: 'CFD simulation and physical prototype testing for maximum efficiency.',
    fullDescription: 'Collaborated with the university solar car team to redesign the outer shell of our racing vehicle. Performed extensive CFD (Computational Fluid Dynamics) simulations using ANSYS Fluent to reduce the drag coefficient by 15%. Validated results through scale-model wind tunnel testing and real-world track telemetry.',
    category: 'Mechanical Engineering',
    tags: ['ANSYS', 'SolidWorks', 'MATLAB', 'CFD'],
    imageUrl: 'https://picsum.photos/800/600?random=2',
    galleryUrls: [
      'https://picsum.photos/800/600?random=21',
      'https://picsum.photos/800/600?random=22'
    ],
    demoUrl: 'https://example.com/solar-car-viz',
    date: 'Fall 2023'
  },
  {
    id: 'iot-smart-grid',
    title: 'IoT Smart Grid Controller',
    shortDescription: 'Real-time energy distribution management using ESP32 nodes.',
    fullDescription: 'Designed and implemented a distributed sensor network to monitor and optimize residential energy consumption. The system uses LoRa protocol for long-range communication between nodes and a centralized dashboard for real-time visualization of load distribution. Included an automated switching logic to prioritize critical loads during peak usage.',
    category: 'Electrical Engineering',
    tags: ['C++', 'IoT', 'ESP32', 'AWS', 'LoRa'],
    imageUrl: 'https://picsum.photos/800/600?random=3',
    galleryUrls: [
      'https://picsum.photos/800/600?random=31',
      'https://picsum.photos/800/600?random=32',
      'https://picsum.photos/800/600?random=33'
    ],
    githubUrl: 'https://github.com/example/smart-grid',
    date: 'Summer 2023'
  },
  {
    id: 'neural-prosthetic-hand',
    title: 'Neural Prosthetic Interface',
    shortDescription: 'EMG-based control system for a 3D-printed prosthetic hand.',
    fullDescription: 'An interdisciplinary project aimed at creating an affordable prosthetic solution. Captured muscle signals using surface EMG sensors and applied a light-weight neural network running on a Raspberry Pi to classify intended hand gestures with 94% accuracy. The hand mechanical design was optimized for high strength-to-weight ratio using PETG.',
    category: 'Biomedical Engineering',
    tags: ['PyTorch', 'Python', '3D Printing', 'Embeded Systems'],
    imageUrl: 'https://picsum.photos/800/600?random=4',
    galleryUrls: [
      'https://picsum.photos/800/600?random=41',
      'https://picsum.photos/800/600?random=42'
    ],
    githubUrl: 'https://github.com/example/prosthetic-hand',
    date: 'Winter 2023'
  }
];

export const SOCIAL_LINKS: LinkItem[] = [
  { label: 'GitHub', url: 'https://github.com/engineering-student', icon: 'fa-brands fa-github' },
  { label: 'LinkedIn', url: 'https://linkedin.com/in/engineering-student', icon: 'fa-brands fa-linkedin' },
  { label: 'Email', url: 'mailto:student@university.edu', icon: 'fa-solid fa-envelope' },
  { label: 'CV', url: '#', icon: 'fa-solid fa-file-pdf' }
];

export const SKILLS: Skill[] = [
  { name: 'SolidWorks', level: 90, category: 'Hardware' },
  { name: 'Python', level: 85, category: 'Software' },
  { name: 'C++', level: 75, category: 'Software' },
  { name: 'MATLAB', level: 80, category: 'Software' },
  { name: 'AutoCAD', level: 70, category: 'Hardware' },
  { name: 'Circuit Design', level: 65, category: 'Hardware' },
  { name: 'ROS', level: 80, category: 'Software' },
  { name: 'Ansys Fluent', level: 60, category: 'Hardware' }
];

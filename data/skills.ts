import type { Skill } from '@/types';

export const skills: Skill[] = [
  {
    id: 'skill-001',
    name: 'Python Programming',
    type: 'Digital',
    description:
      'Proficiency in writing, debugging and maintaining Python code for applications, data analysis and automation. Includes knowledge of libraries such as NumPy, pandas and Django.',
    occupationCount: 4,
    occupationIds: ['occ-001', 'occ-007', 'occ-008', 'occ-010'],
    relatedSkillIds: ['skill-011', 'skill-005', 'skill-002', 'skill-012'],
  },
  {
    id: 'skill-002',
    name: 'Database Management',
    type: 'Technical',
    description:
      'Designing, implementing and maintaining relational and non-relational databases. Includes SQL, schema design, query optimisation and data security practices.',
    occupationCount: 5,
    occupationIds: ['occ-001', 'occ-007', 'occ-008', 'occ-009', 'occ-010'],
    relatedSkillIds: ['skill-001', 'skill-005', 'skill-011'],
  },
  {
    id: 'skill-003',
    name: 'Mechanical Engineering',
    type: 'Technical',
    description:
      'Application of principles of mechanics, thermodynamics and materials science to design and manufacture mechanical systems and components.',
    occupationCount: 2,
    occupationIds: ['occ-002', 'occ-006'],
    relatedSkillIds: ['skill-010', 'skill-008', 'skill-007'],
  },
  {
    id: 'skill-003c',
    name: 'Electrical Engineering',
    type: 'Technical',
    description:
      'Design, development and maintenance of electrical systems, circuits and power distribution networks. Includes knowledge of control systems and electrical safety standards.',
    occupationCount: 1,
    occupationIds: ['occ-003'],
    relatedSkillIds: ['skill-010', 'skill-004', 'skill-003'],
  },
  {
    id: 'skill-004',
    name: 'Problem Solving',
    type: 'Cognitive',
    description:
      'Ability to identify, analyse and resolve complex problems systematically. Includes critical thinking, root cause analysis and creative solution development.',
    occupationCount: 12,
    occupationIds: ['occ-001', 'occ-002', 'occ-003', 'occ-004', 'occ-005', 'occ-006', 'occ-007', 'occ-008', 'occ-009', 'occ-010', 'occ-011', 'occ-012'],
    relatedSkillIds: ['skill-005', 'skill-006'],
  },
  {
    id: 'skill-005',
    name: 'Data Analysis',
    type: 'Cognitive',
    description:
      'Collecting, cleaning, analysing and interpreting datasets using statistical methods and visualisation tools to support evidence-based decision-making.',
    occupationCount: 4,
    occupationIds: ['occ-001', 'occ-006', 'occ-007', 'occ-008'],
    relatedSkillIds: ['skill-001', 'skill-002', 'skill-004'],
  },
  {
    id: 'skill-006',
    name: 'Project Management',
    type: 'Organisational',
    description:
      'Planning, executing and closing projects effectively. Includes scope management, scheduling, budgeting, risk management and stakeholder communication.',
    occupationCount: 5,
    occupationIds: ['occ-001', 'occ-002', 'occ-003', 'occ-006', 'occ-009', 'occ-011'],
    relatedSkillIds: ['skill-004', 'skill-003b', 'skill-007'],
  },
  {
    id: 'skill-007',
    name: 'Quality Control',
    type: 'Methodological',
    description:
      'Inspecting, testing and verifying products and processes to ensure conformance to quality standards. Includes knowledge of statistical process control and ISO standards.',
    occupationCount: 5,
    occupationIds: ['occ-002', 'occ-003', 'occ-005', 'occ-006', 'occ-011', 'occ-012'],
    relatedSkillIds: ['skill-006', 'skill-010', 'skill-004'],
  },
  {
    id: 'skill-008',
    name: 'Machine Maintenance',
    type: 'Physical',
    description:
      'Performing preventive and corrective maintenance on industrial machinery and equipment. Includes diagnostics, lubrication, calibration and component replacement.',
    occupationCount: 4,
    occupationIds: ['occ-002', 'occ-004', 'occ-005', 'occ-006'],
    relatedSkillIds: ['skill-003', 'skill-010', 'skill-007'],
  },
  {
    id: 'skill-010',
    name: 'Technical Drawing',
    type: 'Technical',
    description:
      'Creating and interpreting engineering drawings, blueprints and schematics using CAD software. Includes knowledge of geometric dimensioning and tolerancing.',
    occupationCount: 5,
    occupationIds: ['occ-001', 'occ-002', 'occ-003', 'occ-004', 'occ-005', 'occ-012'],
    relatedSkillIds: ['skill-003', 'skill-003c', 'skill-008'],
  },
  {
    id: 'skill-011',
    name: 'Computer Programming',
    type: 'Digital',
    description:
      'Writing, testing and maintaining code in multiple programming languages. Includes knowledge of algorithms, data structures and software development methodologies.',
    occupationCount: 5,
    occupationIds: ['occ-001', 'occ-008', 'occ-009', 'occ-010'],
    relatedSkillIds: ['skill-001', 'skill-002', 'skill-004'],
  },
  {
    id: 'skill-003b',
    name: 'Communication',
    type: 'Social',
    description:
      'Effectively conveying information through written, verbal and visual means. Includes active listening, presentation skills and cross-cultural communication.',
    occupationCount: 10,
    occupationIds: ['occ-001', 'occ-002', 'occ-003', 'occ-004', 'occ-005', 'occ-007', 'occ-008', 'occ-009', 'occ-010', 'occ-011', 'occ-012'],
    relatedSkillIds: ['skill-006', 'skill-004'],
  },
  {
    id: 'skill-012',
    name: 'Machine Learning',
    type: 'Digital',
    description:
      'Developing and deploying machine learning models using supervised, unsupervised and reinforcement learning techniques. Includes model evaluation and deployment.',
    occupationCount: 1,
    occupationIds: ['occ-008'],
    relatedSkillIds: ['skill-001', 'skill-005', 'skill-011'],
  },
];

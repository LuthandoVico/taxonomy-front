export type Taxonomy = 'OFO' | 'ESCO';

export type SkillType =
  | 'Technical'
  | 'Cognitive'
  | 'Social'
  | 'Digital'
  | 'Methodological'
  | 'Language'
  | 'Organisational'
  | 'Physical';

export type MappingType = 'Exact Match' | 'Close Match' | 'Partial Match' | 'Broad Match';

export type MappingStatus = 'Verified' | 'Pending' | 'Needs Review';

export interface OccupationSkill {
  skillId: string;
  skillName: string;
  skillType: SkillType;
  essential: boolean;
  importance: number;
}

export interface OccupationTask {
  id: string;
  description: string;
}

export interface OccupationSpecialisation {
  id: string;
  name: string;
}

export interface EscoMapping {
  escoOccupation: string;
  escoUri: string;
  similarity: number;
  mappingType: MappingType;
  status: MappingStatus;
}

export interface Occupation {
  id: string;
  ofoCode: string;
  title: string;
  taxonomy: Taxonomy;
  description: string;
  skillsCount: number;
  tasksCount: number;
  specialisationsCount: number;
  escoMatchesCount: number;
  skills: OccupationSkill[];
  tasks: OccupationTask[];
  specialisations: OccupationSpecialisation[];
  escoMappings: EscoMapping[];
}

export interface Skill {
  id: string;
  name: string;
  type: SkillType;
  description: string;
  occupationCount: number;
  occupationIds: string[];
  relatedSkillIds: string[];
}

export interface Specialisation {
  id: string;
  name: string;
  parentOccupationId: string;
  parentOccupationTitle: string;
  ofoCode: string;
  description: string;
}

export interface CrosswalkMapping {
  id: string;
  ofoOccupation: string;
  ofoCode: string;
  escoOccupation: string;
  escoUri: string;
  similarity: number;
  mappingType: MappingType;
  status: MappingStatus;
}

export interface Stats {
  occupations: number;
  skills: number;
  tasks: number;
  specialisations: number;
  mappings: number;
}

export interface CrosswalkStats {
  ofoOccupations: number;
  mapped: number;
  escoOccupations: number;
  averageSimilarity: number;
}

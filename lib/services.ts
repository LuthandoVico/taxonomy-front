import { occupations } from '@/data/occupations';
import { skills } from '@/data/skills';
import { specialisations } from '@/data/specialisations';
import { crosswalkMappings } from '@/data/crosswalk';
import { stats, crosswalkStats } from '@/data/stats';
import type {
  Occupation,
  Skill,
  Specialisation,
  CrosswalkMapping,
  Stats,
  CrosswalkStats,
  OccupationSkill,
  OccupationTask,
  OccupationSpecialisation,
  EscoMapping,
} from '@/types';

export function getStats(): Stats {
  return stats;
}

export function getCrosswalkStats(): CrosswalkStats {
  return crosswalkStats;
}

export function getOccupations(): Occupation[] {
  return occupations;
}

export function getOccupation(ofoCode: string): Occupation | undefined {
  return occupations.find((o) => o.ofoCode === ofoCode);
}

export function getOccupationSkills(ofoCode: string): OccupationSkill[] {
  const occ = getOccupation(ofoCode);
  return occ ? occ.skills : [];
}

export function getOccupationTasks(ofoCode: string): OccupationTask[] {
  const occ = getOccupation(ofoCode);
  return occ ? occ.tasks : [];
}

export function getOccupationSpecialisations(ofoCode: string): OccupationSpecialisation[] {
  const occ = getOccupation(ofoCode);
  return occ ? occ.specialisations : [];
}

export function getOccupationEscoMappings(ofoCode: string): EscoMapping[] {
  const occ = getOccupation(ofoCode);
  return occ ? occ.escoMappings : [];
}

export function getSkills(): Skill[] {
  return skills;
}

export function getSkill(skillId: string): Skill | undefined {
  return skills.find((s) => s.id === skillId);
}

export function getRelatedSkills(skillId: string): Skill[] {
  const skill = getSkill(skillId);
  if (!skill) return [];
  return skill.relatedSkillIds
    .map((id) => getSkill(id))
    .filter((s): s is Skill => s !== undefined);
}

export function getSkillsForOccupation(ofoCode: string): Skill[] {
  const occ = getOccupation(ofoCode);
  if (!occ) return [];
  return occ.skills
    .map((os) => getSkill(os.skillId))
    .filter((s): s is Skill => s !== undefined);
}

export function getSpecialisations(): Specialisation[] {
  return specialisations;
}

export function getSpecialisationsForOccupation(ofoCode: string): Specialisation[] {
  return specialisations.filter((s) => s.ofoCode === ofoCode);
}

export function getCrosswalk(): CrosswalkMapping[] {
  return crosswalkMappings;
}

export function getCrosswalkForOccupation(ofoCode: string): CrosswalkMapping[] {
  return crosswalkMappings.filter((m) => m.ofoCode === ofoCode);
}

export function getPopularOccupations(): Occupation[] {
  const popularCodes = [
    '2021-251201',
    '2021-214501',
    '2021-215101',
    '2021-721301',
    '2021-722301',
    '2021-214901',
  ];
  return popularCodes
    .map((code) => getOccupation(code))
    .filter((o): o is Occupation => o !== undefined);
}

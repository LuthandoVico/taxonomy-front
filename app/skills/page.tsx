'use client';

import { useMemo, useState } from 'react';
import { ListFilter, Sparkles } from 'lucide-react';
import { getSkills } from '@/lib/services';
import { PageHeader } from '@/components/page-header';
import { SearchBar } from '@/components/app-shell';
import { EmptyState, SkillCard } from '@/components/taxonomy-ui';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function SkillsPage() {
  const skills = getSkills();
  const [query, setQuery] = useState('');
  const [type, setType] = useState('all');
  const filtered = useMemo(() => skills.filter((skill) => { const matchesQuery = !query || `${skill.name} ${skill.description}`.toLowerCase().includes(query.toLowerCase()); return matchesQuery && (type === 'all' || skill.type === type); }), [skills, query, type]);
  const types = Array.from(new Set(skills.map((skill) => skill.type)));
  return <div className="mx-auto max-w-[1440px] px-5 py-8 sm:px-8 lg:px-10 lg:py-12"><PageHeader eyebrow="Skill explorer" title="Skills" description="Discover the capabilities that connect occupations across technical, digital, cognitive and social domains." /><div className="mb-6 flex flex-col gap-3 sm:flex-row"><div className="flex-1"><SearchBar value={query} onChange={setQuery} placeholder="Search skills or descriptions..." /></div><Select value={type} onValueChange={setType}><SelectTrigger className="w-full bg-white sm:w-[200px]"><ListFilter className="mr-2 h-4 w-4 text-slate-400" /><SelectValue placeholder="Skill type" /></SelectTrigger><SelectContent><SelectItem value="all">All skill types</SelectItem>{types.map((skillType) => <SelectItem key={skillType} value={skillType}>{skillType}</SelectItem>)}</SelectContent></Select></div><div className="mb-5 flex items-center gap-2 text-xs text-slate-500"><Sparkles className="h-3.5 w-3.5 text-blue-600" /><span><strong className="text-slate-800">{filtered.length}</strong> skills in this view</span></div>{filtered.length ? <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{filtered.map((skill) => <SkillCard key={skill.id} skill={skill} />)}</div> : <EmptyState title="No skills match your search" description="Try a different skill name or type." />}</div>;
}

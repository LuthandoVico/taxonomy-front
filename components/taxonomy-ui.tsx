import Link from 'next/link';
import { ArrowUpRight, Check, ChevronRight, Clock3, CircleAlert, ExternalLink, FileText, ListChecks, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';
import type { CrosswalkMapping, EscoMapping, Occupation, Skill, SkillType } from '@/types';

export function TaxonomyBadge({ taxonomy }: { taxonomy: 'OFO' | 'ESCO' }) {
  return <Badge variant="outline" className={cn('border text-[10px] font-bold uppercase tracking-wider', taxonomy === 'OFO' ? 'border-blue-200 bg-blue-50 text-blue-700' : 'border-emerald-200 bg-emerald-50 text-emerald-700')}>{taxonomy}</Badge>;
}

export function SkillTypeBadge({ type }: { type: SkillType }) {
  const styles: Record<SkillType, string> = { Technical: 'border-slate-200 bg-slate-50 text-slate-600', Cognitive: 'border-amber-200 bg-amber-50 text-amber-700', Social: 'border-pink-200 bg-pink-50 text-pink-700', Digital: 'border-blue-200 bg-blue-50 text-blue-700', Methodological: 'border-teal-200 bg-teal-50 text-teal-700', Language: 'border-violet-200 bg-violet-50 text-violet-700', Organisational: 'border-orange-200 bg-orange-50 text-orange-700', Physical: 'border-rose-200 bg-rose-50 text-rose-700' };
  return <Badge variant="outline" className={cn('border text-[10px] font-semibold', styles[type])}>{type}</Badge>;
}

export function SimilarityScore({ value, compact = false }: { value: number; compact?: boolean }) {
  return <div className={cn('flex items-center gap-2', compact ? 'min-w-[72px]' : 'min-w-[130px]')}><div className="flex-1"><Progress value={value} className="h-1.5 bg-slate-100" /></div><span className={cn('font-bold text-slate-700', compact ? 'text-xs' : 'text-sm')}>{value}%</span></div>;
}

export function StatCard({ label, value, icon: Icon, accent = 'blue' }: { label: string; value: string; icon: React.ElementType; accent?: 'blue' | 'teal' | 'amber' | 'rose' | 'slate' }) {
  const colors = { blue: 'bg-blue-50 text-blue-600', teal: 'bg-teal-50 text-teal-600', amber: 'bg-amber-50 text-amber-600', rose: 'bg-rose-50 text-rose-600', slate: 'bg-slate-100 text-slate-600' };
  return <Card className="border-slate-200 bg-white shadow-none transition hover:-translate-y-0.5 hover:shadow-sm"><CardContent className="flex items-center gap-4 p-5"><span className={cn('grid h-10 w-10 shrink-0 place-items-center rounded-lg', colors[accent])}><Icon className="h-[18px] w-[18px]" /></span><div><p className="text-2xl font-bold tracking-tight text-slate-900">{value}</p><p className="mt-0.5 text-xs text-slate-500">{label}</p></div></CardContent></Card>;
}

export function OccupationCard({ occupation }: { occupation: Occupation }) {
  return <Link href={`/occupations/ofo/${occupation.ofoCode}`} className="group block"><Card className="h-full border-slate-200 bg-white shadow-none transition duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"><CardContent className="p-5"><div className="mb-4 flex items-start justify-between gap-3"><span className="grid h-9 w-9 place-items-center rounded-lg bg-blue-50 text-blue-600"><BriefcaseIcon /></span><ArrowUpRight className="h-4 w-4 text-slate-300 transition group-hover:text-blue-500" /></div><h3 className="text-sm font-bold text-slate-900">{occupation.title}</h3><p className="mt-1 font-mono text-[11px] text-slate-400">{occupation.ofoCode}</p><p className="mt-3 line-clamp-2 text-xs leading-relaxed text-slate-500">{occupation.description}</p><div className="mt-4 flex flex-wrap gap-1.5"><span className="rounded bg-slate-50 px-2 py-1 text-[10px] font-medium text-slate-500">{occupation.skillsCount} skills</span><span className="rounded bg-slate-50 px-2 py-1 text-[10px] font-medium text-slate-500">{occupation.tasksCount} tasks</span></div></CardContent></Card></Link>;
}

function BriefcaseIcon() { return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-[18px] w-[18px]"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2"/></svg>; }

export function SkillCard({ skill }: { skill: Skill }) {
  return <Link href={`/skills/${skill.id}`} className="group block"><Card className="h-full border-slate-200 bg-white shadow-none transition duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"><CardContent className="p-5"><div className="flex items-start justify-between gap-3"><div className="grid h-9 w-9 place-items-center rounded-lg bg-slate-100 text-slate-600"><Sparkles className="h-[17px] w-[17px]" /></div><ArrowUpRight className="h-4 w-4 text-slate-300 transition group-hover:text-blue-500" /></div><h3 className="mt-4 text-sm font-bold text-slate-900">{skill.name}</h3><div className="mt-2"><SkillTypeBadge type={skill.type} /></div><p className="mt-3 line-clamp-3 text-xs leading-relaxed text-slate-500">{skill.description}</p><p className="mt-4 text-xs font-medium text-slate-400"><span className="font-bold text-slate-700">{skill.occupationCount}</span> occupations</p></CardContent></Card></Link>;
}

export function EmptyState({ title = 'No results found', description = 'Try adjusting your search or filters.' }: { title?: string; description?: string }) {
  return <div className="rounded-lg border border-dashed border-slate-200 bg-white p-12 text-center"><div className="mx-auto grid h-10 w-10 place-items-center rounded-full bg-slate-100 text-slate-400"><SearchIcon /></div><h3 className="mt-4 text-sm font-bold text-slate-800">{title}</h3><p className="mt-1 text-xs text-slate-500">{description}</p></div>;
}
function SearchIcon() { return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>; }

export function MappingStatus({ status }: { status: CrosswalkMapping['status'] }) {
  const config = { Verified: { icon: Check, className: 'bg-emerald-50 text-emerald-700 border-emerald-200' }, Pending: { icon: Clock3, className: 'bg-amber-50 text-amber-700 border-amber-200' }, 'Needs Review': { icon: CircleAlert, className: 'bg-rose-50 text-rose-700 border-rose-200' } };
  const { icon: Icon, className } = config[status];
  return <Badge variant="outline" className={cn('gap-1 border text-[10px] font-semibold', className)}><Icon className="h-3 w-3" />{status}</Badge>;
}

export function DataSection({ title, eyebrow, icon: Icon, children, action }: { title: string; eyebrow?: string; icon: React.ElementType; children: React.ReactNode; action?: React.ReactNode }) {
  return <section><div className="mb-4 flex items-end justify-between gap-4"><div><div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400"><Icon className="h-3.5 w-3.5" />{eyebrow}</div><h2 className="mt-1 text-lg font-bold tracking-tight text-slate-900">{title}</h2></div>{action}</div>{children}</section>;
}

export function FlowStep({ label, value, icon: Icon, color }: { label: string; value: string; icon: React.ElementType; color: string }) {
  return <div className="flex flex-1 flex-col items-center text-center"><span className={cn('grid h-11 w-11 place-items-center rounded-full border-4 border-white shadow-sm', color)}><Icon className="h-5 w-5" /></span><p className="mt-3 text-[10px] font-bold uppercase tracking-widest text-slate-400">{label}</p><p className="mt-1 text-sm font-bold text-slate-800">{value}</p></div>;
}

export function ProfileMetric({ label, value, icon: Icon }: { label: string; value: string | number; icon: React.ElementType }) {
  return <div className="flex items-center gap-3"><span className="grid h-9 w-9 place-items-center rounded-lg bg-slate-100 text-slate-500"><Icon className="h-4 w-4" /></span><div><p className="text-lg font-bold text-slate-900">{value}</p><p className="text-[11px] text-slate-500">{label}</p></div></div>;
}

export function OccupationLink({ title, code }: { title: string; code: string }) {
  return <Link href={`/occupations/ofo/${code}`} className="group flex items-center justify-between rounded-md border border-slate-100 bg-white px-4 py-3 transition hover:border-blue-200 hover:bg-blue-50/30"><div><p className="text-sm font-semibold text-slate-800 group-hover:text-blue-700">{title}</p><p className="mt-1 font-mono text-[10px] text-slate-400">{code}</p></div><ChevronRight className="h-4 w-4 text-slate-300 group-hover:text-blue-500" /></Link>;
}

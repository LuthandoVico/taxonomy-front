'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, BookOpen, Search } from 'lucide-react';
import { getSpecialisations } from '@/lib/services';
import { PageHeader } from '@/components/page-header';
import { SearchBar } from '@/components/app-shell';
import { EmptyState } from '@/components/taxonomy-ui';
import { Card, CardContent } from '@/components/ui/card';

export default function SpecialisationsPage() {
  const specialisations = getSpecialisations();
  const [query, setQuery] = useState('');
  const filtered = useMemo(() => specialisations.filter((item) => `${item.name} ${item.parentOccupationTitle} ${item.ofoCode}`.toLowerCase().includes(query.toLowerCase())), [specialisations, query]);
  return <div className="mx-auto max-w-[1440px] px-5 py-8 sm:px-8 lg:px-10 lg:py-12"><PageHeader eyebrow="Specialisation explorer" title="Specialisations" description="Explore focused areas of practice and the occupations they sit within." /><div className="mb-6 max-w-xl"><SearchBar value={query} onChange={setQuery} placeholder="Search specialisations, occupations or OFO codes..." /></div>{filtered.length ? <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{filtered.map((item) => <Card key={item.id} className="border-slate-200 bg-white shadow-none transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-sm"><CardContent className="p-5"><div className="flex items-start justify-between"><span className="grid h-9 w-9 place-items-center rounded-lg bg-amber-50 text-amber-600"><BookOpen className="h-4 w-4" /></span><ArrowUpRight className="h-4 w-4 text-slate-300" /></div><h2 className="mt-4 text-sm font-bold text-slate-900">{item.name}</h2><p className="mt-2 line-clamp-2 text-xs leading-relaxed text-slate-500">{item.description}</p><div className="mt-4 border-t border-slate-100 pt-3"><p className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">Parent occupation</p><Link href={`/occupations/ofo/${item.ofoCode}`} className="mt-1 block text-xs font-semibold text-slate-700 hover:text-[#1959c2]">{item.parentOccupationTitle}</Link><p className="mt-1 font-mono text-[10px] text-slate-400">{item.ofoCode}</p></div></CardContent></Card>)}</div> : <EmptyState title="No specialisations match your search" description="Try a different specialisation or occupation." />}</div>;
}

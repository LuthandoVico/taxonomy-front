'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { SearchBar } from '@/components/app-shell';
import { getOccupations, getSkills } from '@/lib/services';

export function GlobalSearch() {
  const router = useRouter();
  const [value, setValue] = useState('');

  const search = () => {
    const term = value.trim().toLowerCase();
    if (!term) return;
    const occupation = getOccupations().find((item) => item.title.toLowerCase().includes(term) || item.ofoCode.toLowerCase().includes(term));
    if (occupation) { router.push(`/occupations/ofo/${occupation.ofoCode}`); return; }
    const skill = getSkills().find((item) => item.name.toLowerCase().includes(term));
    if (skill) router.push(`/skills/${skill.id}`);
  };

  return <SearchBar value={value} onChange={setValue} onSubmit={search} />;
}

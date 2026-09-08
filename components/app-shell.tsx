'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  ChevronLeft,
  ChevronRight,
  CircleHelp,
  GitCompareArrows,
  Layers3,
  Menu,
  Search,
  Sparkles,
  X,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const navigation = [
  { label: 'Overview', href: '/', icon: Layers3 },
  { label: 'Occupations', href: '/occupations', icon: BriefcaseBusiness },
  { label: 'Skills', href: '/skills', icon: Sparkles },
  { label: 'Specialisations', href: '/specialisations', icon: BookOpen },
  { label: 'OFO ↔ ESCO', href: '/crosswalk', icon: GitCompareArrows },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) => href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <div className="min-h-screen bg-[#f7f9fc] text-slate-950">
      <aside className={cn(
        'fixed inset-y-0 left-0 z-40 hidden border-r border-slate-200 bg-white transition-all duration-300 lg:flex lg:flex-col',
        collapsed ? 'w-[76px]' : 'w-[248px]'
      )}>
        <div className={cn('flex h-[76px] items-center border-b border-slate-100 px-5', collapsed ? 'justify-center' : 'justify-between')}>
          <Link href="/" className="flex items-center gap-3" aria-label="Skills Mapping Platform home">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-[#1d5fd1] text-white shadow-sm">
              <GitCompareArrows className="h-5 w-5" />
            </span>
            {!collapsed && <span className="text-[15px] font-bold tracking-tight text-slate-900">Skills Mapping</span>}
          </Link>
          {!collapsed && <button onClick={() => setCollapsed(true)} className="text-slate-400 transition hover:text-slate-700" aria-label="Collapse sidebar"><ChevronLeft className="h-4 w-4" /></button>}
        </div>
        {collapsed && <button onClick={() => setCollapsed(false)} className="absolute -right-3 top-[86px] grid h-6 w-6 place-items-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm hover:text-slate-900" aria-label="Expand sidebar"><ChevronRight className="h-3.5 w-3.5" /></button>}
        <nav className="flex-1 space-y-1 px-3 py-6">
          <p className={cn('mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400', collapsed && 'text-center px-0')}>{collapsed ? '•••' : 'Explore'}</p>
          {navigation.map(({ label, href, icon: Icon }) => (
            <Link key={href} href={href} title={collapsed ? label : undefined} className={cn('group flex items-center gap-3 rounded-md px-3 py-2.5 text-[13px] font-medium transition', isActive(href) ? 'bg-blue-50 text-[#1959c2]' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900', collapsed && 'justify-center px-0')}>
              <Icon className={cn('h-[17px] w-[17px] shrink-0', isActive(href) ? 'text-[#1959c2]' : 'text-slate-400 group-hover:text-slate-700')} />
              {!collapsed && <span>{label}</span>}
            </Link>
          ))}
          <div className="my-6 border-t border-slate-100" />
          <Link href="/about" title={collapsed ? 'About' : undefined} className={cn('group flex items-center gap-3 rounded-md px-3 py-2.5 text-[13px] font-medium transition', isActive('/about') ? 'bg-blue-50 text-[#1959c2]' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900', collapsed && 'justify-center px-0')}>
            <CircleHelp className="h-[17px] w-[17px] shrink-0 text-slate-400 group-hover:text-slate-700" />
            {!collapsed && <span>About the platform</span>}
          </Link>
        </nav>
        {!collapsed && <div className="border-t border-slate-100 p-4"><div className="rounded-lg bg-slate-50 p-3"><p className="text-[11px] font-semibold text-slate-700">Taxonomy explorer</p><p className="mt-1 text-[11px] leading-relaxed text-slate-500">A research preview using local demonstration data.</p><Link href="/about" className="mt-2 inline-flex items-center gap-1 text-[11px] font-semibold text-[#1959c2]">Learn more <ArrowRight className="h-3 w-3" /></Link></div></div>}
      </aside>

      {mobileOpen && <div className="fixed inset-0 z-50 bg-slate-900/25 lg:hidden" onClick={() => setMobileOpen(false)} />}
      <aside className={cn('fixed inset-y-0 left-0 z-50 w-[280px] border-r border-slate-200 bg-white transition-transform lg:hidden', mobileOpen ? 'translate-x-0' : '-translate-x-full')}>
        <div className="flex h-[76px] items-center justify-between border-b border-slate-100 px-5"><Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-3"><span className="grid h-9 w-9 place-items-center rounded-lg bg-[#1d5fd1] text-white"><GitCompareArrows className="h-5 w-5" /></span><span className="text-[15px] font-bold tracking-tight">Skills Mapping</span></Link><button onClick={() => setMobileOpen(false)} aria-label="Close navigation"><X className="h-5 w-5 text-slate-500" /></button></div>
        <nav className="space-y-1 px-3 py-6">{navigation.map(({ label, href, icon: Icon }) => <Link key={href} href={href} onClick={() => setMobileOpen(false)} className={cn('flex items-center gap-3 rounded-md px-3 py-2.5 text-[13px] font-medium', isActive(href) ? 'bg-blue-50 text-[#1959c2]' : 'text-slate-500')}><Icon className="h-[17px] w-[17px]" />{label}</Link>)}<div className="my-6 border-t border-slate-100" /><Link href="/about" onClick={() => setMobileOpen(false)} className="flex items-center gap-3 rounded-md px-3 py-2.5 text-[13px] font-medium text-slate-500"><CircleHelp className="h-[17px] w-[17px]" />About the platform</Link></nav>
      </aside>

      <div className={cn('min-h-screen transition-all duration-300 lg:pl-[248px]', collapsed && 'lg:pl-[76px]')}>
        <header className="sticky top-0 z-30 flex h-[76px] items-center justify-between border-b border-slate-200 bg-white/95 px-5 backdrop-blur sm:px-8 lg:px-10">
          <button className="text-slate-500 lg:hidden" onClick={() => setMobileOpen(true)} aria-label="Open navigation"><Menu className="h-5 w-5" /></button>
          <div className="hidden items-center gap-2 text-xs text-slate-400 sm:flex"><span className="font-medium text-slate-600">Skills Mapping Platform</span><span>/</span><span>{pathname === '/' ? 'Overview' : navigation.find((item) => pathname.startsWith(item.href) && item.href !== '/')?.label ?? 'About'}</span></div>
          <div className="ml-auto flex items-center gap-4"><div className="hidden items-center gap-2 text-xs text-slate-400 md:flex"><span className="h-2 w-2 rounded-full bg-emerald-500" />Demo data active</div><Link href="/about" className="grid h-8 w-8 place-items-center rounded-full border border-slate-200 text-slate-500 transition hover:border-blue-200 hover:text-[#1959c2]" aria-label="About"><CircleHelp className="h-4 w-4" /></Link></div>
        </header>
        <main>{children}</main>
      </div>
    </div>
  );
}

export function SearchBar({ placeholder = 'Search occupations, skills or OFO codes...', value, onChange, onSubmit }: { placeholder?: string; value?: string; onChange?: (value: string) => void; onSubmit?: () => void }) {
  return <div className="relative w-full"><Search className="pointer-events-none absolute left-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-slate-400" /><input value={value} onChange={(event) => onChange?.(event.target.value)} onKeyDown={(event) => { if (event.key === 'Enter') onSubmit?.(); }} placeholder={placeholder} className="h-12 w-full rounded-md border border-slate-200 bg-white pl-11 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#4a86e8] focus:ring-2 focus:ring-blue-100" /></div>;
}

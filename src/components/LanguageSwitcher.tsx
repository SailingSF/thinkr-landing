"use client"

import { usePathname, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
import { getLocalizedPath, getPathWithoutLocale, type Locale } from '@/lib/i18n';
import { useState, useEffect } from 'react';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  
  const currentLocale = mounted && pathname.startsWith('/es') ? 'es' : 'en';

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLanguageChange = (newLocale: Locale) => {
    if (!mounted) return;
    const pathWithoutLocale = getPathWithoutLocale(pathname);
    const newPath = getLocalizedPath(pathWithoutLocale, newLocale);
    
    router.push(newPath);
  };

  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="flex items-center space-x-2">
        <Globe className="w-4 h-4 text-gray-600" />
        <Button
          variant="ghost"
          size="sm"
          className="text-sm"
          disabled
        >
          EN
        </Button>
        <span className="text-gray-400">|</span>
        <Button
          variant="ghost"
          size="sm"
          className="text-sm"
          disabled
        >
          ES
        </Button>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-2">
      <Globe className="w-4 h-4 text-gray-600" />
      <Button
        variant={currentLocale === 'en' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => handleLanguageChange('en')}
        className="text-sm"
      >
        EN
      </Button>
      <span className="text-gray-400">|</span>
      <Button
        variant={currentLocale === 'es' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => handleLanguageChange('es')}
        className="text-sm"
      >
        ES
      </Button>
    </div>
  );
} 
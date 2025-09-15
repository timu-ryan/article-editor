import React, {ReactNode, Suspense} from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import {classNames} from "@/shared/lib/classNames/classNames";
import { useTheme} from "@/shared/lib/hooks/useTheme";
import { Navbar } from "@/widgets/Navbar";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <ThemedProvider>
        {/* header */}
        <Navbar />
        <Suspense fallback={'Loading...'}>
          <Outlet />
        </Suspense>
        {/*footer*/}
      </ThemedProvider>
    </ThemeProvider>
  );
}

export function ThemedProvider({ children }: { children: ReactNode }) {
  const { theme } = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      {children}
    </div>
  )
}

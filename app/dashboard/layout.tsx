'use client';

import { useState } from 'react';
import Sidebar from '@/components/dashboard/Sidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-8 transition-all duration-300 ml-16">
        <div className="pt-8">
          {children}
        </div>
      </main>
    </div>
  );
} 
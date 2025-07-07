'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { 
  HomeIcon, 
  MenuIcon,
  XIcon,
  BookOpenIcon,
  BrainIcon,
  GamepadIcon,
  LineChartIcon,
  LogOutIcon
} from 'lucide-react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = async () => {
    try {
      const response = await fetch('/api/auth/logout', {
        method: 'POST',
        credentials: 'include',
      });

      if (response.ok) {
        router.push('/');
      } else {
        console.error('Logout failed');
      }
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const menuItems = [
    { title: 'Dashboard', icon: <HomeIcon size={20} />, path: '/dashboard' },
    { title: 'Adaptive Reading Assistant', icon: <BookOpenIcon size={20} />, path: '/dashboard/reading' },
    { title: 'Cognitive Learning', icon: <BrainIcon size={20} />, path: '/dashboard/cognitive' },
    { title: 'Gamified Kinesthetic Learning', icon: <GamepadIcon size={20} />, path: '/dashboard/gamification' },
    { title: 'Progress Tracking & Feedback', icon: <LineChartIcon size={20} />, path: '/dashboard/progress' },
  ];

  return (
    <>
      {/* Toggle Button */}
      <button
        className="fixed top-4 left-4 z-50 p-2.5 rounded-lg
        bg-white/90 backdrop-blur-sm border border-indigo-100 
        hover:bg-indigo-50 text-indigo-600 transition-all duration-300
        hover:shadow-md shadow-sm"
        onClick={toggleSidebar}
      >
        {isOpen ? <XIcon size={20} /> : <MenuIcon size={20} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full
        border-r border-indigo-100
        transition-all duration-300 ease-in-out z-40
        bg-gradient-to-b from-white via-white to-indigo-50/50
        backdrop-blur-md
        ${isOpen ? 'w-64' : 'w-0'}`}
      >
        <div className={`flex flex-col h-full ${!isOpen ? 'invisible' : 'visible'}`}>
          {/* Logo */}
          <div className="h-20 flex items-center justify-center
          bg-gradient-to-r from-indigo-600 to-purple-600
          border-b border-indigo-100">
            
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto py-6 px-4">
            <ul className="space-y-2">
              {menuItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <li key={item.title}>
                    <Link
                      href={item.path}
                      className={`flex items-center p-3 rounded-xl
                      group transition-all duration-200 relative
                      ${isActive 
                        ? 'bg-indigo-50 text-indigo-600' 
                        : 'text-gray-700 hover:bg-indigo-50/50'
                      }
                      hover:scale-[0.98]`}
                    >
                      <span className={`transition-colors duration-200
                      ${isActive 
                        ? 'text-indigo-600' 
                        : 'text-gray-500 group-hover:text-indigo-600'
                      }`}>
                        {item.icon}
                      </span>
                      <span className={`ml-3 font-medium text-sm
                      ${isActive 
                        ? 'text-indigo-600' 
                        : 'text-gray-700 group-hover:text-indigo-600'
                      }`}>
                        {item.title}
                      </span>
                      {isActive && (
                        <span className="absolute right-2 w-1.5 h-1.5 
                        rounded-full bg-indigo-600" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Logout Button */}
          <div className="border-t border-indigo-100 p-4 
          bg-gradient-to-t from-indigo-50/50 to-white">
            <button
              onClick={handleLogout}
              className="w-full flex items-center p-3 rounded-xl
              hover:bg-red-50/80 active:bg-red-100/80
              group transition-all duration-200
              hover:scale-[0.98]
              bg-white/50 backdrop-blur-sm"
            >
              <span className="text-gray-500 
              group-hover:text-red-600
              transition-colors duration-200">
                <LogOutIcon size={20} />
              </span>
              <span className="ml-3 font-medium text-sm text-gray-700
              group-hover:text-red-600
              transition-colors duration-200">
                Logout
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-indigo-900/20 backdrop-blur-sm z-30 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};

export default Sidebar;

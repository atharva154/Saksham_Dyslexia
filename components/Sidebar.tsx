'use client'

import React, { useState } from 'react'
import { HiMenuAlt3 } from 'react-icons/hi'
import { MdOutlineRecordVoiceOver } from 'react-icons/md'
import { PiBookOpenTextLight, PiGameControllerLight } from 'react-icons/pi'
import { IoChatbubblesOutline } from 'react-icons/io5'
import { TbProgressCheck } from 'react-icons/tb'
import { AiOutlineSetting } from 'react-icons/ai'
import { useDashboard } from '@/context/DashboardContext'

const Sidebar = () => {
  const [open, setOpen] = useState(true)
  const { setActiveSection } = useDashboard()

  const menus = [
    { name: "AI Reading Assistant", id: "reading", icon: PiBookOpenTextLight },
    { name: "Speech & Writing Support", id: "speech", icon: MdOutlineRecordVoiceOver },
    { name: "Gamified Learning Hub", id: "learning", icon: PiGameControllerLight },
    { name: "Virtual AI Tutor", id: "tutor", icon: IoChatbubblesOutline },
    { name: "Progress & Insights", id: "progress", icon: TbProgressCheck },
    { name: "Accessibility & Customization", id: "settings", icon: AiOutlineSetting },
  ]

  return (
    <section className="flex gap-6">
      <div className={`bg-[#0e0e0e] min-h-screen ${open ? "w-72" : "w-16"} duration-500 text-gray-100 px-4`}>
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <button
              key={i}
              onClick={() => setActiveSection(menu.id)}
              className={`group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md w-full text-left`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
              >
                {menu?.name}
              </h2>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Sidebar 
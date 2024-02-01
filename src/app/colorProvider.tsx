'use client';

import { ReactNode, useState } from 'react';
import { DARK_COLORS, LIGHT_COLORS } from '@/constant';
import Switcher from './switcher';
import { MyNavbar } from './myNavBar';

interface ColorProviderProps {
    children: ReactNode;
  }
function ColorProvider({ children }: ColorProviderProps){
    const [colorTheme, setColorTheme] = useState('light');

    const colorVariables = colorTheme === 'light' ? DARK_COLORS : LIGHT_COLORS;

    const toggleTheme = () => {
        setColorTheme(colorTheme === 'light' ? 'dark' : 'light');
    }
    return (
        <div className= {`min-h-screen ${colorTheme=='light' ? 'bg-white text-black': 'bg-[#2f3537] text-white'}`}>
             <MyNavbar />
             <div className="flex justify-end">
                <Switcher onToggle={toggleTheme}/>
             </div>
            {children}
        </div>
    )
}

export default ColorProvider;
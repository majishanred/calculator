import { useEffect, useState } from 'react'
import Keypad from './components/Keypad';
import Display from './components/Display';
import ThemeElem from './components/ThemeElem';

function App() {
  const themes = ['dark', 'light', 'purple'];
  const [theme, setTheme] = useState('dark');

  const [input, setInput] = useState('');

  const getThemeFromStorage = () => {
    const savedTheme = window.localStorage.getItem('theme');
    savedTheme ? setTheme(savedTheme) : setTheme('dark');
  };

  const syncHeaderColorsToTheme = (theme: string) => {
    if(theme == 'dark') return 'text-white';
    return 'text-primary';
  }

  useEffect(() => {
    getThemeFromStorage()
  }, []);
  
  return (
    <div className={theme + ' text-[32px]'}>
      <div className='absolute w-screen h-screen bg-screen-main -z-1'></div>
      <div className='relative max-w-[520px] container xs:max-w-[280px] flex flex-col gap-6'>
        <div className={'flex mt-[50px] ' + syncHeaderColorsToTheme(theme)}>
          <h4>calc</h4>
          <ThemeElem theme={theme} setTheme={setTheme} themes={themes} />
        </div>
        <Display theme={theme} output={input}/>
        <Keypad input={input} setInput={setInput} />
      </div>
    </div>
  )
}

export default App

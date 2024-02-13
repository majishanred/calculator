import { Dispatch } from "react";

function setThemeHook(theme: string, setTheme: Function) {
  setTheme(theme);
  window.localStorage.setItem("theme", theme);
};

function ThemeElem({theme, themes, setTheme }: { theme: string, themes: string[], setTheme: Dispatch<string>}) {

  const toggleElemPos = (theme: string) => {
    const themeInd = themes.indexOf(theme);
    switch(themeInd) {
      case(0):
        return 'justify-start';
      case(1):
        return 'justify-center';
      case(2):
        return 'justify-end'
    }
  };

  return (
    <div className='inline-flex flex-row ml-auto items-center gap-4'>
      <h5 className='uppercase text-xs'>theme</h5>
      <div className='flex flex-col -translate-y-[14px] gap-2'>
        <div className='flex flex-row justify-around text-xs'>
          <h5>1</h5>
          <h5>2</h5>
          <h5>3</h5>
        </div>
        <div className={'w-[60px] p-1 bg-screen-keypad rounded-full flex ' + toggleElemPos(theme)} onClick={() => {
          const themeInd = themes.indexOf(theme);
          setThemeHook(themes[(themeInd + 1) % 3], setTheme);
        }}>
          <div className='h-[16px] w-[16px] rounded-full bg-key-imp-bg'></div>
        </div>
      </div>
    </div>
  )
};

export default ThemeElem;
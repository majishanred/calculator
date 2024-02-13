
function Display({theme, output }: {theme: string, output: string}) {
  const syncHeaderColorsToTheme = (theme: string) => {
    if(theme == 'dark') return 'text-white';
    return 'text-primary';
  }
  return (
    <div className='p-6 bg-screen-display rounded-xl text-end overflow-hidden'>
      <span className={'inline-flex items-center ' + syncHeaderColorsToTheme(theme)}>{output}</span>
    </div>
  );
}

export default Display;
import { Dispatch } from "react";


function Keypad({ input, setInput}: { input: string, setInput: Dispatch<string>}) {
  const keys = ['7', '8', '9', 'del', '4', '5', '6', '+', '1', '2', '3', '-', '.', '0', '/', '*', 'reset', '='];

  const keyElements = keys.map(elem => {
    switch(elem) {
      case('reset'):
        return <button className="flex items-center justify-center rounded-xl bg-key-secondary-bg border-key-secondary-shadow border-b-[3px] col-span-2 text-white text-[26px]" onClick={() => {
          setInput("");
        }}>{elem.toUpperCase()}</button>
      case('='):
        return <button className="flex items-center justify-center rounded-xl bg-key-imp-bg border-key-imp-shadow border-b-[3px] col-span-2 text-white purple:text-dark-blue" onClick={() => {
          setInput(eval(input).toString());
        }}>{elem}</button>
      case('del'):
        return <button className="flex items-center justify-center rounded-xl bg-key-secondary-bg border-key-secondary-shadow border-b-[3px] text-white text-[26px]" onClick={() => setInput(input.slice(0, input.length - 1))}>{elem.toUpperCase()}</button>;
      };
    return <button className="flex justify-center rounded-xl bg-key-primary-bg border-key-primary-shadow border-b-[3px] text-primary" onClick={() => setInput(input + elem)}>{elem}</button>;
  });

  return (
    <div className="grid grid-cols-4 gap-6 p-6 bg-screen-keypad rounded-xl">
      {keyElements}
    </div>
  )
};

export default Keypad;
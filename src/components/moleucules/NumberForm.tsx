import React from 'react';

type Props = {
    setNumber: (num: number) => void;
    num:number
};

export const NumberForm = (props: Props) => {
    
    const correctNumber=(str:string):number=>{
        if (str=='')return 1
        return parseInt(str)
    }
    
    return (
        <form style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <label htmlFor="numberInput" style={{ margin: 0, display: 'flex', alignItems: 'center', fontSize: '16px', height: '32px' }}>No.</label>
      <input
        id="numberInput"
        placeholder="150"
        onChange={(e) => props.setNumber(correctNumber(e.target.value))}
        style={{ fontSize: '16px', height: '32px', padding: '0 10px' }}
        />
    </form>
    );
};

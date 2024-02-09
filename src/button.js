import { useState } from 'react';

export default function Button({onReset}) {
    return(
        <button className="button" style={{width:'11%'}}  onClick={onReset}>
            Reset
        </button>
    
    );
}


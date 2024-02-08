import { useState } from 'react';

export default function Button({onReset}) {
    return(
        <button className="buttonAnswer" onClick={onReset}>
            Reset
        </button>
    
    );
}


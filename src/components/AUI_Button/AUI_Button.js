import React from 'react'


/** Button Component for Amit UI */
export default function AUI_Button({ 
    children,
    onClick,
    ...remainingStyles

}) {

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '' }}>

            <button onClick={onClick} style={remainingStyles}>
                
                {children}</button>
        </div>
    )
}

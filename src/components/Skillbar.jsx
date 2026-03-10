import {useEffect, useState } from "react";

export default function Skillbar({label, value, colorClass}) {
    const [fill, setFill]=useState(0);

    useEffect(()=>{
        const t = setTimeout(() => setFill(value), 150);
        return () => clearTimeout(t);
}, [value]);

return (
    <div className="mb-4">
        <div className="d-flex justify-content-between fw-semibold">
            <span>{label}</span>
            <span>{value}%</span>
        </div>
    
    <div className="progress mt-2">
        <div 
        className={`progress-bar ${colorClass}`}
        style={{width:`${fill}%`}}
        />
    </div>
    </div>
);
}


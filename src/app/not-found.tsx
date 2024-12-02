"use client"

import { useRouter } from "next/navigation";

export default function NotFound() {
    const router = useRouter();
    return (
        <div 
            style={{
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                height: '100vh', 
                background: 'linear-gradient(to bottom, #222831, #1b1b1b)',
                color: '#ffc639', 
                fontFamily: 'Arial, sans-serif', 
                textAlign: 'center',
                flexDirection: 'column',  
                padding: '20px',
                boxSizing: 'border-box'
            }}
        >
            <div style={{ marginBottom: '20px' }}>
                <h1 style={{ 
                    fontSize: '5rem', 
                    margin: 0, 
                    fontWeight: 'bold', 
                    animation: 'fadeIn 1s ease-out'
                }}>
                    404
                </h1>
                <p style={{ fontSize: '1.5rem', marginTop: '10px', marginBottom: '20px' }}>Oops! Page not found.</p>
            </div>
        
            <button onClick={()=>router.back()}>
                <p style={{
                    fontSize: '1.25rem',
                    color: '#ffc639',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    padding: '10px 20px',
                    border: '2px solid #ffc639  ',
                    borderRadius: '5px',
                    transition: 'background-color 0.3s, color 0.3s'
                }}>
                    Go Back 
                </p>
            </button>
        </div>
    );
}

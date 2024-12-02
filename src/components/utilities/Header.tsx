import React from 'react';
interface prop{
    title : string;
}

export default function HeaderMenu({title}: prop) {
    return (
        <div>
            <div className='p-8'> 
                <div className='flex justify-center'>
                    <div>
                        <h1 className='text-3xl font-bold text-color-primary'>{title}</h1>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </div>
    );
}
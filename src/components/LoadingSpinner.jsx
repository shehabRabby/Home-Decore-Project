import React from 'react';

const LoadingSpinner = ({count=7}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5">
            {
                Array.from({length: 6}).map((_,i) => <div className="flex flex-col gap-4">
               <div key={i} className="skeleton h-64 w-full"></div>
               <div className="skeleton h-4 w-28"></div>
               <div className="skeleton h-4 w-full"></div>
               <div className="skeleton h-4 w-full"></div>
               <div className="skeleton h-4 w-full"></div>
           </div>)
            }
        </div>
    );
};

export default LoadingSpinner;
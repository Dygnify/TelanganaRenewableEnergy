import React from 'react';

const DashboardCard = ({info}) => {
    return (
        <div className='box-shadow min-h-[200px] w-4/5 mx-auto flex justify-center items-center rounded-md'>
            <p>{info.title}</p>
        </div>
    );
};

export default DashboardCard;
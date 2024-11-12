import React from 'react';

const achivementsList = [
  {
    metric: 'Projects',
    value: '50+',
  },
  {
    metric: 'Users',
    value: '1k+',
  },
  {
    metric: 'Awards',
    value: '7+',
  },
  {
    metric: 'Years',
    value: '2+',
  },
];

const AchievmentSection = () => {
  return (
    <div className='py-8 px-4 sm:py-12 sm:px-6 lg:py-16 lg:px-8 xl:gap-16 xl:px-16'>
      <div className='border-[#33353F] border rounded-md py-8 px-4 flex flex-col sm:flex-row items-center justify-between gap-8 sm:gap-4 md:gap-8 lg:gap-12'>
        {achivementsList.map((achievement, index) => (
          <div key={index} className='flex flex-col items-center justify-center mx-4'>
            <h2 className='text-white text-2xl sm:text-3xl lg:text-4xl font-bold'>{achievement.value}</h2>
            <p className='text-[#ADB7BE] text-sm sm:text-base'>{achievement.metric}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievmentSection;

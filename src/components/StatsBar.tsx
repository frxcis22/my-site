import React from 'react';

const stats = [
  { label: 'total professional work Experience', value: '3+' },
  { label: 'Completed Projects', value: '8' },
];

const StatsBar: React.FC = () => (
  <div className="flex flex-wrap justify-center items-center gap-4 my-8 px-4">
    {stats.map((stat) => (
      <div
        key={stat.label}
        className="flex flex-col items-center justify-center bg-secondary/80 rounded-lg py-6 px-8 shadow border border-secondary/30 min-w-[200px]"
      >
        <span className="text-3xl font-bold text-accent mb-1">{stat.value}</span>
        <span className="text-xs uppercase tracking-wider text-text-secondary text-center">{stat.label}</span>
      </div>
    ))}
  </div>
);

export default StatsBar; 
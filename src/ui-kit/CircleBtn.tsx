'use client'

const CircleBtn = ({ text }: {text : string}) => {
  return (
    <div
      className="inline-flex items-center justify-center border border-gray-400
      rounded-2xl h-8 px-6 uppercase tracking-wide text-[16px]  
      text-[--west-bg-secondary] leading-none"
    >
      <h1>{text}</h1>
    </div>
  );
};

export default CircleBtn;
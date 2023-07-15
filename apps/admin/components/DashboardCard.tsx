import { JSXElementConstructor } from 'react';

type Props = {
  title: string;
  icon: JSX.Element;
  props: any;
  color: 'purple' | 'cyan' | 'orange';
};

export default function DashboardCard({ title, icon, props, color }: Props) {
  const colorVariants = {
    purple:
      'h-20 w-20 bg-purple-500 rounded-full p-0 flex justify-center items-center',
    cyan: 'h-20 w-20 bg-cyan-400 rounded-full p-0 flex justify-center items-center',
    orange:
      'h-20 w-20 bg-orange-600 rounded-full p-0 flex justify-center items-center',
  };
  return (
    <div className="flex flex-col grid-rows-2 rounded-md shadow  h-48 w-60 md:h-64 md:w-96 overflow-hidden">
      <div className="flex h-24 w-full bg-yellow-400 justify-center items-center text-center text-2xl">
        {title}
      </div>
      <div className="h-48 grid grid-cols-2 place-items-center place-content-center border border-gray-200 border-t-0">
        <div className={`${colorVariants[color]}`}>{icon}</div>
        <div className="h-20 w-20 grid grid-rows-2 place-items-center place-content-center">
          <div className="font-bold text-lg">Total</div>
          <div className="text-lg">{props}</div>
        </div>
      </div>
    </div>
  );
}

import { ChartSpline, BellDot } from 'lucide-react';
import { Greeting } from '@/utils/helpers/greeting';
import { useAuth } from '@/features/authentication';

export const GreetingHeader = () => {
  const { user } = useAuth();
  return (
    <div className="md:col-span-5 flex justify-between items-center">
      <h1 className="text-lg font-medium">{Greeting()}, {user?.name}</h1>
      <div className="space-x-4 text-gray-500">
        <ChartSpline className="w-4 h-4 inline-block" />
        <BellDot className="w-4 h-4 inline-block" />
      </div>
    </div>
  );
};

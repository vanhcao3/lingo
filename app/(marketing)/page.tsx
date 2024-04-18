import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Home() {
  console.log('render children');
  return (
    <div>
      <h1 className="text-green-500">Hello Lingo!</h1>
    </div>
  );
}

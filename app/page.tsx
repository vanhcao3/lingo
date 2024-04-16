import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div>
      <h1 className="text-green-500">Hello Lingo!</h1>
      <Button variant={'destructive'}>Click me</Button>
    </div>
  );
}

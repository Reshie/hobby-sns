import { posts } from '@/app/lib/placeholder-data';
import Card from '@/app/ui/crew/card';

const sample = [{
	name: "Username",
	content: "Hello!",
	likes: 123,
	replies: 12,
}];

export default function Page() {
  return (
    <div className="w-[520px] mx-4 my-4 bg-white">
      <Card 
        posts={sample}
        tag="挨拶"        
      />
    </div>
  );
}

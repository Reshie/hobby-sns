import { posts } from '@/app/lib/placeholder-data';
import Card from '@/app/ui/crew/card';

export default function Page() {
  return (
    <div className="max-w-[560px] mx-auto bg-slate-300">
        <header className="h-16">Header is here! This is a new SNS for you!</header>
        {posts.map((post) => (
            // eslint-disable-next-line react/jsx-key
            <Card name={post['name']} text={post['text']} tag={post['tag']} />
        ))}
        <footer className="h-16">Footer is here! Thanks for visiting!</footer>
    </div>
  );
}

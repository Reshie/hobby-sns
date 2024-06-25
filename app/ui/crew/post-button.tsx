import {
  PlusIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function PostButton() {
  return (
    <div className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-sky-500 hover:bg-sky-400 flex justify-center items-center">
      <Link
        key="Post"
        href="/home/post"
      >
        <PlusIcon className="size-8 stroke-2 text-white"/>
      </Link>
    </div>
  )
}
import { 
    ChatBubbleOvalLeftIcon,
    HeartIcon,
    ShareIcon,
    EllipsisVerticalIcon
} from '@heroicons/react/24/outline';

export default function Card({
    name,
    text,
    tag
}: {
    name: string,
    text: string,
    tag: string
}) {
    return (
        <div className="flex bg-white p-4 gap-4 border-b">
            <div className="w-10 h-10 rounded-full bg-blue-300 shrink-0"></div>
            <div className="flex flex-col w-full">
                <div className="flex gap-2">
                    <h1 className="font-bold">{name}</h1>
                    <h2 className="font-bold text-sky-500">#{tag}</h2>
                </div>
                <p className="text-sm">{text}</p>
                <div className="h-2"></div>
                <div className="flex">
                    <div className="w-20">
                        <button className="flex gap-1 hover:text-slate-300">
                            <HeartIcon className="size-4" />
                            <p className="text-xs">123</p>
                        </button>
                    </div>
                    <div className="w-20">
                        <button className="flex gap-1 hover:text-slate-300">
                            <ChatBubbleOvalLeftIcon className="size-4" />
                            <p className="text-xs">12</p>
                        </button>
                    </div>
                    <div className="w-20">
                        <button className="flex gap-1 hover:text-slate-300">
                            <ShareIcon className="size-4" />
                        </button>
                    </div>
                </div>
            </div>
            <EllipsisVerticalIcon className="size-5" />
        </div>
    )
}
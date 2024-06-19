import { 
    ChatBubbleOvalLeftIcon,
    HeartIcon,
    ShareIcon,
    EllipsisVerticalIcon
} from '@heroicons/react/24/outline'

export function Card({
    name,
    text
}: {
    name: string,
    text: string
}) {
    return (
        <div className="flex bg-white p-4 gap-4 border-b">
            <div className="w-10 h-10 rounded-full bg-blue-300 shrink-0"></div>
            <div className="flex flex-col w-full">
                <h1 className="font-bold">{name}</h1>
                <p className="text-sm">{text}</p>
                <div className="h-2"></div>
                <div className="grid grid-cols-5">
                    <div className="inline-flex gap-1">
                        <HeartIcon className="size-4" />
                        <p className="text-xs">123</p>
                    </div>
                    <div className="inline-flex items-center gap-1">
                        <ChatBubbleOvalLeftIcon className="size-4" />
                        <p className="text-xs">12</p>
                    </div>
                    <div className="flex gap-1">
                        <ShareIcon className="size-4" />
                    </div>
                </div>
            </div>
            <EllipsisVerticalIcon className="size-5" />
        </div>
    )
}

export default function Page() {
  return (
    <main className="overflow-y-scroll flex justify-center w-full h-screen bg-slate-200">
        <div className="w-[560px] bg-slate-300">
            <p>Hi! This is a new SNS for you!</p>
            <Card name="User Name" text="ああああああああああああああああああああああああああああ" />
            <Card name="User Name" text="ああああああああああああああああああああああああああああ" />
            <Card name="User Name" text="ああああああああああああああああああああああああああああ" />
            <Card name="User Name" text="ああああああああああああああああああああああああああああ" />
            <Card name="User Name" text="ああああああああああああああああああああああああああああ" />
            <Card name="User Name" text="ああああああああああああああああああああああああああああ" />
            <Card name="User Name" text="ああああああああああああああああああああああああああああ" />
            <Card name="User Name" text="ああああああああああああああああああああああああああああ" />
            <Card name="User Name" text="ああああああああああああああああああああああああああああ" />
            <Card name="User Name" text="ああああああああああああああああああああああああああああ" />
            <Card name="User Name" text="ああああああああああああああああああああああああああああ" />
            <Card name="User Name" text="ああああああああああああああああああああああああああああ" />
            <Card name="User Name" text="ああああああああああああああああああああああああああああ" />
            <Card name="User Name" text="ああああああああああああああああああああああああああああ" />
            <Card name="User Name" text="ああああああああああああああああああああああああああああ" />
        </div>
    </main>
  );
}

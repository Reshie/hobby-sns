import { 
    ChatBubbleOvalLeftIcon,
    HeartIcon,
    ShareIcon,
    EllipsisVerticalIcon
} from '@heroicons/react/24/solid';

type Post = {
	name: string;
	content: string;
	likes: number;
	replies: number;
};

interface PostsProps {
	posts: Post[];
	tag: string;
}

export default function Card({posts, tag} : PostsProps) {
	return (
		<>
			<div className="bg-white border border-border rounded-lg">
				<h1 className="text-main font-xl font-bold mx-4 mt-4">{`# ${tag}`}</h1>
				{posts.map((post) => {
					return (
						<div className="flex gap-2 border-b border-border px-4 pb-3 hover:bg-main-post">
							<div className="flex-none w-10 h-10 bg-border rounded-full mt-2"></div>
							<div className="flex flex-col mt-3 gap-2 pr-4">
								<div className="flex items-baseline gap-3">
									<p className="text-text1 text-base font-semibold">{post.name}</p>
									<p className="text-text3 text-xs font-semibold">15分</p>
								</div>
								<p className="text-text1 text-sm">{post.content}</p>
								<div className="flex">
                    <div className="w-20">
                        <button className="flex gap-1">
                            <HeartIcon className="size-4 text-like" />
                            <p className="text-xs text-like font-bold">{post.likes}</p>
                        </button>
                    </div>
                    <div className="w-20">
                        <button className="flex gap-1">
                            <ChatBubbleOvalLeftIcon className="size-4 text-text3" />
                            <p className="text-xs text-text3">{post.replies}</p>
                        </button>
                    </div>
                    <div className="w-20">
                        <button className="flex gap-1">
                            <ShareIcon className="size-4 text-text3" />
                        </button>
                    </div>
                </div>
							</div>
						</div>
					);
				})}
				<div className="flex h-10 justify-center items-center hover:bg-main-pale">
					<p className="text-main text-sm font-bold">もっと見る</p>
				</div>
			</div>
			<div className="h-4"></div>
		</>
	)
}
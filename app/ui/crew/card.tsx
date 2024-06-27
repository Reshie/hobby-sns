import { 
    ChatBubbleOvalLeftIcon,
    HeartIcon,
    ShareIcon,
    EllipsisVerticalIcon
} from '@heroicons/react/24/outline';

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
			<div className="bg-white  border-border rounded-lg p-2">
				<h1 className="text-main font-xl font-bold">{`# ${tag}`}</h1>
				{posts.map((post) => {
					return (
						<div className="flex">
							<div className="w-10 h-10 bg-border rounded-full mt-2"></div>
							<div className="flex-col">
								<div className="flex">
									
								</div>
							</div>
						</div>
					);
				})}
			</div>
	)
}
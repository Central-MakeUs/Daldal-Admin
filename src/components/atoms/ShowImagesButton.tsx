import { twMerge } from 'tailwind-merge';

import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTrigger,
} from '@components/ui/dialog';

type ShowImagesButtonProps = {
	value: string[];
	style: string;
};

const ShowImagesButton = ({ value, style }: ShowImagesButtonProps) => {
	return (
		<td className={twMerge('border overflow-hidden text-center', style)}>
			<Dialog>
				<DialogTrigger>눌러서 확인</DialogTrigger>
				<DialogContent className="bg-White max-h-[calc(100%-50px)] overflow-auto">
					<DialogHeader>인증 이미지 확인하기</DialogHeader>
					<div className="flex flex-col w-full gap-4">
						{value.map(image => {
							return <img src={image} alt="이미지" key={image} />;
						})}
					</div>
				</DialogContent>
			</Dialog>
		</td>
	);
};

export default ShowImagesButton;

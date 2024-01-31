import { twMerge } from 'tailwind-merge';

import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTrigger,
} from '@components/ui/dialog';
import { CrawlingTableDataKey } from '@models/crawling/entity/crawling';
import { useTableDataActions } from '@stores/tableData';

type ShowDataButtonProps = {
	id: number | 'new';
	style: string;
};

const ShowDataButton = ({ id, style }: ShowDataButtonProps) => {
	const { getDataById } = useTableDataActions();
	const data = getDataById(id);

	const renderImageOrImages = (key: CrawlingTableDataKey) => {
		const dataInString = data[key].toString();

		if (key.includes('thumbnail')) {
			return (
				<div key="thumbnail">
					{key}: <img src={dataInString} alt="이미지" />
				</div>
			);
		}

		if (key.includes('image')) {
			return (
				<div key="imageList">
					{key}:{' '}
					<div className="flex flex-col gap-1 w-[150px]">
						{dataInString.split(',').map((url, index) => (
							<img src={url} alt="이미지" key={`imageList#${index}`} />
						))}
					</div>
				</div>
			);
		}

		return (
			<h6 key={key}>
				{key}: {dataInString}
			</h6>
		);
	};

	return (
		<td className={twMerge('border overflow-hidden text-center', style)}>
			<Dialog>
				<DialogTrigger>보기</DialogTrigger>
				<DialogContent className="bg-White max-h-[calc(100%-50px)] overflow-auto">
					<DialogHeader>데이터 보기</DialogHeader>
					<div>
						{Object.keys(data).map(key =>
							renderImageOrImages(key as CrawlingTableDataKey),
						)}
					</div>
				</DialogContent>
			</Dialog>
		</td>
	);
};

export default ShowDataButton;
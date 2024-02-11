import { useNavigate, useParams } from 'react-router-dom';

import CurrentRequestSection from '@components/organisms/point/CurrentRequestSection';
import PastRequestSection from '@components/organisms/point/PastRequestSection';
import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationPrevious,
	PaginationLink,
	PaginationEllipsis,
	PaginationNext,
} from '@components/ui/pagination';
import { useGetPoints } from '@hooks/apis/point';
import PageLayout from '@layouts/PageLayout';

const Point = () => {
	const params = useParams();
	const page = params.page || 1;
	const { data: datas, isLoading, isError, error } = useGetPoints(+page);
	const navigate = useNavigate();

	const lastPage = datas?.pageNum || 1;

	const handleGoPreviousPage = () => {
		navigate(`/point/${+page - 1 > 0 ? +page - 1 : 1}`);
	};

	const handleGoNextPage = () => {
		navigate(`/point/${+page + 1 <= lastPage ? +page + 1 : lastPage}`);
	};

	if (isLoading) {
		return <div>로딩중...</div>;
	}

	if (isError) {
		return <div>{error.message}</div>;
	}

	return (
		<PageLayout>
			<div className="h-full flex flex-col justify-between gap-10">
				<CurrentRequestSection datas={datas?.buys || []} />
				<PastRequestSection datas={datas?.buys || []} />
			</div>
			<Pagination>
				<PaginationContent>
					<PaginationItem>
						<PaginationPrevious
							onClick={handleGoPreviousPage}
							className="cursor-pointer"
						>
							Previous
						</PaginationPrevious>
					</PaginationItem>
					<PaginationItem>
						<PaginationLink>{page}</PaginationLink>
					</PaginationItem>
					<PaginationItem>
						<PaginationEllipsis />
					</PaginationItem>
					<PaginationItem>
						<PaginationNext
							onClick={handleGoNextPage}
							className="cursor-pointer"
						>
							Next
						</PaginationNext>
					</PaginationItem>
				</PaginationContent>
			</Pagination>
		</PageLayout>
	);
};

export default Point;

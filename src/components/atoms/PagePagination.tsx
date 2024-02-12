import { useNavigate } from 'react-router-dom';

import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from '@components/ui/pagination';

type PagePaginationProps = {
	page: number;
	lastPage: number;
	route: '' | '/product' | '/point';
};

const PagePagination = ({ page, lastPage, route }: PagePaginationProps) => {
	const navigate = useNavigate();

	const handleGoPreviousPage = () => {
		navigate(`${route}/${+page - 1 > 0 ? +page - 1 : 1}`);
	};

	const handleGoNextPage = () => {
		navigate(`${route}/${+page + 1 <= lastPage ? +page + 1 : lastPage}`);
	};

	return (
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
					<PaginationNext onClick={handleGoNextPage} className="cursor-pointer">
						Next
					</PaginationNext>
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	);
};

export default PagePagination;

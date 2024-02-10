import { useParams } from 'react-router-dom';

import AddRowButton from '@components/molcules/main/AddRowButton';
import MainTable from '@components/templates/MainTable';
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from '@components/ui/pagination';
import { useGetAdminItems } from '@hooks/apis/item';
import PageLayout from '@layouts/PageLayout';

const Main = () => {
	const params = useParams();

	const page = params.page || 1;
	const { data, isLoading, isError, error } = useGetAdminItems(+page);
	const lastPage = data?.lastPageNum || 1;

	if (isLoading) {
		return <div>로딩중...</div>;
	}

	if (isError) {
		return <div>{error.message}</div>;
	}

	return (
		<PageLayout>
			<AddRowButton />
			<MainTable />
			<Pagination>
				<PaginationContent>
					<PaginationItem>
						<PaginationPrevious href={`${+page - 1 > 0 ? +page - 1 : 1}`}>
							Previous
						</PaginationPrevious>
					</PaginationItem>
					<PaginationItem>
						<PaginationLink href={`${page}`}>{page}</PaginationLink>
					</PaginationItem>
					<PaginationItem>
						<PaginationEllipsis />
					</PaginationItem>
					<PaginationItem>
						<PaginationNext
							href={`${+page + 1 <= lastPage ? +page + 1 : lastPage}`}
						>
							Next
						</PaginationNext>
					</PaginationItem>
				</PaginationContent>
			</Pagination>
		</PageLayout>
	);
};

export default Main;

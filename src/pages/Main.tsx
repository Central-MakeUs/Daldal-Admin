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
import PageLayout from '@layouts/PageLayout';

const Main = () => {
	const params = useParams();
	const page = params.page || 1;

	return (
		<PageLayout>
			<AddRowButton />
			<MainTable page={+page} />
			<Pagination>
				<PaginationContent>
					<PaginationItem>
						<PaginationPrevious>Previous</PaginationPrevious>
					</PaginationItem>
					<PaginationItem>
						<PaginationLink href={`${page}`}>{page}</PaginationLink>
					</PaginationItem>
					<PaginationItem>
						<PaginationEllipsis />
					</PaginationItem>
					<PaginationItem>
						<PaginationNext>Next</PaginationNext>
					</PaginationItem>
				</PaginationContent>
			</Pagination>
		</PageLayout>
	);
};

export default Main;

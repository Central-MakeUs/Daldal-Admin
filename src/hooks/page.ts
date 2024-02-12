import { useParams } from 'react-router-dom';

export const useGetPageNumber = () => {
	const params = useParams();
	const page = params.page || 1;
	return +page;
};

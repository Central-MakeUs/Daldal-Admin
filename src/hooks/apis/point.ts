import { useQuery } from '@tanstack/react-query';

import { getPoints } from '@apis/point';

const useGetPoints = (page: number = 1) => {
	return useQuery({
		queryKey: ['points'],
		queryFn: () => getPoints(page),
		select: data => data.data,
	});
};

export { useGetPoints };

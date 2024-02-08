import { useQuery } from '@tanstack/react-query';

import { getAdminItems } from '@apis/item';

export const useGetAdminItems = (page?: number) => {
	return useQuery({
		queryKey: ['adminItems', page],
		queryFn: () => getAdminItems(page),
		select: data => data.data,
	});
};

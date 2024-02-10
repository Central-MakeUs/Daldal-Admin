import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { crawlAdminItems, getAdminItems } from '@apis/item';

export const useGetAdminItems = (page: number = 1) => {
	return useQuery({
		queryKey: ['adminItems'],
		queryFn: () => getAdminItems(page),
		select: data => data.data,
	});
};

export const useCrawlAdminItems = () => {
	const queryClient = useQueryClient();
	const { mutate } = useMutation({
		mutationKey: ['adminItems'],
		mutationFn: (url: string) => crawlAdminItems(url),
		onSuccess: () =>
			queryClient.invalidateQueries({ queryKey: ['adminItems'] }),
	});

	return { crawlAdminItemsByUrl: mutate };
};

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import {
	addVideoUrl,
	crawlAdminItems,
	getAdminItems,
	registerSuggestedProduct,
	unregisterSuggestedProduct,
} from '@apis/item';
import { useGetPageNumber } from '@hooks/page';
import { AddYoutubeUrlRequestDTO } from '@models/crawling/request/addYoutubeUrlRequestDTO';
import { TableDataId } from '@type/table';

const useGetAdminItems = (page: number = 1) => {
	return useQuery({
		queryKey: ['adminItems', page],
		queryFn: () => getAdminItems(page),
		select: data => data.data,
	});
};

const useCrawlAdminItems = () => {
	const queryClient = useQueryClient();
	const page = useGetPageNumber();

	const { mutate } = useMutation({
		mutationKey: ['adminItems', page],
		mutationFn: (url: string) => crawlAdminItems(url),
		onSuccess: () =>
			queryClient.invalidateQueries({ queryKey: ['adminItems', page] }),
	});

	return { crawlAdminItemsByUrl: mutate };
};

const useAddVideoUrl = () => {
	const queryClient = useQueryClient();

	const { mutate } = useMutation({
		mutationKey: ['adminItems'],
		mutationFn: ({ url, id }: AddYoutubeUrlRequestDTO) => addVideoUrl(url, id),
		onSuccess: () =>
			queryClient.invalidateQueries({ queryKey: ['adminItems'] }),
	});

	return { addVideoUrl: mutate };
};

const useRegisterSuggestedProduct = () => {
	const queryClient = useQueryClient();

	const { mutate } = useMutation({
		mutationKey: ['adminItems'],
		mutationFn: (id: TableDataId) => registerSuggestedProduct(id),
		onSuccess: () =>
			queryClient.invalidateQueries({ queryKey: ['adminItems'] }),
	});

	return { registerSuggestedProduct: mutate };
};

const useUnregisterSuggestedProduct = () => {
	const queryClient = useQueryClient();

	const { mutate } = useMutation({
		mutationKey: ['adminItems'],
		mutationFn: (id: TableDataId) => unregisterSuggestedProduct(id),
		onSuccess: () =>
			queryClient.invalidateQueries({ queryKey: ['adminItems'] }),
	});

	return { unregisterSuggestedProduct: mutate };
};

export {
	useGetAdminItems,
	useCrawlAdminItems,
	useAddVideoUrl,
	useRegisterSuggestedProduct,
	useUnregisterSuggestedProduct,
};

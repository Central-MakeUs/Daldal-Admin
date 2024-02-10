import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { getPoints, rejectPoint } from '@apis/point';
import { RejectPointRequestDTO } from '@models/point/request/rejectPointRequestDTO';

const useGetPoints = (page: number = 1) => {
	return useQuery({
		queryKey: ['points'],
		queryFn: () => getPoints(page),
		select: data => data.data,
	});
};

const useRejectPoint = () => {
	const queryClient = useQueryClient();
	const { mutate } = useMutation({
		mutationKey: ['points'],
		mutationFn: ({ id, rejectReason }: RejectPointRequestDTO) =>
			rejectPoint(id, rejectReason),
		onSuccess: () => queryClient.invalidateQueries({ queryKey: ['points'] }),
	});

	return { rejectPoint: mutate };
};

export { useGetPoints, useRejectPoint };

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import {
	approvePoint,
	getPoints,
	rejectPoint,
	setPurchaseAmount,
} from '@apis/point';
import { ApprovePointRequest } from '@models/point/request/approvePointRequestDTO';
import { RejectPointRequestDTO } from '@models/point/request/rejectPointRequestDTO';
import { SetPurchaseAmountRequest } from '@models/point/request/setPurchaseAmountRequestDTO';

const useGetPoints = (page: number = 1) => {
	return useQuery({
		queryKey: ['points', page],
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

const useApprovePoint = () => {
	const queryClient = useQueryClient();
	const { mutate } = useMutation({
		mutationKey: ['points'],
		mutationFn: ({ id }: ApprovePointRequest) => approvePoint(id),
		onSuccess: () => queryClient.invalidateQueries({ queryKey: ['points'] }),
	});

	return { approvePoint: mutate };
};

const useSetPurchaseAmount = () => {
	const queryClient = useQueryClient();
	const { mutate } = useMutation({
		mutationKey: ['points'],
		mutationFn: ({ id, purchase }: SetPurchaseAmountRequest) =>
			setPurchaseAmount(id, purchase),
		onSuccess: () => queryClient.invalidateQueries({ queryKey: ['points'] }),
	});

	return { setPurchaseAmount: mutate };
};

export { useGetPoints, useRejectPoint, useApprovePoint, useSetPurchaseAmount };

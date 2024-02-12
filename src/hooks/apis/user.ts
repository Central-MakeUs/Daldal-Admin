import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { approveWithdraw, getUsers, rejectWithdraw } from '@apis/user';
import { ApproveWithdrawRequest } from '@models/user/request/approveWithdrawRequestDTO';
import { RejectWithdrawRequest } from '@models/user/request/rejectWithdrawRequestDTO';

const useGetUsers = (page: number = 1) => {
	return useQuery({
		queryKey: ['users'],
		queryFn: () => getUsers(page),
		select: data => data.data,
	});
};

const useApproveWithdraw = () => {
	const queryClient = useQueryClient();
	const { mutate } = useMutation({
		mutationKey: ['users'],
		mutationFn: ({ id }: ApproveWithdrawRequest) => approveWithdraw(id),
		onSuccess: () => queryClient.invalidateQueries({ queryKey: ['users'] }),
	});

	return { approveWithdraw: mutate };
};

const useRejectWithdraw = () => {
	const queryClient = useQueryClient();
	const { mutate } = useMutation({
		mutationKey: ['users'],
		mutationFn: ({ id }: RejectWithdrawRequest) => rejectWithdraw(id),
		onSuccess: () => queryClient.invalidateQueries({ queryKey: ['users'] }),
	});

	return { rejectWithdraw: mutate };
};

export { useGetUsers, useApproveWithdraw, useRejectWithdraw };

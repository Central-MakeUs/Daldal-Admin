import { useQuery } from '@tanstack/react-query';

import { getUsers } from '@apis/user';

const useGetUsers = (page: number = 1) => {
	return useQuery({
		queryKey: ['users'],
		queryFn: () => getUsers(page),
		select: data => data.data,
	});
};

export { useGetUsers };

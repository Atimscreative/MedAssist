import { useQuery, useMutation } from '@tanstack/react-query';
import { api, makeGetRequest, makePatchRequest } from '../../api';

// Query keys for caching and invalidation
const queryKeys = {
  medications: 'medications',
  user: (id: string | undefined) => ['user', id],
};

export const useGetAllCategories = () => {
  return useQuery({
    queryKey: [queryKeys.medications],
    queryFn: () => makeGetRequest(api.Medication.medications),
  });
};

export const useUpdateUser = (id: string) => {
  return useMutation({
    mutationFn: (data: any) => makePatchRequest(data, api.Users.user(id)),
  });
};

export const useGetProduct = (id: string) => {
  return useQuery({
    queryKey: ['product'],
    queryFn: () => makeGetRequest(api.Medication.all(id)),
  });
};

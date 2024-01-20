import {
  QueryKey,
  UseMutationOptions,
  UseQueryOptions,
  useMutation,
  useQuery
} from '@tanstack/react-query';
import type { AxiosError, AxiosRequestHeaders } from 'axios';
import { apiClient } from './apiClient';

export interface IPagedResponse<ResponseType> {
  total: number;
  pages: number;
  size: number;
  results: Array<ResponseType>;
}

export interface IPageParams {
  page: number;
  size: number;
}

type UseGetParams<ResponseType> = {
  endpoint: string;
  key: QueryKey;
  options?: UseQueryOptions<ResponseType, AxiosError>;
};

export const useGet = <ResponseType>({
  endpoint,
  key,
  options = {}
}: UseGetParams<ResponseType>) => {
  const getFn = async () => {
    const request = await apiClient.get<ResponseType>(`${endpoint}`);
    return request.data;
  };
  return useQuery<ResponseType, AxiosError>(key, () => getFn(), options);
};

type UsePostParams<BodyType, ResponseType> = {
  endpoint: string;
  options?: UseMutationOptions<ResponseType, AxiosError, BodyType>;
};

export const usePost = <BodyType, ResponseType>({
  endpoint,
  options = {}
}: UsePostParams<BodyType, ResponseType>) => {
  const postFn = async (body: BodyType) => {
    const response = await apiClient.post<ResponseType>(`${endpoint}`, body);
    return response.data;
  };
  const mutation = useMutation(async (body: BodyType) => {
    const response = await postFn(body);
    return response;
  }, options);
  return mutation;
};

// TODO: make usePost more flexible and configurable so we don't have to make this separate function for posting forms
export const usePostForm = <BodyType, ResponseType>({
  endpoint,
  options = {}
}: UsePostParams<BodyType, ResponseType>) => {
  const postFn = async (body: BodyType) => {
    const response = await apiClient.post<ResponseType>(`${endpoint}`, body, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    });
    return response.data;
  };
  const mutation = useMutation(async (body: BodyType) => {
    const response = await postFn(body);
    return response;
  }, options);
  return mutation;
};

type UseDeleteParams<ResponseType> = {
  endpoint: string;
  options?: UseMutationOptions<
    ResponseType,
    AxiosError,
    AxiosRequestHeaders | undefined
  >;
};

export const useDelete = <ResponseType>({
  endpoint,
  options = {}
}: UseDeleteParams<ResponseType>) => {
  const deleteFn = async () => {
    const response = await apiClient.delete<ResponseType>(`${endpoint}`);
    return response.data;
  };
  const mutation = useMutation(async () => {
    const response = await deleteFn();
    return response;
  }, options);
  return mutation;
};

type UsePutParams<BodyType, ResponseType> = {
  endpoint: string;
  options?: UseMutationOptions<ResponseType, AxiosError, BodyType>;
};

export const usePut = <BodyType, ResponseType>({
  endpoint,
  options = {}
}: UsePutParams<BodyType, ResponseType>) => {
  const putFn = async (body: BodyType) => {
    const response = await apiClient.put<ResponseType>(`${endpoint}`, body);
    return response.data;
  };
  const mutation = useMutation(async (body: BodyType) => {
    const response = await putFn(body);
    return response;
  }, options);
  return mutation;
};

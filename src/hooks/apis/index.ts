import axios, { AxiosError } from 'axios';

import type { InternalAxiosRequestConfig, AxiosResponse } from 'axios';

export const api = axios.create({
	baseURL: import.meta.env.VITE_BASE_URL,
	timeout: 10 * 1000,
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
	},
});

const onRequestFulfilled = async (config: InternalAxiosRequestConfig) => {
	const accessToken = import.meta.env.VITE_SUPER_TOKEN;

	if (accessToken && config.headers) {
		config.headers['Authorization'] = `Bearer ${accessToken}`;
	}

	return config;
};

const onRequestRejected = (error: AxiosError) => {
	console.log('interceptor > error', error);
	Promise.reject(error);
};

const onResponseFulfilled = (response: AxiosResponse) => response;

const onResponseRejected = async (error: AxiosError) => {
	const requestConfig = error.config;

	if (!requestConfig) return Promise.reject(error);
};

api.interceptors.request.use(onRequestFulfilled, onRequestRejected);
api.interceptors.response.use(onResponseFulfilled, onResponseRejected);

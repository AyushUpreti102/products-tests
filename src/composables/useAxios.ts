import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "https://dummyjson.com"
})

export const useAxios = async <T>(options: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
  const result = await axiosInstance.request(options)
  return result
}

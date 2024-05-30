import axios, { CreateAxiosDefaults } from 'axios'

const options: CreateAxiosDefaults = {
	baseURL: process.env.NEXT_PUBLIC_URL_DEV,
}

export const axiosClassic = axios.create(options)
const axiosWithAuth = axios.create(options)

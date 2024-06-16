import { axiosClassic } from '@/api/interceptors'
import { ITodo } from '@/types/todo.types'

class TodoService {
	private BASE_URL = '/todos'

	async getAll() {
		const response = await axiosClassic.get<ITodo[]>(this.BASE_URL)
		return response
	}

	async getById(id: number) {
		const response = await axiosClassic.get<ITodo>(this.BASE_URL + `/${id}`)
		return response
	}
}

export const todoService = new TodoService()

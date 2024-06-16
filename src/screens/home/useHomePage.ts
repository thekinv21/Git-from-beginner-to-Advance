import { todoService } from '@/services/todo.service'
import { ITodo } from '@/types/todo.types'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useMemo, useState } from 'react'

export const useHomePage = () => {
	const { data, isFetching, isLoading } = useQuery({
		queryKey: ['get-all-todoos'],
		queryFn: () => todoService.getAll(),
	})

	const [todos, setTodos] = useState<ITodo[]>([] as ITodo[])

	useEffect(() => {
		setTodos(data?.data as ITodo[])
	}, [isFetching, data?.data])

	return useMemo(
		() => ({
			isFetching,
			isLoading,
			todos,
		}),
		[isFetching, isLoading, todos]
	)
}

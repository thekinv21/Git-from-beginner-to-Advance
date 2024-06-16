import { HomePage } from '@/screens/home/HomePage'
import { ITodo } from '@/types/todo.types'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

jest.mock('next/image')

const mockedUseHomePage = jest.fn()
jest.mock('./useHomePage', () => ({
	useHomePage: () => mockedUseHomePage(),
}))

describe('Home Page Testing....', () => {
	it('Todos isLoading and isFetching state is working?', () => {
		mockedUseHomePage.mockReturnValue({
			isFetching: true,
			isLoading: true,
			todos: [] as ITodo[],
		})

		render(<HomePage />)
		expect(screen.getByText(/Loading Todos/i)).toBeInTheDocument()
	})

	it('Todos are fetched correctly?', async () => {
		const todos = [
			{
				userId: 1,
				id: 1,
				title: 'delectus aut autem',
				completed: false,
			},
			{
				userId: 1,
				id: 2,
				title: 'et porro tempora',
				completed: true,
			},
		]

		mockedUseHomePage.mockReturnValue({
			isFetching: false,
			isLoading: false,
			todos,
		})

		render(<HomePage />)

		const renderedTodos = screen.getAllByRole('listitem')
		expect(renderedTodos).toHaveLength(todos.length)
	})

	it('P tag on Home Page?', () => {
		render(<HomePage />)
		expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
	})
})

import { HomePage } from '@/screens/home/HomePage'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

jest.mock('next/image')

describe('P tag control', () => {
	it('Is have P tag on this Level?', () => {
		render(<HomePage />)
		const heading = screen.getByRole('heading', { level: 1 })
		expect(heading).toBeInTheDocument()
	})
})

describe('P Tag Include control', () => {
	it('Is have P tag on Page?', () => {
		render(<HomePage />)
		const pTag = screen.getByRole('ves')
		expect(pTag).toBeInTheDocument()
	})
})

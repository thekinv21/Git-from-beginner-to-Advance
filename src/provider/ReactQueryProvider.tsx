'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

interface IReactQueryProvider {
	children: React.ReactNode
}

const client = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})

export function ReactQueryProvider({ children }: IReactQueryProvider) {
	return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}

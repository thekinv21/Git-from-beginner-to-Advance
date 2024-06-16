import { ApplicationProvider } from '@/provider/ApplicationProvider'

import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import '../style/globals.scss'

const monserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: {
		template: '%s | Jest Testing',
		default: 'Jest Testing Application',
	},
	description: 'Jest Testing for test our application',
}

interface IRootLayoutProps {
	children: React.ReactNode
}

export default function RootLayout({ children }: Readonly<IRootLayoutProps>) {
	return (
		<html lang='en'>
			<body className={monserrat.className}>
				<ApplicationProvider>{children}</ApplicationProvider>
			</body>
		</html>
	)
}

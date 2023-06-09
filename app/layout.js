import './globals.css'

import NavigationComponent from './components/NavigationComponent';
import PageHeaderComponent from './components/ PageHeaderComponent';
import FooterComponent from './components/FooterComponent';

export const metadata = {
  viewport: "width=device-width, initial-scale=1",
  title: 'Clean Blog',
  description: 'Generated by create next app',
  author: "SD2815",
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <NavigationComponent />
        <PageHeaderComponent />
        {children}
        <FooterComponent />
      </body>
    </html>
  )
}

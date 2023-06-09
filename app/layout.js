import '../styles/globals.css'
import Header from '@components/Header'

export const metadata = {
  title: 'Tim Mitsukeru Blog',
  description: '日本で自分の体験を提供する所です。',
}

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
        <body>
          <Header/>
          <div className='main'>
              <div className='gradient'/>
          </div>

          <main className='app'>
              {children}
          </main>
        </body>
    </html>
  )
}
export default RootLayout
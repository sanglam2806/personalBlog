import '../styles/globals.css'
import Header from '@components/Header'
import Footer from '@components/Footer'

export const metadata = {
  title: 'Tim Mitsuru Blog',
  description: '日本で自分の体験を提供する所です。',
}

const RootLayout = (props) => {
  return (
    <html lang='en'>
        <body>
          <Header/>
          <div className='main'>
              <div className='gradient'/>
          </div>

          <main className='app'>
              {props.children}
              {props.parallel}
          </main>

          <Footer/>
        </body>
    </html>
  )
}
export default RootLayout
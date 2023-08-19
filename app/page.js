import ListRecentPost from "@components/ListRecentPost";
import FeaturedPosts from "@sections/FeaturedPosts";
import Profile from "@components/welcome/Profile";
import localFont from 'next/font/local'
const myFont = localFont({ src: '../public/fonts/f910-shin-comic-2.01.otf' })

export default async function Home({ }) {
  return (
    <div className="mb-8">
      <div className={myFont.className}>
        <div>
          <Profile/>
        </div>
        <div className="p-10 text-center lg:text-3xl md:text-lg sm:text-base font-semibold">
          ブログへようこそ！旅をはじめましょう！
        </div>
        <div>
          <FeaturedPosts/>
          <div className="py-8 lg:mx-64 md:mx-16 flex-auto items-center">
            <ListRecentPost/>
          </div>
        </div>
      </div>
    </div>
  )
}

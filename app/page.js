import Categories from "@components/Categories";
import Postwidget from "@components/Postwidget";
import ListPost from "@components/ListPost";
import ListRecentPost from "@components/ListRecentPost";
import FeaturedPosts from "@sections/FeaturedPosts";
import Profile from "@components/welcome/Profile";
import Intro from "@components/welcome/Intro";
import localFont from 'next/font/local'
const myFont = localFont({ src: '../public/fonts/f910-shin-comic-2.01.otf' })

export default async function Home({ }) {
  return (
    <div className="mb-8">
     {/* <div className="container mb-8">
     <FeaturedPosts/>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <ListPost/>
        <div className="lg:col-span-3 col-span-1">
            <div className="lg:sticky relative top-8">
              <Postwidget/>
              <Categories/>
            </div>
        </div>
      </div> */}

      <div className={myFont.className}>
        <div>
          <Profile/>
        </div>
        <div className="p-10 text-center text-3xl font-japanese font-light">
          ブログへようこそ！旅をはじめまそう！
        </div>
        <div>
          <FeaturedPosts/>
          <div className="py-8 lg:mx-64 mx-16 flex-auto items-center">
            <ListRecentPost/>
          </div>
        </div>
      </div>
    </div>
  )
}

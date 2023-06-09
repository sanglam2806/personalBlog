import Categories from "@components/Categories";
import Postwidget from "@components/Postwidget";
import ListPost from "@components/ListPost";

export default async function Home({ }) {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <ListPost/>
        <div className="lg:col-span-4 col-span-1">
            <div className="lg:sticky relative top-8">
              <Postwidget/>
              <Categories/>
            </div>
        </div>
      </div>
    </div>
  )
}

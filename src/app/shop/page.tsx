import Heroheader from "../components/heroheader"
import Productsshowcase from "../components/productsshowcase"
import Dropdownmenu from '../components/dropdownmenu'


export default function ShopPage() {
  return (
    <main>
      <Heroheader sectionName="Shop" />
      <div className="container mx-auto py-8">
        <Dropdownmenu />

        {/* Products Grid */}
        <Productsshowcase />
        <Productsshowcase />
        <Productsshowcase />
        <Productsshowcase />

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mt-12">
          <button className="h-10 w-10 flex items-center justify-center rounded-md bg-[#FBEBB5] text-gray-900">
            1
          </button>
          <button className="h-10 w-10 flex items-center justify-center rounded-md hover:opacity-80 bg-[#FFF9E5] text-gray-600">
            2
          </button>
          <button className="h-10 w-10 flex items-center justify-center rounded-md hover:opacity-80 bg-[#FFF9E5] text-gray-600">
            3
          </button>
          <button className="h-10 px-4 flex items-center justify-center rounded-md hover:opacity-80 bg-[#FFF9E5] text-gray-600">
            Next
          </button>
        </div>
      </div>
    </main>
  )
}


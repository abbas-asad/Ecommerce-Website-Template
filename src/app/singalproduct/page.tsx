import Productdetails from "../components/productdetails"
import Productoverview from "../components/productoverview"
import Productsshowcase from "../components/productsshowcase"

export default function ProductDetail() {
  return (

    <main>

      <Productdetails />
      <Productoverview />
      <Productsshowcase headingName="Related Products" moreButton="View More" />
    </main>
  )
}

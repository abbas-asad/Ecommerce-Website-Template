import Image from 'next/image'
import Link from 'next/link'

const products = [
    {
        id: 1,
        name: "Trenton modular sofa_3",
        price: "Rs. 25,000.00",
        image: "/tp_pr1.png",
    },
    {
        id: 2,
        name: "Granite dining table with dining chair",
        price: "Rs. 25,000.00",
        image: "/tp_pr2.png",
    },
    {
        id: 3,
        name: "Outdoor bar table and stool",
        price: "Rs. 25,000.00",
        image: "/tp_pr3.png",
    },
    {
        id: 4,
        name: "Plain console with teak mirror",
        price: "Rs. 25,000.00",
        image: "/tp_pr4.png",
    },
]

interface headingNameProp {
    headingName?: string; 
    para?: string; 
    moreButton?: string; 
}


const Productsshowcase = (props:headingNameProp) => {


    return (

        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-semibold mb-4">{props.headingName}</h2>
                    <p className="text-gray-500">
                       {props.para} 
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                       <div key={product.id} className="space-y-3">
                         <Link href="/singalproduct">
                           <div className="cursor-pointer">
                             <div className="aspect-square relative overflow-hidden space-y-3">
                               <Image
                                 src={product.image}
                                 alt={product.name}
                                 width={400}
                                 height={400}
                                 className=""
                               />
                             </div>
                             <h3 className="font-medium text-lg">{product.name}</h3>
                             <p className="font-semibold text-lg">{product.price}</p>
                           </div>
                         </Link>
                       </div>
                       
                    ))}
                </div>
                <div className="text-center mt-12">
                    <Link
                        href="#"
                        className="inline-block border-b-2 border-black pb-1 font-medium hover:opacity-70 transition-opacity"
                    >
                        {props.moreButton}
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Productsshowcase

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Trash2 } from 'lucide-react'

const cartItems = [
  {
    id: 1,
    name: "Asgaard sofa",
    price: 250000.00,
    quantity: 1,
    image: "/asgsofa.png"
  }
]

export default function CartPage() {
  return (
    <div className="container mx-auto px-4 md:px-20 py-16">
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Cart Items Table */}
        <div className="lg:col-span-2">
          {/* Table Header */}
          <div className="bg-[#FFF9E5] p-4">
            <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-8">
              <div className="text-black">Product</div>
              <div className="text-black">Price</div>
              <div className="text-black">Quantity</div>
              <div className="text-black">Subtotal</div>
            </div>
          </div>

          {/* Table Body */}
          <div className="border border-t-0">
            {cartItems.map((item) => (
              <div key={item.id} className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-8 p-4 items-center">
                <div className="flex items-center gap-4">
                  <div className="bg-[#FFF9E5] rounded-lg w-[100px] h-[100px] p-2">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-gray-500">{item.name}</span>
                </div>
                <div className="text-gray-500">
                  Rs. {item.price.toFixed(2)}
                </div>
                <div>
                  <Input
                    type="number"
                    min="1"
                    value={item.quantity}
                    className="w-20 text-center"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span>Rs. {(item.price * item.quantity).toFixed(2)}</span>
                  <button
                    className="bg-[#FFF9E5] p-2 rounded-lg hover:bg-[#FFF0CC] transition-colors"
                    aria-label="Remove item"
                  >
                    <Trash2 className="w-4 h-4 text-gray-500" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cart Totals */}
        <div>
          <div className="bg-[#FFF9E5] rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-6">Cart Totals</h2>
            <div className="space-y-4">
              <div className="flex justify-between pb-4 border-b">
                <span>Subtotal</span>
                <span className="text-gray-600">Rs. 250,000.00</span>
              </div>
              <div className="flex justify-between pb-4">
                <span className="font-medium">Total</span>
                <span className="text-[#B88E2F] font-medium text-xl">Rs. 250,000.00</span>
              </div>
              <Link href="/checkout">
                <Button className="w-full bg-[#000000] hover:bg-gray-800 text-white">
                  Check Out
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


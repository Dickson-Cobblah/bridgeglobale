import { useState, useEffect } from 'react'

const features = [
  { title: "Global Shipping", description: "Reach customers anywhere in the world." },
  { title: "Secure Payment", description: "Safe and trusted payment methods." },
  { title: "Vendor Dashboard", description: "Track your sales." },
]

const steps = [
  { step: "1", title: "Sign Up", description: "Create your account in seconds" },
  { step: "2", title: "List Products", description: "Add your products here" },
  { step: "3", title: "Start Selling", description: "Push the button and reach the whole world" },
]

const heroImages = [
  "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
]

const products = [
  { id: 1, name: "Handwoven Kente Cloth", price: "GHS 450", category: "Fashion", image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=600&q=80" },
  { id: 2, name: "Beaded Waist Chain", price: "GHS 80", category: "Fashion", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80" },
  { id: 3, name: "Shea Butter Body Cream", price: "GHS 60", category: "Cosmetics", image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80" },
  { id: 4, name: "Black Soap Bar", price: "GHS 35", category: "Cosmetics", image: "https://images.unsplash.com/photo-1607006344380-b6775a0824a7?auto=format&fit=crop&w=600&q=80" },
  { id: 5, name: "Handmade Wooden Stool", price: "GHS 220", category: "Crafts", image: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=600&q=80" },
  { id: 6, name: "Woven Basket", price: "GHS 90", category: "Crafts", image: "https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&w=600&q=80" },
  { id: 7, name: "Ankara Print Dress", price: "GHS 300", category: "Fashion", image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=600&q=80" },
  { id: 8, name: "Leather Sandals", price: "GHS 150", category: "Fashion", image: "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?auto=format&fit=crop&w=600&q=80" },
]

function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("default")
  const [currentImage, setCurrentImage] = useState(0)
  const [cart, setCart] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    phone: "",
    sells: "",
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((i) => i.id === product.id)
      if (exists) {
        return prev.map((i) => (i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i))
      }
      return [...prev, { ...product, quantity: 1 }]
    })
    setIsCartOpen(true)
  }

  const handleSubmit = async (e) => {
    if (e) e.preventDefault()
    setIsSubmitting(true)
    try {
      const response = await fetch("https://formspree.io/f/mrpbkegp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        alert("Thanks for joining the waitlist, " + formData.name + "!")
        setFormData({ name: "", business: "", phone: "", sells: "" })
      } else {
        alert("Something went wrong, please try again.")
      }
    } catch {
      alert("Something went wrong, please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const filteredProducts = products
    .filter((item) => selectedCategory === "All" || item.category === selectedCategory)
    .filter((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      const priceA = parseFloat(a.price.replace("GHS ", ""))
      const priceB = parseFloat(b.price.replace("GHS ", ""))
      if (sortBy === "low-high") return priceA - priceB
      if (sortBy === "high-low") return priceB - priceA
      return 0
    })

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Custom Keyframe Styles for Fade-In Effect */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.35s ease-out forwards;
        }
      `}</style>

      {/* Header Bar */}
      <header className="sticky top-0 z-40 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between shadow-sm">
        <span className="text-xl font-bold text-[#0A3D62]">BridgeGlobale</span>
        <button
          onClick={() => setIsCartOpen(true)}
          className="relative bg-gray-100 p-2 rounded-lg hover:bg-gray-200 transition-colors"
        >
          🛒 Cart
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-[#F39C12] text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>
      </header>

      {/* Cart Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/40">
          <div className="w-full max-w-md bg-white h-full p-6 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-[#0A3D62]">Your Cart</h2>
                <button onClick={() => setIsCartOpen(false)} className="text-gray-500 font-bold">✕</button>
              </div>
              {cart.length === 0 ? (
                <p className="text-gray-500">Your cart is empty.</p>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex justify-between items-center border-b pb-2">
                      <div>
                        <p className="font-medium text-[#0A3D62]">{item.name}</p>
                        <p className="text-sm text-gray-500">{item.price} x {item.quantity}</p>
                      </div>
                      <button
                        onClick={() => setCart(cart.filter((i) => i.id !== item.id))}
                        className="text-red-500 text-sm hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
            {cart.length > 0 && (
              <button className="w-full bg-[#F39C12] text-white font-semibold py-3 rounded-lg hover:bg-amber-600 transition-all">
                Proceed to Checkout
              </button>
            )}
          </div>
        </div>
      )}

      {/* Hero */}
      <h1 className="text-4xl font-bold text-[#0A3D62] mt-8 px-6">
        Sell Your Products Globally, <span className="text-[#F39C12]"> From Ghana</span>
      </h1>
      <p className="mt-4 px-6 text-lg text-gray-600 max-w-2xl">
        Empowering Ghanaian vendors to scale their business worldwide with seamless logistics, international payments, and dedicated vendor dashboard.
      </p>
      <div className="mt-6 px-6 flex flex-col sm:flex-row gap-4">
        <a href="#waitlist" className="bg-[#F39C12] hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-lg shadow transition-all text-center">
          Join as Vendor
        </a>
        <a href="#products" className="border-2 border-[#0A3D62] text-[#0A3D62] hover:bg-[#0A3D62] hover:text-white font-semibold px-6 py-3 rounded-lg transition-all text-center">
          Explore Products
        </a>
      </div>

      <div className="mt-8 px-6">
        <img
          src={heroImages[currentImage]}
          alt="BridgeGlobale showcase"
          className="rounded-xl shadow-lg w-full h-[400px] md:h-[500px] object-cover transition-all duration-500"
        />
        <div className="flex gap-2 mt-3 justify-center">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`h-3 rounded-full transition-all ${
                currentImage === index ? "bg-[#F39C12] w-6" : "bg-gray-300 w-3"
              }`}
            ></button>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="px-6 mt-10">
        <h2 className="text-2xl font-bold text-[#0A3D62] mb-6">Features</h2>
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {features.map((item) => (
            <div key={item.title} className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#0A3D62]">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.description}</p>
            </div>
          ))}
        </section>
      </div>

      {/* How It Works */}
      <div className="px-6 mt-10">
        <h2 className="text-2xl font-bold text-[#0A3D62] mb-6">How It Works</h2>
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {steps.map((item) => (
            <div key={item.step} className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#0A3D62]">{item.step}. {item.title}</h3>
              <p className="text-gray-600 mt-2">{item.description}</p>
            </div>
          ))}
        </section>
      </div>

      {/* Products Section */}
      <div id="products" className="px-6 py-24">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center mb-10">
          <div className="flex gap-6 overflow-x-auto pb-2 w-full md:w-auto">
            {["All", "Fashion", "Cosmetics", "Crafts"].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`pb-1 border-b-2 transition-colors ${
                  selectedCategory === cat
                    ? "border-[#F39C12] text-[#F39C12]"
                    : "border-transparent text-gray-500 hover:text-[#0A3D62]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex gap-3 w-full md:w-auto">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm w-full md:w-48"
            />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white"
            >
              <option value="default">Sort by</option>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
            </select>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-[#0A3D62] mb-10">Our Products</h2>

        {/* Animated Grid Container re-mounts on filter/sort changes */}
        <section
          key={`${selectedCategory}-${searchQuery}-${sortBy}`}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12 animate-fade-in"
        >
          {filteredProducts.length === 0 ? (
            <p className="text-gray-500 col-span-full">No products match your criteria.</p>
          ) : (
            filteredProducts.map((item) => (
              <div key={item.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl bg-gray-100 aspect-square mb-4">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" 
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-end justify-center pb-6
                                  opacity-0 translate-y-2
                                  group-hover:opacity-100 group-hover:translate-y-0
                                  transition-all duration-300">
                    <button 
                      onClick={() => addToCart(item)}
                      className="bg-[#F39C12] text-white font-semibold px-5 py-2 rounded-lg"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
                <h3 className="font-medium text-[#0A3D62] capitalize">{item.name}</h3>
                <p className="text-gray-500 text-sm mt-1">{item.category}</p>
                <p className="text-[#0A3D62] font-semibold mt-1">{item.price}</p>
              </div>
            ))
          )}
        </section>
      </div>

      {/* Waitlist Section */}
      <div id="waitlist" className="px-6 py-24 bg-gray-50">
        <h2 className="text-2xl font-bold text-[#0A3D62] mb-6">Join the Waitlist</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
          <input
            type="text"
            required
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="border border-gray-300 rounded-lg px-4 py-3"
          />
          <input
            type="text"
            required
            placeholder="Business Name"
            value={formData.business}
            onChange={(e) => setFormData({ ...formData, business: e.target.value })}
            className="border border-gray-300 rounded-lg px-4 py-3"
          />
          <input
            type="tel"
            required
            placeholder="Phone Number"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="border border-gray-300 rounded-lg px-4 py-3"
          />
          <input
            type="text"
            required
            placeholder="What do you sell?"
            value={formData.sells}
            onChange={(e) => setFormData({ ...formData, sells: e.target.value })}
            className="border border-gray-300 rounded-lg px-4 py-3"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-[#F39C12] hover:bg-amber-600 disabled:opacity-50 text-white font-semibold px-6 py-3 rounded-lg transition-all"
          >
            {isSubmitting ? "Submitting..." : "Join Waitlist"}
          </button>
        </form>
      </div>

      {/* Footer */}
      <footer className="bg-[#0A3D62] text-white px-6 py-10 text-center">
        <p className="font-bold text-lg mb-4">BridgeGlobale</p>
        <div className="flex justify-center gap-6 mb-4">
          <a href="#" className="hover:text-[#F39C12]">Facebook</a>
          <a href="#" className="hover:text-[#F39C12]">Instagram</a>
          <a href="#" className="hover:text-[#F39C12]">Twitter</a>
        </div>
        <p className="text-sm text-gray-300">© 2026 BridgeGlobale. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Home
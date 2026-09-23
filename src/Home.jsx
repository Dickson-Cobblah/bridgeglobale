import { useState, useEffect } from 'react'

const features = [
  { title: "Global Shipping", description: "Reach coustomers anywhere in the world." },
  { title: "Secure Payment", description: "safe and trusted payment methods." },
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
  { id: 9, name: "Coconut Oil (Organic)", price: "GHS 45", category: "Cosmetics", image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80" },
  { id: 10, name: "Clay Beaded Necklace", price: "GHS 70", category: "Fashion", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80" },
  { id: 11, name: "Wooden Carved Mask", price: "GHS 180", category: "Crafts", image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=600&q=80" },
  { id: 12, name: "Sea Moss Gel", price: "GHS 55", category: "Cosmetics", image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80" },
]

function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [currentImage, setCurrentImage] = useState(0)
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

  const handleSubmit = async () => {
    try {
      const response = await fetch("https://formspree.io/f/mrpbkegp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        alert("Thanks for joining the waitlist, " + formData.name + "!")
      } else {
        alert("Something went wrong, please try again.")
      }
    } catch (error) {
      alert("Something went wrong, please try again.")
    }
  }

  return (
    <>
      <h1 className="text-4xl font-bold text-[#0A3D62] mt-8 px-6">
        Sell Your Products Globally, <span className="text-[#F39C12]"> From Ghana</span>
      </h1>
      <p className="mt-4 px-6 text-lg text-gray-600 max-w-2xl">
        Empowering Ghanian vendors to scale their buisness worldwide with seamlesslogistics, international payments, and dedicated vendor dashboard.
      </p>
      <div className="mt-6 px-6 flex flex-col sm:flex-row gap-4">
        <button className="bg-[#F39C12] hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-lg shadow transition-all">
          Join as Vendor
        </button>
        <button className="border-2 border-[#0A3D62] text-[#0A3D62] hover:bg-[#0A3D62] hover:text-white font-semibold px-6 py-3 rounded-lg transition-all">
          Explore Products
        </button>
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

      <div className="px-6 py-24">
        <div className="flex gap-6 mb-10">
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
        <h2 className="text-2xl font-bold text-[#0A3D62] mb-10">Our Products</h2>
        <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
          {products
            .filter((item) => selectedCategory === "All" || item.category === selectedCategory)
            .map((item) => (
              <div key={item.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl bg-gray-100 aspect-square mb-4">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-end justify-center pb-6
                                  opacity-0 translate-y-2
                                  group-hover:opacity-100 group-hover:translate-y-0
                                  transition-all duration-300">
                    <button className="bg-[#F39C12] text-white font-semibold px-5 py-2 rounded-lg">
                      Add to Cart
                    </button>
                  </div>
                </div>
                <h3 className="font-medium text-[#0A3D62] capitalize">{item.name}</h3>
                <p className="text-gray-500 text-sm mt-1">{item.category}</p>
                <p className="text-[#0A3D62] font-semibold mt-1">{item.price}</p>
              </div>
            ))}
        </section>
      </div>

      <div className="px-6 py-24 bg-gray-50">
        <h2 className="text-2xl font-bold text-[#0A3D62] mb-6">Join the Waitlist</h2>
        <div className="flex flex-col gap-4 max-w-md">
          <input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="border border-gray-300 rounded-lg px-4 py-3"
          />
          <input
            type="text"
            placeholder="Business Name"
            value={formData.business}
            onChange={(e) => setFormData({ ...formData, business: e.target.value })}
            className="border border-gray-300 rounded-lg px-4 py-3"
          />
          <input
            type="text"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="border border-gray-300 rounded-lg px-4 py-3"
          />
          <input
            type="text"
            placeholder="What do you sell?"
            value={formData.sells}
            onChange={(e) => setFormData({ ...formData, sells: e.target.value })}
            className="border border-gray-300 rounded-lg px-4 py-3"
          />
          <button
            onClick={handleSubmit}
            className="bg-[#F39C12] hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-lg transition-all"
          >
            Join Waitlist
          </button>
        </div>
      </div>

      <footer className="bg-[#0A3D62] text-white px-6 py-10 text-center">
        <p className="font-bold text-lg mb-4">BridgeGlobale</p>
        <div className="flex justify-center gap-6 mb-4">
          <a href="#" className="hover:text-[#F39C12]">Facebook</a>
          <a href="#" className="hover:text-[#F39C12]">Instagram</a>
          <a href="#" className="hover:text-[#F39C12]">Twitter</a>
        </div>
        <p className="text-sm text-gray-300">© 2026 BridgeGlobale. All rights reserved.</p>
      </footer>
    </>
  )
}

export default Home
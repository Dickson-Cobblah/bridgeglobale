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

function App() {
  return (
    <>
      <nav className="flex justify-between items-center bg-[#0A3D62] px-6 py-4">
        <h1 className="text-white text-xl font-bold">BridgeGlobale</h1>
        <div className="space-x-6">
          <button className="text-white">Home</button>
          <button className="text-white">Vendors</button>
          <button className="text-white">About</button>
        </div>
      </nav>

      <h1 className="text-4xl font-bold text-[#0A3D62] mt-8 px-6">
        Sell Your Products Globally, <span className="text-[#F39C12]"> From Ghana</span>
      </h1>
      <p className="mt-4 px-6 text-lg text-gray-600 max-w-2xl">
        Empowering Ghanian vendors to scale their buisness worldwide with seamlesslogistics, international payments, and dedicated vendor dashboard.
      </p>
      <div className="mt-6 px-6 flex flex-col sm:flex-row gap-4">
        <button className="bg-[#F39c12] hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-lg shadow transition-all">
          Join as Vendor
        </button>
        <button className="border-2 border-[#0A3D62] text-[#0A3D62] hover:bg-[#0A3D62] hover:text-white font-semibold px-6 py-3 rounded-lg transition-all">
          Explore Products
        </button>
      </div>
      <div className="mt-8 px-6">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
          alt="Global Network Globe"
          className="rounded-xl shadow-lg w-full max-w-xl h-64 object-cover"
        />
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
    </>
  )
}

export default App
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
   </>
  )
}
export default App
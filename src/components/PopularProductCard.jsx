

const PopularProductCard = () => {
  return (
    <div>
        {/* Card */}
        <div className="border-2 rounded-xl border-transparent cursor-pointer max-sm:flex-1">
            <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
            <img src="https://images.unsplash.com/photo-1612832766809-5d6f1e9d1d9e" alt="shoe collection" width={127} height={103} className="object-contain" />
            </div>
        </div>
    </div>
  )
}

export default PopularProductCard

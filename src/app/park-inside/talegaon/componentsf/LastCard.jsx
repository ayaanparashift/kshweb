export default function PropertyCard() {
  return (
    <div className="w-[347px] max-w-[100%] h-[425px] overflow-hidden border-[1px] border-[#DDDDDD] bg-white select-none">
      {/* Image Section */}
      <div>
        <img
          src="/ParkPage/lastcar1.webp" // Ensure the image is in the public folder or use an external URL
          alt="KSH Chakan Park IV"
          className="w-[347px] max-w-[100%] h-[193px] object-cover "
        />
      </div>

      {/* Content Section */}
      <div className="px-[35px] pt-[30px]">
        <h2 className="fsans-600 text-[24px] leading-[111%]">
          KSH Chakan Park IV
        </h2>

        <div className="mt-3 text-sm text-gray-600 space-y-3">
          <div className="flex justify-between fsans-400 text-[16px] leading-[26px]">
            <span>CITY</span>
            <span>Pune, Maharashtra</span>
          </div>
          <div className="flex justify-between fsans-400 text-[16px] leading-[26px]">
            <span>Potential</span>
            <span>3.1M sf</span>
          </div>
          <div className="flex justify-between fsans-400 text-[16px] leading-[26px]">
            <span>TOTAL BUILDINGS</span>
            <span>02 Buildings</span>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";

const MiniNav = () => {
  return (
    <div>
      <div className="flex flex-row mt-16 pl-5 bg-white drop-shadow-lg">
        <div className="py-3 px-2 text-sm font-bold">
          <span>SEMUA KATEGORI</span>
        </div>
          <button className="pt-1 pr-6">
            <img src={require ("../assets/dropdown.png")} alt="dropdown" />
          </button>
        <div className="py-3 text-sm">
          <span className="px-3">Mobil Bekas</span>
          <span className="px-3">Motor Bekas</span>
          <span className="px-3">Properti</span>
          <span className="px-3">Handphone</span>
          <span className="px-3">Jasa & Lowongan Kerja</span>
          <span className="px-3">TV & Audio, Video</span>
        </div>
      </div>
    </div>
  )

}

export default MiniNav
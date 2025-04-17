import React from 'react'

const ExtraReiterferien = () => {
  return (
    <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-green-50 p-4 rounded-xl shadow">
          <h3 className="font-bold text-green-800 mb-2">Osterferien 2025</h3>
          <p>21.04 – 26.04.2025</p>
          <p className="font-semibold">400,00 € pro Kind</p>
        </div>
        <div className="bg-yellow-50 p-4 rounded-xl shadow">
          <h3 className="font-bold text-yellow-800 mb-2">Sommerferien 2025</h3>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>30.06 – 05.07</li>
            <li>07.07 – 12.07</li>
            <li>14.07 – 19.07</li>
            <li>21.07 – 26.07</li>
            <li>28.07 – 01.08</li>
            <li>04.08 – 09.08</li>
          </ul>
          <p className="font-semibold mt-2 text-gold">400,00 € pro Woche</p>
        </div>
        <div className="bg-orange-50 p-4 rounded-xl shadow">
          <h3 className="font-bold text-orange-800 mb-2">Herbstferien 2025</h3>
          <div className="flex flex-1 flex-col justify-between">
          <p>06.10 – 18.10.2025</p>
          <p className="font-semibold text-gold">400,00 € pro Kind</p>
          </div>
        </div>
      </div>
  )
}

export default ExtraReiterferien
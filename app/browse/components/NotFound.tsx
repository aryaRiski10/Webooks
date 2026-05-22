import { SearchAlert } from "lucide-react"

const NotFound = () => {
  return (
    <div className="w-full flex items-center justify-center py-10">
        <div className="text-center">
            <SearchAlert className="mx-auto mb-4 text-gray-400" size={50} />
            <h5 className="text-lg font-bold text-gray-800 mb-4">Hasil Pencarian Tidak Ditemukan</h5>
            <p className="text-sm text-gray-600">Maaf, kami tidak dapat menemukan hasil yang sesuai dengan kata kunci Anda.</p>
        </div>
    </div>
  )
}

export default NotFound
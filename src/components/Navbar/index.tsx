import Image from 'next/image'
import logo from '../../../public/coin.png'
import { useModalContext } from '@/context/ModalContext'

function Navbar() {
  const { openModal } = useModalContext()

  return (
    <nav className="flex items-center w-full justify-between">
      <div className="flex gap-4 items-center">
        <Image src={logo} alt="Coin logo image" width={40} height={10} />
        <h1 className="text-2xl font-bold text-[#E1E1E6] drop-shadow">
          Finantial
        </h1>
      </div>
      <button
        className="drop-shadow rounded-md transition-all bg-[#00875F] px-5 py-3 text-white font-bold text-base hover:bg-[#00875ec5] hover:scale-105"
        onClick={openModal}
      >
        New transaction
      </button>
    </nav>
  )
}

export default Navbar

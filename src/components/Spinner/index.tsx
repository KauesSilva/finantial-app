function Spinner() {
  return (
    <div className="flex h-screen items-center justify-center bg-[#121214]">
      <div className="animate-spin inline-block w-12 h-12 border-[6px] border-current border-t-transparent text-[#00875F] rounded-full transition-all">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}

export default Spinner

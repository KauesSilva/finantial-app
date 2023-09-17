interface FormRootProps {
  value: string
}

function FormTitle({ value }: FormRootProps) {
  return (
    <div>
      <h1 className="text-2xl font-bold text-[#E1E1E6] drop-shadow">{value}</h1>
    </div>
  )
}

export default FormTitle

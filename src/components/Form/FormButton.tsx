import Button from '../Button'

interface FormButtonProps {
  type: 'Sign In' | 'Register'
}

function FormButton({ type }: FormButtonProps) {
  return (
    <div>
      <Button type="submit" className="py-4 px-8">
        {type}
      </Button>
    </div>
  )
}

export default FormButton

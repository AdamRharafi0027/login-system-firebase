

const FormCheckBox = ({label, text, type}) => {
  return (
    <>
        <div className="flex items-center  gap-3">
            <input
              type={type}
              id={label}
              className="w-5 h-5 cursor-pointer"
            />
            <label htmlFor={label} className="font-bold cursor-pointer">
              {text}
            </label>
          </div>
    </>
  )
}

export default FormCheckBox


const FormHeader = ({headline, subtitle}) => {
  return (
    <>
        <div className="mb-2 text-white text-center">
            <h1 className="text-4xl font-bold ">{headline}</h1>
            <p>{subtitle}</p>
          </div>
    </>
  )
}

export default FormHeader
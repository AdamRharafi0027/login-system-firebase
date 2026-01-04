

const FormLayout = ({children, onsubmit}) => {
  return (
    <>
        <form onSubmit={onsubmit} className=" p-2 flex justify-center items-center w-full h-screen">
            {children}
        </form>
    </>
  )
}

export default FormLayout


const FormContainer = ({children}) => {
  return (
    <>
        <section className="flex flex-col rounded-3xl items-center gap-2 bg-white/20 backdrop-blur-md border border-white/20 text-white px-20 py-10 shadow-sm hover:shadow-md transition-all duration-200 ">
            {children}
        </section>
    </>
  )
}

export default FormContainer
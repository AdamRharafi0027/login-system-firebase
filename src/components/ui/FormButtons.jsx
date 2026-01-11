
const FormButtons = ({text, onclick}) => {
  return (
    <>
        <button onClick={onclick} type="submit">
            <span className="text">{text}</span>
            <span>Now!</span>
          </button>
    </>
  )
}

export default FormButtons
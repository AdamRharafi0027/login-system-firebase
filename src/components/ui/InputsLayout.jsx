const InputsLayout = ({ label, placeholder, type, onchange, value }) => {
  const inputId = label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="flex flex-col gap-2 mb-5 w-100">
      <label htmlFor={inputId} className="font-bold">
        {label}
      </label>

      <input
        id={inputId}
        type={type}
        value={value}
        placeholder={placeholder}
        autoComplete="off"
        onChange={onchange}
        className="text-black border-purple-500 bg-white/90 outline-none focus:border-purple-500 focus:shadow-xl/20 shadow-purple-700 border-2 w-full placeholder:text-gray-400 duration-100 transition-all px-5 py-3 rounded-md"
      />
    </div>
  );
};

export default InputsLayout;

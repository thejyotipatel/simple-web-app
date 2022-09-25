const InputCmponent = ({ value, name, type, handleChange }) => {
  return (
    <div className='input-controler'>
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={name}
      />
    </div>
  )
}
export default InputCmponent

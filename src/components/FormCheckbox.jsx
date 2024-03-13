

const FormCheckbox = ({label, name, defaultValue, size}) => {
  return (
    <div className='form-control items-center'>
        <label htmlFor={name}>
            <span className='label-text capitalize'>{label}</span>
        </label>
        <input type="checkbox" id={name} name={name} defaultChecked={defaultValue} className={`checkbox checkbox-primary ${size}`} />
    </div>
  )
}

export default FormCheckbox
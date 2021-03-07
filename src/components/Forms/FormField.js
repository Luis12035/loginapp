function FormField({ type, id, fname, onChange, caption, value, error, labelClassName, containerClassName, ...attr}){
  return (
    <section className="flex justify-between">
      <section className="mr-4">
        <label className="">{caption}</label>
      </section>
      <section>
        <input
          type={type}
          id={id}
          name={fname}
          onChange={onChange}
          value={value}
          {...attr}
        />
      </section>
    
    
      {(error && true) ? (<section>{error}</section>):null }
    </section>
  )
}

export default FormField;

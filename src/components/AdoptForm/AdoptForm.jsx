import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './AdoptForm.css'; 

function AdoptForm() {
  const { register, handleSubmit, watch, setValue, reset, formState: { errors } } = useForm();
  const [mensajeExito, setMensajeExito] = useState(""); 

  // Observar los valores de los checkboxes
  const adopcion = watch("adopcion", false);
  const apadrinamiento = watch("apadrinamiento", false);

  // Manejar el cambio para que solo uno pueda estar activo
  const handleCheckboxChange = (field) => {
    if (field === "adopcion") {
      setValue("apadrinamiento", false);
    } else {
      setValue("adopcion", false);
    }
  };

  const onSubmit = handleSubmit((data) => {
    console.log("Datos enviados:", data);
    
     setMensajeExito("📨 Correo enviado con éxito");

    reset();
    setTimeout(() => setMensajeExito(""), 4000);
  });

  return (
    <div className="form-container">
      <h1>Formulario</h1>
      {mensajeExito && <div className="mensaje-exito">{mensajeExito}</div>}

      <form onSubmit={onSubmit}>
        <div className="input-group">
          <label htmlFor="nombre">Nombre</label>
          <input type="text" {...register("nombre", {
            required: { value: true, message: "Nombre es requerido" },
            minLength: { value: 3, message: "Mínimo 3 caracteres" },
            maxLength: { value: 40, message: "Máximo 40 caracteres" }
          })} />
        </div>
        {errors.nombre && <span>{errors.nombre.message}</span>}

        <div className="input-group">
          <label htmlFor="email">Correo</label>
          <input type="email" {...register("email", {
            required: { value: true, message: "Correo requerido" },
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Correo no válido"
            }
          })} />
        </div>
        {errors.email && <span>{errors.email.message}</span>}

              <div className="input-group">
          <label htmlFor="telefono">Teléfono</label>
          <input type="text" {...register("telefono",{
               required: { value: true, message: "Necesitamos un teléfono de contacto" },
               pattern: { value: /^[0-9]{9}$/, message: "El teléfono debe tener 9 dígitos numéricos" }
          })} />
          {errors.telefono && <span>{errors.telefono.message}</span>}

        </div>

        <div className="checkbox-group">
          <label>
            <input 
              type="checkbox" 
              {...register("adopcion")}
              checked={adopcion} 
              onChange={() => {
                setValue("adopcion", !adopcion);
                handleCheckboxChange("adopcion");
              }} 
            /> Adopción
          </label>

          <label>
            <input 
              type="checkbox" 
              {...register("apadrinamiento")}
              checked={apadrinamiento} 
              onChange={() => {
                setValue("apadrinamiento", !apadrinamiento);
                handleCheckboxChange("apadrinamiento");
              }} 
            /> Apadrinamiento
          </label>
        </div>

        <div className="input-group">
          <label htmlFor="mensaje">Mensaje</label>
          <textarea 
            id="mensaje" 
            {...register("mensaje", {
              required: { value: true, message: "El mensaje es obligatorio" }
            })} 
            rows="4"
          ></textarea>
        </div>
        {errors.mensaje && <span>{errors.mensaje.message}</span>}
        
      <div className="checkbox-terminos">
        <label>
          <input 
            type="checkbox" 
            {...register("terminos", {
              required: { value: true, message: "Tienes que aceptar los términos y condiciones" }
            })}
          />
          Acepto los términos y condiciones
        </label>
      </div>
      {errors.terminos && <span className="error-message">{errors.terminos.message}</span>}

        <button type="submit">Enviar</button>

      </form>
    </div>
  );
}

export default AdoptForm;


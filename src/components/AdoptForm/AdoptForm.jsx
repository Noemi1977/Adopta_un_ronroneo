import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom"; 
import "./AdoptForm.css";

function AdoptForm() {
  const location = useLocation(); 
  const cat = location.state?.cat; 

  const { register, handleSubmit, watch, setValue, reset, formState: { errors } } = useForm();
  const [mensajeExito, setMensajeExito] = useState("");

  const adopcion = watch("adopcion", false);
  const apadrinamiento = watch("apadrinamiento", false);

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
      <div className="form-layout"> 
        {/* Ficha del gato*/}
        {cat && (
          <div className="cat-info">
            <h2><strong>Nombre:</strong> {cat.name}</h2>
            <div className="cat-image-container">
                <img src={cat.url} alt={cat.name} className="cat-image" />
        </div>
            <p><strong>Temperamento:</strong> {cat.temperament}</p>
          </div>
        )}

        {/* Formulario a la derecha */}
        <form onSubmit={onSubmit} className="adoption-form">
          <h1>Formulario de Adopción</h1>

          {mensajeExito && <div className="mensaje-exito">{mensajeExito}</div>}

          <div className="input-group">
            <label htmlFor="nombre">Nombre</label>
            <input
              id="nombre"
              type="text"
              {...register("nombre", {
                required: { value: true, message: "Nombre es requerido" },
                minLength: { value: 3, message: "Mínimo 3 caracteres" },
                maxLength: { value: 40, message: "Máximo 40 caracteres" },
              })}
            />
          </div>
          {errors.nombre && <span className="error-message">{errors.nombre.message}</span>}

          <div className="input-group">
            <label htmlFor="email">Correo</label>
            <input
              id="email"
              type="email"
              {...register("email", {
                required: { value: true, message: "Correo requerido" },
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Correo no válido",
                },
              })}
            />
          </div>
          {errors.email && <span className="error-message">{errors.email.message}</span>}

          <div className="input-group">
            <label htmlFor="telefono">Teléfono</label>
            <input
              id="telefono"
              type="text"
              {...register("telefono", {
                required: { value: true, message: "Necesitamos un teléfono de contacto" },
                pattern: { value: /^[0-9\s\-]{9,15}$/, message: "El teléfono debe tener entre 9 y 15 caracteres numéricos, espacios o guiones" },
              })}
            />
          </div>
          {errors.telefono && <span className="error-message">{errors.telefono.message}</span>}

          <div className="checkbox-group">
            <label  htmlFor="adopcion">
              <input
                id="adopcion"
                type="checkbox"
                {...register("adopcion")}
                checked={adopcion}
                onChange={() => {
                  setValue("adopcion", !adopcion);
                  handleCheckboxChange("adopcion");
                }}
              />{" "}
              Adopción
            </label>

            <label htmlFor="apadrinamiento">
              <input
                id="apadrinamiento"
                type="checkbox"
                {...register("apadrinamiento")}
                checked={apadrinamiento}
                onChange={() => {
                  setValue("apadrinamiento", !apadrinamiento);
                  handleCheckboxChange("apadrinamiento");
                }}
              />{" "}
              Apadrinamiento
            </label>
          </div>

          <div className="input-group">
            <label htmlFor="mensaje">Mensaje</label>
            <textarea
              id="mensaje"
              {...register("mensaje", {
                required: { value: true, message: "El mensaje es obligatorio" },
              })}
              rows="4"
            ></textarea>
          </div>
          {errors.mensaje && <span className="error-message">{errors.mensaje.message}</span>}

          <div className="checkbox-terminos">
            <label htmlFor="terminos">
              <input
                id="terminos"
                type="checkbox"
                {...register("terminos", {
                  required: { value: true, message: "Tienes que aceptar los términos y condiciones" },
                })}
              />
              Acepto los términos y condiciones
            </label>
          </div>
          {errors.terminos && <span className="error-message">{errors.terminos.message}</span>}

          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default AdoptForm;

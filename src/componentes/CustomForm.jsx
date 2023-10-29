
import React from 'react';

import { useForm } from 'react-hook-form';

const CustomForm = ({ setTituloDeTarea, setDescripcionDeTarea, disparadorGuardarTarea  }) => {

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const rellenarImputs = (data) => {


    setTituloDeTarea(data.titulo);

    setDescripcionDeTarea(data.descripcion);
    
    
    alert(" Ahora debes GUARDAR la tarea");

    
  };

  return (
    <form onSubmit={handleSubmit(rellenarImputs)}>

      {/* Campo de título con validación */}

      <input

        {...register('titulo', {

          required: "el titulo es obligatorio",

          minLength: { value: 3, message: "debe tener al menos 3 caracteres" }

        })}


        placeholder="Titulo"



      />

      {errors.titulo && <span>{errors.titulo.message}</span>}


      {/* Campo de descripción  */}

      <input

        {...register('descripcion')}

        placeholder="Descripcion (Opcional)"

      />

      <button type="submit">Agregar tarea</button>

      <button type="button" onClick={disparadorGuardarTarea}>Guardar tarea</button>


    </form>

  );



};



export default CustomForm;






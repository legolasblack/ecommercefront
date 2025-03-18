import React from 'react'

export default function page() {
  const title: string = "Pagina de login";
  const contenido: string = "registra tu login en esta seccion";

  return (
    <div>
       <h3>{title}</h3>
        <p>
          {contenido}
        </p>
    </div>
  )
}
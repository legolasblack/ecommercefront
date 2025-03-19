'use client'
import { Button } from '@heroui/react';
import React from 'react'

export default function page() {
  const title: string = "About this examples";
  const contenido: string = "este archivo representara la sintaxis que vayamos recopilando dentro de la sintaxis de Next.js, se decribe en dos secciones uno en practicas con bootstrap y el otro en practicas de tailwind con componentes de next ui";

  return (
    <div>
      <h3>{title}</h3>
      <p>
        {contenido}
      </p>
      <h1 className="text-3xl font-bold underline">
        Hello world!
        <div>
          <Button>Click me</Button>
          <p></p>
         <Button color="primary" radius='sm'>Send me a message</Button>
        </div>
      </h1>
    </div>
  )
}
import React from "react";

type Props = {
  titulo: string,
  descricao: string
}

const Sobre = ({titulo, descricao}: Props) => (
    <section className="about">
      <h1 className="text-center">{titulo}</h1>
      <p className="text-secondary text-center mb-5">{descricao}</p>
    </section>
);

export default Sobre;
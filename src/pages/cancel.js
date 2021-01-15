import React from "react"
import { SEO } from "../components"
import { Button, Purchase } from "../styles/components"
import { Link } from "gatsby"

export default function gracias() {
  return (
    <div>
      <SEO title="Compra Exitosa" />
      <Purchase>
        <span role="img" aria-label="emoji">
          🤘😔👌
        </span>
        <h2>Compra Cancelada</h2>
        <p>Espero que te animes a comprar tu swag en un futuro</p>
        <p>¡no pares de aprender!</p>
        <br />
        <Link to="/">
          <Button>Volver al Catálogo</Button>
        </Link>
      </Purchase>
    </div>
  )
}

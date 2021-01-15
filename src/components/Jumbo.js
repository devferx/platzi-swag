import React from "react"
import { StyledJumbo } from "../styles/components"

export default function Jumbo({ description }) {
  return (
    <StyledJumbo>
      <div>
        <h2>¡Consigue el mejor swag exclusivo y espcial de Platzi!</h2>
        <small>{description}</small>
      </div>
    </StyledJumbo>
  )
}

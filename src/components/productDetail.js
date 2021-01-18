import React, { useState, useContext } from "react"
import { CartContext } from "../context"
import {
  Tag,
  SizeButton,
  QtyButton,
  SizeSelect,
  StyledProductDetail,
  QtySelect,
  Button,
} from "../styles/components"
import { SEO, Stars } from "./"
import priceFormat from "../utils/priceFormat"

export default function ProductDetail({
  id,
  unit_amount,
  product: { name, metadata },
}) {
  const { addToCart } = useContext(CartContext)
  const [qty, setQty] = useState(1)
  const [size, setSize] = useState(2)
  const formatedPrice = priceFormat(unit_amount)

  const handleSubmit = () => {
    addToCart({ sku: id, unit_amount, name, metadata, quantity: qty })
  }

  return (
    <StyledProductDetail>
      <SEO title={name} />
      <img src={metadata.img} alt={name} />
      <div>
        <Tag>Popular</Tag>
        <h2>{name}</h2>
        <b>USD {formatedPrice}</b>
        <Stars />
        {metadata.wear === "true" && <h3>Color: Azul</h3>}
        <small>{metadata.description}</small>
        {metadata.wear === "true" && (
          <SizeSelect selected={size}>
            <SizeButton onClick={() => setSize(1)}>XS</SizeButton>
            <SizeButton onClick={() => setSize(2)}>S</SizeButton>
            <SizeButton onClick={() => setSize(3)}>M</SizeButton>
            <SizeButton onClick={() => setSize(4)}>L</SizeButton>
          </SizeSelect>
        )}
        <p>Cantidad:</p>
        <QtySelect>
          <QtyButton onClick={() => (qty > 1 ? setQty(qty - 1) : null)}>
            -
          </QtyButton>
          <input type="text" disabled value={qty} />
          <QtyButton onClick={() => setQty(qty + 1)}>+</QtyButton>
        </QtySelect>
        <Button onClick={handleSubmit}>Agregar al Carrito</Button>
      </div>
    </StyledProductDetail>
  )
}

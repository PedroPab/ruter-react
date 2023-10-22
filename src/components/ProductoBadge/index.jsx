import { Badge } from "react-bootstrap";

const ProductoBadge = ({ cantidad, name, colorSecundary }) => {
  console.log("🚀 ~ file: index.jsx:4 ~ ProductoBadge ~ colorSecundary:", colorSecundary)
  return (
    <spna class="badge rounded-pill" style={{ backgroundColor: colorSecundary }} >
      <big>{cantidad}</big>
      {name}
    </spna >
  );
};

export { ProductoBadge }

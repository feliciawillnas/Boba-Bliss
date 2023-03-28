import {
  Box
} from "@chakra-ui/react";
import { useRef } from "react";
import { useParams } from "react-router-dom";
import { BigProductCard } from "../components/BigProductCard";
import { useProduct } from "../ProductContext";

export function ProductPage() {
  const { productList } = useProduct();
  const productsRef = useRef(null);


  const params = useParams();
  const product = productList.find((p) => p.id === params.id);

  if (!product) {
    return <p>Produkten hittades inte...</p>;
  }

  return (
    <Box sx={bigGradient} className="parent">
      <BigProductCard
      product={product}
      backgroundUrl="/images/fancyBackground.png"
      backgroundAlt="net"
      />
      
    </Box>
  );
}

const gradientBackground = {
  background: "rgb(254, 211, 212)",
  backgroundImage:
    "linear-gradient(0deg, rgba(254, 211, 212, 1) 0%, rgba(255, 241, 221, 1) 47%, rgba(254, 211, 212, 1) 100%, rgba(255, 255, 255, 1) 100%)",
  width: "100%",
  height: "20rem",
  color: "lightBrownText",
  fontFamily: "Inconsolata",
};

const bigGradient = {
  backgroundImage: "linear-gradient(to bottom, transparent 22%, #FED3D4)",
  backgroundColor: "#fffaf4",
};

const buttonStyling = {
  colorScheme: "brown",
  variant: "outline",
  borderRadius: "50px",
  border: "2px",
  padding: "1.5rem",
  fontFamily: "Comfortaa",
  background: "none",
  transition: "all 250ms ease-in-out",
  _hover: {
    color: "white",
  },
  _active: {
    background: "none",
    transform: "scale(0.96)",
  },
};

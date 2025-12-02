import React from "react";
import useProductFetch from "../Hook/useProductFetch";
import Container from "../Components/Container";
import Card from "../Components/Card/Card";

const Sellers = () => {
  const { product } = useProductFetch();
  const allSellerProduct = product?.data;

  return (
    <>
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10">
          {allSellerProduct?.map((cardData) => (
            <Card key={cardData?.toyId} cardData={cardData} />
          ))}
        </div>
      </Container>
    </>
  );
};

export default Sellers;

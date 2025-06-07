import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CardWrapper = styled(Link)` 
  text-decoration: none; 
  color: ${({ theme }) => theme.text}; 
  display: block; 
  background-color: ${({ theme }) => theme.cardBackground};
  border-radius: 10px;
  overflow: hidden;
  transition: background-color 0.3s ease;

  img {
    width: 100%;
    height: 600px;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
  }

  .card-content {
    padding: 1rem;
    color: ${({ theme }) => theme.text};

    h3 {
      margin: 0 0 0.5rem 0;
      font-size: 1.2rem;
      color: ${({ theme }) => theme.text};
    }

    p {
      margin: 0.4rem 0;
      color: ${({ theme }) => theme.text};
    }

    .price {
      font-weight: bold;
      color: ${({ theme }) => theme.secondary};
      font-size: 1.1rem;
      margin-top: 10px;
    }

    .Quantity {
      font-size: 0.95rem;
    }

    .new-tag {
      color: red;
      font-weight: bold;
    }
  }
`;

const ProductCard = ({ product }) => {
  const imageSrc = product.imageUrl.startsWith('http')
    ? product.imageUrl
    : process.env.PUBLIC_URL + product.imageUrl;

  return (
    <CardWrapper to={`/products/${product._id}`}>
      <img src={imageSrc} alt={product.name} />
      <div className="card-content">
        <h3>{product.name}</h3>
        <p>{product.description.substring(0, 100)}...</p>
        <p className="Quantity">{product.quantity}kg</p>
        {product.isNewLaunch && <span className="new-tag">New!</span>}
      </div>
    </CardWrapper>
  );
};

export default ProductCard;

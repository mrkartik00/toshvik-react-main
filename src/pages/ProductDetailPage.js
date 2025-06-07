import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { productsData } from '../data/products';

const PageWrapper = styled.div`
  .container {
    max-width: 900px;
    margin: 2rem auto;
    padding: 1.5rem;
    background-color: ${({ theme }) => theme.cardBackground};
    color: ${({ theme }) => theme.text};
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }
  @media (max-width: 768px) {
    .container {
      margin: 1rem auto;
      padding: 1rem;
    }
  }
`;

const ProductHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  h1 {
    font-size: 2.2rem;
    color: ${({ theme }) => theme.primary};
    margin-bottom: 0.5rem;
  }
  .category-badge {
    background-color: ${({ theme }) => theme.secondary};
    color: #333;
    padding: 0.3rem 0.8rem;
    border-radius: 15px;
    font-size: 0.9rem;
    display: inline-block;
  }
  @media (max-width: 768px) {
    h1 { font-size: 1.8rem; }
    margin-bottom: 1.5rem;
  }
`;

const ProductLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 2rem;
  align-items: flex-start;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  max-width: 350px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  object-fit: cover;
  margin: 0 auto;
  @media (max-width: 768px) {
    max-width: 300px;
  }
`;

const ProductInfo = styled.div`
  h2 {
    font-size: 1.3rem;
    color: ${({ theme }) => theme.primary};
    margin-top: 0;
    margin-bottom: 0.8rem;
    border-bottom: 1px solid #eee;
    padding-bottom: 0.5rem;
  }
  p {
    line-height: 1.7;
    color: ${({ theme }) => theme.text};
    margin-bottom: 1rem;
    font-size: 0.95rem;
  }
  .price {
    font-size: 1.6rem;
    font-weight: bold;
    color: ${({ theme }) => theme.secondary};
    margin-bottom: 1.2rem;
  }
  @media (max-width: 768px) {
    p { font-size: 0.9rem; }
    h2 { font-size: 1.2rem; }
    .price { font-size: 1.4rem; }
  }
`;

const InfoSection = styled.div`
  margin-bottom: 1.5rem;
  ul {
    list-style: disc;
    padding-left: 20px;
    li {
      margin-bottom: 0.5rem;
      color: ${({ theme }) => theme.text};
    }
  }
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 0.5rem;
    font-size: 0.9rem;
    th, td {
      text-align: left;
      padding: 8px;
      border-bottom: 1px solid #eee;
    }
    th {
      background-color: ${({ theme }) => theme.tableHeaderBg};
      color: ${({ theme }) => theme.text};
      font-weight: 500;
    }
    td {
      color: ${({ theme }) => theme.text};
    }
  }
`;

const BackLink = styled(Link)`
  display: inline-block;
  margin-top: 1.5rem;
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 4px;
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: white;
  }
`;

const ProductDetailPage = () => {
  const { productId } = useParams();
  const product = productsData.find(p => p._id === productId);

  if (!product) {
    return (
        <PageWrapper className="container">
            <h1 className="text-center">Product Not Found</h1>
            <p className="text-center">The product you are looking for does not exist.</p>
            <div className="text-center">
                <BackLink to="/products">Back to Products</BackLink>
            </div>
        </PageWrapper>
    );
  }

  const imageSrc = product.imageUrl.startsWith('http') ? product.imageUrl : process.env.PUBLIC_URL + product.imageUrl;

  return (
    <PageWrapper>
      <div className="container">
        <ProductHeader>
          <h1>{product.name}</h1>
          <span className="category-badge">{product.category}</span>
        </ProductHeader>

        <ProductLayout>
          <ProductImage src={imageSrc} alt={product.name} />
          <ProductInfo>
            <p className="price">₹{product.price}</p>
            <p>{product.description}</p>
            
            {product.detailedDescription && (
                <InfoSection>
                    <h2>Product Details</h2>
                    <p>{product.detailedDescription}</p>
                </InfoSection>
            )}

            {product.ingredients && product.ingredients.length > 0 && (
              <InfoSection>
                <h2>Ingredients</h2>
                <ul>
                  {product.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </InfoSection>
            )}

            {product.nutritionFacts && product.nutritionFacts.length > 0 && (
              <InfoSection>
                <h2>Nutritional Information</h2>
                <table>
                  <thead>
                    <tr>
                      <th>Nutrient</th>
                      <th>Value (per 100g approx.)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.nutritionFacts.map((fact, index) => (
                      <tr key={index}>
                        <td>{fact.nutrient}</td>
                        <td>{fact.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </InfoSection>
            )}

            {product.storageInstructions && (
                <InfoSection>
                    <h2>Storage Instructions</h2>
                    <p>{product.storageInstructions}</p>
                </InfoSection>
            )}

            <BackLink to="/products">← Back to All Products</BackLink>
          </ProductInfo>
        </ProductLayout>
      </div>
    </PageWrapper>
  );
};

export default ProductDetailPage;

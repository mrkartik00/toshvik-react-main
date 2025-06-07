import React, { useState, useMemo } from 'react';
import styled, { keyframes } from 'styled-components';
import { productsData } from '../data/products';
import ProductCard from '../components/ProductCard';

// Animation
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Theme-based Page Background
const PageWrapper = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  padding: 2rem 1rem;
  font-family: 'Poppins', sans-serif;
  transition: background 0.3s ease, color 0.3s ease;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
`;

// Filters
const FilterControls = styled.div`
  background-color: ${({ theme }) => theme.navBackground};
  color: ${({ theme }) => theme.text};
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.05);
  margin-bottom: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;

  label {
    font-weight: 600;
    margin-bottom: 4px;
  }

  select {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 6px;
    min-width: 160px;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
  }

  div {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    div {
      width: 100%;
    }

    select {
      width: 100%;
    }
  }
`;

// Grid
const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  animation: ${fadeInUp} 0.6s ease;
`;

// Title
const SectionTitle = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.heading || theme.text};
  font-size: 2.2rem;
  margin-bottom: 1rem;
  font-weight: 700;
  animation: ${fadeInUp} 0.5s ease;
`;

const ProductsPage = () => {
  const [sortOption, setSortOption] = useState('default');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const categories = useMemo(() => ['all', ...new Set(productsData.map(p => p.category))], []);

  const filteredAndSortedProducts = useMemo(() => {
    let tempProducts = [...productsData];

    if (categoryFilter !== 'all') {
      tempProducts = tempProducts.filter(product => product.category === categoryFilter);
    }

    if (sortOption === 'price-asc') {
      tempProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'price-desc') {
      tempProducts.sort((a, b) => b.price - a.price);
    } else if (sortOption === 'name-asc') {
      tempProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === 'name-desc') {
      tempProducts.sort((a, b) => b.name.localeCompare(a.name));
    }

    return tempProducts;
  }, [sortOption, categoryFilter]);

  return (
    <PageWrapper>
      <Container>
        <SectionTitle>Our Atta Collection</SectionTitle>

        <FilterControls>
          <div>
            <label htmlFor="category">Category:</label>
            <select
              id="category"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>
                  {cat === 'all' ? 'All Categories' : cat}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="sort">Sort By:</label>
            <select
              id="sort"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="default">Default</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name-asc">Name: A to Z</option>
              <option value="name-desc">Name: Z to A</option>
            </select>
          </div>
        </FilterControls>

        {filteredAndSortedProducts.length > 0 ? (
          <ProductsGrid>
            {filteredAndSortedProducts.map(product => (
              <ProductCard key={product._id} product={product} />
            ))}
          </ProductsGrid>
        ) : (
          <p style={{ textAlign: 'center', marginTop: '2rem' }}>
            No products match your criteria.
          </p>
        )}
      </Container>
    </PageWrapper>
  );
};

export default ProductsPage;

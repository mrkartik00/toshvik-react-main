import React from 'react';
import styled, { keyframes } from 'styled-components';
import { recipesData } from '../data/recipes';
import RecipeCard from '../components/RecipeCard';

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

const PageWrapper = styled.div`
  font-family: 'Poppins', sans-serif;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  min-height: 100vh;
  padding: 3rem 1.5rem;
  transition: background-color 0.3s ease, color 0.3s ease;

  h1 {
    color: ${({ theme }) => theme.primary};
    font-size: 2.4rem;
    text-align: center;
    margin-bottom: 0.8rem;
    font-weight: 700;
    animation: ${fadeInUp} 0.6s ease forwards;
  }

  p.description {
    color: ${({ theme }) => theme.text};
    text-align: center;
    font-size: 1.1rem;
    margin-bottom: 2.5rem;
    animation: ${fadeInUp} 0.8s ease forwards;
  }

  .container {
    max-width: 1200px;
    margin: auto;
  }

  .text-center {
    text-align: center;
    color: ${({ theme }) => theme.text};
  }
`;

const RecipesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;

  div {
    animation: ${fadeInUp} 0.5s ease forwards;
    animation-delay: 0.2s;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const RecipesPage = () => {
  return (
    <PageWrapper>
      <div className="container">
        <h1>Delicious Recipes with Toshvik</h1>
        <p className="description">
          Discover creative ways to use our atta for healthy and tasty meals.
        </p>

        {recipesData.length > 0 ? (
          <RecipesGrid>
            {recipesData.map((recipe, index) => (
              <div style={{ animationDelay: `${index * 0.1}s` }} key={recipe._id}>
                <RecipeCard recipe={recipe} />
              </div>
            ))}
          </RecipesGrid>
        ) : (
          <p className="text-center">No recipes available at the moment. Check back soon!</p>
        )}
      </div>
    </PageWrapper>
  );
};

export default RecipesPage;

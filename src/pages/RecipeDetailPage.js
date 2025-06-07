import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { recipesData } from '../data/recipes';

const fadeIn = keyframes`
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
  padding: 2rem 1rem;
  min-height: 100vh;

  .container {
    max-width: 900px;
    margin: auto;
    padding: 1.5rem;
    background-color: ${({ theme }) => theme.cardBackground};
    border-radius: 10px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
    animation: ${fadeIn} 0.5s ease;
  }

  @media (max-width: 768px) {
    .container {
      padding: 1rem;
    }
  }
`;

const RecipeHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  h1 {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.primary};
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  .meta-info {
    color: #9ca3af;
    font-size: 0.95rem;

    span {
      margin: 0 8px;
    }
  }

  @media (max-width: 768px) {
    h1 { font-size: 1.8rem; }
    .meta-info { font-size: 0.85rem; }
  }
`;

const RecipeLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
`;

const RecipeImage = styled.img`
  width: 100%;
  max-height: 400px;
  border-radius: 8px;
  object-fit: cover;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.6s ease;
`;

const RecipeContent = styled.div`
  h2 {
    color: ${({ theme }) => theme.primary};
    font-size: 1.5rem;
    border-bottom: 1px solid #f3f4f6;
    padding-bottom: 0.5rem;
    margin-bottom: 1rem;
    font-weight: 600;
  }

  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.text};
    line-height: 1.7;
    margin-bottom: 1.5rem;
  }

  ul, ol {
    padding-left: 25px;
    margin-bottom: 1.5rem;

    li {
      margin-bottom: 0.7rem;
      line-height: 1.6;
      color: ${({ theme }) => theme.text};
    }
  }

  strong {
    font-weight: 600;
    color: ${({ theme }) => theme.text};
  }

  @media (max-width: 768px) {
    h2 { font-size: 1.3rem; }
    p { font-size: 0.95rem; }
  }
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1rem;
  background-color: ${({ theme }) => theme.secondary}22;
  padding: 1rem;
  border-radius: 6px;
  margin-bottom: 2rem;

  div {
    text-align: center;

    strong {
      display: block;
      font-size: 0.85rem;
      color: #6b7280;
    }

    span {
      font-size: 1.1rem;
      color: ${({ theme }) => theme.primary};
      font-weight: 600;
    }
  }
`;

const BackLink = styled(Link)`
  display: inline-block;
  margin-top: 2rem;
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  font-weight: 500;
  padding: 0.6rem 1.2rem;
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 6px;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: #fff;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const RecipeDetailPage = () => {
  const { recipeId } = useParams();
  const recipe = recipesData.find(r => r._id === recipeId);

  if (!recipe) {
    return (
      <PageWrapper>
        <div className="container">
          <h1 className="text-center">Recipe Not Found</h1>
          <p className="text-center">The recipe you are looking for does not exist.</p>
          <div className="text-center">
            <BackLink to="/recipes">Back to Recipes</BackLink>
          </div>
        </div>
      </PageWrapper>
    );
  }

  const imageSrc = recipe.imageUrl.startsWith('http') ? recipe.imageUrl : process.env.PUBLIC_URL + recipe.imageUrl;

  return (
    <PageWrapper>
      <div className="container">
        <RecipeHeader>
          <h1>{recipe.title}</h1>
          <div className="meta-info">
            {recipe.category && <span>Category: {recipe.category}</span>}
            {recipe.difficulty && <span>Difficulty: {recipe.difficulty}</span>}
          </div>
        </RecipeHeader>

        <RecipeLayout>
          <RecipeImage src={imageSrc} alt={recipe.title} />

          <RecipeContent>
            <p>{recipe.description}</p>

            <InfoGrid>
              {recipe.prepTime && <div><strong>Prep Time</strong><span>{recipe.prepTime}</span></div>}
              {recipe.cookTime && <div><strong>Cook Time</strong><span>{recipe.cookTime}</span></div>}
              {recipe.servings && <div><strong>Servings</strong><span>{recipe.servings}</span></div>}
            </InfoGrid>

            {recipe.ingredients?.length > 0 && (
              <>
                <h2>Ingredients</h2>
                <ul>
                  {recipe.ingredients.map((ing, index) => (
                    <li key={index}><strong>{ing.item}</strong>: {ing.quantity}</li>
                  ))}
                </ul>
              </>
            )}

            {recipe.instructions?.length > 0 && (
              <>
                <h2>Instructions</h2>
                <ol>
                  {recipe.instructions.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </>
            )}

            {recipe.tips?.length > 0 && (
              <>
                <h2>Tips</h2>
                <ul>
                  {recipe.tips.map((tip, index) => (
                    <li key={index}>{tip}</li>
                  ))}
                </ul>
              </>
            )}

            <BackLink to="/recipes">← Back to All Recipes</BackLink>
          </RecipeContent>
        </RecipeLayout>
      </div>
    </PageWrapper>
  );
};

export default RecipeDetailPage;

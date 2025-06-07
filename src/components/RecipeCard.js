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
      font-size: 0.95rem;
    }

    .details {
      font-size: 0.85rem;
      color: ${({ theme }) => theme.text}CC; /* Slightly lighter for details */
      margin-top: 5px;
    }
  }
`;

const RecipeCard = ({ recipe }) => {
  const imageSrc = recipe.imageUrl.startsWith('http')
    ? recipe.imageUrl
    : process.env.PUBLIC_URL + recipe.imageUrl;

  return (
    <CardWrapper to={`/recipes/${recipe._id}`}>
      <img src={imageSrc} alt={recipe.title} />
      <div className="card-content">
        <h3>{recipe.title}</h3>
        <p>{recipe.description.substring(0, 100)}...</p>
        <p className="details">
          Prep: {recipe.prepTime} | Cook: {recipe.cookTime} | Serves: {recipe.servings}
        </p>
      </div>
    </CardWrapper>
  );
};

export default RecipeCard;

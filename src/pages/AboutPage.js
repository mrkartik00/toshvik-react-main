import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AboutContainer = styled.div`
  font-family: 'Poppins', sans-serif;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  min-height: 100vh;
  padding: 3rem 1rem;
  display: flex;
  justify-content: center;
  transition: background-color 0.3s ease, color 0.3s ease;

  .container {
    max-width: 900px;
    background-color: ${({ theme }) => theme.cardBackground};
    padding: 2rem;
    border-radius: 12px;
    box-shadow: ${({ theme }) => theme.boxShadow};
    animation: ${fadeUp} 0.8s ease;
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
  }

  h1 {
    color: ${({ theme }) => theme.primary};
    text-align: center;
    margin-bottom: 2rem;
    font-size: 2.5rem;
    font-weight: 700;
    transition: color 0.3s ease;
  }

  p {
    line-height: 1.8;
    color: ${({ theme }) => theme.textLight};
    font-size: 1rem;
    margin-bottom: 1.2rem;
    transition: color 0.3s ease;
  }

  strong {
    color: ${({ theme }) => theme.primary};
    font-weight: 600;
  }

  .mission-vision {
    display: flex;
    gap: 2rem;
    margin: 2rem 0;
    flex-wrap: wrap;
    justify-content: space-between;
    animation: ${fadeUp} 1s ease;
  }

  .mission-vision > div {
    flex: 1;
    min-width: 280px;
    padding: 1.5rem;
    border-left: 6px solid ${({ theme }) => theme.primary};
    background: ${({ theme }) => theme.cardSecondaryBackground};
    border-radius: 10px;
    transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
    box-shadow: ${({ theme }) => theme.cardBoxShadow};

    &:hover {
      transform: translateY(-5px);
      box-shadow: ${({ theme }) => theme.cardBoxShadowHover};
    }
  }

  .mission-vision h3 {
    color: ${({ theme }) => theme.primary};
    font-size: 1.4rem;
    margin-bottom: 0.8rem;
    font-weight: 600;
    transition: color 0.3s ease;
  }

  @media (max-width: 768px) {
    .container {
      padding: 1.5rem;
    }
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 0.95rem;
    }
    .mission-vision {
      flex-direction: column;
      gap: 1.5rem;
    }
  }
`;

const AboutPage = () => {
  return (
    <AboutContainer>
      <div className="container">
        <h1>About Toshvik Atta</h1>
        <p>
          Welcome to <strong>Toshvik Atta</strong>, where tradition meets health. Our journey began with a simple mission: to provide families with the purest, most wholesome atta, straight from the heartlands where the finest wheat is grown. We believe that good food is the foundation of a happy life, and it all starts with the quality of ingredients.
        </p>

        <p>
          Our slogan, "<strong>Nourishing Traditions, Grain by Grain</strong>," encapsulates our commitment. We meticulously select our grains, ensuring they are rich in natural fibers, vitamins, and minerals. Our state-of-the-art milling process preserves the inherent goodness of wheat, bringing you atta that is not only perfect for soft rotis and fluffy pooris but also contributes to a healthy lifestyle.
        </p>

        <div className="mission-vision">
          <div>
            <h3>Our Mission</h3>
            <p>
              To consistently deliver superior quality atta that enriches meals and promotes well-being for every household, upholding the trust our customers place in us through ethical practices and a passion for excellence.
            </p>
          </div>
          <div>
            <h3>Our Vision</h3>
            <p>
              To be the most trusted and preferred atta brand, recognized for our unwavering commitment to quality, health, and the authentic taste of tradition, inspiring healthier communities across the nation.
            </p>
          </div>
        </div>

        <p>
          At Toshvik, we are more than just an atta brand; we are a part of your family's daily nourishment. "<strong>The Secret to Wholesome Meals</strong>" lies in the care and dedication we put into every pack of Toshvik Atta. Join us in celebrating the joy of healthy eating!
        </p>
      </div>
    </AboutContainer>
  );
};

export default AboutPage;

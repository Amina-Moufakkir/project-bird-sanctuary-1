import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

const ListView = ({ birds }) => {
  return (
    <Wrapper>
      {birds.map((bird) => {
        const { id, img, name, amount, description } = bird;
        return (
          <article key={id}>
            <img src={img} alt={name} />
            <div>
              <h4>{name}</h4>
              <h5 className="price">${amount}</h5>
              <p>{description}</p>
              <Link to={`/gallery/${id}`} className="btn">
                Details
              </Link>
            </div>
          </article>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  row-gap: 3rem;

  img {
    width: 100%;
    display: block;
    width: 300px;
    height: 200px;
    object-fit: cover;
    border-radius: var(--radius);
    margin-bottom: 1rem;
  }
  h4 {
    margin-bottom: 0.5rem;
  }
  .price {
    font-size: 1.2rem;
    color: var(--clr-primary-5);
    margin-bottom: 0.75rem;
  }
  p {
    max-width: 45em;
    margin-bottom: 1rem;
  }
  .btn {
    font-size: 1rem;
    padding: 0.25rem 0.5rem;
  }
  @media (min-width: 992px) {
    article {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
    }
  }
`;

export default ListView;

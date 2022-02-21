/** @jsx h */
import React from 'react';
import { h } from 'preact';
import './style.css';

export type ProductCardProps = {
    name: string;
    url: string;
    addToCartAction: () => void;
    images: {
        src: string;
        alt: string;
    }[];
    price: {
        current: string;
        previous: string;
    };
    rating: {
        count: number;
        text: string;
    };
};

export function ProductCard({
  name,
  url,
  addToCartAction,
  images,
  price,
  rating,
}: ProductCardProps) {
  const [hover, setHover] = React.useState(0);

  const getColor = (index: any) => {
    if (hover >= index) {
      return true;
    } else if (!hover && rating.count >= index) {
      return true;
    }
    return false;
  };

  const stars = React.useMemo(() => {
    return Array(5)
      .fill(0)
      .map((_, i) => i + 1)
      .map((idx) => (
        <i
          key={idx}
          className={getColor(idx) ?'star star-on' : 'star star-off'}
          onMouseEnter={() => setHover(idx)}
          onMouseLeave={() => setHover(0)}
        />
      ));
  }, [ rating, hover]);

  return (
    <a href={url}>
      <div className="product-card">
        <div className="badge">Solid Out</div>
        <div className="product-toy">
          <img
            src={images[0].src}
            alt={images[0].alt}
            onMouseOver={(event => event.currentTarget.src = images[1].src)}
            onMouseOut={(event => event.currentTarget.src = images[0].src)}
          />
        </div>
        <div className="product-details">
          <h4><a href=""> {name}</a></h4>
          <div className="rating">
            <div> {stars} </div>
            <span>244 Reviews</span>
          </div>
          <div className="product-bottom-details">
            <div className="product-price">
              <small>{price.previous}</small>
              {price.current}
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

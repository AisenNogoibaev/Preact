/** @jsx h */
import { h } from 'preact';
import {
  ProductCard,
  ProductCardProps,
} from '../components/ProductCard/ProductCard';

/*
  Mock data should be created for the story and exported. The
  naming convention should be componentNameMock.
*/
export const productCardMock: ProductCardProps = {
    name: "Baron PRO 4 Head Replacement Blade for Pitbull, Palm, and Butterfly Kiss Shavers",
    url: "/collections/blades-and-accessories/products/replacement-blade-baron-pro-4-for-pitbull-palm-and-butterfly-kiss-shavers",
    addToCartAction: () => console.log("add to cart called"), // addToCart function will be defined by external code, add a simple function that alerts a message
    rating: {
        count: 415,
        text: "Rated 4.8 out of 5"
    },
    price: {
      current: "$44.99", // For regular price
      previous: "$55.99", // For regular price
    },
    images: [
        {
            src: "https://cdn.shopify.com/s/files/1/0255/0156/4962/products/art2439-1@2x.jpg?v=1567489807",
            alt: "Baron 4 Head Replacement Blade for Pitbull, and Butterfly Kiss Shavers",
        },
        {
            src: "https://cdn.shopify.com/s/files/1/0255/0156/4962/products/art2440-1@2x.jpg?v=1567489807",
            alt: "Baron 4 Head Replacement Blade for Pitbull, and Butterfly Kiss Shavers",
        },
    ],
};

const title = 'Product Card';
export default {
  title,
  component: ProductCard,
  excludeStories: /.*Mock$/, // This is required so Storybook will ignore the props export
};

// spread the mock props into the component
export const ProductCardStory = () => (
  <ProductCard {...productCardMock} />
);

ProductCardStory.storyName = title;

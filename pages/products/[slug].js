// pages/products/[slug].js

import { useRouter } from 'next/router';

// Define the getStaticPaths function
export async function getStaticPaths() {
  // Return a list of possible paths
  return {
    paths: [
      { params: { slug: 'example-product' } },
      // Add more paths as needed
    ],
    fallback: false,
  };
}

// Define the getStaticProps function
export async function getStaticProps({ params }) {
  // Use static data for demonstration
  const product = {
    name: 'Example Product',
    description: 'This is a description of the example product.',
  };

  // Return the product data as props
  return {
    props: {
      product,
    },
  };
}

// Define the Next.js page component
export default function ProductPage({ product }) {
  const router = useRouter();

  // If the page is not yet generated, this will show a loading state
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  // Use the product data to render the content
  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
    </div>
  );
}

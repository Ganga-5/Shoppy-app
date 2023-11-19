import React from 'react';
import Watches from './Watches';

const products = [
  {
    pId: 1,
    image:'../../images/watch.jpg',
    pBrand: "Havels",
    pDesc: 'Kids headphones bulk 10 pack multi colored for students',
    starValue: 4,
    pLongDesc: "At vero eos et accusamus et iusto odio dignissimos ducimus qu",
    price: '$300'
  },
  {
    pId: 2,
    image:'../../images/watch.jpg',
    pBrand: "Havels",
    pDesc: 'Kids headphones bulk 10 pack multi colored for students',
    starValue: 4,
    pLongDesc: "At vero eos et accusamus et iusto odio dignissimos ducimus qu",
    price: '$300'
  },
  {
    pId: 3,
    image:'../../images/watch.jpg',
    pBrand: "Havels",
    pDesc: 'Kids headphones bulk 10 pack multi colored for students',
    starValue: 4,
    pLongDesc: "At vero eos et accusamus et iusto odio dignissimos ducimus qu",
    price: '$300'
  },
  {
    pId: 4,
    image:'../../images/watch.jpg',
    pBrand: "Havels",
    pDesc: 'Kids headphones bulk 10 pack multi colored for students',
    starValue: 4,
    pLongDesc: "At vero eos et accusamus et iusto odio dignissimos ducimus qu",
    price: '$300'
  }
]
export const CustomProduct = () => {
  return (
    <>
        <Watches 
          id={products[0].pId} 
          imageUrl={products[0].image}
          brand={products[0].pBrand}
          shortDesc={products[0].pDesc}
          starRating={products[0].starValue}
          longDesc={products[0].pLongDesc}
          price={products[0].price}
        >
        </Watches>
    </>
  )
}

import React from 'react'

function Product({ product }) {
  /* Filtering out the product description from the custom attribute data */
  const description = product.custom_attributes.filter(({ attribute_code }) => {
    return attribute_code === 'short_description'
  })

  /* Some product descriptions came back with HTML so would display with all the HTML tags as text
    This function creates the HTML markup so it can be placed in the DOM as HTML rather than as a string */
  const createDescriptionMarkup = () => {
    return {
      __html: description[0].value,
    }
  }

  return (
    <>
      <div className="product-card">
        <div className="product-image">
          <img
            src={`http://www.beerhawk.co.uk/media/catalog/product${product.media_gallery_entries[0].file}`}
            alt={product.name}
          />
        </div>
        <div className="product-info">
          <span className="name">{product.name}</span>
          <span className="price">£{product.price}</span>
          <span
            className="description"
            dangerouslySetInnerHTML={createDescriptionMarkup()}
          ></span>

          {/* If in stock display the buy button */}
          {product.extension_attributes.stock_item.is_in_stock && (
            <button
              className={`btn`}
              disabled={!product.extension_attributes.stock_item.is_in_stock}
            >
              Buy Now
            </button>
          )}

          {/* Display error message if out of stock */}
          {!product.extension_attributes.stock_item.is_in_stock && (
            <span className="out-of-stock">Out of stock</span>
          )}
        </div>
      </div>
    </>
  )
}

export default Product

import React, { Component } from 'react'
import './App.css'
import Loading from './components/Loading'
import Product from './components/Product'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      skuCode: '',
      isLoading: null,
      notFound: null,
      product: null,
    }
  }

  render() {
    // Handle SKU code submission
    const onSubmit = async (evt) => {
      evt.preventDefault()
      this.setState({ isLoading: true })

      // Fetch product data
      const response = await fetch('http://localhost:5000/data/products')
      const productData = await response.json()

      // Set product state once data retrieved
      if (productData) {
        this.setState({
          product: filterProductsBySku(productData),
          isLoading: false,
        })
      }
    }

    // Handle change event on input
    const onChange = (evt) => {
      this.setState({ skuCode: evt.target.value })
    }

    // Filters the array of retrieved product data by the SKU code entered
    const filterProductsBySku = (productData) => {
      const { skuCode } = this.state

      const filteredProduct = productData.filter(({ sku }) => {
        return sku === skuCode
      })

      if (filteredProduct[0] == null) {
        this.setState({ notFound: true })
      } else {
        this.setState({ notFound: null })
      }

      return filteredProduct[0]
    }

    const { isLoading, notFound, product } = this.state

    return (
      <main className="main-container">
        <header>
          <h1>Enter a SKU code</h1>
        </header>

        <div className="search-bar-container">
          <form onSubmit={(evt) => onSubmit(evt)}>
            <input
              onChange={(evt) => onChange(evt)}
              className="search-bar"
              placeholder="SKU"
            ></input>
            <button type="submit">Search</button>
          </form>
        </div>

        <div className="search-results">
          {/* Show loading whilst fetching data from API */}
          {isLoading && <Loading />}

          {/* Show product if API data has been fetched and product exists */}
          {!isLoading && product && <Product product={product} />}

          {/* Show no product found if API data has been fetched and product does not exist */}
          {notFound && (
            <div>No product found, please enter a valid SKU code.</div>
          )}
        </div>
      </main>
    )
  }
}

export default App

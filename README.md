# Beer Hawk React Test

In this short test we would like you to demonstrate how you would fetch data and display it in a re-usable component. This folder contains a pre-packaged development environment (courtesy of Create React App). 

## The Task

A basic SPA template has been set up to give you a good place to start (it is located in src/App.js) This template includes a simple page with a single search field - what we want is to be able to get product information by entering a SKU code into this field (some example SKU codes are provided in the comments).

Your task is to take any SKU code entered into the search field, use it to make a call to the JSON data, and neatly display the resulting product data in the space below. The product data should be displayed in a re-usable component that simply shows a few basic details i.e. name, image & price (or if you're feeling scope-creepy, use as much of the data as you like).

I have included a simple node express server instance (/server folder) to serve the product data.

We want to gain an understanding of your React knowledge in terms of state management / the use of props etc. additionally, we want to see your approach to "re-usability" and how you handle fetching data asynchronously.

Above all, have some fun and show us what you can do!

## Additional Notes ##
Before you begin:
    1. make sure that you have already run the following command(s) in /server: 
        npm install
        npm start
    This should create a data environment (by default, this will be on localhost port: 5000). 

    2. make sure that you have already run the following command(s) in /: 
        npm install
        npm start
    This should open up a live development environment in your default web browser (by default, this will be on localhost port: 3000). 

Use this live development environment to complete the test.

Prefix for image(s): 'http://www.beerhawk.co.uk/media/catalog/product';
SKU codes to test: BH2024, MX207, MX407, PD025

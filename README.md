### Pre-requisites:

1. Serverless CLI installed
2. Create .env file inside root folder and copy contents from .env.example

### Deployment:

1. Run `npm install`
2. Run `sls deploy`

### To fire requests:

- Add Product
  `POST https://rjr3hdfvq1.execute-api.us-east-1.amazonaws.com/dev/addProduct`
  Body: {
  "name": "T-Shirt",
  "description": "A cool white tshirt"
  }

- Get All Products
  `GET https://rjr3hdfvq1.execute-api.us-east-1.amazonaws.com/dev/catalog`

- Get a Prouct by Id
  `GET https://rjr3hdfvq1.execute-api.us-east-1.amazonaws.com/dev/catalog/{id}`

- Checkout
  `POST https://rjr3hdfvq1.execute-api.us-east-1.amazonaws.com/dev/checkout`
  Body: {
  "userEmail": "this is a user email to the recipient",
  "product": "THIS IS A PRODUCT ID"
  }

### Tests

In order to test the functions locally, run the following command:

#### Add Product

- `npx sls invoke local -f addProduct --path src/functions/addProduct/mock.json`

#### Catalog

- `npx sls invoke local -f catalog`

#### Get Product

- `npx sls invoke local -f getProduct`

#### Checkout

- `npx sls invoke local -f checkout --path src/functions/checkout/mock.json`

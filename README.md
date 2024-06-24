---

# Order Service API Documentation

This document provides detailed information about the APIs available for interacting with the Order Service system.

## Shopping Cart APIs

### 1. Add to Cart

Adds a product to the shopping cart.

- **Endpoint:** `POST /api/cart`
- **Request Body:**
  ```json
  {
    "productId": "product_id",
    "quantity": 1
  }
  ```
- **Response:** Returns the updated shopping cart object.

### 2. View Cart

Retrieves the current contents of the shopping cart.

- **Endpoint:** `GET /api/cart`
- **Response:** Returns the list of products in the cart with their details.

### 3. Remove from Cart

Removes a product from the shopping cart.

- **Endpoint:** `DELETE /api/cart/:id`
- **Parameters:** `id` - ID of the cart item to remove.
- **Response:** Returns the updated shopping cart object after removal.

## Order Processing APIs

### 4. Place Order

Places a new order for one or more products.

- **Endpoint:** `POST /api/orders`
- **Request Body:**
  ```json
  {
    "products": [
      {
        "productId": "product_id",
        "quantity": 1,
        "price": 100
      }
    ],
    "totalAmount": 100,
    "deliveryAddress": "123 Street City Country",
    "paymentMethod": "Credit Card",
    "couponCode": "DISCOUNT10"
  }
  ```
- **Response:** Returns the created order object with order details.

### 5. Get Order Details

Retrieves details of a specific order.

- **Endpoint:** `GET /api/orders/:id`
- **Parameters:** `id` - ID of the order to retrieve.
- **Response:** Returns detailed information about the specified order.

### 6. Update Order Status

Updates the status of a specific order.

- **Endpoint:** `PATCH /api/orders/:id/status`
- **Parameters:** `id` - ID of the order to update.
- **Request Body:**
  ```json
  {
    "orderStatus": "Shipped"
  }
  ```
- **Response:** Returns the updated order object with the new status.

## Payment APIs

### 7. Initiate Payment

Initiates a payment for a specific order.

- **Endpoint:** `POST /api/payments`
- **Request Body:**
  ```json
  {
    "orderId": "order_id",
    "paymentMethod": "Credit Card"
  }
  ```
- **Response:** Returns the payment details and status.

### 8. Update Payment Status

Updates the status of a specific payment.

- **Endpoint:** `PATCH /api/payments/:id/status`
- **Parameters:** `id` - ID of the payment to update.
- **Request Body:**
  ```json
  {
    "paymentStatus": "Completed"
  }
  ```
- **Response:** Returns the updated payment object with the new status.

## Order Fulfillment and Returns APIs

### 9. Track Order Fulfillment

Retrieves the fulfillment status of a specific order.

- **Endpoint:** `GET /api/orders/:id/fulfillment`
- **Parameters:** `id` - ID of the order to track.
- **Response:** Returns fulfillment details including shipping status.

### 10. Return Order

Initiates a return request for a specific order.

- **Endpoint:** `POST /api/orders/:id/return`
- **Parameters:** `id` - ID of the order to return.
- **Request Body:**
  ```json
  {
    "reason": "Product defect",
    "bankDetails": {
      "accountNumber": "123456789",
      "ifscCode": "BANK0001"
    }
  }
  ```
- **Response:** Returns confirmation of the return request and processing details.

## User Reviews and Ratings APIs

### 11. Add Review

Allows users to add a review for a specific product.

- **Endpoint:** `POST /api/reviews`
- **Request Body:**
  ```json
  {
    "productId": "product_id",
    "rating": 5,
    "description": "Great product!",
    "images": ["image_url"]
  }
  ```
- **Response:** Returns the newly added review object.

### 12. Get Reviews

Retrieves reviews for a specific product.

- **Endpoint:** `GET /api/reviews?productId=product_id`
- **Parameters:** `productId` - ID of the product to retrieve reviews for.
- **Response:** Returns a list of reviews for the specified product.

### 13. Delete Review

Deletes a specific review.

- **Endpoint:** `DELETE /api/reviews/:id`
- **Parameters:** `id` - ID of the review to delete.
- **Response:** Returns confirmation of the deletion.

## Coupons and Promotional Codes APIs

### 14. Apply Coupon

Applies a coupon code to the current order.

- **Endpoint:** `POST /api/coupons/apply`
- **Request Body:**
  ```json
  {
    "couponCode": "DISCOUNT10"
  }
  ```
- **Response:** Returns confirmation of the coupon application and updated order details.

### 15. Get Available Coupons

Retrieves a list of available coupons.

- **Endpoint:** `GET /api/coupons`
- **Response:** Returns a list of active coupon codes with their details.

---

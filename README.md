---

# HealthCrad Booking Service API

This project provides an API for managing bookings for HealthCrad. The API allows users to book medicines, update booking details, cancel bookings, and retrieve booking information.

## API Endpoints

### Get All Bookings

- **Endpoint**: `/api/v1/bookings`
- **Method**: `GET`
- **Description**: Retrieves all bookings.

#### Example Response

```json
[
  {
    "userId": "60c72b2f9b1d8e3f88e5b5e3",
    "productId": "666270e13f8de40bb836adf7",
    "details": "Test booking",
    "quantity": 2,
    "time": "2024-06-13T08:30:00.000Z",
    "paymentStatus": "Pending",
    "bookedStatus": "Booked"
  },
  {
    "userId": "60c72b2f9b1d8e3f88e5b5e3",
    "productId": "666270e13f8de40bb836adf8",
    "details": "Test booking 2",
    "quantity": 1,
    "time": "2024-06-14T09:45:00.000Z",
    "paymentStatus": "Completed",
    "bookedStatus": "Booked"
  }
]
```

### Get Single Booking

- **Endpoint**: `/api/v1/bookings/:id`
- **Method**: `GET`
- **Description**: Retrieves a single booking by its ID.

#### Example Request

```http
GET /api/v1/bookings/60c72b2f9b1d8e3f88e5b5e3
```

#### Example Response

```json
{
  "userId": "60c72b2f9b1d8e3f88e5b5e3",
  "productId": "666270e13f8de40bb836adf7",
  "details": "Test booking",
  "quantity": 2,
  "time": "2024-06-13T08:30:00.000Z",
  "paymentStatus": "Pending",
  "bookedStatus": "Booked"
}
```

### Book Medicine

- **Endpoint**: `/api/v1/bookings`
- **Method**: `POST`
- **Description**: Books a medicine.
- **Request Body**:

| Field          | Type   | Description             |
| -------------- | ------ | ----------------------- |
| userId         | String | ID of the user          |
| productId      | String | ID of the product       |
| details        | String | Additional details      |
| quantity       | Number | Quantity of the product |
| time           | String | Booking time            |
| paymentStatus  | String | Payment status          |
| bookedStatus   | String | Booking status          |

#### Example Request

```http
POST /api/v1/bookings
Content-Type: application/json

{
  "userId": "60c72b2f9b1d8e3f88e5b5e3",
  "productId": "666270e13f8de40bb836adf7",
  "details": "Test booking",
  "quantity": 2,
  "time": "2024-06-13T08:30:00.000Z",
  "paymentStatus": "Pending",
  "bookedStatus": "Booked"
}
```

#### Example Response

```json
{
  "userId": "60c72b2f9b1d8e3f88e5b5e3",
  "productId": "666270e13f8de40bb836adf7",
  "details": "Test booking",
  "quantity": 2,
  "time": "2024-06-13T08:30:00.000Z",
  "paymentStatus": "Pending",
  "bookedStatus": "Booked"
}
```

### Update Booking

- **Endpoint**: `/api/v1/bookings/:id`
- **Method**: `PUT`
- **Description**: Updates an existing booking by its ID.
- **Request Body**: Same as the booking request body.

#### Example Request

```http
PUT /api/v1/bookings/60c72b2f9b1d8e3f88e5b5e3
Content-Type: application/json

{
  "paymentStatus": "Completed"
}
```

#### Example Response

```json
{
  "userId": "60c72b2f9b1d8e3f88e5b5e3",
  "productId": "666270e13f8de40bb836adf7",
  "details": "Test booking",
  "quantity": 2,
  "time": "2024-06-13T08:30:00.000Z",
  "paymentStatus": "Completed",
  "bookedStatus": "Booked"
}
```

### Cancel Booking

- **Endpoint**: `/api/v1/bookings/:id`
- **Method**: `DELETE`
- **Description**: Cancels a single booking by its ID.

#### Example Request

```http
DELETE /api/v1/bookings/60c72b2f9b1d8e3f88e5b5e3
```

#### Example Response

```json
{
  "message": "Booking cancelled successfully"
}
```

## Usage

### Book a Medicine

Send a POST request to `/api/v1/bookings` with the required request body to book a medicine.

### Update a Booking

Send a PUT request to `/api/v1/bookings/:id` with the booking ID and the updated details to update a booking.

### Cancel a Booking

Send a DELETE request to `/api/v1/bookings/:id` with the booking ID to cancel a booking.

## Environment Variables

Ensure you have the following environment variables set up in a `.env` file:

```plaintext
# Database connection URI
DB_URI=mongodb://localhost:27017/healthcrad_db

# Port on which the server will run
PORT=3000
```

---
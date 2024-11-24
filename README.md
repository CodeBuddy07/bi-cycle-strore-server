# Bicycle Store API

This is a simple Express app with TypeScript, MongoDB, and Mongoose. It’s for managing a Bicycle Store where you can handle products (bicycles) and orders, plus track revenue!

## Features

- **Create, Read, Update, Delete (CRUD)** operations for bicycles.
- **Place Orders** and track inventory.
- **Revenue Calculation** from orders using MongoDB aggregation.
- **Inventory Management**: Quantity is reduced when an order is placed, and stock status is updated.
- **Proper Detailed Error Handling**: Its handle almost all type error with ease.

## Project Setup

### 1. Clone the Repo

```bash
git clone https://github.com/CodeBuddy07/bi-cycle-strore-server.git
cd bi-cycle-strore-server
```

### 1. Install Dependencies

```bash
npm install
```

### 4. Create ```.env``` File
Create ```.env``` file like below:

```bash
MONGO_URI= yourmonngodburl
PORT=3000
```

### 5. Start the Server
Run the following command to start the app:
```bash
npm run dev
```

It will be live on http://localhost:3000.




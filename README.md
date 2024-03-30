# Beckn Integration: Server to Frontend

## Overview

This README provides a guide for integrating server-side functionality with the frontend for Beckn applications. It covers setting up controllers, Mongoose models, routers, and OAuth authentication using Google, GitHub, and Facebook. Additionally, it demonstrates how to create user profiles using Mongoose and store states in local storage as per project requirements.

![s7](https://github.com/Akash12233/use-case-gen-frontend/assets/121252393/d0f85a15-9bc1-4e4c-a7c8-8316d5c1cdf3)

## Requirements

- Node.js and npm installed on your machine
- MongoDB database for storing user profiles
- Google, GitHub, and Facebook developer accounts for OAuth integration

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone <repository_url>
   ```

2. Navigate to the project directory:

   ```bash
   cd server
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Configuration

1. **OAuth Configuration**:
   - Set up OAuth credentials for Google, GitHub, and Facebook authentication in your respective developer accounts.
   - Obtain client IDs, client secrets, and callback URLs for each OAuth provider.
   - Update the `.env` file with your OAuth credentials:

     ```plaintext
     GOOGLE_CLIENT_ID=<your_google_client_id>
     GOOGLE_CLIENT_SECRET=<your_google_client_secret>
     GOOGLE_CALLBACK_URL=<your_google_callback_url>

     GITHUB_CLIENT_ID=<your_github_client_id>
     GITHUB_CLIENT_SECRET=<your_github_client_secret>
     GITHUB_CALLBACK_URL=<your_github_callback_url>

     FACEBOOK_CLIENT_ID=<your_facebook_client_id>
     FACEBOOK_CLIENT_SECRET=<your_facebook_client_secret>
     FACEBOOK_CALLBACK_URL=<your_facebook_callback_url>
     ```

2. **MongoDB Configuration**:
   - Ensure MongoDB is running on your local machine or update the database connection string in the `.env` file if using a remote MongoDB instance.

     ```plaintext
     MONGODB_URI=<your_mongodb_uri>
     ```

## Usage

1. **Start the Server**:
   - Run the following command to start the server:

     ```bash
     npm start
     ```

2. **Authentication**:
   - Visit the specified routes (`/users/google`, `/users/github`, `/users/facebook`) to initiate OAuth authentication with Google, GitHub, or Facebook respectively.
   - Upon successful authentication, users will be redirected to the callback URL specified in the OAuth configuration.

3. **Profile Creation**:
   - Once authenticated, users can create their profiles. 
   - The server will handle profile creation using Mongoose models. User profiles will be stored in the MongoDB database.

4. **Local Storage Integration**:
   - Implement client-side logic to store states or user-specific data in local storage as per project requirements.

## Folder Structure

- `controllers/`: Contains controller functions for handling authentication and profile creation.
- `models/`: Includes Mongoose models for defining user profiles.
- `routes/`: Defines routes for authentication and profile creation.
- `config/`: Stores configuration files, including environment variables.
- `middlewares/`: Contains custom middleware functions.

## Conclusion

This README serves as a comprehensive guide for integrating server-side functionality with the frontend for Beckn applications. By following the steps outlined here, you can implement OAuth authentication, user profile creation, and local storage integration seamlessly, ensuring a smooth user experience for your Beckn application.

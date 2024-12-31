# API Integration Documentation

   This project contains a set of API integrations designed to handle various functionalities related to the frontend and backend communication.
   The APIs are organized in the [Services Folder](login/src/Services), and each file handles a specific set of API calls.

## Folder Structure

   - **apiClient.js**: A utility file that sets up the base client for API requests.

   - **AddMemberAPI.js**: API calls related to adding members to a system.

   - **CreateProjectAPI.js**: Handles API requests for creating new projects.

   - **EmailAPI.js**: API calls related to email handling.

   - **HomeAPI.js**: Handles API requests related to the home page.

   - **LoginAPI.js**: API calls for user login functionality.

   - **NewPassAPI.js**: API requests related to password recovery and resetting.

   - **SignUpAPI.js**: Handles user registration API calls.

   - **VerificationCodeAPI.js**: API requests related to verification code handling.

## API Files Overview

   **`apiClient.js`**

   This file serves as the base client for making API requests to the backend. It handles setting up configurations, such as base URLs, headers, and common error handling.

   **`AddMemberAPI.js`**

   This file contains functions related to adding members to a project or group. It includes API requests like:
   - `addMember`: Adds a new member to the project.

   **`CreateProjectAPI.js`**

   This file manages API calls related to creating a new project. It includes:
   - createProject: Sends a request to the backend to create a new project.

   **`EmailAPI.js`**

   This file contains functions for sending and managing emails. Common functions include:
   - sendEmail: Sends an email for purposes like notifications, updates, etc.

   **`HomeAPI.js`**

   This file handles API requests to fetch data related to the home page of the application:
   - getHomeData: Retrieves data required for displaying the home page.

   **`LoginAPI.js`**

   This file contains functions for user login functionality:
   - loginUser: Authenticates users by verifying their login credentials.

   **`NewPassAPI.js`**
   This file handles requests related to password reset:
   - resetPassword: Sends a request to reset a user's password.

   **`SignUpAPI.js`**
   This file handles user registration API calls:
   - signUpUser: Registers a new user with the backend.

   **`VerificationCodeAPI.js`**

   This file deals with verification codes, which are sent for user registration and password recovery:
   - verifyCode: Verifies the code entered by the user.

## How the API Files Are Used

   1. Each API file contains specific functions for interacting with the backend.
   2. These functions are imported into the relevant components and used for performing tasks like logging in, signing up, creating projects, and more.

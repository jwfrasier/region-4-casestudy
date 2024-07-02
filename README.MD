# Course Enrollment Platform

## Description

The Course Enrollment Platform is a web application designed to facilitate the process of searching for, enrolling in, and participating in courses. The application uses a Django backend with RDS for data storage and a React frontend with React Router for client-side navigation.

## Features

- Search for available courses.
- Enroll in courses.
- View the list of courses a user is enrolled in (coming soon).
- User authentication and authorization.

## Tech Stack

- **Backend:** Django, RDS
- **Frontend:** React, React Router

## Screenshot

![Course Search](./path/to/your/image.png)

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Python 3.x
- Node.js
- npm (or yarn)
- PostgreSQL (or the database supported by RDS)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/course-enrollment-platform.git
   cd course-enrollment-platform
   ```

2. **Backend Setup:**

   ```bash
   cd backend
   python3 -m venv env
   source env/bin/activate  # On Windows use `env\Scripts\activate`
   pip install -r requirements.txt
   ```

   - **Database Configuration:**
     Update your database settings in `backend/settings.py` to point to your RDS instance.

   ```python
   DATABASES = {
       'default': {
           'ENGINE': 'django.db.backends.postgresql',
           'NAME': 'your_db_name',
           'USER': 'your_db_user',
           'PASSWORD': 'your_db_password',
           'HOST': 'your_db_host',
           'PORT': 'your_db_port',
       }
   }
   ```

   - **Run Migrations:**

   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

   - **Create a superuser:**

   ```bash
   python manage.py createsuperuser
   ```

   - **Start the backend server:**

   ```bash
   python manage.py runserver
   ```

3. **Frontend Setup:**

   ```bash
   cd ../frontend
   npm install  # or yarn install
   ```

   - **Start the frontend development server:**

   ```bash
   npm run dev  # or yarn start
   ```

## Usage

1. **Search for Courses:**

   Use the search bar to find courses related to your interests.

2. **Enroll in a Course:**

   Click on the "Enroll" button to register for a course.

3. **View Enrolled Courses:**

   Navigate to the "Participate in Course" section to view the list of courses you are enrolled in (feature coming soon).

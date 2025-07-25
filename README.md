# 🏏 NZ Cricket Participation Dashboard

A responsive web-based analytics and data entry platform to streamline the tracking of cricket session data across New Zealand schools.

## 🌐 Live Preview

Access the hosted version here:
🔗 [NZC Analytics Dashboard](https://preview--new-zealand-cricket.lovable.app/analytics)

Documentation here:
🔗 [NZC Final Report](https://www.dropbox.com/scl/fi/zmbnsmkmy95l0g55ou9r8/Final-Report.pdf?rlkey=tlwwluqnxja4bergbamrppbyf&st=w2jp2nuu&dl=0)

---

## 📌 Project Overview

This project was built for Education New Zealand Virtual Internships 2025 and New Zealand Cricket (NZC) to enable real-time reporting and analytics for cricket participation programs in schools.

### 🔧 Features

* **Login/Signup**: Secure user access for activators and admins
* **Landing Page**: Brief introduction and navigation
* **Dashboard**:

  * Welcome ribbon
  * Participation metrics
  * Quick-action tabs
  * Recent session activity log
* **Session Entry Form**:

  * Input school/session details
  * Capture participant data (year groups, gender)
  * Teacher engagement & student enjoyment levels
  * Save or reset data entries

---

## 📁 Project Structure

```
NZCricket/
├── public/
│   ├── css/
│   ├── js/
│   └── images/
├── views/
│   ├── dashboard.ejs
│   ├── form.ejs
│   ├── login.ejs
│   └── landing.ejs
├── routes/
├── app.js
├── Jenkinsfile
└── sonar-project.properties
```

---

## ⚙️ Tech Stack

* **Frontend**: HTML5, CSS3, Tailwind CSS, JavaScript
* **Templating**: EJS
* **Backend**: Node.js, Express.js
* **Database**: Firebase
* **CI/CD**: Jenkins (with GitHub integration)
* **Code Quality**: SonarQube
* **Deployment**: Lovable.app Preview Hosting

---

## 🚀 Getting Started (Development)

```bash
# Clone the repository
git clone https://github.com/Jahnavi-Anand/NZCricket.git

# Navigate to the project
cd NZCricket

# Install dependencies
npm install

# Run the development server
node app.js
```

---

## 🔐 SonarQube Integration

To run SonarQube analysis:

1. Ensure SonarQube is running at `http://localhost:9000`
2. Create `sonar-project.properties` with the correct project key and token
3. Run:

   ```bash
   sonar-scanner
   ```

---
### 🔧 Firebase Configuration

To run the project locally, you’ll need to configure Firebase by creating an `environment.ts` file.

#### 1. Create Firebase Environment File

Inside your `src/environments/` directory, create a file named `environment.ts` and add the following content:

```ts
export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "XXXXXX",
    authDomain: "your-project.firebaseapp.com",
    projectId: "your-project-id",
    storageBucket: "your-project.appspot.com",
    messagingSenderId: "XXXXXX",
    appId: "XXXXXX"
  }
};
```

> 🔒 Replace the placeholder values with your actual Firebase project credentials.

---

### ▶️ Running the Project Locally

To run the app in development mode:

```bash
ng serve
```

Then open your browser and visit:
[http://localhost:4200](http://localhost:4200)


## 👩‍💻 Author

* [Jahnavi Anand](https://github.com/Jahnavi-Anand)
* [Atharva Joshi](https://github.com/AthJoshi)
* [Ansh Bahl](https://github.com/anshbahl)


---

## 📜 License

This project is licensed for educational use under the **MIT License**.


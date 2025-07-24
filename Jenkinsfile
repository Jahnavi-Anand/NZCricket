pipeline {
  agent any

  tools {
    nodejs 'Node_20' // This name must match the name you gave in Global Tool Config
  }

  environment {
    CI = 'true'
  }

  stages {
    stage('Clone Repository') {
      steps {
        git 'https://github.com/Jahnavi-Anand/NZCricket.git'
      }
    }

    stage('Install Dependencies') {
      steps {
        bat 'npm install'
      }
    }

    stage('Lint JavaScript') {
      steps {
        bat 'npx eslint .'
      }
    }

    stage('Lint CSS') {
      steps {
        bat 'npx stylelint "**/*.css"'
      }
    }

    // stage('Run Backend Tests') {
    //   steps {
    //     bat 'npm test'
    //   }
    // }

    // stage('Deploy to Production') {
    //   when {
    //     branch 'main'
    //   }
    //   steps {
    //     echo 'Deploying to production...'
    //   }
    // }
  }

  post {
    success {
      echo '✅ Build succeeded.'
    }
    failure {
      echo '❌ Build failed.'
    }
  }
}

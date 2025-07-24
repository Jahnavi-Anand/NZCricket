pipeline {
    agent any

    environment {
        NODE_ENV = 'development'
    }

    tools {
        nodejs 'NodeJS_18' // Define this tool name in Jenkins global config
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Lint JS Files') {
            steps {
                sh 'npx eslint . --ext .js,.ejs || true'
            }
        }

        stage('Lint CSS') {
            steps {
                sh 'npx stylelint "**/*.css" || true'
            }
        }

        stage('Validate EJS Templates') {
            steps {
                sh '''
                find views -name "*.ejs" -exec node -e "
                    const fs = require('fs');
                    const ejs = require('ejs');
                    process.argv.slice(1).forEach(file => {
                        try {
                            ejs.compile(fs.readFileSync(file, 'utf8'));
                        } catch (err) {
                            console.error('EJS Error in', file, err.message);
                            process.exit(1);
                        }
                    });
                " {} +
                '''
            }
        }

        // stage('Run Backend Tests') {
        //     steps {
        //         sh 'npm test'
        //     }
        // }

        // stage('Deploy') {
        //     steps {
        //         echo 'Deploying to staging/production...'
        //         // Add deploy command or shell script
        //     }
        // }
    }

    post {
        success {
            echo '✅ Pipeline completed successfully!'
        }
        failure {
            echo '❌ Pipeline failed. Please check the logs.'
        }
    }
}

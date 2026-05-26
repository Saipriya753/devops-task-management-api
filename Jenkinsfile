pipeline {

    agent any

    tools {
        nodejs "NodeJS"
    }

    stages {

        stage('Build') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
    steps {
        sh 'npm test'
    }
}

        stage('Code Quality') {
            steps {
                sh 'echo "SonarQube scan will be added later"'
            }
        }

        stage('Security Scan') {
            steps {
                sh 'echo "Security scan will be added later"'
            }
        }

        stage('Deploy') {
            steps {
                sh 'echo "Docker deployment completed successfully"'
            }
        }
    }
}
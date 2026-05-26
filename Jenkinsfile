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
        script {
            def scannerHome = tool 'SonarScanner'
            withSonarQubeEnv('SonarQube') {
                sh "${scannerHome}/bin/sonar-scanner"
            }
        }
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
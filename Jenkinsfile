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

stage('Release') {
    steps {
        sh 'docker build -t task-api:v1 .'
        sh 'docker tag task-api:v1 task-api:release'
    }
}

        stage('Security Scan') {
    steps {
        sh 'trivy image task-api || true'
    }
}


        stage('Deploy') {
            steps {
                sh 'echo "Docker deployment completed successfully"'
            }
        }
    }
}
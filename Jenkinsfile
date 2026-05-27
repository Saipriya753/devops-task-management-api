pipeline {

    agent any

    tools {
        nodejs "NodeJS"
    }

    environment {
        IMAGE_NAME = "task-api:${BUILD_NUMBER}"
        CONTAINER_NAME = "task-api"
        PORT = "3000"
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

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

stage('Code Quality - SonarQube') {
    steps {
        withSonarQubeEnv('SonarQube') {
            withCredentials([string(credentialsId: 'sonar-token-new', variable: 'SONAR_TOKEN')]) {

                sh """
                    ${tool('SonarScanner')}/bin/sonar-scanner \
                    -Dsonar.login=$SONAR_TOKEN
                """
            }
        }
    }
}

        stage('Quality Gate') {
            steps {
                timeout(time: 10, unit: 'MINUTES') {
                    waitForQualityGate abortPipeline: true
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                sh "docker build -t $IMAGE_NAME ."
            }
        }

        stage('Security Scan - Trivy') {
            steps {
                sh "trivy image --exit-code 1 --severity HIGH,CRITICAL $IMAGE_NAME || true"
            }
        }

        stage('Deploy Container') {
            steps {
                sh """
                    docker rm -f $CONTAINER_NAME || true
                    docker run -d \
  --name task-api \
  -p 3000:3000 \
  -e MONGO_URI=mongodb://host.docker.internal:27017/taskdb \
  task-api:${BUILD_NUMBER}
                """
            }
        }

        stage('Monitoring Check (/metrics)') {
            steps {
                sh 'sleep 10'
                sh 'curl --fail http://host.docker.internal:3000/metrics | head'
            }
        }
    }

    post {
        always {
            echo 'Pipeline completed'
        }
        success {
            echo 'Build Successful'
        }
        failure {
            echo 'Build Failed'
        }
    }
}
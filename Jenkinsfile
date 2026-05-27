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
                script {
                    def scannerHome = tool 'SonarScanner'
                    withSonarQubeEnv('SonarQube') {
                        sh "${scannerHome}/bin/sonar-scanner"
                    }
                }
            }
        }

        stage('Quality Gate') {
            steps {
                timeout(time: 5, unit: 'MINUTES') {
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
                    docker run -d --name $CONTAINER_NAME -p $PORT:$PORT $IMAGE_NAME
                """
            }
        }

        stage('Monitoring Check (/metrics)') {
            steps {
                sh "sleep 5"
                sh "curl http://localhost:$PORT/metrics | head"
            }
        }
    }

    post {
        always {
            echo 'Pipeline completed'
        }
        success {
            echo 'Build Successful 🚀'
        }
        failure {
            echo 'Build Failed ❌'
        }
    }
}
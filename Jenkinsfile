pipeline {
  agent any
  environment {
    DOCKER_CREDENTIALS = credentials('dockerhub-creds')
    DOCKER_USER = 'saikumarnerella90'
  }
  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }
    stage('Build and Push Product') {
      steps {
        dir('product-service') {
          sh "docker build -t $DOCKER_USER/product-service:latest ."
          sh "echo $DOCKER_CREDENTIALS_PSW | docker login -u $DOCKER_CREDENTIALS_USR --password-stdin"
          sh "docker push $DOCKER_USER/product-service:latest"
        }
      }
    }
    stage('Build and Push Order') {
      steps {
        dir('order-service') {
          sh "docker build -t $DOCKER_USER/order-service:latest ."
          sh "docker push $DOCKER_USER/order-service:latest"
        }
      }
    }
    stage('Deploy to Kubernetes') {
      steps {
        sh "kubectl apply -f k8s/"
      }
    }
  }
}

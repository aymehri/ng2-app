node {
    stage('check tools') {
        sh "node -v"
        sh "npm -v"
    }

    stage('checkout') {
        checkout scm
    }

    stage('npm install') {
        sh "npm install"
    }

    stage('frontend tests') {
        sh "npm run test-sr"
    }

    stage('packaging') {
        sh "npm run build-prod"
    }
}

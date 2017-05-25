node {
    stage('check tools') {
        sh "node -v"
        sh "npm -v"
		sh "yarn --version"
    }

    stage('checkout') {
        checkout scm
    }

    stage('npm install') {
        sh "npm install"
    }

    stage('frontend tests') {
        sh "ng test -sr"
    }

    stage('packaging') {
        sh "ng build --prod"
    }
}

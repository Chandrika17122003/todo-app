pipeline {
    // 🧩 This tells Jenkins to run the pipeline on any available agent (executor)
    agent any

    stages {

        // 🔹 Stage 1: Clone your GitHub repository
        stage('Clone Repository') {
            steps {
                echo '📦 Cloning the project repository from GitHub...'
                // Cloning your GitHub repo (main branch)
                git branch: 'main', url: 'https://github.com/Chandrika17122003/todo-app.git'
            }
        }

        // 🔹 Stage 2: Verify project structure (optional but useful)
        stage('Verify Files') {
            steps {
                echo '🔍 Checking if main project files exist...'
                // List all files to confirm they are cloned correctly
                sh 'ls -l'
            }
        }

        // 🔹 Stage 3: "Build" step (for static sites, no actual build is required)
        // Here we can just simulate a build or copy files to a build folder.
      stage('Build') {
    steps {
        echo '⚙️ Simulating build process (copying files to build directory)...'
        sh '''
        rm -rf build
        mkdir build
        cp -r index.html page.css page.js build/
        '''
    }
}

        // 🔹 Stage 4: (Optional) Deploy step
        // For example, if you want to serve it with a simple Python or Nginx server
        stage('Deploy') {
            steps {
                echo '🚀 Starting local server to preview the website...'
                // Serve static files using Python built-in HTTP server
                sh 'cd build && python3 -m http.server 8081 &'
            }
        }
    }

    // 🔹 Post section runs after all stages (whether success or failure)
    post {
        success {
            echo '✅ Build completed successfully! Website is served on port 8081.'
        }
        failure {
            echo '❌ Build failed. Please check the console output for errors.'
        }
    }
}

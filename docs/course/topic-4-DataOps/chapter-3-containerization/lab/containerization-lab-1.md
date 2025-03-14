---
layout: custom
title: Lab 1. Containerizing a React Application
grand_parent: Topic 2 - DevOps
parent: Chapter 3 - Containerization
nav_order: 2
---
# Lab 1 - Containerizing a React Application
**Estimated Time to Complete:** 25-30 minutes
{: .label .label-blue }

{: .info}
Before you begin the lab exercise, please check the **Labs Overview** page to ensure that you have all the required software installed and that you meet all the prerequisites.

## Learning Objectives
- Create a Docker image of a React application
- Run the Docker image locally
- Interact with a running Docker container
- Understand Docker container isolation

## Introduction
Welcome 👋

This lab serves as your first step into container technology, empowering you with the skills to package and isolate a React application in a Docker container.

## Fork and Clone the Reference Application
Let' start by forking the reference application repository. This will create a copy that you can modify and use without affecting the original codebase. Cloning will then brings this copy to your local machine.

1. **Fork the Repository:** Navigate to the [reference application](https://github.com/open-devsecops/topic-2-lab-reference-app){:target="_blank"} and fork the repository to your own GitHub account.
2. **Clone Your Fork:** Open your terminal and clone the forked repository to your local machine.

```bash
git clone <your-forked-repo-url>`
```

## Run the React Application Locally
With the reference application repository cloned, let's run the React app locally to see how it looks and functions on your machine. 

1. **Navigate to the Project Directory:** Move into the project directory in your terminal.
2. **Install Dependencies:** Run `npm install` to install the required node modules for the project.
3. **Start the Application:** Enter `npm start` to run the application locally. Your default web browser should automatically open to `http://localhost:3000`, displaying the reference application.

```bash
cd topic-2-lab-reference-app
npm install
npm start
```

## (Optional) Customize the React Application!
Now that you have the application running, feel free to personalize it! This will also prepare you for the next lab, where you'll share your customized app with a classmate.

1. Open the `src/App.js` file in your favorite code editor.
2. Make changes to the JSX to alter the layout, style, or functionality of your app. For example, you might want to change text, or add images!

{: .info}
If you want to include images, place them in the `public` folder of your project, and reference them in the `App.js` file with the following HTML tag: `<img src="/image-name.jpg" alt="Description of image" />`.

## Containerize the Application
Okay, we have the React application running on our local machine. Imagine you want to ensure that this React app runs exactly the same way on any machine. How can you achieve that? The answer lies in containerization.

{: .info}
On Windows, you can use the `echo. > Dockerfile` command in the Command Prompt. On a MacOs/Linux machine, use the `touch Dockerfile` command.

### Creating a Dockerfile
The first step in containerizing your application is to create a Dockerfile. This file contains a set of instructions for Docker to build an image of your application.

**In the root directory of your project**, create a file named `Dockerfile` with no file extension. This file will dictate how Docker should package your app and its environment.



**Specifying the Base Image:** Start your Dockerfile with a line specifying the base image. For a React application, a good starting point is the official Node.js image. This ensures your app has all the necessary Node.js tools right from the get-go.

```Dockerfile
FROM node:21-alpine AS build
```
Here, `node:21-alpine` specifies that we're using version 21 of Node.js based on the lightweight Alpine Linux. This choice keeps our image small and fast to deploy.

{: .info}
`AS build` names this stage of the build process **build**. Naming a stage allows you to refer to it in later stages of the build, especially when you want to copy artifacts from one stage to another without carrying over all the files and settings from the previous stages. This will start to make more sense as we proceed with the rest of the build definition.

**Setting Up The Working Directory:** Let's set up a directory for the React app. All subsequent intructions from this Dockerfile will be executed relative to this directory within the running container.

```Dockerfile
WORKDIR /app
```

**Copying The Application Files:** Now, let's copy your application's files into the container's working directory. Start with the package.json files to optimize caching for npm install.

```Dockerfile
COPY package*.json .
```

Then, we'll install the dependencies and copy over the rest of the app's files.

```Dockerfile
RUN npm install
COPY . .
```

{: .info}
The dot used as a path `.` refers to the current directory. When used in the COPY command, the first dot represents the path in the context of your local file system (source), and the second dot represents the path inside the Docker container (destination). It translates to "copy everything from the current directory on my local machine to the current directory inside the container."

**Compiling Static Files:** Let's build the React app to compile the static files for production.
```Dockerfile
RUN npm run build
```

**Serving the Application with Nginx:** 
When you ran `npm start`, you initiated a development server that facilitates live reloading and other development features, listening (typically) on port 3000. However, when preparing a React application for _production_, we use `npm run build` to compile the application into static files (HTML, CSS, JS).

To serve these static files, we'll use nginx, a high-performance web server. This involves setting up a second stage in our Dockerfile that starts with a fresh image. This technique, known as a _multi-stage build_, allows us to keep our final image as lightweight as possible by excluding dependencies from the Node.js build environment.

```Dockerfile
# Start a new stage from nginx
FROM nginx:alpine AS runtime

# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html

# Copy static assets from base stage (node.js build image) to the current working directory /usr/share/nginx/html (nginx image)
COPY --from=build /app/build .
```

### The Complete Dockerfile

```Dockerfile
# Build stage
FROM node:21-alpine AS build
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build

# Runtime stage
FROM nginx:alpine AS runtime
WORKDIR /usr/share/nginx/html
COPY --from=build /app/build .
```

## Building Your Docker Image
With your Dockerfile ready, it's time to build the image. Open your terminal, navigate to the root directory of your project where the Dockerfile resides, and run:

```bash
docker build -t my-app .
```

This command tells Docker to build an image named `my-app` based on the instructions in your Dockerfile. The . indicates that Docker should look for the Dockerfile in the current directory.

{: .info}
The `docker build` command may take a few minutes to complete because this process involves downloading and setting up all the necessary dependencies for the React application.

## Running Your Docker Container
Once the build completes, you can run your containerized application with:
```bash
docker run -d -p 8080:80 my-app
```

This command starts a container from the my-app image that we just created. 

In our Docker setup, the Nginx web server inside the container was configured to serve the React static files and listen on port 80, the default port for HTTP web traffic. To make the web server accessible from your local machine, we map port 8080 from your host machine to port 80 inside the container (`-p 8080:80`).

Now, if you navigate to `http://localhost:8080`, you should see the same React application running, just as it did before — but this time, it's running inside a Docker container.

The `-d` option tells Docker to run the container in the background. This allows the container to continue running without occupying the terminal session from which it was started.

## Stopping Your Running Container
Containers, like any other application, use system resources such as CPU, memory, and network bandwidth. Stopping unused containers frees up these resources.

To stop a running container, you'll need the container's ID or name. You can find this information by listing all running containers:

```bash
docker ps
```

Once you've identified the container you want to stop, use the docker stop command followed by the container ID or name:

```bash
docker stop <container-id or container-name>
```

**Verify the Container has stopped:**
```bash
docker ps -a
```

## Bonus: Exploring the Container Environment
When your React application is running inside a Docker container, you might wonder, "Is it really isolated from my local environment?" To answer this, let's dive into the container and see for ourselves.

### Starting the Stopped Container
```bash
docker start <container-id or container-name>
```

{: .info-title }
> What's the difference between docker start and docker run?
>
> `docker run` is used to create a new container from a specified image and start it immediately. `docker start` is used to start an existing container that has been stopped.

### Entering the Running Container
Docker provides a command, `docker exec`, which allows you to execute commands inside a **running container**. Using this, you can start an interactive shell session:

```bash
docker exec -it <container-id or container-name> sh
```

Here, `-it` instructs Docker to run `sh` in interactive mode in the specified container.

### Checking the Environment
Once inside the container, let's run a simple command to check the operating system information:

```sh
uname -a
```

This command prints system information about the Linux kernel, which should be different from your host machine's (especially if you're not running Alpine Linux). 

You can explore further by listing the files in the current directory `ls` or checking the environment variables `env`.

When you're done, simply type `exit` or press `Ctrl + C` to leave the container shell.
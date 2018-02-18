# PDTemplateANOS5

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.3.  
Some additions have/will be made to demonstrate Testing, Continuous Integration & Continuous Deployment.  

##### Last Update
10 Feb 2017  

##### Contact
russell.clark@peeringdown.cloud  

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Hosted projects:
## Continuous Deployment
All this stuff applies to 'static' sites. Put simply this means no server-side code like PHP or .net  
### <a target="_blank" rel="noopener" href="https://github.com/RussellRClark/Angular.git">Code Repository: GitHub</a>
Public repo. The code is here. Note that this single code base can deployed to all these different hosts.  
Normally one host would be used, perhaps with a Development Site &amp; a Production site deployed from the dev &amp; prod branches in the GitHub repository.  
Note: some of the Hosts listed below (like Heroku) can also do CI/CD.  
### <a target="_blank" rel="noopener" href="https://pdtemplateanos5.firebaseapp.com/">Host: FireBase</a> 
Firebase is the easiest hosting to get running and it has a free tier  
The project redeploys on each production build (see script below). Tests are run manually.


##### Install firebase tools globally
   > npm install -g firebase-tools
   
##### Then Login
   > firebase login  
   
   give credentials  
   
   
> firebase init  

   Are you ready to proceed? Yes  
   Which Firebase CLI features? Hosting (In the future, use whatever you need! Press space to select.)  
   Select a default Firebase project? Angular Hosting Test (Choose whatever app you created in the earlier steps)  
   What do you want to use as your public directory? dist (This is important! Angular creates the dist folder.)  
   Configure as a single-page app? Yes  
   
#####   Init Creates 2 files
   // .firebaserc  
   Sets the Firebase project we're linking to  
   {  
      "projects": {  
      "default": "angular-hosting"  
   }}  
   
   // firebase.json  
   Check this is populated. Sets the hosting folder and rewrites  
   {  
      "hosting": {  
      "public": "dist",  
      "rewrites": [  
   {  
      "source": "**",  
      "destination": "/index.html"  
   }  
   ]  
   }}  
   
##### Then
   > ng build --prod --output-path dist
   > firebase deploy
   > firebase open hosting:site  
   
   Specifying the output path is required because the same code is deployed to GitHub (see below) which  
   deploys from the repository docs folder
   
 ##### package.json
   Add this to scripts  
   "deploy": "ng build --prod --output-path dist && firebase deploy && firebase open hosting:site"
   
   > npm run deploy

 ###  <a target="_blank" rel="noopener" href="https://russellrclark.github.io/Angular/">Host: GitHub Pages</a>
  GitHub and GitHub Pages require more steps than firebase because the code is held in a repository.  
  A free tier is offered for public repositories. GitHub offers Pipelines & Services.  
 
  Create a GitHub account.   
  Create a repo.  
  Set this repo as your dev project git remote. Commit & push  
  In GitHub go to the repo/Settings/GitHub Pages/Set a source (master branch/docs folder)  
  
   > ng build --prod --output-path docs --base-href [your repo name]
   
  Then 
  > git add .  // note the space and dot  
  > git commit -message=["message"]  
  > git push -u origin master

 ### <a target="_blank" rel="noopener" href="www.peeringdown.cloud">Host: Netlify</a> 
 Incredibly simple to set up. From the command line do this:  
 > npm install netlify-cli -g  
 > build  
 > cd dist  
 > netlify deploy  
 > new site y/n  
     answer no gives a list of existing sites    
    
  To handle SPA routing add this file to the src folder:  
 // _redirects  
 /*    /index.html   200  
 This will effectively serve the index.html instead of giving a 404 no matter what URL the browser requests.
   
   And change this file:  
 // angular-cli.json  
 "assets": [                // in src folder  
 "assets",  
 "favicon.ico",  
 "_redirects"  
 
  ### <a target="_blank" rel="noopener" href="https://pdtemplateanos5.herokuapp.com//">Host: Heroku</a></h2>
  Heroku offers a free tier with Continuous Deployment & CI & CD via its pipelines. Heroku requires a few code changes as it uses Node.js to run the site.
  Heroku needs these changes to be made to the development code. Once code is Pushed to GitHub Heroku does its thing
  and spins up a node server.
     
     // package.json  
     Copy these into   
     .. dependencies  
     "@angular/cli": "^1.6.5",  
     "@angular/compiler-cli": "^5.0.0",  
     "typescript": "~2.4.2"  
     
     .. scripts  
     "postinstall": "ng build -prod"  
     "start-dev": "ng serve -o",  
     "start": "node server.js",  
       
     .. add this  
     "engines": {  
     "node": "8.9.4",  
     "npm": "5.6.0"  
     },  
       
     Install this stuff  
     npm install enhanced-resolve@3.3.0 --save-dev  
     npm install express --save  
       
     // server.js  
     // install in the application root  
     const express = require('express');  
     const app = express();  
       
     // Serve only the static files form the dist directory  
     app.use(express.static(__dirname + '/dist'));  
       
     // Start the app by listening on the default Heroku port  
     app.listen(process.env.PORT || 8080);   

## Continuous Integration & Deployment
When development code is Pushed to the repository GitLab runs the tests & deploys the code. Hence CI & CD.
Note that Heroku (above) can also do this
###<a target="_blank" rel="noopener" href="https://gitlab.com/RussellClark/PDTemplateANOS5_GitLab">Code Repository: GitLab</a></h2>
The code hosted in this (free) public repo is deployed to a FireBase development site  &amp; a FireBase production site.
GitLab runs the Unit Tests, Integration Tests &amp; the e2e (end-to-end) UI tests; and then deploys the code.

###<a target="_blank" rel="noopener" href="https://pdtemplateanos5.firebaseapp.com/">Host: FireBase</a></h2>
  This is the production site deployed from GitLab. The development site is not shown.
  
  


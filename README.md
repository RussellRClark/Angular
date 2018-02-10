# PDTemplateANOS5

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.3.

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

#Hosted here:
### <a target="_blank" rel="noopener" href="https://pdtemplateanos5.firebaseapp.com/">FireBase</a> 
Firebase is the easiest to get running: redeploys on each production build (see script below)
 
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
   > ng build --prod
   > firebase deploy
   > firebase open hosting:site
   
 ##### package.json
   Add this to scripts  
   "deploy": "ng build --prod && firebase deploy && firebase open hosting:site"
   
   > npm run deploy

 ###  <a target="_blank" rel="noopener" href="https://github.com/RussellRClark/Angular">GitHub Pages</a>
  This requires more steps.  
  Create a GitHub account.   
  Create a repo.  
  Set this repo as your dev project git remote. Commit & push  
  In GitHub go to the repo/Settings/GitHub Pages & Set a source (master branch/docs folder)  
  
   > ng build --prod --output-path docs --base-href [your repo name]
   
  Then 
  > git add .  // note the space and dot  
  > git commit -message=[message]  
  > git push.... as required

   ### <a target="_blank" rel="noopener" href="https://github.com/RussellRClark/Angular.git">GitHub Repo</a>
   Public repo here


# Youtube Wannabe

The objective of this project is to drop a few advanced techniques into one app.  It includes: 
* Classes
* Asynchronous programming
    * API calls
    * callbacks
    * promises
* building from source
* task runners
* es6 -> es5 conversion
* closure, execution context
___
### Build Scripts - automating with a task runner
So far we haven't seen any difference between the source code we write and the code our applications run.  In the real world there usually is, and in this application there is.  

There are many reasons to build projects from source before running them.  In the JS world these are some of the most reasons:  
* It's nicer to write in es6 than es5, but not all browsers support it. Thus [babel](https://babeljs.io) and [babelify](https://github.com/babel/babelify).
* You want to serve only a single js file, but develop your code in a directory structure with many files.
* Some build tools will optimize your software while compiling what you wrote.

In this application we are building from source so you can use some es6 (classes, promises) and so you can have the 'view' class in a different file from the 'app' funciton.  This sounds great but is really annoying in practice. Everytime you change a line of code, you'll need to re-build the entire project before can test it! 
Enter 'Task Runners' - you can think of these as next-level 'nodemon'. Nodemon re-runs JS files in node every time a change is made in that file.  Task runners are like that, but you get to decide what they do and decide when they do it. We will be using gulp to re-build our application every time a change is saved anywhere in the source code.  

Take a closer look at the tools we'll be using: 
* [babelify and browserify](http://egorsmirnov.me/2015/05/25/browserify-babelify-and-es6.html)
* [gulp](https://css-tricks.com/gulp-for-beginners/)  

___
### Assignments:
For this project we have provided you with finished code, your job is to understand, tweak, and document the code according to the steps below:
1. Open the project directory in terminal and type 'gulp watch'. Open 'index.html' in your browser.
    * you will get an error.  remember what it was, you'll fix it in step 2.
2. Read through gulpfile.js:
    * the error from step 1 comes from 'gulpfile.js', where? fix it.
    * why does gulpfile need babelify?
    * what happens if you run 'gulp js' in terminal?
    * or if you run 'gulp default'?
    * right now, app.js has to be in 'src'.  modify the application (directory structure and gulpfile) so app.js has to be in a folder called 'source'.
3. Read and document the view object.
4. Read and document app.js (in this order):
    1. videoSearch, getVideoDetail
    2. setupHandlers
    3. app
5. Read the source code for 'youtube-api-search'
    1. open node_modules
    2. scroll all the way down to 'youtube-api-search'
    3. read 'index.js'
    4. document this module

___

Challenges: 
* Implement auto-complete for previous searches using a model object
* Recreate the app without referencing our code
* Replace all callbacks with promises



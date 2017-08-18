Build and deploy a meta-app to showcase your best projects on the same hosting project.  You'll link to each sub-app from your github.io portfolio for any project that isn't static.
  
How?  it's 'simple'.  
0. make a home page that's resume/portfolioish.  it's the root url, all projects will be a slash away from here.
1. Make copies of the projects you want to demo, in the copy you will
	* get rid of the app.listen
	* module.export the 'app' object
2. Copy them all into a folder for the meta-project.
3. You'll make a meta-app app.js which will listen on a port and require then app.use('/project-name') each of your projects 
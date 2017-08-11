your assignment: 
  	1. Make 2 objects from the old tictactoe stuff.  
  	2. the first will be the controller, the second a model.    
  	  * (there is no need for a view object, ejs does all that for us)  
  	3. require the controllers and model into your app.js
  	4. embed the controller into middleware.  either:  
  	  * a singe middleware with params  
  	  * a bunch of middleware with no params  
  	  * or somewhere in between  
  	5. make it work! the controller will still call the model object.  Where it would call a view method, it will render an ejs.  your middleware shouldn't be much longer than 2-3 lines, enough to gather params and call the controller object.  All the logic will be in the controller file

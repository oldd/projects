# TYPE VALIDATION
Data models can be thought of as bouncers for your DB.  It only lets the cool objects in, and it makes sure you behave yourself in the club. Our model objects so far only fit half of this job description; they restrict what you can do to the DB by only providing certian methods, but they don't keep the riff-raff out.

                           Enter : Type Validation

Let's give our model a generalized description of which objects are acceptable and give it a way to compare new data obejcts to that description.  

---
 ### Implementation
 
 You will need to add one property and 3 methods to your object:
  * _SCHEMA property_:

    ```javascript
	var generalized_schema - {
	   // one of these for each propery an object must have 
	    property_name: {
	           // the return value of typeOf for this property
	            type: 'primitive type', 
	           // is this property required in an incoming object     
	            required: boolean, 
	           // optional. a default value if this property is wrong        
	            fallback: 'same primitive type' 
	        },
	   // can incoming objects have extr properties?    
	    extra_properties: boolean 
	};
	
	var person_schema = { // a specific example
		name: {type: 'string', required: true, fallback: 'nuts', },
		age: {type: 'number', required: false},
		extra_properties: false
	};
    ```
* _VALIDATE method_: 
    * A method that compares an object to the schema.  
    * This method is what's called a _helper method_.  The idea behind helper methods is that they help the object do it's job but they don't add to the object's "public persona". ie. You'll never call it directly from anywhere else in your application.  JS has no way to enforce this, you have to.
    * You may have already used a helper method and not known it.  Did you ever one of your view objects any method the controller doesn't call directly?  For example to draw a header to your battleship game?  Then you've made a helper method.
* _GET_ and _SET_ methods: 
    * For getting and setting the schema property.  
    
Some Exercises:  
* [1](https://github.com/EliumAcademy/ExercisePlatform/blob/master/app/course/week1/day5/exercise2/description.md)  
* [2](https://github.com/EliumAcademy/ExercisePlatform/blob/master/app/course/week1/day5/exercise3/description.md)  
* [3](https://github.com/EliumAcademy/ExercisePlatform/blob/master/app/course/week1/day5/exercise4/description.md)  


Get to it

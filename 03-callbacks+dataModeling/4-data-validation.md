So far your model has accepted whatever type of object you pass in.  To make this a real data model, lettuce make it only save the right type of objects.  
  
To do this, you'll give your model a new property called 'schema'.  A schema is a generalized statement about what objects should look like.  
Here's an example schema:  
```javascript
	var person_schema = {
		name: {type: 'string', fallback: 'nuts', required: true},
		age: {type: 'number', fallback: null, required: false},
		extra_properties: false
	};
```

It's used to check all incoming objects, making sure they have the right properties and types. 

SO.  To make your model object use schemas you'll need to:  
1. Add a getter and setter for the schema
2. Add helper function to validate objects 
3. Modify 'create' and 'update'


Get to it
1: Create a factory that returns copies of your data model:
 
* modelFactory: function
  * args: 2
    * name: string
    * schema: schema object
  * return: new dataModel object initialized with the schema and name
  * behavior:  sets the 'schema' and 'name' properties and returns the new model
  * purpose: to create a model object for each type of data in your *Book project
  

 
2: Create a constructor function to create model objects that inherit their methods:
* ```js
    function constructor(name, schema) {
            var new_obj = Object.create(constructor.prototype);
            new_obj.name = name;
            new_obj.schema = schema;
            return new_obj;
        };
    constructor.prototype = {};
    ```

3: Write an essay describing the pros and cons of both designs.  Cite specific use cases.


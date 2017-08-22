# CALLBACKS and MODEL OBJECTS

This project introduces two concepts: 
1. Callbacks: 
   * Executing higher order functions instead of using a return statement.  Async programming 101.
2. Model Objects: 
   * Mongoose.js is what we'll use as our model with Express. Model Objects like in this project and in *Book are a lot like Mongoose.js, think of them as a proto-mongoose.  Get used to them now while things are simple.

---
### The project: 

Complete the 4 files in this repo: 

  
1. Empty code for both synchronous models (with return statements).  Notice how storing the data in arrays vs. objects makes certain operations easier and others more challenging.  Much of the difference in difficulty has to do with which operations exist natively in JS. 
2. Refactor your favorite synchronous model to be asynchronous (replacing return statements with callback executions).
3. Refactor your model object to use type-validation.  It will no longer save objects to it's DB unless that object matches the schema.
4. Refactor your model object to use one of your custom data-structures instead of an array or object.
 ___
### N L S 

Check out this impressive [model class](https://github.com/jankeLearning/content-code/tree/master/Week%2004/impressive-model) built by [Marilena](https://github.com/maridyr).
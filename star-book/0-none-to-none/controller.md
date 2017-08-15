* CONTROLLER:  object
  * METHODS:
    * DISPLAY_PROFILE:
      * ARGS:  1
        * ID: number
          * PURPOSE: to access the correct entry from MODEL
      * RETURNS:  undefined
      * BEHAVIOR:  retrieves the right entry from MODEL and calls the VIEW to render that profile
    * ADD:
      * ARGS: depends on profile type
        * PURPOSE: passing in all required fields for a new profile 
      * RETURNS:  undefined
      * BEHAVIOR:  calls MODEL to add a new profile with the new info.  calls VIEW to redraw the home page.
    * UPDATE: 
      *  ARGS: 1 + variable (dependant on your schema)
         * ID: number
           * PURPOSE: to update the right profile
         * VARIABLE: this depends on the type of profile you are updating
      * RETURNS: undefined
      * BEHAVIOR: updates the correct profile with the new data.  redraws that profile's page.
    *  DELETE:
       *  ARGS: 1 :
          *  ID: number
                *  PURPOSE:  I hope you can figure this one out on your own.
        *  RETURNS: undefined
        *  BEHAVIOR: deletes selected profile and redraws the home page.  you may want to consider popping a warning message, just in case the 'delete' button was clicked by accident.
    *  HOME:
        *  ARGS: 0
        *  RETURNS: undefined
        *  BEHAVIOR: redraws home page






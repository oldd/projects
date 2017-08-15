PROFILE_MODEL.JS:  all functionality connected to storing, accessing, modifying profiles
  *  MODEL:  an object 
     *  PROPERTIES: 1, possibly 2
        *  DB:  array or object to contain profile records
        *  possibly 2: a means of ensuring id's are not duplicated
      *  METHODS: 4
         *  CREATE:
            *  ARGS: 1
                * NEW_PROFILE: a profile object  
            *  RETURNS: the assigned ID
            *  BEHAVIOR:  assigns the new profile a unique ID, then saves it to DB.
          *  READ: 
             *  ARGS: 1
                *  ID: number
             *  RETURNS: a profile object || error message
             *  BEHAVIOR: looks for an entry with that id.  if it exists, return it.  if not, say so.
          *  UPDATE:
             *  ARGS: 2
                *  NEW_DATA: object containing the key/value pairs to update
                *  ID: the entry to update
             *  RETURNS: true || helpful error message
             *  BEHAVIOR: finds entry with given ID. for every field in NEW_DATA, it updates the original entry.  if a field is not in NEW_DATA, that field is left untouched in the original entry.  ignore fields in NEW_DATA that are not in the profile schema.
          *  DELETE:
             *  ARGS: 1
                *  ID: number
             *  RETURNS: true || a helpful error message
             *  BEHAVIOR:  deletes the designated entry
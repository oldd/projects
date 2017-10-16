   
# Part 3 of *Book
___
So far our social network is pretty dumb, it's not even a network!  Lettuce fix this by learning some social skills.  Users can now 'log in'.  When logged in, a user can view all profiles, but only modify their own.  They can also send friend requests to other users.  Users can only accept requests if they are logged in, otherwise the relationship remains pending. (We've provided implementation detials for this step).
 * Profiles now have a many-to-many relationship with other profiles.  One profile can be associated to many other profiles, and vice versa. 

___    
## Behavior your app must satisfy:
on the home page a user can ...
* view a listing of all thumbnail profiles.
* create new thumbnail profiles from the home page.
* click on a thumbnail to navigate to it's main profile page
    * if no main profile exists for that thumbnail, they are redirected to the twilight zone
* view a list of all (or most recent) statuses in chronological order
* click on a status to view that user's main profile
    * if that profile has been deleted, users are alerted that this status is orphaned   
* select a user to act as 'logged in'. (toggle their thumbnail profile)
    * if another user is already 'logged in', the new one will replace them


on a profile page a user can ...
* modify main profile
* delete the main profile
* modify thumbnail profile
* delete the thumbnail profile
    * if the thumbnail is deleted, your application should auto-generate an anonymous thumbnail for this profile to display on 'home' - all main profiles should be accessible
* view all statuses posted from this profile
* view all statuses posted by friends of this profile
* create a new status 
* NOT modify or delete old statuses
* view all friend thumbnails
* click on a friend thumbnail to view their main profile
* if that user is 'logged in'
    * view all friend requests
    * accept friend requests
    * reject friend requests (deleting the relationship object)
    * unfriend friends (deleting the relationship object)
* if that user is not 'logged in'
    *  send them a friend request
    *  return to 'logged in' profile
    *  return home

If a thumbnail is anonymous and it's profile is deleted, delete the thumbnail.  ie. we don't want any anonymous thumbnails that point nowhere.  

If a main profile has been deleted then recreated, statuses from the old profile should not point to the new profile.

If a main profile has been deleted then recreated, old relationships will not be deleted but will show up as 'anonymous' in the un-deleted profile - much like statuses on the home page.
___
## Implementation:

```javascript 
var main_profile_schema = {
        // ...
        // nothing, no need to point to relationship objects
        // ...
    };
    
var relationship_schema = {
        // ...
        user_1: 0000, // an ID from main_model pointing to friender
        user_2: 0000, // an ID from main_model pointing to friendee
        status: 0000, // used to indicate if it is pending, accepted, complicated, ...
        // ...
    };    
```

Your app will have these objects:

* main_model
* thumbnail_model
* status_model
* relationship_model
* view
* controller  
* logic  
* handler  

The relationship_model will have to have a 'findBy' method that allows you to search for relationships by field value: 
* ARGS: 2
  * FIELD: string
  * VALUE: anything
* RETURNS: array of relationship objects
* BEHAVIOR: searches through the relationship DB for all objects with a key/value pair matching the search query.
 
Challenges:  
* refactor more model objects to have a 'findBy' method then refactor your app to use them.
* Refactor your 'findBy' to accept regular expressions in the 'field' property of a search.
* refactor 'findBy' to have inclusive AND exclusive search. I'll give a sample query object and you'll have to figure out how the function should use it:
  * ```javascript
    var query_1 = { 
            {field: 'user_1', value: 43, included: true},
            {field: 'user_2, value: 43, included: false}
        }; // all friendships that user 43 initiated

    var query_2 = {
            {field: 'user_1', value: 43, included: false},
            {field: 'user_2, value: 43, included: false}
        }; // all friendships that don't include user 43
        
    var query_3 = {
            {field: 'user_1', value: 43, included: true},
            {field: 'user_2, value: 43, included: true},
            {field: 'user_1', value: 78, included: true},
            {field: 'user_2, value: 78, included: true}
        }; // all relationships that include user 43 OR user 78.  this could be the first step in a process to determine all their mutual friendships.     
        
    var query_4 = {
            {field: 'user_1', value: 43, included: true},
            {field: 'user_2, value: 43, included: true},
            {field: 'user_1', value: 78, included: false},
            {field: 'user_2, value: 78, included: false}
        }; // will your function return a relationship object uniting users 43 and 78?
     ```


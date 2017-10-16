   
# Part 2 of *Book
___
 A next way to up our social network is by including statuses.  A user can now see a list of recent statuses as well as a list of all profiles, profiles and statuses are clickable.  When the user clicks on a profile they can now see what they saw in step 1 as well as a list of all statuses that user has posted. When a user clicks on a status they will be directed to that user's profile.
  * Statuses and profiles in this version have a one-to-many relationship.  One profile can be associated with many statuses, but each status is connected to only one profile.

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

on a profile page a user can ...
* modify main profile
* delete the main profile
* modify thumbnail profile
* delete the thumbnail profile
    * if the thumbnail is deleted, your application should auto-generate an anonymous thumbnail for this profile to display on 'home' - all main profiles should be accessible
* view all statuses posted from this profile
* create a new status 
* delete old statuses  
  * if deleted, remove that status' id from the user data entry  

If a thumbnail is anonymous and it's profile is deleted, delete the thumbnail.  ie. we don't want any anonymous thumbnails that point nowhere.  

If a main profile has been deleted then recreated, statuses from the old profile should not point to the new profile.
___
## Implementation:

```javascript 
var main_profile_schema = {
        // ...
        statuses: [0000, ..., 0000], // array containing ID's from the status_model
        // ...
    };
    
var status_schema = {
        // ...
        profile: 0000, // an ID from main_model
        // ...
    };    
```

Your app will have these objects:

* main_model
* thumbnail_model
* status_model
* view
* controller  
* handler  
* logic


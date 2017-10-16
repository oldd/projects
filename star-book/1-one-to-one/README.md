   
# Part 1 of *Book
___

Let's make this slightly more interesting.  Users now have two profiles they can design; their main profile like before, and a thumbnail profile for the main landing page. These profiles can have different pictures, different taglines, different themes, ...  When a user comes to the home page, they see a list of thumb-nail profiles.  After clicking on a thumbnail profile the user is redirected to the complete profile.
   * Thumbnail and main profiles form a one-to-one data relation.  Each profile has only one assiciated thumbnail-profile and vice versa. 
___    
## Behavior your app must satisfy:
on the home page a user can ...
* view a listing of all thumbnail profiles.
* create new thumbnail profiles from the home page.
* click on a thumbnail to navigate to it's main profile page
    * if no main profile exists for that thumbnail, they are redirected to the twilight zone

on a profile page a user can ...
* delete the main profile
* delete the thumbnail profile
    * if the thumbnail is deleted, your application should auto-generate an anonymous thumbnail for this profile to display on 'home' - all main profiles should be accessible
* modify main profile
* modify thumbnail profile  
  
If a thumbnail is anonymous and it's profile is deleted, delete the thumbnail.  ie. we don't want any anonymous thumbnails that point nowhere.  
___
## Implementation:

Your app will have these objects:

* main_model
* thumbnail_model
* view
* controller  
* handler  
* logic

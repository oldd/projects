   
# Part 4 of *Book
___

The last step this social network project is to include messaging.  You all know how messaging works from a user's point of view, now figure out how it works from a developer's point of view.  
   * There are more than one ways of implementing messaging, come up with your own and describe the data relationships in play.
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
    * view messages
    * send messages
* if that user is not 'logged in'
    *  send them a friend request
    *  return to 'logged in' profile
    *  return home
    *  no messages anything

If a thumbnail is anonymous and it's profile is deleted, delete the thumbnail.  ie. we don't want any anonymous thumbnails that point nowhere.  

If a main profile has been deleted then recreated, statuses from the old profile should not point to the new profile.

If a main profile has been deleted then recreated, old relationships will not be deleted but will show up as 'anonymous' in the un-deleted profile - much like statuses on the home page.

If a main profile has been deleted, all messages sent from that profile will stil be visible when the other person is logged in but as sent from 'anonymous'.
___
## Implementation:

How will you implement this?  some ideas:
* Are message a property of a relationship object?
* Are there messaging_history objects like there are relationship_objects?
* Can two profiles message if they aren't friends?
* What happens to a message history if friendship status changes?
* Is group messaging possible?


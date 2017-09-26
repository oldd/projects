# Welcome to the *book series of projects.  
___
Learning objectives:   
* MVC  
* Model objects and data modeling  
* front->back development  
* feature/userstory based development schedule  
* asynchronous and callbacks  
* git/hub

___
This series is dedicated to data relations.  Each of the 4 steps introduces on of the 4 major data relations: 

0. None-to-None  
1. One-to-One 
2. One-to-Many
3. Many-to-Many  

Data relations refer to how different types of data (aka. different schemas) relate to one-another. The steps of this project are designed to illustrate the different data relations: 
  
0. Profiles in this social network are an unrelated data-type.  Each profile stands alone and has no instances of another data type associated with it.  
    * A simplest impelementation of a social netowrk will consist of profiles with no friends, no messaging, no statuses, ... just things like 'name', 'age', 'hobbies'.  A user can see a list of profiles, click on one to read it, and return to the list of profiles.  

1. Thumbnail and main profiles form a one-to-one data relation.  Each profile has only one assiciated thumbnail-profile and vice versa.    
    * Let's make this slightly more interesting.  Users now have two profiles they can design; their main profile like before, and a thumbnail profile for the main landing page. These profiles can have different pictures, different taglines, different themes, ...  When a user comes to the home page, they see a list of thumb-nail profiles.  After clicking on a thumbnail profile the user is redirected to the complete profile.

2. Statuses and profiles in this version have a one-to-many relationship.  One profile can be associated with many statuses, but each status is connected to only one profile.
    * A next way to up our social network is by including statuses.  A user can now see a list of recent statuses as well as a list of all profiles, profiles and statuses are clickable.  When the user clicks on a profile they can now see what they saw in step 1 as well as a list of all statuses that user has posted. When a user clicks on a status they will be directed to that user's profile.

3. Profiles now have a many-to-many relationship with other profiles.  One profile can be associated to many other profiles, and vice versa.
    * So far our social network is pretty dumb, it's not even a network!  Lettuce fix this by adding the ability to have friends.  Users can now 'log in'.  When logged in, a user can view all profiles, but only modify their own.  They can also send friend requests to other users.  Users can only accept requests if they are logged in, otherwise the relationship remains pending. (We've provided implementation detials for this step).
     
4. There are more than one ways of implementing messaging, come up with your own and describe the data relationships in play  
    * The last step this social network project is to include messaging.  You all know how messaging works from a user's point of view, now figure out how it works from a developer's point of view.  

    
Those are the 5 steps of the *book series. For more detailed descriptions of each one, goto their respective README's  
  

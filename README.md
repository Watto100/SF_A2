# Assessment2:

## Git: (https://github.com/Watto100/SF_A2)
The application was uploaded into a public GitHub repository. The program files were tracked using git. The files were added to the git and committed with messages describing the changes. The GitHub repository was the origin for the git. All committed changes were pushed into the GitHub repository. The home page of the repository has the application folder and a README file. The file is used to document the application and is written in mark down format. In the application folder there is the ‘Server’ folder which has the files for the
backend, and there is the ‘Frontend’ folder which contains the angular files.

## Data structures:
The data was stored in a mongo database called demo-app. There were two collections in the database. The users collection and the group collection.
The users collection consisted of user objects. This user objects had an object id, an id field with number value, username field with string value, email field with string value, pwd field representing the password with a string value, avatar field representing image url with a string value, and a role field with a string value.
The groups collection consisted of group objects. This group object had a name field with a string value, a members field with an array with user’s usernames that were in the group. Also, a channels field with an array that represents the different channels in the group.


## Rest API’s:
The api’s are how the angular application communicates with the server.
-   GET groups:
Provide: none.
Returns: array of all group objects

This API is used to send all the groups to the client. It sends no data and the api returns an array of group objects from the mongo database.

-   GET groups:
Provide: none.
Returns: array of all user objects

This API is used to send all the user to the client. It sends no data and the api returns an array of user objects from the mongo database.

-   POST login:
Provide: JSON object containing username and password.
Returns: user object found from the username and password.

This API is used to send the inputted username and password from the login form to
the server. The server will compare the posted data to the users data to
determine if the user has the correct credentials. The API will return whether the
credentials are correct. 


-   POST add user:
Provide: user object.
Returns: mongo command result.

This api will send a user object to the server. The server will add the user to the database. The server will return the result of the command from mongodb.

-   POST make upgrade user:
Provide: user object.
Returns: mongo command result.

This API sends the selected user’s id to the serve so that the server can change the user’s role to an admin. This is done by using the update one command. The server sends back the mongo command result.

-   POST make demote user:
Provide: user object.
Returns: mongo command result.

This API sends the selected user to the server so that the server can change the user’s role to a user. This is done by using the update one command. The server sends back the mongo command result.

-   POST delete user:
Provide: user object.
Returns: mongo command result.

This API sends the selected user to the server so that the server can delete the user. This is done by using the delete one command. The server sends back the mongo command result.

-   POST delete group:
Provide: group object.
Returns: mongo command result.

This API sends the selected group to the server so that the server can delete the group. This is done by using the delete one command. The server sends back the mongo command result.



## Angular Architecture

### Components:
**App:**
The app component is responsible for routing, it will route all the other components. The app component will have a navigation bar so that the user can easily navigate the application. It also handles the logout function.

**Home**:
The home component is used to show the user listing and detail page next to each other.

**User Listing:**
The user listing component is only accessible by the user admins. This page gives a list of all the users their data. The admin will be able to ban users and change their role. The user rows are selectable and will send the user to the detail component. The admin will also be able to delete, upgrade and demote users from this component.

**Detail component:**
This component is used to show the data for the selected users from the user listing component.

**Add User:**
This component is a form that is used to create new users. Only the admin role can access this component.

**Group Page:**
This component will show all the different groups and their channels. Users will only be able to see groups that they are a member of. The component will also have functionality for admins. The admin will also be able to delete groups.

**Add group:**
This component is used to add a group to the database.

**Login:**
This component is used to log users in. If users are successfully logged in their session token will be locally saved. This page will also have a router link to the Group Page component.

**Profile:**
The profile page is used to upload an avatar picture and change user information.
Video:
This component was used to implement video calls and screensharing.


### Services

**Auth service:**
This service is used to authorise the users to use the application. It uses APIs to authorise users. It lets the user login and register.

**Auth guard:**
This service is used to ensure that users have the appropriate role in order to access sensitive functions. It is used to ensure users have logged in before being able to access the webpage.

**Data service:**
This service is used to access the mongo database through the server. It will be used to find, delete and update both the users and groups collection.

**Image upload:**
This service is responsible for uploading images.

**Socket:**
This service is used to communicate with the server’s socket web communication. It is used for all chat functionalities.

### Modules
**App module:**
This module is used to import all the required functionality such as the
‘HttpClientModule’. It is also used to import all the components of the application to
declare them. This ensures that all the components have access to all the
functionalities.
![image](https://github.com/Watto100/SF_A2/assets/140489807/a2933873-88b5-4924-a253-7861828561be)

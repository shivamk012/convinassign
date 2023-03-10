THE APP IS HOSTED AT : https://creator-cd5x.onrender.com/

Technologies Used : React Js , Node Js , MongoDB , Express ,  Axios , Redux

According to the problem statement , the user can create / delete/ edit a card which contains name and link to youtube video.

I built a simple username, password based authentication system. Two users can be differentiated using username so username is like a primary key to the user database. 
I used bcrypt library for encrytion and decryption of password. I used express js for building restful api's , mongodb library for connecting to db, quering to database 
and axios for api calls.

Once a user logs in , he can see all his cards created till date. Each card has a name , edit button , delete button. If user clicks on the card , youtube video will 
begin to play inside the card which can be resized to full screen.I used iframe for connecting to external youtube link. 

Various features like checking is user already registered or is user present is data base or not can be done using findOne query in mongoDB.

Api's used -

1 ) POST http://localhost:8000/api/loginUser This is a post request which is used then user is trying to log in. At first , a check whether user is present or not '
    using findOne query in mongoDb is done and if user is not registered it is shown on screen and if user is registered using bcrpyt compare method a check is done 
    whether password is matched or not and user is redirected to form if matched otherwise a error message is shown.
    
2 ) POST http://localhost:8000/api/setUser This request is used to add the user to existing database.

3 ) POST http://localhost:8000/api/updateCards This request updates the new card list of user after editing or deleting operation.

4 ) POST http://localhost:8000/api/addNewCard This request adds new card for the user.

5) POST http://localhost:8000/api/updateUserHistory The request updates the watch history of user. If a user clicks on a card it goes into his watch history which
    user can access from the history section.
    
Future updates : The frontend is mid level , further a new feature can be implemented in which user can sort cards according to bucket.

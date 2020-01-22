<!--             API ENDPOINTS        -->

NOTE:

1. (ADMIN PRIVILEGE):
   X ---------------- NOT PROTECTED
   A ---------------- ADMIN ONLY
   E ---------------- EDITOR ONLY

2. MAKING A REQUEST TO THE ENDPOINT;
   To make a request to the endpoint, it is required u pass a config object that contains a key 'x-auth-token' (where the value is read from a cookie(preferred) or localhost)

example:
await axios.get("/api/user", {headers:{x-auth-token:<TOKEN READ FROM COOKIE>}});

for more info check axios docs

3. You can pass a limit query to a GET reqest
   example:
   /api/event?limit=10 --> //returns 10 event

<!-- EVENTS -->

## METHOD ----------- ENDPOINT ----------------- ADMIN PRIVILEGE

GET ----------- /api/event ------------------------ X  
GET ----------- /api/event/:slugTitle ------------- X  
POST ---------- /api/event ------------------------ A  
DELETE -------- /api/event/:id -------------------- A  
PUT ----------- /api/event/:slugTitle ------------- A  
POST ---------- /api/event/comment/:eventId ------- X

<!-- EVENT ENDPOINT DESCRIPTION -->

<!-- USER -->

## METHOD ----- ENDPOINT ------------ ADMIN PRIVILEGE

GET ----------- /api/user ----------------------- A  
POST ---------- /api/user/registration ---------- X  
POST ---------- /api/user/login ----------------- X  
POST ---------- /api/user/profile/:id ----------- E  
POST ---------- /api/user/permission/:rank/:id -- E  
DELETE -------- /api/user/:id ------------------- E

<!-- USER ENDPOINT DESCRIPTION -->

## /api/user

Get all users

## /api/user/registration

Register users. The post reqest should contain password and stateCode

## /api/user/login

Authenticate User. The post reqest should contain password and stateCode

## /api/user/profile/:id

Get user profile.

## /api/user/permission/:rank/:id

Change user permission. valid params for ':rank' are ["EDITOR", "MODERATOR", "USER"]
example:
/api/user/permission/EDITOR/1

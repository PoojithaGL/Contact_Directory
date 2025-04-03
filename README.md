SAVE THE CONTACTS TO LOCAL STORAGE WHENEVER 
USER TAPS ON ADD/UPDATE BUTTON - (TO LOCAL STORAGE) - DONE


FETCH THE CONTACTS TO STATE FROM LOCAL STORAGE WHENEVER 
USER LAUNCHES THE APP - (FROM LOCAL STORAGE)


API - Application Programming INterface

that is the only way of communication between client and server
// WEB APP
// browser will be the client
// server -> server
// YOUTUBE -> youtube.com

// MOBILE APP
// mobile application will be client
// server -> server
// YOUTBUBE youtube mobile app


// TV APP
// TV is client
// server -> server
// YOUTUBE youtube tv app


// DESKTOP APPS
// desktop(OS) is the client
// server -> server
// YOUTUBE -> youtube dekstop app

THERE 5 KINDS OF API REQUESTS THAT ANY CLIENT CAN DO:

 - GET REQUEST -> whenever client wants to fetch some data from server
 - POST REQUEST -> whenever client wants to create a resource into the server SIGNUP/LOGIN
 - PUT REQUEST -> whenver client wants to update a resource into server
 - PATCH REQUEST -> whenever client wants to make a small change in a resource into the server
 - DELETE REQUEST -> whenever client wants to delete the resource from the server


SYNTAX FOR FETCH

IT ACCEPTS TWO PARAMETERS
    - string/URL where the server is sitting
    - object which descibes about the API request
    {
        method -> What kind of API Request the client is making
        methods: 'DELETE'
        method: 'POST'
        body: {}
        headers: {}
    }
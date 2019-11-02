# Streaming simulator

Let's pretend you're implementing a streaming service. A user can see a video only if it has permission for it. But, we don't want to wait for this request before the user sees the video. 

The exercise is to fetch the video and user permissions in parallel and show the appropriate message based on the responses. You'll find the 2 functions which dummy check for permission and get the video inside `App.service.js`.
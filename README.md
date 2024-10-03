# NodeJs_onFirebase
# FirebaseTest + Node.js

## Record
1. Create basic Node.js HTTP server: server.js
2. Create Firebase project
   - Follow Firebase Documentation
     - https://console.firebase.google.com/project/project--2094369809834538378/settings/general/web:YzE2ZmNhYjItZjI4My00ZGNhLWEzZDYtZmUwMDJjMWVhMDUx?hl=zh-tw&fb_gclid=Cj0KCQjw3vO3BhCqARIsAEWblcCJ3ihsiMICztuELsAlADkZf_COFNpynT4ZLdHhjW267Q5jmbeZCMAaAsdPEALw_wcB
3. Install Firebase CLI
   - Follow Firebase Documentation
     - https://firebase.google.com/docs/cli?hl=zh-tw&_gl=1*17c6mps*_up*MQ..&gclid=Cj0KCQjw3vO3BhCqARIsAEWblcCJ3ihsiMICztuELsAlADkZf_COFNpynT4ZLdHhjW267Q5jmbeZCMAaAsdPEALw_wcB&gclsrc=aw.ds
     - npm install -g firebase-tools
4. Connect Firebase from local
   - Commands
     - firebase login
     - firebase projects:list
     - firebase init
     - firebase serve --only hosting
       - Navigate http://localhost:5000 to check Firebase local hosting
     - firebase deploy
5. Add Node.js to Firebase
   - reference:
     - https://stackoverflow.com/questions/45537195/how-to-host-nodejs-project-to-firebase
     - https://www.youtube.com/watch?v=LOeioOKUKI8
   - Commands
     - npm install express ==> 沒裝的話會出現: Function us-central1-app does not exist
     - firebase init hosting
     - firebase init functions
       - Allow furebase automatically npm install
     - update index.js ==> use express and firebase.https
     - update firebsae.json ==> setup rewrite for timestamp
     - firebase serve --only functions,hosting ==> 要在 CMD 裡面執行, 不能在 vscode terminate 內使用
     - firebase deploy
       - may need to change project type --> Blaze


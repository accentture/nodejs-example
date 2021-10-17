/* 
  --open a windows console
  --verify ssh on windows
    ssh -v

  --to connect remote server throught ssh
    ssh ubuntu@18.216.31.146 -i app-hotel.pem
       ♥ be default the server has root use, but we will use ubuntu

*/

/* 
  --to update repositories and programs
    sudo apt update && sudo apt upgrade
*/

/* 
  --to create folder on aws
    mkdir projects
*/

/* 
  --to see code in a file
    cat app.js
*/

/* 
  --to install nvm
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash


  --it is necesary to restart the server to recognize the nvm command
    source ~/.bashrc  
*/

/* 
  --install node with nvm
    nvm install --lts
*/

/* 
  -now we can open the project with the ip address and port
    http://18.216.31.146:3000/

    or with DNS
    http://ec2-18-216-31-146.us-east-2.compute.amazonaws.com:3000/
*/

/* 
  --to run a program permantly, it is using an amperstand (&)
    npm start &
*/

/* 
  --to see node process that is running in abreviated way
    ps -a

  --to see more process that are running
    ps -ef
*/

/* 
  --to kill node process
    killall node

  --to kill an specific process
    kill PID_process
*/

/* --to get out of server and return to windows console
    ctrl + d 
*/

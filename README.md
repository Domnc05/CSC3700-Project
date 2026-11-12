# CSC3700-Project
Building a full-stack web application across three milestones this semester. The application is an Aurora CS Course Scheduler, a tool that displays the Computer Science course catalog.

Run Procedure:

"root .env used the url given in instructions"
"Team16"

1. Clone Repository or Download All files under Course-Scheduler in the Project-Milestone-2 branch

If cloning repository after cloning run this command in terminal for correct branch: 

git clone -b Project-Milestone-2 https://github.com/Domnc05/CSC3700-Project.git

This will create a new folder with the correct version of the project

2. Navigate to inside Course-Scheduler
3. Grab schema.sql and seed.sql from sql folder in server folder
4. In PhpMyAdmin SQL database run schema.sql in SQL query then run seed.sql in the query for the complete database
5. Navigate to server directory and do npm install
6. Create server/.env file using .env.example and replacing placeholder with equivalent team
7. After install start server by doing npm run dev
8. Create .env file in root of Course-Scheduler and replace vite url with equivalent url
9. Open a new terminal and in the root do npm install
10. After install open react website by doing npm run dev

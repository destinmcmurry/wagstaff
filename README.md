# Senior Enrichment Project

Make a thing!

## Getting started

1. Fork and clone this repo
2. *Set the name of your project in `package.json`*. The skeleton intentionally ships with an invalid name.
3. `npm install`
4. Check out the mock-view in the `wireframes` folder
5. Start the build process and your application with: `npm run start:dev`
6. If you navigate to the URL you should see some UI already :) [We already have some connection code to get you started]

## Requirements

### The Premise

You are the CTO of the Margaret Hamilton Interplanetary Academy of JavaScript. Create a RESTful web platform that allows you to manage your students and campuses. Before getting started, please carefully review the expectations as outlined in the [grading rubric](https://docs.google.com/document/d/1X5FekpyZqAiTmSU0ipAAHTGyIoInC-m-1a75YkMcejM).

### The tools

Use at least Sequelize, Express and React when creating this app. This app is small, so just using React is reasonable, but note that without practicing with more frontend libraries you will have a steep learning curve in senior phase. If you are going forward with ***just React*** you will benefit from **deleting all references to React-Redux, Redux and React-Router** (so you don't confuse yourself with trying to use something in half your files and not the other half). 

If you feel ready, start by incorporating React-Router, Redux and React-Redux (we helped get you started with this!)! If you go this route, it will be great practice and will prepare you **well** for senior phase.

### Views and Functionality

Take a look in the wireframes folder as a reference for how your front-end could look. Of course, you are encouraged to be creative and flex your own design muscles, but the wireframes should function as a good baseline/inspirational resource.

Once again, please carefully review the user story expectations in the [rubric](https://docs.google.com/document/d/1X5FekpyZqAiTmSU0ipAAHTGyIoInC-m-1a75YkMcejM), as completing the user stories is the most heavily weighted part of the project.

### Routes

```
GET
- all campuses
- a campus by id
- all students
- a student by id
```

```
POST
- new campus
- new student
```

```
PUT
- updated student info for one student
- updated campus info for one campus
```

```
DELETE
- a campus
- a student
```

### DB Design

- Students
  * have profile info including:
    * firstName - not empty or null
    * lastName - not empty or null
    * email - not empty or null; valid email
    * gpa - decimal between 0.0 and 4.0
  * must have a virtual 'name' field which is the concatenation of firstName and lastName
  * must be assigned to a campus

- Campuses
  * have profile info including:
    * name - not empty or null
    * imageUrl - default value
    * description - extremely large text
  * can have many students assigned (may have none)

### How to test functionality without a frontend
- GET: use your browser
- POST / PUT / DELETE : 
 - CLI (command line interface) with `curl`
   - e.g. `curl -H "Content-Type: application/json" -X POST -d '{"username":"kate","password":"1234"}' http://localhost:3000/api/login`
   - `-H`: headers. `-X`: verb. `-d`: data (must be of the type specified in headers). http://[address]:[port]/[route_path]
 - [Postman](https://www.getpostman.com/)
   ![](https://www.dropbox.com/s/4fk3b90cd0i1a5y/postman_post.png?raw=true)
- Databases: use Sequelize in your routes and see if you are receiving what you expect

### Video Walkthrough
Please submit a 5 to 10 minute screencast of a walk-through of the functionality *and code* for each user story in your app. E.g. for "As a user, I can create a campus", please show us that you can successfully create a campus in your app, and also the actual code that is involved in doing that (from the front-end components to the backend routes and models). We recommend using Quicktime to record the screencast (instructions on how to do that [here](https://support.apple.com/kb/PH5882?locale=en_US&viewlocale=en_US)).

Once you've recorded your screencast, please *upload it to YouTube as an unlisted video*. Email `academics@fullstackacademy.com` with the title `Senior Enrichment Submission: [Your Name]` and include your repo link and YouTube recording link. This will aid us in evaluating your submission.

## Evaluation
[Rubric](https://docs.google.com/document/d/1X5FekpyZqAiTmSU0ipAAHTGyIoInC-m-1a75YkMcejM)

- User stories (60%)
- Rubric score (40%)
- Extra credit (15% max)


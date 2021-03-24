# Concept3D Interview : The Technical Challenge

### Overview

This repo adds new features to a boilerplate set up with React and Redux on the Front-End, and an Express API on the Back-End. I used a GitHub [project board](https://github.com/NakiNorton/frontendchallenge/projects/1) to help stay organized and on track.

### Setup
1. Clone this repository to your local machine.
2. CD into this repo's directory.
3. Run npm install.
4. Run npm start (start both client and server sides).
5. In your browser navigate to localhost:3000 (or whichever port is provided)


### Added Features
- A user can add new location markers to the map by completing the form with valid inputs. If the user submits an invalid value a message will render to let them know that there was an issue with their request and inform them of the requirements.
- When the user successfully submits a new location a marker will appear on the map at the location coordinates and the map will center around the new location. 
- The new location is posted to the API so it will persist when the user refreshes the browser (and restarts app?)
- Enables user to create shapes on the map by clicking on a marker. It's coordinates will be used as a point for a polygon. Successive clicks will add markers to the polygon and clicking on a point of the polygon will remove it from the polygon.
- And don't worry, you won't loose your art! Polygons will persist.

### Project in Action 

#### A user adding a new marker successfully and then unsuccessfully
<img src ='readme-assets/concept-adding_error.gif' width=740>   


#### A user connecting markers to create a polygon
<img src ='readme-assets/concept-polygon.gif' width=740>   


### Challenges
I've primarily been working with functional components with hooks and making the switch to class components took me a while to get my head around! I considered changing all the components to functional components but I decided against it as it was a good refresher and I have to get comfortable with adapting to code bases.

Refamiliarizing myself Express and Redux was challenging as I hadn't touched either tech in a long time and everytime I see Redux in an app it's set up differently.


### Future iterations
- Add tests
- Host the application


### This updated application was built by:  
Stephanie Norton: [GitHub](https://github.com/NakiNorton) | [LinkedIn](https://www.linkedin.com/in/stephanie-norton-12888453/) <br>







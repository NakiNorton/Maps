# Concept3D Interview : The Technical Challenge

### Overview
This repo adds new features to a boilerplate app setup with React and Redux on the Front-End, and an Express API on the Back-End. I used a GitHub [project board](https://github.com/NakiNorton/frontendchallenge/projects/1) to help manage my tasks and stay organized.


#### Developer:  
Stephanie Norton: [GitHub](https://github.com/NakiNorton) | [LinkedIn](https://www.linkedin.com/in/stephanie-norton-12888453/)<br><br> 

### Setup
1. Clone this repository to your local machine
2. CD into this repo's directory
3. Run npm install
4. Run npm dev to start server
5. Run npm start
6. In your browser navigate to localhost:3000 (or whichever port is provided)<br><br> 


### Added Features
- Users can add new location markers to the map by submitting the form with valid inputs. If a users submission contains an invalid value, a message will render to let them know that there was an issue with the request and inform them of the requirements for each input field.
- When a user successfully submits a new location a marker will appear on the map at the location coordinates and the map will re-center around the new marker. 
- The new location is posted to the API so it will persist when the user refreshes the browser.
- Users can create shapes on the map by clicking on a marker. The markers coordinates will be used as a point for a polygon. Successive clicks will add markers to the polygon and clicking on a point of the polygon will remove it from the polygon.
- And don't worry, you won't loose your art! Polygons will persist (for as long as the Express API allows).<br><br> 


### Project in Action<br><br>

#### Adding a new marker unsuccessfully (missing name value), rendering the error message.
<img src ='readme-assets/concept-error.gif' width=740><br><br>   

#### Adding a new marker and re-centering map.
<img src ='readme-assets/concept-add.gif' width=740><br><br>   

#### Connecting markers to create a polygon.
<img src ='readme-assets/concept-polygon.gif' width=740><br><br>   


### Future iterations
- Improve the error message, make it specific as to what caused the error.
- Clear the form input fields after successful submission.
- Add tests w. React Testing Library, Jest, Redux mock store.
- Host the application. 







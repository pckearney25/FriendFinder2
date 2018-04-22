var friends = require("../data/friends.js");

module.exports = function(app) {
  app.get("/api/friends", function(apiReq, apiRes) {
    return apiRes.json(friends);
  });

  app.post("/api/friends", function(apiReq, apiRes) {
    //code for manipulating apiReq
    var userData = apiReq.body;

    //converts userData.scores array data to integers
    for (i = 0; i < userData.scores.length; i++) {
      userData.scores[i] = parseInt(userData.scores[i]);
    }

    //Finding the best match......
    //It is possible to get multiple "best" matches with the same score....
    //(e.g a userData.scores array of [1, 2, 5, 1, 5, 4, 1, 1, 3, 5] returns 3 winners with the friends data here.)
    //An approach to build an array of best matches follows.
    //If the final array has only one answer it is pushed to the user.
    //If the final array has multiple objects, one is selected at random and sent.

    var iLoops = friends.length; //for looping through each object in the friends array
    var jLoops = userData.scores.length; //for looping through the scores array in each friend object

    var bffArray = []; //will hold all objects with the lowest bestMatchScore
    var bestMatchScore = 4 * userData.scores.length + 1; // initialized at the worst possible score + 1.
    var totalDifference = 0; // a sum of the absolute differences between the userData.scores and a friend object.scores.
    var bestMatch = {}; // an individual object chosen from the bffArray to return back to the user.

    console.log("bestMatchScore: " + bestMatchScore);

    for (i = 0; i < iLoops; i++) {
      totalDifference = 0; //reset at each iteration

      //j loop to calculate the totalDifference for each friend object
      for (j = 0; j < jLoops; j++) {
        totalDifference += Math.abs(friends[i].scores[j] - userData.scores[j]);
      }

      console.log("Friend " + i + ": " + totalDifference);

      if (bestMatchScore > totalDifference) {
        bestMatchScore = totalDifference; //updates to the lower value
        bffArray = []; //empties the array
        bffArray.push(friends[i]); //add the new best matching friends object

        console.log("bestMatchScore: " + bestMatchScore);
        console.log(bffArray);
      } else if (bestMatchScore === totalDifference) {
        bffArray.push(friends[i]);
        console.log("bestMatchScore: " + bestMatchScore);
        console.log(bffArray);
      }
    }

    //Selection of a friend for the user.
    if (bffArray.length === 1) {
      bestMatch = bffArray[0];
    } else if (bffArray.length > 1) {
      console.log("Multiple friends identified.");

      //A random number generated for selecting an object in the bffArray ro return to user
      var randomNum = Math.floor(Math.random() * bffArray.length);
      bestMatch = bffArray[randomNum];
    }

    console.log(bestMatch);
    apiRes.json(bestMatch);

    //Finally add user to friends array.
    friends.push(userData);
  });
};

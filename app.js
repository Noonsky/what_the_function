function Student(firstName, favoriteColor) {
    this.firstName = firstName;
    this.favoriteColor = favoriteColor;
}

/**
 * 1. Use the Student constructor function to create variables
 * that represent you and your coding partner(s).
 */

var erik = new Student('Erik', 'Blue');

var charlie = new Student('Charlie', 'Green');



/**
 * 2. Create a function that takes one argument. That argument will
 * represent a single student object. The function will log the student's
 * name.
 */
function userStudentName(special) {
    console.log(special.firstName);
}

/***** SWITCH PROGRAMMERS *****/

/**
 * 3. Create a function that takes one argument. That argument will
 * represent a single student object. The function will log the student's
 * favoriteColor.
 */
function userStudentColor(special) {
    console.log(special.favoriteColor);
}
/**
 * 4. Put both students created in Step 1 into an array called students.
 */
var students = [erik, charlie];
/***** SWITCH PROGRAMMERS *****/

/**
 * 5. Loop over the students array and invoke both functions from Step 2 and
 * Step 3. You should see console logs for each students firstName and favoriteColor.
 */
for (var i = 0; i < students.length; i++) {
    // console.log("student object : "+students[i]);
    userStudentName(students[i]);
    userStudentColor(students[i]);
}

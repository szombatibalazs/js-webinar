/**
 * The function returns the grade (1-5) of the student,
 * based on the score and the following rules:
 *  - 90 -    : 5
 *  - 80 - 89 : 4
 *  - 70 - 79 : 3
 *  - 60 - 69 : 2
 *  -    - 59 : 1
 *
 * @param {number} score (0 <= score <= 100)
 * @returns {number} grade or 0 if any arguments are not proper
 */
function grade(score) {
    let gradeOfStudent;
    /*
     * Your task is to calculate the grade of the student
     * based on his/her score which can be found in the
     * score variable and those rules can be found in the
     * documentation of the function.
     * Store the grade in the gradeOfStudent variable.
     * Also take into consideration the documentation of the function!
     */
    // PLACE YOUR CODE BETWEEN THIS...
    /*
    if (score < 60 && score >= 0) {
        gradeOfStudent = 1;
    } else if (score < 70 && score >= 60) {
        gradeOfStudent = 2;
    } else if (score < 80 && score >= 70) {
        gradeOfStudent = 3;
    } else if (score < 90 && score >= 80) {
        gradeOfStudent = 4;
    } else if (score >= 90 && score <= 100) {
        gradeOfStudent = 5;
    } else {
        gradeOfStudent = 0;
    }
    */
    gradeOfStudent = (0 <= score && score <= 100) ? (score >= 90) ? 5 : (score >= 80) ? 4 : (score >=70) ? 3 : (score >= 60) ? 2 : 1 : 0;
    //gradeOfStudent = (0 <= score && score <= 100) ? Math.min(Math.max(Math.ceil((score-49)/10), 1), 5) : 0;
    // ...AND THIS COMMENT LINE!
    return gradeOfStudent;
}
module.exports = grade;
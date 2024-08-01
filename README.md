# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


Technologies Used:

Backend: Laravel 11

Frontend: React

Styling: Bootstrap

Authentication: Laravel Breeze

Database: MySQL

API Testing: Thunder


1. Admin Documentation

1.1 Introduction
This system is designed for cohort management by providing a platform for tracking applications, managing surveys, and displaying rounds data.

1.2 Getting Started
Cohorts: View and edit cohorts or see all entities related to the cohort as surveys and rounds, like in the following example
Rounds: Access applicants’ application for round1,2 to view, edit or delete it.
Surveys:  Access applicants’ application for surveys to view, edit or delete it.

1.3 User Roles and Permissions
Admin: Full access to all features.
applicants: fill round1, round2 and surveys forms

2. Developer Documentation
Project Overview
This system is designed for cohort management by providing a platform for tracking applications, managing surveys, and displaying rounds data.
CRUD “database project” research before starting the project
“Accessible for Skaipalms team only”
Backend: Laravel
Frontend: React
System analysis
Functional requirements:
Cohorts: admin can view and edit cohorts or see all entities related to the cohort as surveys and rounds
Rounds: admin can ccess applicants’ application for round 1,2 to view, edit or delete it.
Surveys: admin can access applicants’ application for surveys to view, edit or delete it.
Non-Functional Requirements:
1. Performance
 Frontend components are built with React to provide a dynamic and responsive user interface
Each component is a separate page so only the code needed for the current page is loaded, therefore the overall performance of the application improves
“Lazy Loading”
while backend APIs are designed to return data efficiently, minimizing latency by: 
log Analysis: Review logs for slow queries or errors that may impact performance.
Review Query Performance: Analyze and optimize database queries to ensure they are efficient. Use database indexing, optimize query structures, and avoid unnecessary joins or complex subqueries.
Selective Data Fetching: only the necessary data is fetched and returned. Avoid sending large datasets if only a subset is needed.
2. Security
The system employs authentication and authorization mechanisms to ensure that only authorized users can access sensitive data. This includes the use of Laravel's built-in authentication features and secure password hashing “breeze library”
CSRF protections “Cross-Site Request Forgery is an attack that forces an end user to execute unwanted actions on a web application in which they're currently authenticated.”.
6. Maintainability
Documentation: technical documentation is provided for developers, including code comments, API documentation, 
Version Control: The use of version control systems (e.g., Git) ensures that changes are tracked and managed effectively, allowing for easy rollback and collaboration.
7. Data Integrity
Backup and Recovery: Regular backups are performed to protect against data loss, and recovery procedures are tested to ensure that data can be restored accurately in case of corruption or loss.
“Not found yet, but to be implemented later”

EERD

creating generalized classes or tables that encapsulate common attributes or behaviors, reduce redundancy and make the system easier to maintain. Any changes to the generalized entity need to be made in only one place.
Specialized classes or tables inherit from generalized ones, help in extending functionality without modifying the existing generalized structure. This promotes a clean and organized codebase.
Mapping



UI
Figma UI
https://www.figma.com/design/OQ8tk1X8eiQUgkoX9zixdn/Untitled?node-id=0-1&t=PyZyp57YslA9o5Tf-1
Implementation

Routes:

Route::get('/applicant/details/{id}', [ApplicantController::class, 'getApplicantDetails']);


Route::resource('cohorts', CohortController::class);
Route::resource('applicants', ApplicantController::class);
Route::resource('surveys', SurveyController::class);
Route::resource('followupSurvey', FollowupSurveyController::class);
Route::resource('onboardingSurvey', OnboardingSurveyController::class);
Route::resource('round1', Round1Controller::class);
Route::resource('round2', Round2Controller::class);
Route::resource('round3', Round3Controller::class);


Route::get('round1/getByCohort/{cohortId}', [Round1Controller::class, 'getByCohort']);
Route::get('round2/getByCohort/{cohortId}', [Round2Controller::class, 'getByCohort']);
Route::get('round3/getByCohort/{cohortId}', [Round3Controller::class, 'getByCohort']);
Route::get('followupSurvey/getByCohort/{cohortId}', [FollowupSurveyController::class, 'getByCohort']);
Route::get('onboardingSurvey/getByCohort/{cohortId}', [OnboardingSurveyController::class, 'getByCohort']);

getByCohort function example in round 1 controller:
public function getByCohort($cohortId)
{
    $round1s = Round1::with('applicant')->where('cohort_id', $cohortId)->get();
    return response()->json($round1s);
}

getApplicantDetails function in applicant controller:
public function getApplicantDetails($id)
{
    try {
        $applicant = Applicant::with('round1', 'round2', 'round3')->find($id);
        return response()->json($applicant);
    } catch (\Exception $e) {
        return response()->json(['message' => 'Error fetching applicant details'], 500);
    }
}


Future Work
automate the backup process to ensure regular and reliable backups of critical data.
Including more companies with Prex
Mobile responsiveness
technical documentation will be expanded to include detailed explanations of new features, updates
Perform regular security audits and vulnerability assessments to keep the application secure.
Let admins add comments for each applicant and his/her own final decision.
Add applicant’s data for previous cohorts.
Add charts for calculated percentage.
Enhance UI/UX
Make the code cleaner
Enhance the security
Making the system diagrams more consistent
Continues testing 


Contact
For any questions or feedback, please contact at maryammohamedauf@gmail.com

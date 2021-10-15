# Movie Quiz

Welcome to my second milestone project, which was developed in HTML, CSS, and JavaScript.

This is a movie quiz, created with the purpose of entertaining movie lovers while testing their knowledge. It was designed to be responsive on a wide range of devices, while also being easy to navigate though.

 ![website in several devices](https://user-images.githubusercontent.com/65717229/137511059-3b2ae671-5b3e-479f-96a0-bb79977e64c6.PNG)

## User Experience (UX)

The initial requirements for this project was to create a fun and interactive quiz that could be enjoyed for anyone who loves movies. As previously mentioned the main target are movie lovers,but also anyone who wants to have a bit of fun and learn more about movies. The users will pick one alternative and they will know if it is right or wrong straight away.There are 15 questions, and a single answer. A result’s board will appear at the end of the quiz.


## Features:

- Interactive quiz elements.
- A score counter for correct answers and incorrect ones, which allows users to check their score during the progress of the quiz.
- The user is not allowed to change options once pick one.
- Once clicked on the option, the user will know straight away if it was the correct choice and if not, which is the right option.
- A result's table which contains the number of correct and wrong answers, number of attempts, and the percentage of correct answers.
- If the user desires to quit the quiz, they just need to click on the 'Quit' button and they will be directed to the home page.
- After concluding the quiz, users can play it again or go to the home page.
 

## User Stories

### Website Goals
- The quiz needs to be easily accessible, with instructions of how it works.
- It needs to be easy to see how many questions there are, and how many correct answers have been made throughout the quiz.
- It needs to be instantly engaging to encourage the user to play the game.
- Questions need to be randomised and drawn from a large bank of available questions.
- Questions can not be repeated with frequency.
- If desired, the user can leave the quiz at any moment.


### First Time Visitor 
- I want it to be easy to understand what to do.
- I want to know how many questions I have to answer.
- I want to be able to easily navigate throughout the site.
- I want to be able to play again if I want.
- I want to know the correct answers to the questions,if the wrong alternatibe was chosen.
- I want to know how many correct answers I get and how many wrong ones.


### Returning Visitor
- I want to be able to play the quiz with different questions.
- I want to be able to see the correct answer if I choose the wrong alternative.

### Strategy
The objective of this project is to create an interactive quiz.
### Goals
The goal of this website is to provide a positive user experience while testing their movie knowledge and learning a bit more about it. 
### Scope
The website is responsive, allowing people to interact with it on different devices.


## Design

### Color Scheme
 -  The colors used on the trivia were chosen based on the background image used.

 ![color scheme](https://user-images.githubusercontent.com/65717229/137541669-5385dc2b-81b4-4dea-bc60-c0b79b28d7cb.PNG)




### Typography
- A single style was used in the quiz. It was taken from Google fonts - [Montserrat.](https://fonts.google.com/specimen/Montserrat)

### Imagery

- A single image was used throughout the whole quiz. It was taken from [Pexels.](https://www.pexels.com) 

## Wireframe

The wireframe of the site was created initially using Balsamiq and it can be seen in the image below,and its mobile, tablet and desktop version.

![quiz-wireframe](https://user-images.githubusercontent.com/65717229/136571608-1a82f711-c175-4f57-bc3f-36506557ff4d.png)

## Technologies Used

### Languages Used

* [HTML](https://en.wikipedia.org/wiki/HTML)
* [CSS](https://en.wikipedia.org/wiki/CSS)
* [JavaScript](https://www.javascript.com/)


### Frameworks Libraries and Programs 

* [Balsamiq](https://balsamiq.com/)
    * As previously mentioned it was used to create the wireframes during the design process.

* Google DevTools:
    * It was used to help me find what code correlated to what feature.

*  [FontAwesome](https://fontawesome.com/)
    * Font Awesome was used on all pages to add the instructions, home, settings and copyright icons.

## Testing

### HTML  
* [W3C Markup Validator](https://validator.w3.org/)

### CSS
* [W3C CSS Validator](https://validator.w3.org/)

### JavaScript
* [Jshint](https://jshint.com/)


### Testing User Stories from User Experience (UX)

* User Goals

1. As a User, I want to easily understand how the quiz works.
    - Once the site is loaded, the user is presented with the instructions of how the quiz works.

    ![rules](https://user-images.githubusercontent.com/65717229/137541783-420d019c-f686-4221-8f34-cd7e0fc9f990.PNG)

2. As a User, I want to easily understand how to start the quiz.
    - Once the site is loaded, a "Start" button is presented to the user.

    ![start](https://user-images.githubusercontent.com/65717229/137541827-b5637f77-40cb-4ea0-848a-97c08e4369f2.PNG)

3. As a User, I want to be able to quit the quiz at any given moment.
    - While playing, a "quit" button is available to the user, located on the left side of the "Next bottom". It will direct the user to the home page, where they can leave the site or start the quiz again.

    ![quit](https://user-images.githubusercontent.com/65717229/137541917-3a6838eb-3d31-4fad-b433-9fb6ec58e571.PNG)


4. As a user, I want to be able to see the questions.
    - Once the user press the start button the questions are displayed.
     ![questions_displayed](https://user-images.githubusercontent.com/65717229/137543282-fa008bec-3890-4ad1-b1ab-e9c2f5952a64.PNG)

5. As a User, I want to see how many more questions I have to answer.
    - On the left upper corner, the user can see how many questions were already answered and how many more until the end of the quiz.

    ![questions_counter](https://user-images.githubusercontent.com/65717229/137543321-f9e1376c-1b5b-47e6-b3ed-c0060d49eead.PNG)

6. As a User, I want to know the correct answer of a question, if they got it wrong.
    - Straight after choosing an option, the user will know if it was correct or not. The correct answer is marked in green and the wrong one in red.

    ![answer-correct](https://user-images.githubusercontent.com/65717229/137543369-8d9bf6c6-24d5-4695-adae-b5e5a5a8fc6e.PNG)

    ![answer-wrong](https://user-images.githubusercontent.com/65717229/137543749-e9500f96-eb81-4459-8a7e-a761dffadeda.PNG)

7. As a User, I want to have a notion of how I am doing so far.
    - On the bottom of the quiz page, users can track their progress in the game up to that point.

    ![progress](https://user-images.githubusercontent.com/65717229/137543549-ae753064-285e-46b4-9abf-ff9f5d1e30ca.png)    

8. As a User, I want to have access to my score.
    - The user has access to the current score. Below the "Quit" and "Next" button, the user can see his/her progress, how many correct and incorrect answers so far. At the end of the quiz, the user will have a summary of it all. How many correct, incorrect, percentage and number of attempts.

    ![score](https://user-images.githubusercontent.com/65717229/137543599-d6a512b7-1ef7-4b22-a436-63269b1cd96a.PNG)    

9. As a user, I want to be able to replay the game.
    - The user can restart the quiz upon a loss or a victory by pressing the "Try again" available on the "Quiz results" page.

    ![replay](https://user-images.githubusercontent.com/65717229/137543624-a1b9f0a5-bcc0-4c05-9907-eaca120fc174.PNG)

## Further Testing
* The project was tested on the following browsers: Google Chrome, Internet Explorer, Microsoft Edge, and Safari. It was designed to be responsive to many different devices: mobile, tablet and desktop.

## Bugs/errors

- I had to create a function to prevent users from changing their answer, once one of the alternatives were already selected. 
- I had a bit of trouble in the beginning with the “Try Again” button, since it was not starting the quiz from the very start. 


## Performance

To measure the performance Web Dev was used, and the results can be seen in the image below:

![performance](https://user-images.githubusercontent.com/65717229/133129123-3f1a4785-d367-4f8d-a125-3021a86009d7.PNG)


## Deployment

### Publishing to GitHub Pages

To deploy my website to GitHub Pages, the following steps were taken:

* To deploy my website to GitHub Pages, the following steps were taken:
* A local project was created in GitHub with a new repository called 'Movie quiz'
* The project had regular push and detailed commits which were pushed to the GitHub website before deployment
* The project was deployed by logging in to GitHub and locating the [GitHub Repository](https://github.com/biareiam/movie)
* At the top of the Repository (not top of page), locate the "Settings" Button on the menu and click
* Scroll down the Settings page until the "GitHub Pages" Section was found
* Under "Source", click the dropdown called "None" and select "Master Branch"
* The page will refresh and you will be brought back to the top of the settings page
* Scroll back down through the page to locate the now published site [link](https://biareiam.github.io/movie/) in the "GitHub Pages" section
* The code can be run locally through clone or download, you can do this by opening the repository, clicking on the code button and then selecting either 'clone' or 'download'
* The Clone option provides a url, which you can use on your desktop IDE

## Credits

### Code

* [FontAwesome](https://fontawesome.com/): Library of icons used for social media and download links.
* CSS Tricks: The base code for the progress bar during the quiz.
* Youtube and Google: Many different videos and articles helped me to complete this project:
    * Videos:
        * [How to Make a Quiz App using HTML CSS Javascript - Vanilla Javascript Project](https://www.youtube.com/watch?v=f4fB9Xg2JEY&t=2439s)
        * [Build A Quiz App With JavaScript](https://www.youtube.com/watch?v=riDzcEQbX6k)
        * [QUIZ with JavaScript | The Ultimate Guide](https://www.youtube.com/watch?v=MxrGPP4F8Sc&t=3352s)
        * [Create Quiz Web App using HTML CSS and JavaScript | Quiz App JavaScript](https://www.youtube.com/watch?v=WHHYz8rZmDU)

    * Websites:
        * [How to Make a Simple JavaScript Quiz](https://www.sitepoint.com/simple-javascript-quiz/)
        * [Create a Quiz App with Timer using HTML CSS & JavaScript](https://dev.to/codingnepal/create-a-quiz-app-with-timer-using-html-css-javascript-55lf)
        * [Building a Simple Quiz with HTML, CSS and JavaScript](https://dev.to/sulaimonolaniran/building-a-simple-quiz-with-html-css-and-javascript-4elp)
        * [Building a Quiz App in JavaScript](https://levelup.gitconnected.com/building-a-quiz-app-in-javascript-b3f7d596855b)
        * [How to make a simple JavaScript quiz](https://simplestepscode.com/javascript-quiz-tutorial/)

### Content
 
 * The background image as mentioned is from [Pexels.](https://www.pexels.com) 
 * The questions were gather from many different sources:

    - [Can you get over 35/40 in this ultimate '90s movie quiz?](https://www.joe.ie/movies-tv/can-you-get-over-3540-in-this-ultimate-90s-movie-quiz-542826)

    - [100 Fun Movie Trivia Questions (With Answers) to Stump All Your Film-Loving Friends](https://parade.com/977752/samuelmurrian/movie-trivia/)

    - [Movie Lovers Unite: Take These 23 Quizzes If You Absolutely Love Film](https://www.buzzfeed.com/jamiespain/quizzes-to-take-if-you-just-love-movies)

    - [30 movie quiz questions to test your general knowledge](https://www.cambridge-news.co.uk/news/uk-world-news/movie-quiz-questions-test-answers-18135180)


## Acknowledgements

I appreciate the support, feedback and guidance of the following people throughout this project: my mentor Victor Miclovich the tutors and the community on slack.

This is for educational use.

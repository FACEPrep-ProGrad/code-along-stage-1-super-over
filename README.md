![Image description](https://i1.faceprep.in/ProGrad/face-logo-resized.png)

# ProGrad Lab | HTML - ProGrad Premier League Superover

## Learning Goals

In this exercise, the goal is to apply as many as possible of the concepts you've just learned:

- when and how to use different HTML tags,
- how to structure HTML page and add the content to it using _block and inline elements_,

## Getting started

1. [Fork](https://github.com/FACEPrep-ProGrad/project-builder-html-css-npm) this repo
2. [Clone](https://github.com/FACEPrep-ProGrad/project-builder-html-css-npm) this repo

Whenever you create a first significant change, you should make your first commit.

3. Follow these [guidelines to add, commit and push changes](https://github.com/FACEPrep-ProGrad/general-guidelines-labs-project-builders.git).

In the end of this document, you will find guidelines on how to submit the exercise.


## Instructions

### Introduction

In this exercise, you will build the landing page of the **Super Over**. Super over is a super cool cricket game, where each team compete with each other in one over combat. Each team will get to play 6 balls and the team which scores maximum runs wins the game. You already have all the assets for this version in the images folder as well as the necessary text in the `index.html`.

Our goal is to get as close as possible to this:
**LANDING PAGE**
![](https://i1.faceprep.in/ProGrad/ipl-1.png)
![](https://i1.faceprep.in/ProGrad/ipl-2.png)
**GAME PAGE**
![](https://i1.faceprep.in/ProGrad/ipl-3.png)



Although it doesn't look too complicated, we will have to apply quite a few styles on our web page: set a background color on different elements, set a font weight (bold, normal), and position elements using our newly acquired skills in flexbox.

We will divide our work into two parts:

- part I - create a webpage with no styles, just add HTML and

So let's get started!

**The assets we provided contain the `index.html` file, as well as the `assets` folder with all the required images to successfully finish the exercise.**

### Part I - pure HTML (no styles applied)

It might seem like a joke, but this is our goal in this iteration:
![1]()


<br>

The very first step is deciding **how to structure the page and picking the correct _semantic_ tags**. In general, choosing the right tags will make your job easier in the next step when the time comes to do some styling.

Our recommendation is to try to keep it as simple as possible. Try to identify the different sections, and add `id`'s or `classes` to each `<div>`, `<section>`, `<ul>`, or `<header>` block elements to identify these elements. Here is suggested guideline but you might have something on your mind that is different from this - bring it up.

![]()

#### HTML 1 | `<nav>`

Your task in this iteration will be to create the `nav` and `header`, which are the first two elements of the page. As you can see on the image above, the first element inside the body is `nav`:


![]()

However, remember, on the image above styles are already applied so our final result won't be quite the same.

We could try to represent this part of the website with the following:

```html
  <!-- Navigation bar -->
    <nav>
        <ul>
            <li class="logo-text">
                <img class = "logo-img" src="./assets/Coding-icon.svg" alt=""/> </li>
            <li>
                <ul>
                    <li><a href="#teams" class="nav-link">TEAMS</a></li>
                    <li><a href="#fixtures" class="nav-link">FIXTURES</a></li>
                    <li><a href="#gameplay" class="nav-link">GAME PLAY</a></li>
                    <li><a href="#pointstable" class="nav-link">POINTS TABLE</a></li>
                    <!-- <li><a href="#contact" class="nav-link"></a></li> -->
                </ul>
            </li>
        </ul>
    </nav>
```

When done, you should get something similar to this:
![]()

You're ready to move to the next iteration. :raised_hands:

#### HTML 2 | `Header`

Take a look at the image with market HTML elements on it one more time, and you can see we have two sections below the header. Create `section` tags and give each of them `id`s so you can identify them quickly.

The content for each of these sections is already in the _index.html_ but you have to organize it properly making sure there are headings, paragraphs, divs, etc.

**All images can be found in your `assets` folder!**

You can see the final result on the gif at the beginning of this exercise.

```
   <header id="#teams">
       <div>
        <article>
            <img src="./assets/csk.png" alt=""/>
            <h4> Chennai Super Kings</h4>
        </article>
        <article>
            <img src="./assets/MI.png" alt=""/>
            <h4> Mumbai Indians</h4>
        </article>
        <article>
            <img src="./assets/Delhi.png" alt=""/>
            <h4> Delhi Daredevils</h4>
        </article>
        <article>
            <img src="./assets/KKR.png" alt=""/>
            <h4> Delhi Daredevils</h4>
        </article>
        <article>
            <img src="./assets/KXI.png" alt=""/>
            <h4> Delhi Daredevils</h4>
        </article>
        <article>
            <img src="./assets/RCB.png" alt=""/>
            <h4> Delhi Daredevils</h4>
        </article>
       </div>
   </header>
```

#### HTML 3 | `Section - Fixtures`


```
    <div>
        <a name="schedule"></a>
        <div>
            <div>
                <div>
                    <img src="./assets/csk.png" alt="CSK">
                </div>
                <h3>VS</h3>
                <div>
                    <img src="./assets/KKR.png" alt="KKR">
                </div>
            </div>
            <div>
                <div>
                    <img src="./assets/Delhi.png" alt="DD">
                </div>
                <h3>VS</h3>
                <div>
                    <img src="./assets/KXI.png" alt="KXI">
                </div>
            </div>
            <div>
                <div>
                    <img src="./assets/RCB.png" alt="RCB">
                </div>
                <h3>VS</h3>
                <div>
                    <img src="./assets/RR.png" alt="RCB">
                </div>
            </div>
            <div>
                <div>
                    <img src="./assets/SRH.png" alt="SHR">
                </div>
                <h3>VS</h3>
                <div>
                    <img src="./assets/MI.png" alt="MI">
                </div>
            </div>
        </div>
        <div>
            <div>
                <div>
                    <img src="./assets/csk.png" alt="CSK">
                </div>
                <h3>VS</h3>
                <div>
                    <img src="./assets/KXI.png" alt="KXI">
                </div>
            </div>
            <div>
                <div>
                    <img src="./assets/RCB.png" alt="RCB">
                </div>
                <h3>VS</h3>
                <div>
                    <img src="./assets/MI.png" alt="MI">
                </div>
            </div>
        </div>
        <div>
            <div>
                <div>
                    <img src="./assets/csk.png" alt="CSK">
                </div>
                <h3>VS</h3>
                <div>
                    <img src="./assets/MI.png" alt="MI">
                </div>
            </div>
        </div>
    </div>
    </section>
```



## Submission

If you didn't [add, commit and push the changes](https://github.com/FACEPrep-ProGrad/project-builder-html-css-npm) you made, this is the last call. :smile:

Your TAs will check up your work and provide feedback.


## Summary

In this exercise, you've built the complete structure of the super over game page. If you managed to make it look anything like the original, good job! :trophy:

This concludes the HTML module. We are proud of you!

Happy Coding ProGrad ❤️!

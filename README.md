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

![]()
![]()



Although it doesn't look too complicated, we will have to apply quite a few styles on our web page: set a background color on different elements, set a font weight (bold, normal), and position elements using our newly acquired skills in flexbox.

We will divide our work into two parts:

- part I - create a webpage with no styles, just add HTML and
- part II - add styles and make it perfect. 🎨

So let's get started!

**The assets we provided contain the `index.html` file, as well as the `assets` folder with all the required images to successfully finish the exercise.**

### Part I - pure HTML (no styles applied)

It might seem like a joke, but this is our goal in this iteration:
![1](https://i1kdng.bn.files.1drv.com/y4mNhLR86qK3PsPFg7f51D4Vc1mzvfjOIc4-6LNPiLUsORsznxV8nkFQgn9gOIZUBkgATeoNuYoI247klDZfbl7WQrME1t9_X2oWAkFPtwBkpFvvVCyBelDiHXLTiOEQlDMSV18xBM19mBFut-3cUWcNIiiDJg_4lqwAkoEzbynUHCB4xz0_4rNLX-ui2wb0-266ezsQ4FUHbWfc-Wvcq3iGg?width=1343&height=491&cropmode=none)
![2](https://i1kcng.bn.files.1drv.com/y4mZLUmausPXprCemTmSplK2STDZ_9F9QLwlMjf1Goa_3-2E7Twmoq2KU3UZnkU41oNtwwCgc6M-XP9EN-VldKnhMk6JbTfjzCqEyDDlJJQXA-EjwMXCMdaykK33pyQN-JCMLCuWGV8G5dAOMgOrc8b7dNNi1x9SL2K5CsD0pd2wxKvFxYgy4oqNF-vjd8rc9LNLXkLojMmBY5xBOMiYNfJ-w?width=1344&height=488&cropmode=none)
![3](https://i1kbng.bn.files.1drv.com/y4m_3jtSZwNm-cZcIZUTm1Y90TKsw6f--R3mvP5j4W8Z6GuQKvQnsi_oj6-uMp1w1PKsCYdbQopA3YkGXZ_bGo8jyKyh07nEQUnM9u8U4sxAOblLMWuadvlypIBQDPqBgNe_vuJ1WoS8mxBGrxCXBk71BE1ERnQqrn9eMCTrqJbZHEp32Qt6v0KNYIS7p4YUGX-TjFTH33UblvkTNEE-YZ7Ng?width=1338&height=547&cropmode=none)
![4](https://i1jqng.bn.files.1drv.com/y4ml_gCvvuYXIaaGT-jngL180WPSzfrTSg43XMSaS0vTy8zOGEcZ_x5BzkoCr8yz_e_uz-j-OZBHou2ceuuiNTGkRBtqxKvQR-9uBGeODt2fEascv1o1WpadBLFrS1QQlG0EXOPanZdYRJa5yDi8clM3IEijaZLz-7jE15QlQd3i6JjmBj0Vc8hSUBirVUgb6YrgzAWxproeMPt_4pLA2f0wg?width=1339&height=552&cropmode=none)
![5](https://i1kang.bn.files.1drv.com/y4mpgL4exBVWIgP4nEuJ3bpIe3RbVnuDWzPBRBt5IgRaWo3EXpPoY670NM4wcZJ2AsJ2kxJk6YfpndQquA4tKFA40_xW6MFloshnWt1EydtTuUk95oSPtvrJEuMD3TtA-zZPYoXMUC3AKJ0v02kIeIwgjwjWxEhXfDTDrGC6-NgE1ut4QF-PIxNRWuQAMmWL4NvoHL38HlVESTvb48rJSUeyg?width=1344&height=537&cropmode=none)
![6](https://i1jpng.bn.files.1drv.com/y4mezIZPz_zc4jHIdoRDRsniEGSUi6RTTTbqqZyfSBmjph_U9ftEBXLMzrgUedCRjL76UUManma21bKYcElIXgNGMrHgwBQl1wOmDAxbJqTaWqVi9qc-Q5cj8MexHSuSoLde1sy1bbN_y-vRPyYQvX1EWBg0fKYH1GAJHD4HTTsGqEEvOF-eSDnySbYLgc-A-fvorzbdziuCmAwwOLk5TtlsQ?width=1340&height=80&cropmode=none)
![7](https://i1j9ng.bn.files.1drv.com/y4mB8Bx0gYxhCox8JyGghX7-MzYkdvRHh2UdIkW1gRHmDIwkxfXY-YEPI7dBTs0DILfAXwk0R1nqcfHpSe33oHbl663hvs_F-gAvJF7J-Fa9md7uCVuCctczLJVizapigJ4SpX0iwEpCB4fOiwI5K7R6OcPWHLsvzWKyv5r5k7slFJNtMPNFhqh61PGYjVClrU1lq1jOG6N_ny9GR_rBwoXIA?width=1337&height=503&cropmode=none)
![8](https://i1j8ng.bn.files.1drv.com/y4mkGXi4GNyy3EgwMVCR-d8d5bhraTuruUDYtCfQqjmuPE1zB1-rrKxlYJs1eSdQVyM-6tMinofZlXF0QpCsLIGj-P1QmIGBAF-A2n-u6tL6K3pW6J0UnmRkglmpRvZuqs5sKWlDrecRz7K7fJqgGDeb3b6SQrhzlZjVaV5x9bWOPw6U61ENCvQJxtVREO-5D-D7c4sG_ael_2572-Y3mDjmw?width=1344&height=451&cropmode=none)

<br>

The very first step is deciding **how to structure the page and picking the correct _semantic_ tags**. In general, choosing the right tags will make your job easier in the next step when the time comes to do some styling.

Our recommendation is to try to keep it as simple as possible. Try to identify the different sections, and add `id`'s or `classes` to each `<div>`, `<section>`, `<ul>`, or `<header>` block elements to identify these elements. Here is suggested guideline but you might have something on your mind that is different from this - bring it up.

![]()

#### HTML 1 | `<header>` & `<nav>`

Your task in this iteration will be to create the `header` and `nav`, which are the first two elements of the page. As you can see on the image above, the first element inside the body is `header` and it is composed of two divs:

- the upper div contains another div with image and some text, and besides this, it has _nav_ tag with list displayed horizontally
- the bottom div has the logo, search bar (which is _form_) and some buttons all the way left.

![](https://ilkcng.bn.files.1drv.com/y4m6QVvhtgzJoBCQ_KtAAWCPb_LBNNGHx924XIQUp6wk5kQ8DNgHo68ZbufSvpjbzNmfA4b8P867jMXXYNJgHGZ12zF_vhB1YG-qPwZY3hwL3mVFhyZvAUa-fQCDihA8F3SfLnNXAljiZ-vEWbNr-hOL4IPee5ZJR2hkZTVKtFHkSdjNiDFjrwOJ_NyxaFBCOwuO7ThXvcsjY970QI-6HMFAg?width=1343&height=231&cropmode=none)

However, remember, on the image above styles are already applied so our final result won't be quite the same.

We could try to represent this part of the website with the following:

```html
<header>
  <div>
    <div>
      <img class="blackHeart" src="LINK TO IMAGE GOES HERE" alt="black heart" />
      <span> Nifty Penguin Magic </span>
    </div>
    <nav>
      <ul>
        <li><a href="#"> npm Enterprise </a></li>
        <li><a href="#"> Products </a></li>
        <li><a href="#"> Solutions </a></li>
        <li><a href="#"> Resources </a></li>
        <li><a href="#"> Docs </a></li>
        <li><a href="#"> Support </a></li>
      </ul>
    </nav>
  </div>

  <div>
    <!-- add logo, search bar and buttons (or links and style them as buttons later) -->
  </div>
</header>
```

When done, you should get something similar to this:
![](https://i1kkng.bn.files.1drv.com/y4my_WhrKPkpsURXdy9QfwVr2njh8zEP14MIQQggSlq1gLZeQaDOETtYucGikE25Z0JXub4KrrC4uKCHd0smND3068teDNY5zDKgM59saRN04xQd1e-aFKgUy9Lh9xPXZsiD9sketHzoMTbGljGaxqBT9D51Oeea_4z705FjXeL4cOyybtfFlw1dPk4SeBT1WWlGJ10grhhfSPtdVi8eYmRig?width=1416&height=1126&cropmode=none)

You're ready to move to the next iteration. :raised_hands:

#### HTML 2 | Content Sections

Take a look at the image with market HTML elements on it one more time, and you can see we have three sections below the header. Create `section` tags and give each of them `id`s so you can identify them quickly.

The content for each of these sections is already in the _index.html_ but you have to organize it properly making sure there are headings, paragraphs, divs, etc.

**All images can be found in your `images` folder!**

You can see the final result on the gif at the beginning of this exercise.

The time has come! Let's add some styles and make it pretty! :nail_care:


## Submission

If you didn't [add, commit and push the changes](https://github.com/FACEPrep-ProGrad/project-builder-html-css-npm) you made, this is the last call. :smile:

Your TAs will check up your work and provide feedback.


## Summary

In this exercise, you've built the complete structure of the super over game page. If you managed to make it look anything like the original, good job! :trophy:

This concludes the HTML module. We are proud of you!

Happy Coding ProGrad ❤️!

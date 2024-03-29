# ArtBadge

We have created an app called Art Badge. The app allows users to find emergency food. We are building Hope as our Tech for Better Project for [Founders & Coders FAC26](https://github.com/fac26).

Contributors [Laura Keating](https://github.com/LauraK0), [Niete Ratilal](https://github.com/Psydwinder), [Dominic Simpson](https://github.com/DominicSimpson), [Gal K Jones](https://github.com/GalKJ)

## Introduction

<details>

#### What are you building?

A web app that allows users to 'collect' and rate artworks they've seen in-person. Users can upload WHERE they've seen the artwork, RATE that experience of seeing the artwork, and BUILD a personal database on what they've seen for others to compare.

#### Why are you building it?

Seeing artworks digitally rarely compares to the experience of seeing them in context and person. Your experiences of artworks may change depending on exhibition-context, location, or simply down to 'real-life expectations'.

The aim is to get more people to see more artwork, and to encourage them to share their experiences of seeing art in-person. 

</details>

## Project Scope

<details>

#### What are you not building?

We are not building a React Native app, an online database of art works, a general social network app and we're not building a site for galleries to advetise new exhibitions.

#### How did you decide what features were important?

We conducted user research and usability testing. Our users gave us valuable feedback which helped us refine our initial concept. In some instances that meant intergrating new features which we hadn't considered before and in other instances removing features that we had initialy thought essential.

</details>

## Project plan

<details>

#### How are you going to structure your sprints?

Based on user research from Design Week we created the user stories. We then created a Kanban board on GitHub to track our progress. We used the Kanban board to create a sprint plan for each week of the project. For our first sprint we prioritised a working product skeleton and setting up our testing library.

For our second sprint we will prioritise the user stories that would allow users to sign-up(sign-in & sign-out) to upload reviews of artworks and allow users to view other users' reviews of artworks.

#### What order are you going to build in?

Our tech stack includes:

- React
- Next.js
- Supabase for authentication (& database)
- Cypress for testing
- Airtable(? for database)

#### How did user research inform your plan?

We conducted user research and usability testing. Our users gave us valuable feedback which helped us refine our initial concept.

Some valuable feedback included:

- simplify routes meaning removing the number of clicks needed to complete a user storey
- adding more quick links to the navbar.
- changing scrolling on feed to up/down rather than left/right
- Making the rating process more interactive/fun

In some instances that meant intergrating new features which we hadn't considered before and in other instances removing features that we had initialy thought essential.

Some new features included:

- Search option would be useful to look for specific art, artist, location
- creating a sense of achievement at end of photo upload
- A social share button that allows you to share your work or badges with your friends
- A ranking list of the number of galleries, posts etc to help encourage people to post more

</details>

## Requirement analysis

<details>

#### How will you ensure your project is accessible to as many users as possible?

We will ensure our project is accessible to as many users as possible by:

- ensuring our app is responsive
- using lighthouse feature to check accessibility
- using a colour contrast checker to ensure our colour scheme is accessible
- using semantic HTML to ensure our app is accessible to screen readers

#### Are there any legal or regulatory requirements you should consider?

</details>

## Project learnings

<details>

#### Did your team work effectively?

Clear communication when creating Kanban board made us more effective at meeting tasks and completing them, timeboxing tasks enabled us to laser focus and not fall down rabbit holes, pair programming ment we could rely on one another when hitting challenges.      

#### What would you do differently next time?

Ask for help earlier rather then struggle by ourselves and make best use of mentors and help and soloutions. Read documentation more thourougly before starting work rather than being put off by it's dense and sometimes messy nature.   

</details>

## Research and findings

<details>

#### What did you find out from user testing?

The homepage received mixed feedback regarding the visibility of certain features such as the question mark and 'Explore' button. The 'Reflect' wording was also found to be confusing. Users requested a direct upload option and a clearer distinction between other users' uploads and their own. The navigation bar's address book icon was unclear, and a friends list was requested. The art card number was unclear, and users suggested using a star rating system. The form could benefit from text instructions, fewer steps, and a sense of achievement at the end. New features requested include a news feed, gallery deals, top-rated photos, and a ranking list. Users also requested icons instead of wording and social share buttons. The app's contrast and colors need to be improved.

</details>

## Project outcomes

<details>

#### Were your assumptions right or wrong?

</details>

## Recommendations and conclusions

<details>

#### What features would you prioritise to build next?

#### Was the project a success?

</details>

## Software Development Lifecycle stages

### Planning

<details>

#### What roles did your team take on?

`Explain the roles and responsibilities of all people working within the software development lifecycle, and how they relate to the project (K2)`

#### Did these roles help your team work effectively?

`Outline how teams work effectively to produce software and how to contribute appropriately (K6) Compare and contrast the requirements of a software development team, and how they would ensure that each member (including themselves) were able to make a contribution (K6)`

</details>

### Analysis

<details>

#### What might be the intended and unintended consequences of building this product?

</details>

### Design

<details>

#### How did you plan a user experience?

- We started by building the first iteration of a clickable figma protoype, which we took to users for their feedback. This not only allowed us to take on board features they would like to have implemented but also gave us a chance to see how they navigate through the website and what elements drew their attention the most. 
    
Using this as a starting point and being selective with the user feedback we took on board. We continued to refine the clickabe figma prototype to the point where it was simplified enough to go to the build stage. We also kept testing the user journey through the app by using the prototype to see how navigating between pages would work. To solidify our findings we also got various members of our family and friends to test the prototype to see if they ahd additional feedback about navigation through the app.

#### What technical decisions did you make?
    
We decided to explore using Supabase as our back-end, rather than sticking with SQLite, which is what we have all worked on previously. This meant getting used to how Supabase works. 
We considered using React Native at the start, but abandoned this due to time constraints, as with employing Netlify for our database.     

#### Server-render vs client-render vs both
    
We used both server-rendering and client-rendering on this project. It was a full-stack, according with the use of Next.JS. 

#### Relational or non-relational or no DB
    
We used Supabase relational databases.

#### Self-hosted or platform-as-a-service

We used Vercel, a platform-as-a-service, for deployment.

#### Frontend first vs DB first

We originally focused on the Front end first because we wanted there to be a base 'skeleton' to work from and be confident that you could navigate between the pages needed for the project.

#### Did you create a technical specification?

For this project there was no need for a technical specification as this product was not being developed for a product owner.


</details>

### Implementation/Build

<details>

#### How did you ensure your code was good?

`Create logical and maintainable code to deliver project outcomes, explaining their choice of approach. (S1)`

#### What interesting technical problems did you have to solve?

`Outline and apply the rationale and use of algorithms, logic and data structures. (K9, S16)`

#### How did you debug issues that arose?

`Apply structured techniques to problem solving to identify and resolve issues and debug basic flaws in code (S7)`

</details>

### Test

#### How did you verify your project worked correctly?

- We used Cypress end-to-end testing to verify that our project functions correctly.

`Identify and create test scenarios which satisfy the project specification (S6)`

- We created two general tests replicating a user journey which takes them through our website, using Cypress Testing.
The first tested our Navigation Bar component, which is prominent throughout our site, and allows the user to navigate the app via icons.
In order to make the Cypress Testing work, we added `data-cy="[icon function]"` props to the original NavBar component, which the file in 
Cypress Testing could then target. 
The second test file verifies that the sign-in functionality is working correctly, including being able to validate any email and password passed in. This was only possible via adding the following data object in the `testData.json` file, in the `fixtures` sub-folder inside the `cypress` root folder. If this data object hadn't been added, each email and password would have to be hard-coded in. 

```
{
    "email": "test@example.com",
    "password": "password"
  }
```

#### Did writing automated tests catch any bugs?

- Although not 'bugs' as such, there were conflicts in the package-lock.json file whenever we pulled down from the remote `main` branch to the
local `cypresstesting` branch, so as to have an up-to-date version of what was in the `main`. This is because the `main` branch had a lot of 
Supabase packages, as a result of downloading and installing Supabase, which had not featured in the `cypresstesting` branch. 
Meanwhile, the `main` branch did not have any Cypress Testing packages, but the `cypresstesting` branch did, as a result of downloading 
and installing Cypress Testing. The two appeared to clash, though Git allowed a combination.
Initially, we dealt with the conflicts by indeed accepting a combination of both packages in the package-lock.json file of the `cypresstesting` branch, but
just befeore merging what was in the `cypresstesting` branch to `main`, we deliberately deleted the package-lock.json file in the `cypresstesting`. 
This ensured thatt there was no chance of 'contagion' from the package-lock.json files in the `cypresstesting` branch affecting the `main` branch, 
which could make the app not work. Then, once we had merged to main, we then did an `npm install` into the Cypress testing, to get the package-lock.json
back.

`Analyse unit testing results and review the outcomes, correcting errors. (S4)`

E2E (end-to-end) unit testing results are of great help to identify and solve the issues. Cypress Testing allows both e2e testing and component testing; 
the former tests all elements and components on a page, while the latter can iteratively test an individual component on a page, in isolation from 
everything else on that page. 
In the limited time that we had, we did not have a chance to try out component testing, only e2e testing.

</details>

### Deploy

<details>

#### Where/how did you deploy your application?

`Review and justify their contribution to building, managing and deploying code into the relevant environment in accordance with the project specification (S10)`

#### What problems did you encounter during deployment?

</details>

### Maintain

<details>

#### Is it easy for someone make changes to the codebase?

#### Could a new person quickly be onboarded to contribute?

`
Establishes a logical thinking approach to areas of work which require valid reasoning and/or justified decision making (B2)

Describes how they have maintained a productive, professional and secure working environment throughout the project activity (B3)
`

</details>

## Deployment

Please follow this link to our [deployed site](https://week7-9-artbadge.vercel.app)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Clone Repo

Please `clone` this repo to your local machine

Please run `npm install` to install all dependencies

Please run `npm run dev` to run the app

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Built With

    React - JavaScript library

    Next.JS - Framework

    VsCode - The code editor used

    Vercel - The deployment platform used

## Design

We used Miro and Figma to record our user research and usability testing.

[Miro board](https://miro.com/app/board/uXjVPkoAI88=/)

[Figma board](https://www.figma.com/file/wVdBFVqoaLtPQPA0bq4ZY3/Untitled?node-id=0%3A1&t=eSBWnVZF4j4wmwCg-0)

[Figma clickable prototype](https://www.figma.com/proto/wVdBFVqoaLtPQPA0bq4ZY3/Untitled?node-id=51%3A448&scaling=scale-down&page-id=0%3A1&starting-point-node-id=51%3A448)

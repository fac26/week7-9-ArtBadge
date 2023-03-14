# ArtBadge

We have created an app called Art Badge. The app allows users to upload reviews of pieces of art and share them with other users of the app. We are building ArtBadge as our final project for [Founders & Coders FAC26](https://github.com/fac26).

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

#### What technical decisions did you make?

#### Server-render vs client-render vs both

#### Relational or non-relational or no DB

#### Self-hosted or platform-as-a-service

#### Frontend first vs DB first

#### Did you create a technical specification?

`Review methods of software design with reference to functional/technical specifications and apply a justified approach to software development (K11, S11, S12)`

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

We used Cypress end-to-end testing to verify that our project functions correctly.

`Identify and create test scenarios which satisfy the project specification (S6)`

We created two general tests replicating a user journey which takes them through our website, using Cypress Testing.
The first tested our Navigation Bar component, which is prominent throughout our site, and allows the user to navigate the app via icons.
In order to make the Cypress Testing work, we added `data-cy="[icon function]"` props to the original NavBar component, which the file in 
Cypress Testing could then target. 





#### Did writing automated tests catch any bugs?

`Analyse unit testing results and review the outcomes, correcting errors. (S4)`

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

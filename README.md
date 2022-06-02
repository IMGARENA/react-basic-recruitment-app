# Prerequisites
This repository contains a code which you are supposed to work with. Please create a fork of this repo. As a result of your task please send us back a link to your github repository. While working with the code, please commit all changes to your repository, for us to check your progress.

# Application
Application is a simulation of a web application which displays data got from REST API. Within this task REST API will be mocked. Please use prepared services to retrieve data.

## Challenge
Your task is to adjust existing template of the application and apply all missing components and styles, that will match included designs (within `designs` directory). This task has 2 parts: 
1. required - part that has to be done
2. optional - if you have more time, it would be nice to see some parts done too

### Required
1. Dashboard page has to look exactly the same as design
   1. Each Card component should have a button, which will redirect user to appropriate page, eg. `Sports` should redirect to `/sports`, `Scheduling` should redirect to `/scheduling` (even if it will show an `Page not found 404`)
2. Top bar should look exactly the same
   1. Switch and Avatar can be only a plain components without any logic
3. Left navigation should look exactly the same
   1. Page `Dashboard` should redirect to `/`
   2. Page `Sports` should redirect to `/sports`
   3. Other pages should redirect to according pages eg. `Scheduling` should redirect to `/scheduling`. Content of the page can be `Page not found 404`, but url within browser should point to correct path
4. Sports page contains:
   1. Main title
   2. Teaser text
   3. Static table filled with data
      1. Icon does not have to do anything

### Optional
1. All pages except `dashboard` and `sports` should return a text within main page content, which will say: `This is [PAGE_NAME] page.`, where `[PAGE_NAME]` should be replaced with according name, eg. for scheduling it should  say: `This is scheduling page.`
2. Switching the theme mode from light to dark and other way round - adapt this logic for a `Switch` visible within Top Bar near user avatar.
3. Sports page
   1. Click on the icon should open container on the right side and fill it with details of the sport got from the service
   2. Click on button `Add sport` should open the same looking container filled with 2 text fields and 2 buttons:
      1. textfield: name - user can enter any text value
      2. textfield: location - user can enter any text value
      3. button: `Save` - when clicked, there should be shown `alert` with text `Submitting sport: [sport.name] with location: [sport.location]` and close the container
      4. button: `Cancel` - should close container and do not show `alert`
      5. The layout of this form is up to you - should be clean and usable

### Styles
For styling the application there is used a library [Material UI](https://mui.com/). 
Please use as many components that fits design as possible.
Please do not use `.css`/`.scss`/`.less` or any other preprocessor.

## How to run an application
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

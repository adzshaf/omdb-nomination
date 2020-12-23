# Shoppies OMDB Nomination

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Flow

At first, I didn't understand some of the technical requirements. I nearly skipped a little detail so I think it may be better to write them down.

Steps:
1. User clicks the website
2. There will be `The Shoppies` sign and search box.
3. User can type on search box and it will show search results based on what user types. Each result has at least title, year, and button `Nominate`.
4. User can click `Nominate` and it will be added to Nomination List. If it is already nominated, the `Nominate` button will be disabled.
5. User can remove one of nominated movie from nomination list.
6. When user has 5 nominations, show banner. 
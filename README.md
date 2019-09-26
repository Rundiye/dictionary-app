# Dictionary Management Application

<br>

## Description

Dictionary Management Application is used to manage dictionaries (a key/value mapping or something also called a synonim table).

### Setup

- Fork and clone this repository. [client-side](https://github.com/Rundiye/dictionary-app)
- Run the following commands:
```
cd dictionary-app
npm install
npm start
```

- Fork and clone [the server](https://github.com/Rundiye/dictionary-api) repository.
The data will be saved in the local Database (MongoDB).


### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### Requirements

The application must satisfy the following requirements: 
- Creating and deleting dictionaries 
- Showing available dictionaries in an overview 
- Editing dictionaries (adding, updating and removing rows) 
- Validating the entire dictionary regarding consistency
- Validations should be shown as some kind of problem markers next to the offending part of the dictionary. 
- Problem markers have different severities, e.g. a Duplicate Domains/Ranges problem is less severe than a Cycle (in which case you cannot go on processing such a dictionary).

### User stories
- **Create Dictionary** As a user I want to create a new dictionary and save it in the database.
- **List of Dictionaries** As a user I want to see all my dictionaries in a list.
- **Delete Dictionary** As a user I want to delete a dictionary from the list when I don't want it anymore.
- **Edit Dictionary** As a user I want to edit a dictionary's name.
- **Create Inputs** As a user I want to create a new dictionary input with `domain` and `range` values and save it in the database.
- **List of Inputs** As a user I want to see all the inputs of a dictionary in a list.
- **Delete Input** As a user I want to delete an input from the list when I don't want it anymore.
- **Edit Input** As a user I want to edit an input's domain or range value.

<br>


# Client / Frontend

## Routes (React App)
| Path                        | Component            | Permissions | Behavior                                                      |
| --------------------------- | -------------------- | ----------- | ------------------------------------------------------------- |
| `/`                         | Navbar           | public      | Home page                                                     |
| `/dictionaries`              | DictionaryList, AddDictionary          | public  | List of Dictionaries, link to a single dictionary, add dictionary |
| `/dictionaries/:id`               | DictionaryDetails, EditDictionary, AddDictionaryInput            | public  | Edit and delete dictionary, add, delete and edit inputs |
| 


## Components

- AddDictionary
- Dictionary
- DictionaryDetails
- DictionaryList
- EditDictionary
- AddDictionaryInput
- EditDictionaryInput


<br>


# Server / Backend


## Models

Dictionary model

```javascript
{
  itle: String,
  description: String,
  inputs: [{ type: Schema.Types.ObjectId, ref: 'Input' }]
}
```

Input model

```javascript
{
  domain: String,
  range: String,
  dictionary: { type: Schema.Types.ObjectId, ref: 'Dictionary' }
}
```



<br>


## API Endpoints (backend routes)

| HTTP Method | URL                           | Request Body                 | Success status | Error Status | Description                                                  |
| ----------- | ---------------------------------- | ----------------------- | -------------- | ------------ | ------------------------------------------------------------ |
| GET         | `/dictionaries   `                | {}           | 200            | 404          | Show all dictionaries           |
| POST        | `//dictionaries`                     | {title} | 201            | 404          | Create and save new dictionary |
| GET        | `/dictionaries/:id`                      | {id}    | 200            | 401          | Show a specific dictionary |
| PUT        | `/dictionaries/:id`                     | {id}                 | 204            | 400          | Edit a specific dictionary                                            |
| DELETE         | `/dictionaries/:id`                            |      {id}                   |                | 400          | Delete a specific dictionary                                        |
| GET         | `/dictionaries/:dictionaryId/inputs/:inputId`                          |             {id}            |                | 400          | Get a specific input                                        |
| POST        | `/inputs`                | {domain, range}                      | 201            | 400          | Create and save a new input                             |
| PUT         | `/api/inputs/:id`                      | {id}                    |                |              | Edit a specific input                                     |
| DELETE        | `/api/inputs/:id`          | {id}                      | 201            | 400          | Delete a specific input                             |
                              


<br>

### Git


[Client repository Link](https://github.com/Rundiye/dictionary-app)

[Server repository Link](https://github.com/Rundiye/dictionary-api)








Welcome to Base todo app!

This project is a template for a simple todo app.


### Usage

1. Clone this repository:

    `git clone https://github.com/ardeshirvalipoor/base-todo --recurse-submodules`
    and
    `cd base-todo`
    Note: to add the base project as a submodule to any project, use the following command:
    `git submodule add https://github.com/ardeshirvalipoor/base`


2. Install npm packages:

    ```
    cd www && npm install
    
    cd api && npm install
    
    cd app && npm install
    ```


3. Compile the project
    
    ```
    cd api && tsc
    cd app && rollup -c -w
    ```
4. Run the app
    ```
    cd www && node index
    // Or use nodemon
    ```
Enjoy!





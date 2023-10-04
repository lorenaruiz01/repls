# 2.3: Packages and Package Managers

## Module vs. Package
What’s the difference between modules and packages? Technically, they’re both the same thing: a separate piece of JavaScript code that achieves a specific purpose and can be imported into your app to add various functionalities. However, a package explicitly denotes a third party (or community-based) module. Once a developer has created a new module, they can release it to a repository where other developers can download and use it. The published module is referred to as a package, and it needs to be installed before it can be used in your app. 

## Package Managers

**Package managers** are a collection of tools used to install, update, and configure the packages in a Node project. 
    -  manages all of your packages and ensures they’re kept up-to-date so you don’t have to manually install and update them. This not only saves you a lot of time but also prevents issues that may arise in your app from out-of-date packages.

## Difference between Packages and Modules

### Modules 
A module is **anything** that can be loaded using the `require()` function. This may be:
    - A single JavaScript file
    - A folder that includes an “index.js” file
    - A folder that includes a “package.json” file (i.e., a package)

### Packages
A package must contain a “package.json” file. This may be:
    - A third party module (loaded as all modules are, with `require()`)
    - Published to the JavaScript Package Registry
    - A command line script. These can’t be loaded with `require()` (and, thus, aren’t actually modules)

**To sum it up, not all modules are packages, but most packages are modules.**
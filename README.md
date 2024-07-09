Restaurant Menu - Exploring Computer System Inputs and Outputs
============================================================

Overview
--------

In this exercise, we will explore different data input and outputs by creating a restaurant menu with multiple categories, items, and details. We will create prototypes, data inputs in YAML and Markdown, an API, and HTML versions of the menu.

Instructions
------------

### Create Prototypes

1. Create a paper prototype of the menu.
2. Create a prototype in Figma.

### Create Data Input in YAML

1. Create a YAML file containing the restaurant name, website, email, phone number, and menu items.
2. Use the YAML file to create an API.

### Create API

1. Create an HTTP API that serves a JSON file from the YAML file.
2. Use Express to create the API.
3. Use the yaml npm module to read the YAML file from disk.

### Create Markdown Version of Menu

1. Create a Markdown version of the menu.
2. Use VS Code to preview the Markdown.

### Create HTML Version of Menu

1. Create an HTML version of the Markdown menu.
2. Create a route in Express called /menu.
3. Use a markdown parser to display the HTML version of the menu.

### Create Root Route

1. Create a root route that displays a menu for the YAML file.
2. Use the JSON API to create an HTML menu for the restaurant.

### Create Client-Side HTML Screen

1. Use Handlebars or Template Strings and the vanilla DOM to create the HTML from the JSON input files.
2. Make sure the screen corresponds to the earlier Figma design.

### Add Support for Different Restaurants

1. Use the client-side location hash and the hashchange event to show different menu contents for different restaurants.


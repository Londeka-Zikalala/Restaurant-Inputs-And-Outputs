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

### Converted YAML data: 

# The Perfect Plate

## Contact Information
- **Email:** info@perfectplate.com
- **Phone:** +27 12 345 2388

## Menu

### Starters
- **Bruschetta** - R50.00  
  Grilled bread with fresh tomatoes and basil
- **Chicken Wings** - R70.00  
  Crispy fried chicken wings with a side of tangy sauce
- **Fried Calamari** - R60.00  
  Crispy fried squid rings served with a side of lemon aioli
- **Caprese Salad** - R55.00  
  Fresh mozzarella, tomato, and basil salad with a balsamic glaze
- **Meatballs** - R65.00  
  Homemade meatballs served in a rich tomato sauce

### Mains
- **Grilled Steak** - R180.00  
  Tender grilled steak served with a side of roasted vegetables
- **Pan-Seared Chicken** - R120.00  
  Juicy chicken breast seared to perfection and served with a side of mashed potatoes
- **Seafood Pasta** - R150.00  
  Fresh seafood tossed in a garlic and herb infused pasta
- **Burgers** - R90.00  
  Juicy beef or chicken burgers served with a side of fries
- **Vegetarian Lasagna** - R100.00  
  Layers of pasta, ricotta, and vegetables baked to perfection

### Drinks
- **Soft Drink** - R20.00  
  Various flavors of soft drinks available
- **Craft Beer** - R40.00  
  Selection of locally brewed craft beers
- **Wine** - R60.00  
  Various red, white, and sparkling wines available
- **Coffee** - R25.00  
  Espresso, cappuccino, or latte made from locally roasted beans
- **Fresh Juice** - R30.00  
  Various flavors of freshly squeezed juices available

### Desserts
- **Tiramisu** - R40.00  
  Ladyfingers soaked in coffee liqueur layered with mascarpone cheese
- **Cheesecake** - R45.00  
  Creamy cheesecake with a graham cracker crust and mixed berry compote
- **Chocolate Lava Cake** - R50.00  
  Warm chocolate cake oozing with chocolate sauce
- **Fruit Salad** - R35.00  
  Seasonal fruit salad served with a dollop of whipped cream
- **Brownies** - R30.00  
  Rich and fudgy brownies served with a scoop of vanilla ice cream

function menuRoutes(menuapi) {

        function getMenu(req, res) {
            try {
                // Call the menuAPI function to read the file and parse the JSON data
                let response = menuapi.readFile();
    
                if (response.success) {
                    let jsonData = response.data;
    
                    // Extract the menu object from the JSON data
                    let { menu, restaurant } = jsonData;
                    console.log(jsonData);
    
                    // Get data from the menu object
                    const title = restaurant.name;
                    const email = restaurant.email;
                    const contact = restaurant.phone;
                    const starters = menu.starters;
                    const mains = menu.mains;
                    const drinks = menu.drinks;
                    const desserts = menu.desserts;
    
                    res.render('index', {
                        title,
                        email,
                        contact,
                        starters,
                        mains,
                        drinks,
                        desserts
                    });
                } else {
                    res.status(500).json({
                        error: response.message
                    });
                }
            } catch (error) {
                console.log(error);
                // If an error occurs, return a 500 error response with a message
                res.status(500).json({
                    error: 'Failed to retrieve menu items'
                });
            }
        }
    return {
        getMenu
    }
}

export default  menuRoutes

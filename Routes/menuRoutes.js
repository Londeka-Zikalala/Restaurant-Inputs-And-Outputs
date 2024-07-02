function menuRoutes(menuAPI) {
    
    function getMenu(req, res) {
        try {
            //Call the menuAPI function to get the file path
            let filePath = menuAPI.getFile();
            //Call the menuAPI function to read the file and parse the JSON data
            const jsonData = menuAPI.readFile();

            //Extract the menu object from the JSON data
            const { menu } = jsonData;
            //Get data from the menu object
            const name = menu.name;
            const email = menu.email;
            const contact = menu.contact
            const starters = menu.starters;
            const mains = menu.mains;
            const drinks = menu.drinks;
            const desserts = menu.desserts;


            res.render('index',{
                name,
                email,
                contact,
                starters,
                mains,
                drinks,
                desserts
            });
        } catch (error) {

            //If an error occurs, return a 500 error response with a message
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

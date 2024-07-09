function MenuRoutes(menuAPI) {
    function getFilePath(req, res) {
        let filepath = req.params.filepath;
        let response = menuAPI.getFile(filepath)
        res.json(response)
       
        
    }
    function getMenu(req, res) {
        const filepath = req.params.filepath;
       
            if (!filepath) {
                res.status(400).json({ error: 'File path is required' });
                return;
              }
            try {
                
                 
                // Call the menuAPI function to read the file and parse the JSON data
                let response = menuAPI.readFile(filepath);
                
                if (response.success) {
                    let pageContent = response.data;
                    if (filepath.endsWith('.yaml') || filepath.endsWith('.yml')) {
                         // Extract the menu object from the data
                    let { menu, restaurant } = pageContent;
                    console.log(pageContent);
    
                    // Get data from the menu object
                    const title = restaurant.name;
                    const email = restaurant.email;
                    const contact = restaurant.phone;
                    const starters = menu.starters;
                    const mains = menu.mains;
                    const drinks = menu.drinks;
                    const desserts = menu.desserts;
                    
                    res.render('yaml', {
                        title,
                        email,
                        contact,
                        starters,
                        mains,
                        drinks,
                        desserts
                    });
                    }
                    else if (filepath.endsWith('.md')) {
                        let markdownContent = pageContent.content;
                        console.log(pageContent)
                        res.render('markdown', {content: markdownContent });
                    }
                    else {
                        res.status(500).json({
                            error: response.message
                        });
                    }
                }
                
            } catch (error) {
                console.log(error);
                // If an error occurs, return a 500 error response with a message
                res.status(500).json({
                    error: 'Failed to retrieve menu items'
                });
            }
    }
    function showIndex(req, res) {
        try {
            res.render('index')
        }catch(error){
            console.error(error)
        }
    }
    return {
        getMenu,
        getFilePath,
        showIndex
    }
}

export default  MenuRoutes

import fs from 'fs';
import yamljs from 'yamljs';

// Set the default YAML file path
// let yamlFile = "./restaurant_menu.yaml"

function MenuAPI(filePath) {
    //function to retrieve the file path
    function getFile() {
        return {
            success: true,
            message: 'File path retrieved successfully',
            data: filePath
          };

    } 
    
    function readFile() {
        try {
            // Read the file contents using fs.readFileSync
            const fileContent = fs.readFileSync(filePath, 'utf8');
            // Parse the YAML content using yamljs.parse
            const jsonData = yamljs.parse(fileContent);
            return {
              success: true,
              message: 'File read successfully',
              data: jsonData
            };
        } catch (error) {
            console.log(error)
            return {
              success: false,
              message: 'Error reading file: ' + error.message
            };
          }
      
    }

    return {
        getFile,
        readFile
    }
}

export default MenuAPI
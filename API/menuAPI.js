import fs from 'fs';
import yamljs from 'yamljs';
import markdown from 'markdown-it';

// Set the default YAML file path

function MenuAPI() {
    //function to retrieve the file path
    function getFile(filepath) {
        try {
            // let filepath = decodeURIComponent(req.params.filepath);
            console.log(filepath)
            return {
                success: true,
                message: 'File path retrieved successfully',
                data: filepath
            };
        } catch (error) {
            return {
                success: false,
                message: 'Error retrieving file path: ' + error.message
            };
        }
    }
    
    
    function readFile(filepath) {
        // let filepath = decodeURIComponent(req.params.filepath);
        try {
            // Read the file contents using fs.readFileSync
            let fileContent;
            let jsonData;
            // Parse the YAML and MD content using yamljs.parse and mdparse
            if (filepath.endsWith('.yaml') || filepath.endsWith('.yml')) {
                    fileContent = fs.readFileSync("./yml-files/" + filepath ,'utf8')
                jsonData = yamljs.parse(fileContent);
            } else if (filepath.endsWith('.md')) {
                fileContent = fs.readFileSync("./markdown-files/" + filepath , 'utf8')
                const md = new markdown();
                jsonData = { content: md.render(fileContent) };
            } else {
                throw new Error('Unsupported file');
            }
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
import fs from 'fs'

export function searchByFiles(filesPath, executer) {
    filesPath.forEach(filePath => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
              console.error(err);
              return;
            }
            executer(data, filePath)
          });
    });
}

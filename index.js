import art from 'ascii-art';
import { promises as fs } from 'fs';


art.font("Hello NodeJS", 'doom')
    .then((rendered) => {
        console.log(rendered);
    })
    .catch((err) => {
        console.error(err);
    });


const options = {encoding: 'utf8'};
try {
    const data = await fs.readFile('./saying.json', options)
    console.log(data)
} catch (error) {
    console.error(error);
}


import fs from 'fs';
// const filee = '../../data/ProfilsData.json';

export function readJson(fileName = '') {
    const content = fs.readFileSync(fileName, 'utf-8');
    return JSON.parse(content);
}

export function saveJson(fileName = '', json = {}) {
    fs.writeFileSync(fileName, JSON.stringify(json, null, 2));
}



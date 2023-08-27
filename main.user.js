const webResources = {
    script: '',
    img: '',
    sfx: '',
    data: '',
    other: '',
};

const resourceCategories = ['Script', 'Img', 'SFX', 'Data', 'Other'];

const extensionsMap = {
    img: ['png', 'jpg'],
    sfx: ['ogg', 'wav', 'mp3'],
    script: ['js', 'ts'],
    data: ['json', 'xml'],
};

const getExt = (fileName) => {
    const lastIndex = fileName.lastIndexOf('.');
    return fileName.slice(lastIndex + 1);
};

performance.getEntriesByType('resource').forEach(function (entry) {
    const ext = getExt(entry.name);
    let category = 'other';
    for (const [cat, exts] of Object.entries(extensionsMap)) {
        if (exts.includes(ext)) {
            category = cat;
            break;
        }
    }
    webResources[category] += entry.name+ '\n';
});

const printWebResources = () => {
    console.log('Game assets sniffer');
    resourceCategories.forEach(category => {
        console.log(category+`:`);
        console.log(webResources[category.toLowerCase()]);
    });
};

printWebResources();

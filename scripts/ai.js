const axios = require('axios');

async function getWebsiteContent() {
    const url = 'https://www.lipsum.com'; // Ваш URL здесь
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error('ERR:', error.message);
        return null;
    }
}

async function main() {
    const websiteContent = await getWebsiteContent();
    if (websiteContent) {
        console.log('Content:');
        console.log(websiteContent);
    }
}

main().catch(error => {
    console.error('ERR:', error);
});
console.log('External VAR:' + QME_JOB_ID);
console.log('RUNNING SCRIPT: ai');

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
    job_id = process.env.QME_JOB_ID;
    console.log('External VAR:' + job_id);
    console.log('RUNNING SCRIPT: ai');
    if (websiteContent) {
        console.log('Content 1:0:');
        console.log('External VAR:' + job_id);
        console.log('RUNNING SCRIPT: ai');
        console.log(websiteContent);
    }
}

main().catch(error => {
    console.error('ERR:', error);
});
job_id = process.env.QME_JOB_ID;
console.log('External VAR:' + job_id);
console.log('RUNNING SCRIPT: ai');

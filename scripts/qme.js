const { SecretsManagerClient, GetSecretValueCommand } = require("@aws-sdk/client-secrets-manager");

const secret_name = "qme_temp";

const client = new SecretsManagerClient({
  region: "us-east-1",
});

async function main() {
  let response;

  try {
    response = await client.send(
      new GetSecretValueCommand({
        SecretId: secret_name,
        VersionStage: "AWSCURRENT", // VersionStage defaults to AWSCURRENT if unspecified
      })
    );
  } catch (error) {
    // For a list of exceptions thrown, see
    // https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_GetSecretValue.html
    throw error;
  }

  const secret = response.SecretString;

  console.log(secret);
  job_id = process.env.QME_JOB_ID;
  console.log('External VAR:' + job_id);
  console.log('RUNNING SCRIPT: qme');
}

main();

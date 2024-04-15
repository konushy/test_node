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
  some_var = process.env.SOME_VAR;
  console.log('External VAR:' + some_var);
  console.log('RUNNING SCRIPT: qme');
}

main();

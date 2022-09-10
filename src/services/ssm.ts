/* eslint-disable import/no-extraneous-dependencies */
import { SSM } from 'aws-sdk';

const {
  APP_NAME,
  STAGE = 'dev',
  AWS_REGION = 'us-east-1',
} = process.env;

const smsClient = new SSM({
  region: AWS_REGION,
});

const PARAM_PATH = `/${STAGE}/${APP_NAME}`;

// eslint-disable-next-line import/prefer-default-export
export async function getSecret(name: string) {
  /* You can mock SSM Parameters in process.env to prevent the API call */
  const envOverride = process.env[name];
  if (envOverride) {
    return envOverride;
  }
  const { Parameter } = await smsClient.getParameter({
    Name: `${PARAM_PATH}/${name}`,
    WithDecryption: true,
  }).promise();

  return Parameter?.Value;
}

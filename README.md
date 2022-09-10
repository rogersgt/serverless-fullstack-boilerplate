# serverless-fullstack-boilerplate
Quick start full stack application on AWS with Lambda and Cloudfront

## Setup
* Copy `sample.env` to a new file called `.env`. Replace the values as needed. *NOTE: APP_NAME will determine the name of the CloudFormation stack, so it's important to stick with the same name after initial deployment.*
* For `AWS_ACM_CERTIFICATE_ARN` make sure you [request a cettificate](https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-request-public.html) that covers both `API_DOMAIN_NAME` as well as `FRONTEND_DOMAIN_NAME`
* For local development run `npm start`.
* To deploy a production instance, run `npm run deploy`

## Using SSM Parameter Store
Use the AWS SSM Parameter Store for configuring application secrets. Use the pattern: `/<STAGE>/<APP_NAME>` (the IAM policy is configured in `serverless.yml` to allow the Lambda function(s) to access these secrets).

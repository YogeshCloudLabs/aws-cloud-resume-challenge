# ☁️ aws-cloud-resume-challenge
A fully serverless cloud resume portfolio built on AWS. This project demonstrates cloud architecture, serverless development, infrastructure management, and frontend deployment using core AWS services.

---
# Live Demo
**Website:** http://aws-cloud-resume-challenge-2026.s3-website-us-east-1.amazonaws.com

---
# Project Overview

The AWS Cloud Resume Challenge is a hands-on cloud project designed to demonstrate practical AWS skills.

The website is hosted on Amazon S3 Static Website Hosting. A visitor counter is implemented using Amazon API Gateway, AWS Lambda, and DynamoDB. Every page visit triggers an API request that increments the visitor count in DynamoDB and returns the updated value to the frontend. CloudWatch is used for monitoring and debugging Lambda execution.

---
# Architecture Flow

1. User opens the portfolio website.
2. Amazon S3 serves the static website.
3. JavaScript sends a GET request to API Gateway.
4. API Gateway invokes the Lambda function.
5. Lambda reads the visitor count from DynamoDB.
6. Lambda increments the visitor count.
7. Updated count is stored back into DynamoDB.
8. Lambda returns the updated count.
9. JavaScript displays the visitor count.
10. CloudWatch records execution logs and metrics.

---
# AWS Services Used

AWS S3 – Hosts the frontend.
AWS API Gateway – Handles API requests.
AWS Lambda - Backend business logic count the visitors.
DynamoDB - Visitor counter database.
IAM - Attach to Permissions to lambda to access the dynmodb.
CloudWatch - Monitoring and Logs.

\# Lab 3 – DevOps Automation, Monitoring, Testing and Security



\## Overview



This project demonstrates DevOps practices using infrastructure automation, configuration validation, monitoring, centralized logging, feature flags, automated testing, and security scanning.



\## Technologies Used



\- \*\*Infrastructure:\*\* Terraform, Docker

\- \*\*Configuration Validation:\*\* Ansible

\- \*\*Monitoring:\*\* Prometheus, Grafana, Blackbox Exporter

\- \*\*Centralized Logging:\*\* Elasticsearch, Logstash, Kibana (ELK)

\- \*\*Application:\*\* Node.js

\- \*\*Load Testing:\*\* k6

\- \*\*Browser/API Testing:\*\* Playwright

\- \*\*Security Scanning:\*\* Trivy

\- \*\*CI/CD Tool Setup:\*\* Jenkins



\## Project Structure



```text

lab3-devops-powershell/

├── ansible/

├── app/

├── monitoring/

│   ├── blackbox/

│   ├── grafana/

│   ├── logstash/

│   └── prometheus/

├── security/

├── terraform/

├── tests/

│   ├── browser/

│   └── load/

├── docker-compose.yml

└── README.md

```



\## Implemented Components



\### 1. Infrastructure Automation

\- Used Terraform to manage an Nginx Docker container.

\- Validated Terraform configuration using init, fmt, validate, plan, and apply.



\### 2. Ansible

\- Used an Ansible playbook to verify Nginx HTTP availability.

\- Validated the service response using an assertion.



\### 3. Monitoring

\- Configured Prometheus and Blackbox Exporter.

\- Verified monitoring targets were UP.

\- Connected Grafana to Prometheus and viewed probe metrics.



\### 4. Centralized Logging

\- Configured Elasticsearch, Logstash, and Kibana.

\- Sent a test log through Logstash.

\- Verified the ingested log in Elasticsearch and Kibana Discover.



\### 5. Feature Flags

\- Created a Node.js application with health and feature flag endpoints.

\- Tested the feature flag in enabled and disabled states.



\### 6. Automated Testing

\- Used k6 for load testing.

\- Used Playwright for browser and API tests.

\- Three Playwright tests passed.

\- The k6 test completed 50 requests with all checks passing.



\### 7. Security Scanning

\- Used Trivy to scan filesystem misconfigurations, npm dependencies, and secrets.

\- Saved scan reports in the security directory.



\### 8. Jenkins

\- Installed and configured Jenkins locally.

\- Jenkins pipeline integration was not completed as part of this submission.



\## Running the Application



Open PowerShell:



```powershell

cd app

$env:FEATURE\_BANNER="true"

node server.js

```



Application:

\- Homepage: http://localhost:3001

\- Health endpoint: http://localhost:3001/health

\- Feature endpoint: http://localhost:3001/api/feature



\## Running Tests



Load testing:



```powershell

k6 run .\\tests\\load\\load-test.js

```



Playwright testing:



```powershell

cd tests\\browser

npm install

npx playwright install chromium

npx playwright test

```



\## Security Notes



\- Terraform state files and provider binaries are excluded.

\- Local environment files and credentials must not be committed.

\- Grafana credentials should be supplied through a local `.env` file.

\- Raw terminal history is excluded from version control.



\## Conclusion



This lab demonstrates practical implementation of infrastructure automation, monitoring, centralized logging, application testing, load testing, security scanning, and local Jenkins setup.




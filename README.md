# roastmyivr
Test an IVR number with roastmyivr.com APIs

# How to run
### 1. Clone repository:
```bash
git clone https://github.com/isaachamid/roastmyivr.git
cd roastmyivr
```
### 2. Register as a developer, create application in dashboard and get credentials
```bash
https://developer.roastmyivr.com/
```
### 3. Environment Variables
```bash
rename .env.example file to .env file and put your ROST IVR credentials
```
### 4. Install Packages
```bash
npm install
```
### 5. Run App
```bash
npm start
```

## Requests
#### Start Roasting IVR

|HTTP Method |URL                                               |
|------------|--------------------------------------------------|
|POST        |http://localhost:3000/ivr/start                   |

```node
Body (application/json):
{
  "telephoneNumber": "61XXXXXXXXX",
  "findHiddenMenus": true,
  "webhookUrl": "string"
}
```
#### Get IVR roasting report

|HTTP Method |URL                                               |
|------------|--------------------------------------------------|
|GET         |http://localhost:3000/ivr/:ivrId                  |

#### Terminate roasting process

|HTTP Method |URL                                               |
|------------|--------------------------------------------------|
|PATCH       |http://localhost:3000/ivr/:ivrId/terminate        |

```node
Body (application/json):
{
  "task": "FailProcess"
}

OR

Body (application/json):
{
  "task": "GenerateReportImmediately"
}

OR

Body (application/json):
{
  "task": "GenerateReportAsSoonAsPossible"
}
```
#### Cancel retry roasting process

|HTTP Method |URL                                               |
|------------|--------------------------------------------------|
|PATCH       |http://localhost:3000/ivr/:ivrId/cancel-retry     |


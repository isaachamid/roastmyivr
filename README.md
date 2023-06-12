# roastmyivr
Test an IVR number with roastmyivr.com APIs

# How to run
### 1. Clone repository:
```bash
git clone https://github.com/isaachamid/roastmyivr.git
cd roastmyivr
```
### 2. Environment Variables
```bash
rename .env.example file to .env file and put your ROST IVR credentials
```
### 3. Install Packages
```bash
npm install
```
### 4. Run App
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
  "telephoneNumber": "611800953737",
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

#### Cancel retry roasting process

|HTTP Method |URL                                               |
|------------|--------------------------------------------------|
|PATCH       |http://localhost:3000/ivr/:ivrId/cancel-retry     |


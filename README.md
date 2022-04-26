# Pettamo

A web app for online vet consultations & verified pet care services to better care for your pets :dog::cat:

<img src="https://github.com/Nitheeshskumar/pettamo-innovaccer/blob/main/readme/image.png" alt="image" />

## Overview

This project is submitted for Developer week Europe hackathon. Link to [**Live Demo**](https://pettamo.netlify.app/)

My humble and super bare minimum MVP is using the Netlify's functions (serverless) feature to talk to the API layer of the AstraDB - to save lots of time doing laborious backend plumbing work. For the API layer, I've chosen the Stargate document API to interact with AstraDB's Cassandra database since i came from MongoDB realm. Furthermore, I've only used a single collection to bring up the MVP fast - a tradeoff that enabled me to present the video demo of the working product on time.

### Architecture 

<img src="https://github.com/Nitheeshskumar/pettamo-innovaccer/blob/main/readme/solution-architecture.png" alt="solution-architecture" />

## Getting Started Locally

```shell
# Get the latest snapshot
git clone https://github.com/Nitheeshskumar/pettamo-innovaccer.git

# Change directory
cd pettamo-innovaccer

# Install NPM dependencies
npm install

# Add your Astra DB configs
Create a .env file in the project root folder and your Astra DB variables

# Then simply start your app
npm run dev
```

## Project Structure

| Name                               | Description                                                  |
| ---------------------------------- | ------------------------------------------------------------ |
| **functions**/                     | user account management                                      |
| **functions**/**utils**            | config astra client                                          |
| **public**/                        | static files                                                 |
| **src**/index.js                   | entrypoint                                                   |
| **src**/**Assets**                 | static assets                                                |
| **src**/**Components**             | components used in the app                                   |
| **src**/**ContextStore**           | global data                                                  |
| **src**/**Modules**                | sub-components used in page cntainers                        |
| **src**/**Routes**                 | js handling routes and guarding unauthorized req             |
| **src**/**Services**               | axios config and handling                                    |
| **src**/**Utils**                  | some utility functions                                       |

## Database design

The backend codes are written in **functions/** folder

* Leveraged the design of Astra DB for more modern architectures, such as cloud, where we need to scale out, reach a global audience
* Maintain sovereignty within a single cluster
* Since we used NoSql,it excels at handling large datasets
* Required less upfront design.
* Nodejs integration was done through the astrajs client which makes it super easy for node developers
* Integration with Document API also helps node devs for their conventional querying operations
* Multi tenancy approach is made possible with the collections within the same database itself. Hence if i need to add more projects on top of the same data, its super easy to partition and still integrate them
* For complex queries a relational model is acheived using 2 keys . `rel_type and rel_id`
  * Entities are appointments, pet owner, service provider, pets . This is linked to the rel_type key.
  * rel_type links to the corresponding user. for eg: the rel_id of a pet will be its owners uuid. 
  * This data model acheived full scalability still having a relation to perform some of the comple queries without having to add multiple tables


<img src="https://github.com/Nitheeshskumar/pettamo-innovaccer/blob/main/readme/schema.png" alt="schema" />

### Credits

* The project is modified from [huksley/todo-react-ssr-serverless](https://github.com/huksley/todo-react-ssr-serverless)

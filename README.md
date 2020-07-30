# WeTaxi A FIFO Exercise

## Introduction

This project is based on the [WeTaxi](https://wetaxi.it/en/) task, an Italian company which makes smarter the taxi services with innovative products.

## The Task

The task is to demonstrate skills in how to implement the [FIFO](https://www.geeksforgeeks.org/fifo-first-in-first-out-approach-in-programming/) queue system applied to the taxies in a possible scenario handled by WeTaxi.

### Description

We want to create a tracking system for a taxi fleet consisting of 1000 vehicles. Each vehicle is equipped with a connected and programmable device. It is necessary to know the position of the vehicles every 30/60 seconds in order to be able to calculate the nearest taxis if necessary or update the status of the parking lots (area with a FIFO type queue). Note the last position of the taxis is immediate to be able to select a list of taxis to which to propose the customer's request.
Parking management is particularly critical as the vehicle is parked on hold. When the vehicle is stationary, the GPS drifts and the noise on the current position increases with time, risking to position the taxi outside the parking lot and therefore make it lose the priority acquired in the queue.

### Requirements

- Create a queue system that simulates the operation of a taxi parking. The first taxi that enters is the first taxi that leaves. Once out, the taxi can return to the parking lot in the last position. A taxi can receive a bonus and be considered first in the parking lot for a limited time
- Create Rest API to (1) send a new location for a taxi, (2) get the list of parking lots and (3) get the list of taxis in a parking lot.
- Use Node and Mongo to build the queue system.

### The Solution

Teh solution proposed, simulates the FIFO queue via a specific end point
`<URL>/start-simulation`. At this endpoint was implemented a series of functionalities that so simulates a taxi in a queue in a parking lot.
The simulation randomly generates the taxies and parking lots and than simulates how they interact with the parking lots giving also a random bonus.
All of this is showed in a console output and the simulation runs for a time limit defined before. For example 60s.

How the simulation runs you can see it in the following screen-cast:
[Taxi Simulation](https://www.loom.com/share/81514904a01b495781e808e113ee794c)

### Project Structure

```bash
📦src
 ┣ 📂common
 ┃ ┗ 📜http-exception.ts
 ┣ 📂constants
 ┃ ┗ 📜WeTaxiApi.constants.ts
 ┣ 📂middleware
 ┃ ┣ 📜error.middleware.ts
 ┃ ┗ 📜notFound.middleware.ts
 ┣ 📂models
 ┃ ┣ 📜index.ts
 ┃ ┣ 📜parkingLot.interface.ts
 ┃ ┣ 📜parkingLot.model.ts
 ┃ ┣ 📜taxi.interface.ts
 ┃ ┗ 📜taxi.model.ts
 ┣ 📂services
 ┃ ┣ 📜weTaxi.service.simulation.ts
 ┃ ┗ 📜weTaxi.service.ts
 ┣ 📜app.ts
 ┣ 📜main.controller.ts
 ┗ 📜server.ts
```

### How To Run

#### Tech Prerequisites

- Node v12+
- MongoDB
- Docker v2.3.x+

_The classic way:_

- To be able to run the API in the correct way Mongo need to be installed and running.
- Then a DB need to be created in the project is set to this one `wetaxitask` but one can feel free to make one in a different way.
- then inside the root of the API run `npm i` to install all the packages

- to run the API use `npm run dev` the API should start showing also a list of the endpoints

_Docker way:_

To run via Docker you just need to run the following shell script from root:
`./run_wetaxitask.sh run`

You should see the Docker containers starting and will take a moment to be ready then will be possible to use the endpoints.

_Note:_

Inside the project there is a file `.env.docker` rename to only `.env` and use the values right for your system.

### The Endpoints

```bash
wetaxitask_api_dev | END-POINTS LIST:
wetaxitask_api_dev |  [
wetaxitask_api_dev |   { path: '/', methods: [ 'GET' ], middleware: [ 'anonymous' ] },
wetaxitask_api_dev |   {
wetaxitask_api_dev |     path: '/endpoints',
wetaxitask_api_dev |     methods: [ 'GET' ],
wetaxitask_api_dev |     middleware: [ 'anonymous' ]
wetaxitask_api_dev |   },
wetaxitask_api_dev |   {
wetaxitask_api_dev |     path: '/taxi/all-taxies',
wetaxitask_api_dev |     methods: [ 'GET' ],
wetaxitask_api_dev |     middleware: [ 'anonymous' ]
wetaxitask_api_dev |   },
wetaxitask_api_dev |   {
wetaxitask_api_dev |     path: '/taxi/add-new-taxi',
wetaxitask_api_dev |     methods: [ 'POST' ],
wetaxitask_api_dev |     middleware: [ 'anonymous' ]
wetaxitask_api_dev |   },
wetaxitask_api_dev |   {
wetaxitask_api_dev |     path: '/taxi/update-location',
wetaxitask_api_dev |     methods: [ 'POST' ],
wetaxitask_api_dev |     middleware: [ 'anonymous' ]
wetaxitask_api_dev |   },
wetaxitask_api_dev |   {
wetaxitask_api_dev |     path: '/taxi/delete-all',
wetaxitask_api_dev |     methods: [ 'DELETE' ],
wetaxitask_api_dev |     middleware: [ 'anonymous' ]
wetaxitask_api_dev |   },
wetaxitask_api_dev |   {
wetaxitask_api_dev |     path: '/parking-lot/get-parking-lots',
wetaxitask_api_dev |     methods: [ 'GET' ],
wetaxitask_api_dev |     middleware: [ 'anonymous' ]
wetaxitask_api_dev |   },
wetaxitask_api_dev |   {
wetaxitask_api_dev |     path: '/parking-lot/get-taxis',
wetaxitask_api_dev |     methods: [ 'POST' ],
wetaxitask_api_dev |     middleware: [ 'anonymous' ]
wetaxitask_api_dev |   },
wetaxitask_api_dev |   {
wetaxitask_api_dev |     path: '/parking-lot/add-bonus',
wetaxitask_api_dev |     methods: [ 'POST' ],
wetaxitask_api_dev |     middleware: [ 'anonymous' ]
wetaxitask_api_dev |   },
wetaxitask_api_dev |   {
wetaxitask_api_dev |     path: '/parking-lot/release-taxi',
wetaxitask_api_dev |     methods: [ 'POST' ],
wetaxitask_api_dev |     middleware: [ 'anonymous' ]
wetaxitask_api_dev |   },
wetaxitask_api_dev |   {
wetaxitask_api_dev |     path: '/parking-lot/add-to-parking-lot',
wetaxitask_api_dev |     methods: [ 'POST' ],
wetaxitask_api_dev |     middleware: [ 'anonymous' ]
wetaxitask_api_dev |   },
wetaxitask_api_dev |   {
wetaxitask_api_dev |     path: '/start-simulation',
wetaxitask_api_dev |     methods: [ 'GET' ],
wetaxitask_api_dev |     middleware: [ 'anonymous' ]
wetaxitask_api_dev |   }
wetaxitask_api_dev | ]
```

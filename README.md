# Realtime Ergonomic Dashboard

This dashboard displays the RULA and REBA ergonomic scores along with the risk level. It currently analysis the keypoints of one operator to display their risk level.

### Implementation
- [Clone Repo](http://ccam-gitlab-01.ccam.ccam-va.com/cooperative-processing-projects/e-142/ergonomic-analysis-suite.git)
- Install Dependencies
```bash
npm i
```
- Run the code
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This code is the front end of the ergonomic analysis tool. To show the live analysis on the dashboard:
- Connect to the DEV network
- Clone the [Ergonomic Analysis repository](http://ccam-gitlab-01.ccam.ccam-va.com/Brandon.Yuan/ergoan) and install dependencies
- If the docker container for the cooperative processing cell is running, then run zenoh-bridge which should be subscribed to ```"hmd/fusion-server/ergonomic_analysis"``` and run realtime_ergonomic_analysis.py in different terminals
```bash
cd ./bridge
python zenoh_bridge.py
```
```bash
cd ./src
python realtime_ergonomic_analysis.py
```

### How it works
The data that gets published from the Persistent UID module is received by the Realtime Ergonomic Analysis module. The data gets analyzed and published to zenoh. As the dashboard cannot directly interface with Zenoh, we use zenoh_bridge as an interface to publish data on a websocket which the dashboard can receive and display.

### Futher Improvements
- Adding multi-operator interface after implementing persistent UID
- Simplifying the dashboard and making the Score Details a seperate page

### Further resources

To learn more about Next.js, take a look at the following resources:

- [Lama Dev Youtube Channel](https://youtube.com/lamadev) 
- [Next.js](https://nextjs.org/learn)
#  Real-Time Stock Anomaly Detector

A Node.js service that simulates real-time stock price updates and detects unusual price behavior (anomalies) based on customizable strategies.

# Tech Stack

Node.js + Express

Frontend: HTML/CSS

Auth: Custom API Key

Modular design (MVC structure)

## 🧪 How to Run the App

###  1. Clone the Repository

```bash
git clone https://github.com/your-username/stock-anomaly-detector.git
cd stock-anomaly-detector
```

###  2. Install Dependencies

```bash
npm install
```

###  3.Start the App

```bash
npm start
```  

## UI Pages

### 1. Base URL (/)

URL: http://localhost:8080/

![screenshot](https://github.com/SureshKumar-U/Real-Time-Stock-Anomaly-Detector/blob/main/public/images/auth.png)

Description: The authentication page where users can submit an API key to access the stock feed and alerts.

View:  A simple form with an input field for the API key and a submit button.

When the API key is submitted, the user will be authenticated to access the rest of the application.


### 2. Alerts Page (/alerts.html)

URL: http://localhost:8080/alerts.html

![screenshot](https://github.com/SureshKumar-U/Real-Time-Stock-Anomaly-Detector/blob/main/public/images/alerts.png)



Description: This page displays the last 10 alerts detected by the anomaly detection system.

View: A simple list of alerts showing the stock symbol, timestamp, and the reason for the anomaly (e.g., price spike/drop or moving average deviation).

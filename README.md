# Oak Lodge Property Management PWA

A secure, offline-capable Progressive Web Application designed for property management.

## Architecture & Stack

This project employs a lightweight frontend with a serverless backend.

* **Frontend Framework:** React 19 + Vite
* **Styling:** Tailwind CSS v4 + custom CSS (`index.css`)
* **Animations:** Framer Motion
* **Data Visualization:** Recharts
* **Icons:** Lucide React
* **Backend / API Strategy:** Netlify Serverless Functions (AWS Lambda)
* **Database:** Google Sheets API (via `google-spreadsheet` and `google-auth-library`)

---

## Key Features

### 1. Dashboard & Analytics Matrix
A visual, Recharts-powered dashboard calculating business metrics on the fly:
* **Expected Monthly Rent:** Calculates total rent due based on active rent cycle blocks.
* **Rent Collected vs Due:** Updates based on Paid vs Unpaid statuses in the ledger.
* **Floor Breakdown:** A dual-axis Bar Chart comparing Revenue generation vs Electricity consumption per floor.
* **Omni-Filter:** A global query system that filters both the Dashboard analytics and the Building Visual Map simultaneously by Floor, Unit Name, or Water/Electricity connection IDs.

### 2. Interactive Building Map
Responsive, CSS-grid driven 2D block map. Each block represents a physical unit.
* **Status Indicators:** Units dynamically highlight based on Unpaid or Overdue statuses.
* **Unit Detail Modal:** Clicking a unit opens a Framer-Motion powered bottom-sheet containing tracking points (Contact, Rent, Status, Utilities).

### 3. Dynamic Rent Cycles & Alerts
Rent operates on a `rentHistory` timeseries.
* **Cycle Editing:** Users can set a Start Month and End Month for a specific rent amount.
* **Expiration Alerts:** An automated engine warns the manager via a Dashboard banner if any unit's rent cycle is expiring within 1 month.

### 4. Bulk Data Entry
Dedicated `/bulk` routing view for high-speed monthly updates.
* **Mass Operations:** Grid interface where managers set the Billing Month and enter Electricity, Water, Trash, and Rent Status for every unit.
* **Instant Calculation:** Features a real-time total collectable column.
* **Global Sync:** Validates the entire grid and ships it to the unified backend.

---

## Security & Deployment

The app uses a 2-tier security model:
1. **Frontend Auth Gate:** A PIN-code splash screen prevents unauthorized access to the UI. `robots.txt` is configured to disallow web crawlers.
2. **Backend Key Isolation:** Google Cloud Service Account private keys are never bundled into the React code. They are isolated inside a Netlify Serverless Function (`/netlify/functions/sync.js`), acting as a proxy bridge between the React app and Google Sheets.

### How to Run Locally

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Set up Environment Variables:**
   Create a `.env` file in the root directory and add Google Cloud credentials:
   ```env
   GOOGLE_SERVICE_ACCOUNT_EMAIL="your-bot@your-project.iam.gserviceaccount.com"
   GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvgI...\n-----END PRIVATE KEY-----\n"
   GOOGLE_SPREADSHEET_ID="your-long-spreadsheet-id"
   ```
3. **Launch the stack:**
   ```bash
   npm run dev
   ```

### How to Deploy to Production

1. Push this repository to GitHub.
2. Import the project into Netlify.
3. Under Netlify Environment Variables, add `GOOGLE_SERVICE_ACCOUNT_EMAIL`, `GOOGLE_PRIVATE_KEY`, and `GOOGLE_SPREADSHEET_ID`.
4. Click Deploy.

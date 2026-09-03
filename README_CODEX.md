# Oak Lodge Management System (Codex Guide)

## Current State

- **Status**: Active Development (Phase 10 reached)
- **Primary Branch**: `main`
- **Architecture**: Vite + React 19 SPA
- **Backend/Storage**: Firebase (Firestore)
- **Styling**: Tailwind CSS 4

## Tech Stack Details

- **Core**: React 19 (Functional components, Hooks)
- **Routing**: Internal state-based view switching (`currentView` in `App.jsx`)
- **State Management**: React `useState` + `FilterContext` for filtering
- **UI/UX**: 
  - Framer Motion for animations
  - Lucide React for iconography
  - Recharts for dashboard analytics
- **Reporting**: jsPDF and jspdf-autotable for rent receipts and ledger exports
- **Build Tool**: Vite 7

## Data Synchronization (Hydration Engine)

The application uses a custom hydration engine (`hydrateAppFromCloud` in `App.jsx`) that:
1. Authenticates via `AuthGate.jsx`.
2. Fetches the master database from Firestore.
3. Injects cloud data into a local skeleton (`buildingData` from `src/config/buildingLayout.js`).
4. Maps ledger entries, tenant profiles, and unit configurations to the local state.

## Application Areas

1. **Dashboard** (`src/components/Dashboard.jsx`): High-level metrics and analytics.
2. **Visual Map** (`src/components/BuildingVisualMap.jsx`): Interactive representation of the property layout.
3. **Ledger** (`src/components/LedgerTable.jsx`): Detailed record of all transactions and billing.
4. **Tenant Management**:
   - `src/components/TenantManagementModal.jsx`: Edit/Add tenants.
   - `src/components/HistoricalTenants.jsx`: Tenant directory and history.
5. **Billing & Receipts**:
   - `src/components/RentReceiptGenerator.jsx`: PDF generation for rent.
   - `src/components/BulkDataEntry.jsx`: Batch updates for billing.

## Development Progress (Phases)

Based on code comments, the project follows a phased roadmap:
- **Phase 8**: Cloud Status & Hydration Engine implementation.
- **Phase 10**: Master Table Array & Interactive Ledger Table.

## Known Challenges / Debt

- View management is currently state-based within `App.jsx`, which might become complex if the number of views grows.
- Local mutations in some modals (like `TenantManagementModal`) may need tighter integration with the cloud-first approach.

## Recommended Next Work

- Transition more local state mutations to direct Firestore updates.
- Enhance the visual map with real-time status indicators.
- Implement more robust error handling for cloud sync failures.

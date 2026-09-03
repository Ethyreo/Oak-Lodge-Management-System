# AI Agent Context: Oak Lodge Management System

Welcome to the Oak Lodge Property Management System!
This file serves as the definitive onboarding and context guide for any incoming AI Agent working on this repository.

## Mission Overview
The objective is to operationalize the property management system for Oak Lodge. We are currently at **Phase 10**, having successfully implemented a cloud hydration engine that syncs local state with Firebase Firestore. The system provides a visual representation of the property, a master interactive ledger, and automated rent receipt generation.

## System Architecture
- **Frontend**: A high-performance Vite + React 19 Single Page Application.
- **Cloud Backend**: Google Firebase (Firestore) is used for all persistent data (Tenants, Ledger, Unit Configurations).
- **Hydration Engine**: Located in `App.jsx`, this engine fetches the master state from Firestore and injects it into the local building configuration on startup.
- **Key Modules**:
  - **Visual Map**: SVG-driven interactive map for unit selection.
  - **Ledger System**: Interactive table for tracking all billing and payment history.
  - **Receipt Generator**: PDF engine using `jsPDF` for creating professional tenant receipts.

## Environment Details
- **Local Development**: Run `npm run dev` to start the Vite dev server.
- **Firebase Config**: Credentials and initialization are located in `src/config/firebase.js`.
- **State Management**: Uses a combination of `useState` in `App.jsx` for global state and `FilterContext` for UI-wide filtering.
- **Auth**: Protected by `AuthGate.jsx` which unlocks the hydration engine upon successful entry.

## Historical Context
The project evolved through several phases:
- **Phases 1-7**: Building the local UI, visual map, and mock data structures.
- **Phase 8**: Implementation of the Cloud Hydration Engine (Firestore integration).
- **Phase 10**: Introduction of the Master Interactive Ledger Table.

## Next Steps / Directives for AI Agents
1. **Cloud-First Mutations**: Ensure that any changes made in modals (like `TenantManagementModal`) are pushed to Firestore before triggering a local state update.
2. **Visual Map Enhancements**: Add more dynamic statuses to the building map (e.g., color-coding for overdue rent or upcoming vacancies).
3. **Ledger Robustness**: Implement server-side filtering/pagination if the ledger grows significantly.
4. **Error Handling**: Improve the "Syncing with Cloud" loader to handle timeouts or connectivity issues gracefully.

Let's build!

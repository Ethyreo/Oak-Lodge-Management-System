/**
 * Returns the current billing month in YYYY-MM format.
 * Currently Anchored to '2026-01' to align with the start of the digital ledger.
 */
export const getCurrentBillingMonth = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    return `${year}-${month}`;
};

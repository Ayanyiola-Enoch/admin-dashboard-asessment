# Admin Dashboard Assessment

A responsive admin dashboard UI built with React + TypeScript + Vite. It includes a collapsible sidebar (icon-only mode), multiple management screens, and drawer-based workflows for creating and editing entries.

## Tech Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- pnpm
- Recharts (dashboard charts)

## Features

- **Collapsible Sidebar**: Toggle between full and icon-only navigation.
- **Dashboard**: Charts and high-level system visuals.
- **User Management**:
  - Starts with a single seeded user.
  - Add users via a right-side drawer.
  - Per-user **Actions** menu with **Edit** (prefilled drawer) and **Delete** (removes from list).
- **Data Management**: Default list view; “New Entry” opens a drawer panel.
- **Issue Management**: Ticket details are hidden by default and appear when a ticket is selected; responsive details drawer/panel.
- **System Activity**: Activity/audit log screen.
- **Settings Hub Central**: Settings/notifications hub screen.

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- pnpm

### Install

```bash
pnpm install
```

### Run (development)

```bash
pnpm dev
```

Then open the local URL printed in the terminal (typically `http://localhost:5173`).

### Build (production)

```bash
pnpm build
```

### Preview (production build)

```bash
pnpm preview
```

### Lint

```bash
pnpm lint
```

## Project Structure

```text
src/
  App.tsx
  main.tsx
  components/
    Sidebar.tsx
    TopBar.tsx
    Dashboard.tsx
    UserManagement.tsx
    DataManagement.tsx
    DataEntryPanel.tsx
    IssueManagement.tsx
    SystemActivity.tsx
    SettingsHubCentral.tsx
```

## Notes

- This project is UI-focused and uses in-memory component state for interactions (e.g., adding/editing/deleting users). Refreshing the page resets those in-memory changes.

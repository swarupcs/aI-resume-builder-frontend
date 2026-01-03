
## 📁 Frontend Architecture: `api / services / hooks`

This project follows a **layered frontend architecture** to ensure scalability, maintainability, and clean separation of concerns.

### 🔹 `api/`

Handles **pure HTTP communication** with the backend (Axios / Fetch).
Contains only request definitions with no business logic, UI logic, or React-specific code.

**Responsibility:**

* Call backend endpoints
* Return raw responses

---

### 🔹 `services/`

Contains **business logic and side effects**.
This layer orchestrates API calls, handles error normalization, token management, and user feedback (e.g., toasts).

**Responsibility:**

* Combine multiple API calls if needed
* Handle side effects (auth tokens, notifications)
* Transform or normalize response data

---

### 🔹 `hooks/`

Encapsulates **React-specific data fetching logic** using TanStack Query.
Manages caching, loading/error states, retries, and query invalidation.

**Responsibility:**

* Integrate services with React
* Manage server state lifecycle
* Expose clean APIs to UI components

---

### 🔹 UI Components

Focused solely on **rendering and user interaction**.
They consume hooks and remain free from API calls and business logic.

---

### ✅ Benefits of This Structure

* Clear separation of concerns
* Improved readability and testability
* Easier refactoring and scaling
* Matches real-world, production-grade React applications

---

### 🔁 Data Flow

```
UI → Hooks → Services → API → Backend
```





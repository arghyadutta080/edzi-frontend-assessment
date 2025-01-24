# Next.js Project Documentation

## **Overview**

This Next.js project leverages **React Query** for efficient API calls and caching, **HydrationBoundary** for SSR optimization and SEO benefits, and **shadcn** for styling. The project is organized into well-structured folders to enhance scalability, maintainability, and performance.

---

## **Folder Structure and Features**

### **Tree Structure**
```plaintext
src/
├── app/
│   ├── home/
│   │   └── page.tsx
│   ├── [exam]/
│   │   └── page.tsx
│   ├── layout.tsx
│   ├── globals.css
│   └── not-found.tsx
├── api/
│   ├── publicExams.ts
│   ├── publicExamSubjects.ts
│   └── serverHealth.ts
├── components/
│   ├── common/
│   │   └── QueryClientProvider.tsx
│   ├── exam/
│   │   ├── ClassInfo.tsx
│   │   ├── SubjectGrid.tsx
│   │   └── [other static components and loading skeleton]
│   ├── home/
│   │   ├── PublicExams.tsx
│   │   ├── ServerHealthStatus.tsx
│   │   └── [other static components and loading skeleton]
│   └── ui/
│       └── [shadcn styling components]
├── lib/
│   └── types/
│       └── [TypeScript interfaces and types]
├── utils/
│   ├── constraints/
│   │   └── [constants like baseURL]
│   └── functions/
│       ├── getQueryClient.ts
│       └── [other helper functions]
```

---

### **Folder Details**

#### **`src/app/`**
- **`home/page.tsx`**: The entry point for the home route (`/`). Utilizes `HydrationBoundary` for SSR caching, React Query for prefetching API responses, and better SEO.
- **`[exam]/page.tsx`**: Dynamic route for exam details (`/:exam`). Prefetches data server-side for SSR benefits.
- **`layout.tsx`**: Global layout that wraps pages with `QueryClientProvider` for centralized React Query management.
- **`globals.css`**: Global CSS definitions.
- **`not-found.tsx`**: Custom 404 page.

#### **`src/api/`**
- **`publicExams.ts`**: Fetches a list of public exams.
- **`publicExamSubjects.ts`**: Fetches subjects for a specific public exam.
- **`serverHealth.ts`**: Checks the server health status periodically.

#### **`src/components/`**
- **`common/QueryClientProvider.tsx`**: Provides the React Query client instance for the app.
- **`exam/`**: Components for the exam route (`/:exam`). Includes:
  - **`ClassInfo.tsx`**: Displays class information with optimized API calls.
  - **`SubjectGrid.tsx`**: Displays subjects in a grid.
- **`home/`**: Components for the home route (`/`). Includes:
  - **`PublicExams.tsx`**: Displays public exams.
  - **`ServerHealthStatus.tsx`**: Pings the server health status every 30 seconds.
- **`ui/`**: Reusable styled components using **shadcn**.

#### **`src/lib/`**
- **`types/`**: TypeScript interfaces and types for type safety.

#### **`src/utils/`**
- **`constraints/`**: Contains constants like API base URLs.
- **`functions/`**:
  - **`getQueryClient.ts`**: Creates a cached `QueryClient` for server-side SSR caching and SEO optimization.

---

## **Feature Workflows**

### **1. Home Page Workflow**
- **Route**: `/`
- **Components**:
  - `PublicExams.tsx`: Fetches and displays public exam data.
  - `ServerHealthStatus.tsx`: Periodically checks server health.
- **SSR Workflow**: Prefetches data server-side with `QueryClient` and hydrates it on the client.

### **2. Exam Page Workflow**
- **Route**: `/:exam`
- **Components**:
  - `ClassInfo.tsx`: Displays class details.
  - `SubjectGrid.tsx`: Lists dynamically fetched subjects.
- **SSR Workflow**: Uses `QueryClient` for server-side prefetching and client-side hydration.

### **3. Server Health Monitoring**
- **Component**: `ServerHealthStatus.tsx`
- **Functionality**: Pings the server every 30 seconds and displays the health status dynamically.

---

## **Best Practices**

1. **Separation of Concerns**: Organized folder structure separates logic, components, and utilities.
2. **SEO Optimization**: Leveraging React Query for server-side data fetching improves SEO and initial page load.
3. **Type Safety**: TypeScript ensures type-safe components and functions.
4. **Efficient Data Fetching**: React Query reduces redundant API calls through caching.
5. **Reusable Components**: Shared components in the `ui/` folder promote consistency.

---

## **Setup Instructions**

1. Clone the repository:
   ```bash
   git clone <repository_url>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables in a `.env` file:
   ```env
   NEXT_PUBLIC_SERVER_API_URI=<your_api_url>
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```

---

## **Conclusion**

This documentation outlines the structure and workflows of the Next.js project. Following the provided best practices ensures a scalable, maintainable, and high-performance application. For further questions, feel free to reach out!

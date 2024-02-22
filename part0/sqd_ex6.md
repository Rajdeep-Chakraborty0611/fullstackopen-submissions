```mermaid
sequenceDiagram
    participant User
    participant Browser
    participant Server
    User->>Browser: Navigates to SPA URL
    Browser->>Server: Requests SPA content
    Server-->>Browser: Sends SPA HTML, JS, and CSS
    Browser->>User: Renders SPA interface
    User->>Browser: Writes note content
    User->>Browser: Clicks the Save button
    Browser->>Server: Sends note data for saving
    Server-->>Browser: Confirms successful save
```
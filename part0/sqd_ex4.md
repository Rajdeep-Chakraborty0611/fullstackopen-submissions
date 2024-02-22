```mermaid
sequenceDiagram
    participant User
    participant Page
    User->>Page: Writes something into the text field
    User->>Page: Clicks the Save button
    Note over Page: Browser operation: Validate input
    Note over Page: Server operation: Save note to database


```
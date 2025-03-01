# Material React Table Project

## Overview
This project implements a dynamic and interactive data table using **Material React Table (MRT)** and **Material-UI (MUI)**. The table supports features such as row selection with checkboxes, pagination, and custom cell rendering with avatars and chips.

## Features
- ✅ **Material React Table** integration
- ✅ **Row selection with checkboxes** (single & multi-row selection enabled)
- ✅ **Custom cell rendering** (Avatars, status chips, and team labels)
- ✅ **Pagination with MUI styling**
- ✅ **Optimized layout and design with Material-UI components**

## Tech Stack
- **React.js**
- **Material-UI (MUI)**
- **Material React Table (MRT)**

## Installation
### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/your-repo.git
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Run the project
```bash
npm run dev
```

## Usage
The table component `MUITable` is built using `MaterialReactTable`. It includes:
- **Custom columns** with formatted name and status fields.
- **Row selection enabled** for interactive selection.
- **Pagination** for handling large datasets.

## Folder Structure
```
📂 your-project-folder
├── 📁 src
│   ├── 📄 components/MUITable.js  # Main table component
│   ├── 📄 data.json                # Mock data for the table
│   ├── 📄 App.js                   # Entry file
│   ├── 📄 index.js                 # React DOM entry point
│   └── 📁 styles                   # Styles if applicable
└── 📄 package.json                 # Dependencies
```

## Example Data Format
The table uses a JSON data file structured as follows:
```json
[
  {
    "name": {
      "username": "John Doe",
      "handle": "@johndoe",
      "image": "https://via.placeholder.com/40"
    },
    "status": "Active",
    "role": "Admin",
    "email": "john.doe@example.com",
    "teams": ["Engineering", "Product"]
  }
]

```
## Screenshots

![Material React Table](https://github.com/user-attachments/assets/b83d208e-fd96-4e61-b07a-b3ef1c8b31e0)


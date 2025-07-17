# 💼 Healthcare Benefits Calculator

A simple React + TypeScript application that calculates and displays the cost of an employee’s healthcare benefits package per paycheck.

---

## 📋 Problem Statement

Employers offer healthcare benefits to their employees, which are deducted from each paycheck. This app allows employees to:

- View their total benefits cost per paycheck
- See a breakdown of costs for employees and dependents
- Add, edit, or remove employees and their dependents

---

## 💻 Tech Stack

- **React** (w/ Vite)
- **TypeScript**
- **Tailwind CSS** for styling
- **In-memory mock API** (using static JSON)

---

## 📐 Benefit Calculation Rules

- Employee benefits cost: `$1000/year`
- Dependent benefits cost: `$500/year` each
- **10% discount** applied to any name starting with **'A'** (case-insensitive)
- There are **26 paychecks per year**

---

## 📸 Features

- 🧑 View all employees and their dependents
- ➕ Add/edit/delete employees and dependents
- ✏️ Inline editing
- ✅ Form validation
- 💰 Real-time preview of benefit costs per paycheck and annually
- ♿ Accessible and responsive UI

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/healthcare-benefits-calculator.git
cd healthcare-benefits-calculator
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Application
```bash
npm start
```

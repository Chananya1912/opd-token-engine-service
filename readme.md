# OPD Token Allocation Engine

A backend system to manage OPD token allocation for hospitals with
priority-based scheduling, elastic capacity handling, and real-world
constraints like cancellations, no-shows, and emergency insertions.

---

## 🏥 Problem Statement

Doctors operate in fixed time slots (e.g. 9–10, 10–11), each with a hard
capacity. Tokens are generated from multiple sources:

- Online booking
- Walk-in (OPD desk)
- Paid priority patients
- Follow-up patients
- Emergency cases

The system dynamically reallocates tokens while ensuring fairness,
capacity limits, and emergency handling.

---

## ✨ Features

- Priority-based token allocation
- Hard per-slot capacity enforcement
- Emergency override (elastic capacity)
- FIFO ordering within same priority
- Token cancellation handling
- Real-time queue progression
- Scalable MVC architecture
- MongoDB-backed persistence

---

## 🧠 Priority Order

Lower number = higher priority

EMERGENCY → 0
PAID → 1
FOLLOW_UP → 2
ONLINE → 3
WALK_IN → 4


---

## 🏗️ Architecture (MVC)

src/
├── config/ # DB connection
├── models/ # MongoDB schemas
├── services/ # Token allocation logic
├── controllers/ # Request handling
├── routes/ # API routes
├── seed.js # Sample data
└── app.js # Server entry point


---

## 🧪 Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose

---

## 📦 Installation

### 1️⃣ Clone the repo
```bash
git clone <your-repo-url>
cd opd-token-engine
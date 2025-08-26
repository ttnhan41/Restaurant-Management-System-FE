# 🍽️ Restaurant Management System – Frontend

## 🧾 Introduction

This is the frontend repo for a restaurant management system built using React. It allows restaurant guests to place orders, make reservations, and write reviews, while managers can manage tables, menus, and order statuses.

The backend of this app can be found here: https://github.com/ttnhan41/Restaurant-Management-System-BE

---

## 💻 Tech Stack

[![React](https://img.shields.io/badge/React-%2320232a.svg?logo=react&logoColor=%2361DAFB)](#)
[![React Router](https://img.shields.io/badge/React_Router-CA4245?logo=react-router&logoColor=white)](#)
[![NodeJS](https://img.shields.io/badge/Node.js-6DA55F?logo=node.js&logoColor=white)](#)
[![styled-components](https://img.shields.io/badge/styled--components-DB7093?logo=styledcomponents&logoColor=fff)](#)

---

## 🚀 Features

### 🔐 Authentication
- User registration and login using JWT
- Default role: `GUEST`
- `MANAGER` role is manually assignable via database

### 👥 User Roles
- **Guest**: Can browse menu, place orders, make reservations, leave reviews
- **Manager**: Can manage menu items, view all orders, update order statuses, manage tables

### 🍽️ Orders
- Place an order with multiple menu items
- View own order history
- Manager can view all orders, update order status (PENDING, IN_PROGRESS, SERVED, CANCELLED)

### 📅 Reservations
- Guests can make table reservations
- Manager can update reservation status (PENDING, CONFIRMED, CANCELLED)
- System checks for existing reservations

### 📋 Menu & Tables
- Manager can create, update, and delete menu items and restaurant tables

### 📝 Reviews
- Guests can write reviews for the menu items

---

## ⚙️ Installation Guide

```
git clone https://github.com/ttnhan41/Restaurant-Management-System-FE.git
```

```
cd Restaurant-Management-System-FE
```

```
npm install
```

```
npm run dev
```

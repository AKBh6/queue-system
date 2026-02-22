M3W3 – Smart Food Ordering Interface

Live Website:
https://akbh6.github.io/queue-system/

Creator:
Arkesh Bhattacharya

Overview

M3W3 is a front-end prototype of a smart food ordering interface designed using a design thinking approach. The system focuses on transparency, user trust, and real-time interaction.

It simulates a digital ordering environment for small restaurants or campus food stalls, addressing issues such as unclear billing, stock uncertainty, and duplicate order submissions.

The application is built entirely using HTML, CSS, and Vanilla JavaScript.

Problem Statement

Customers at small food outlets often face:

Lack of clarity about total pricing including GST

No visibility of item availability

Manual errors in quantity selection

Confusion about whether an order was successfully placed

Loss of cart data due to accidental refresh

The goal was to design a lightweight, interactive interface that improves transparency and reliability without requiring backend infrastructure.

Key Features

Smart Cart System

Add multiple items with adjustable quantities

Prevent ordering beyond available stock

Real-time subtotal calculation

Automatic GST calculation at 5%

Clear grand total display including GST

Dynamic Stock Simulation

Randomized stock allocation per session

Low stock warnings

Out-of-stock marking

Stock validation during quantity increment

Order Confirmation Flow

Loading overlay during order placement

Random token number generation

Order locking after submission

Refresh protection to prevent accidental data loss

User Interface Enhancements

Light and Dark mode toggle

Real-time search and category filtering

Smooth animations and scroll reveal

Toast notifications for user feedback

Architecture

Cart State Structure

The cart is stored as an object where:

itemId → quantity

This allows scalable quantity management and simplifies total computation.

Stock Management

Stock is stored separately as:

itemId → availableStock

This ensures that cart logic and stock validation remain independent but synchronized.

Rendering Model

The interface re-renders dynamically based on state updates. The UI does not control logic; it reflects state changes. This prevents desynchronization between visual components and actual data.

Pricing Logic

Subtotal = Sum of (price × quantity)

GST = 5 percent of subtotal

Grand Total = Subtotal + GST

GST is clearly displayed in a separate breakdown section to improve billing transparency.

Design Thinking Approach

Empathize
Identified common problems in small food ordering environments: unclear pricing, stock ambiguity, and duplicate orders.

Define
Design a transparent and interactive ordering system that reduces uncertainty and improves trust.

Ideate
Introduced dynamic quantity controls, stock indicators, GST breakdown, and order locking.

Prototype
Implemented using a fully front-end architecture with state-driven rendering.

Test and Iterate
Refined cart logic, stock enforcement, and refresh safeguards to improve reliability.

Technical Stack

HTML5

CSS3 (Custom Properties, Grid Layout, Animations)

Vanilla JavaScript

No external frameworks were used.

Safeguards Implemented

Cannot exceed available stock

Cannot place multiple orders in the same session

Refresh warning if cart or order is active

Order state locked after submission

Future Scope

Backend integration for real order processing

Database-based stock management

Payment gateway integration

Admin dashboard for vendors

Persistent user sessions

Conclusion

M3W3 demonstrates how a small-scale food ordering system can be redesigned using structured state management and transparent billing logic. It goes beyond a static menu and explores interactive behavior, user safeguards, and trust-oriented design.

Creator
Arkesh Bhattacharya

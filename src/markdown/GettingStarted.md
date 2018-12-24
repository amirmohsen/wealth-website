---
path: '/getting-started'
title: 'Getting Started'
---

# Getting Started

## Installation

Using NPM:

```sh
npm i wealth
```

Using Yarn:

```sh
yarn add wealth
```

## Immutability
All Money and Currency instances are immutable and each of the operations return a new instance.
This makes Wealth perfect for react/redux applications.

## Functional and object-oriented
You can use Wealth in both a functional or object-oriented fashion.

### Functional Example
```js
import { Money, add } from 'wealth';

const moneyA = new Money('15.60', 'USD');
const moneyB = new Money('89.13', 'USD');
const total = add(moneyA, moneyB);
```

### Object-oriented Example
```js
import { Money } from 'wealth';
import 'wealth/methods/add'; // Only import once to modify the Money prototype

const moneyA = new Money('15.60', 'USD');
const moneyB = new Money('89.13', 'USD');
const total = moneyA.add(moneyB);
```

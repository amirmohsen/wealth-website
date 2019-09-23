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

All Money and Currency instances are immutable and each of the operations returns a new instance.
This makes Wealth perfect for react/redux applications.

## Functional and object-oriented

You can use Wealth in both a functional or object-oriented fashion.

### Functional Example

```js
import { Money, add } from 'wealth'

const moneyA = Money.init('15.60', 'USD')
const moneyB = Money.init('89.13', 'USD')
const total = add(moneyA, moneyB)
```

### Object-oriented Example

You can use the object-oriented version in two ways.

#### Full import

If you don't care about bundle size, you can import the full version which has all the prototype methods by default:

```js
import { Money } from 'wealth/full'
```

#### Lean import

If you don't care about bundle size, you can import the full version which has all the prototype methods by default:

```js
import { Money } from 'wealth'
import 'wealth/methods/add' // Only import once to modify the Money prototype
```

#### Usage

```js
const moneyA = Money.init('15.60', 'USD') // or new Money('15.60', 'USD')
const moneyB = Money.init('89.13', 'USD') // or new Money('89.13', 'USD')
const total = moneyA.add(moneyB)
```


# 📚 Reusable Components Documentation

This file documents how to use the reusable components: `Button`, `InputField`, `Card`, `Modal`, and `Alert`.

---

## 🚀 Button

```jsx
import Button from './components/Button';

<Button
  type="button"
  variant="danger"
  size="lg"
  icon="🚀"
  onClick={() => alert("Clicked!")}
>
  Click Me
</Button>
````

**Props:**

| Prop       | Type    | Description                        |
| ---------- | ------- | ---------------------------------- |
| `type`     | string  | Button type (`button`, `submit`)   |
| `variant`  | string  | `primary`, `secondary`, `danger`   |
| `size`     | string  | `sm`, `md`, `lg`                   |
| `icon`     | string  | Emoji/icon to appear before text   |
| `disabled` | boolean | Disables the button if true        |
| `children` | node    | Text or elements inside the button |

---

## 🧾 InputField

```jsx
import InputField from './components/InputField';

<InputField
  label="Email"
  type="email"
  required
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  placeholder="Enter your email"
/>
```

---

## 💳 Card

```jsx
import Card from './components/Card';

<Card title="React Card">
  <p>This is a reusable card component</p>
</Card>
```

---

## 🪟 Modal

```jsx
import Modal from './components/Modal';

<Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
  <h3>Modal Title</h3>
  <p>This is modal content</p>
</Modal>
```

---

## ⚠️ Alert

```jsx
import Alert from './components/Alert';

<Alert type="success" message="Saved successfully!" />
```


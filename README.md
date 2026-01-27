# ArgentBank – Frontend

Projet frontend de l’application **ArgentBank**, développé avec **React**, **Vite**, **TypeScript** et **Sass**, dans le cadre de la formation _Intégrateur Web_ (OpenClassrooms).

---
## Project Management

Functional requirements for this project are tracked using GitHub Issues 
in the official OpenClassrooms fork: [ArgentBank fork](https://github.com/zesir/ArgentBank-Frontend).

### Issues and Features

| Issue | Functionality | Label | Status |
|-------|---------------|-------|--------|
| #2 Login Requirement | User can login to the system | authentication | Completed |
| #3 Logout Requirement | User can logout from the system | enhancement | Completed |
| #6 Redux Requirement | Redux implemented for state management | enhancement | Completed |
| #5 Update Profile Feature | User can update their profile | enhancement | Completed |

**Note:** All frontend implementation is done in this React repository.

## 🧩 Technologies utilisées

- ⚛️ **React**
- ⚡ **Vite**
- 🟦 **TypeScript**
- 🎨 **Sass (SCSS)**
- 📦 **CSS Modules**
- 🛠️ **Node.js / npm**

---

## 📁 Structure du projet

```txt
src/
 ├── assets/
 │   └── styles/
 │       ├── main.scss          # Styles globaux
 │       ├── _variables.scss    # Variables Sass
 │       └── _mixins.scss       # Mixins Sass
 ├── components/
 │   └── Header/
 │       ├── Header.tsx
 │       ├── Header.module.scss
 │       └── index.ts
 ├── pages/
 ├── services/
 ├── App.tsx
 └── main.tsx
```

## 🎨 Gestion des styles

Les styles globaux sont centralisés dans src/assets/styles

Chaque composant possède son Sass Module (.module.scss)

### Les CSS Modules permettent :

- l’isolation des styles
- d’éviter les conflits de classes
- Les variables et mixins Sass sont partagées via @use

#### Exemple :

```scss
@use "@/assets/styles/variables" as *;
@use "@/assets/styles/mixins" as *;
```

## 🧱 Organisation des composants

Un composant = un dossier

### Chaque dossier peut contenir :

- le composant (.tsx)
- son style (.module.scss)
- un index.ts servant de point d’entrée

#### Exemple d’import simplifié :

```ts
import Header from "@/components/Header";
```

## 🔗 Alias d’import

Un alias @ est configuré pour pointer vers src/

### Cela permet :

- des imports plus lisibles
- moins d’erreurs lors des déplacements de fichiers

## ▶️ Lancer le projet en local

### 1️⃣ Installer les dépendances

```bash
npm install
```

### 2️⃣ Lancer le serveur de développement

```bash
npm run dev
```

L’application est accessible à l’adresse : http://localhost:5173

## 🛠️ Scripts disponibles

```bash
npm run dev       # Lance le serveur de développement
npm run build     # Build de production
npm run preview   # Prévisualisation du build
```

## 🎯 Bonnes pratiques appliquées

- Composants nommés en PascalCase
- Styles isolés via Sass Modules
- Alias d’import pour éviter les chemins relatifs complexes
- Structure claire et évolutive
- Séparation logique entre styles globaux et styles de composants

## 👤 Auteur

Projet réalisé par Florent Bourdin
Dans le cadre de la formation Intégrateur Web – OpenClassrooms

```

```

# About

An Angular UI Component Library based from a personal Design System. This is a personal project that started out from a hobby. Your feedbacks are very welcome!

## Environment

This project was generated with:

- [Angular CLI](https://github.com/angular/angular-cli) version 16.0.5
- [NPM](https://docs.npmjs.com/cli/v9/commands/npm-version) version 9.7.1

## UI Components

These are the current UI Components available:
 |Type  | Module Name      | Component Class          | Selectors |
 |------| ---------------- | ------------------------ |-----------|
 |Button| NgNtButtonModule | NgNtButtonComponent      |button[nt-button]|
 |      |                  | NgNtIconButtonComponent  |button[nt-icon-button]|
 |Icon  | NgNtIconModule   | NgNtIconComponent        |ng-nt-icon|

## Usage

We recommend using @angular/cli to install.

1. Install the library using NPM

    ```bash
    npm install @tagolito/symbols
    ```

2. Import the needed modules in your **app.module.ts**.

    ```typescript
    import { NgNtButtonModule } from '@tagle/symbols';

    @NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgNtButtonModule,
        NgNtIconModule
    ],
    exports: [CommonModule],
    providers: [],
    bootstrap: [AppComponent]
    })
    export class AppModule { }
    ```

3. Use the selectors in your **app.component.html** template.

### BUTTONS

```html
<!-- TEXT ONLY BUTTON-->
<button nt-button color="basic">Home</button>

<!-- ICON & TEXT BUTTON-->
<button nt-icon-button color="basic">
    <ng-nt-icon material-style="outlined" icon-size="24px" shown-text="Home">Home</ng-nt-icon>
</button>

<!-- ICON ONLY BUTTON-->
<button nt-icon-button color="basic">
    <ng-nt-icon material-style="outlined" icon-size="24px">Home</ng-nt-icon>
</button>

<!-- DISABLED BUTTON-->
<button nt-button disabled>Profile</button>
```

You can only use the selector with the native **html button** markup tag. This allows you to have full control on the accessibility attributes.
|Attributes  | Acceptable Value            | Is Required? | Default Value |
|------------| --------------------------- | ------------ | ------------- |
|color       | [basic, primary, secondary] | Not Required | basic         |

### ICONS

Our icons uses [Google Fonts](https://fonts.google.com/icons).

For you to use this component, a stylesheet is needed. [Google Fonts](https://fonts.google.com/icons) offers 3 styles of icons namely **Outlined**, **Rounded**, and **Sharp**. After selecting your preference, add the stylesheet to your **index.html** file

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" />
```

In your component html template, use the selector in this manner:

```html
<ng-nt-icon material-style="outlined" icon-size="24px">Person</ng-nt-icon>
```

Type the desired icon name inside the tag.

|Attributes     | Acceptable Value            | Is Required? |
|---------------| --------------------------- | ------------ |
|material-style | [outlined, rounded, sharp]  | Required     |
|icon-size      | {number}px | Required       |              |

## Development Pipeline

1. How might we make the theme style dynamic with less dependency from any libraries?
2. How might we make a custom input fields?
3. How might we ensure accessibility for our components?
4. How might we improve the documentation?

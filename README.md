# TWD Mall Directory

A responsive website for a fictional shopping mall, TWD Mall. Visitors can browse **26 stores across 4 categories** and open a dedicated page for each store.

Built as a 5-person team project at Sunway University (Apr – Aug 2025).

**Stack:** HTML5 · CSS3 (Flexbox, Grid, media queries) · vanilla JavaScript · no frameworks, no build step

## Features

- **4 store categories plus an All Stores page:** Food & Beverage (10), Beauty & Fashion (8), Entertainment (4) and Others (4)
- **A page for every store,** reachable within 2 clicks of the home page through the navigation menu and category pages
- **Responsive layouts** for mobile, tablet and desktop, with breakpoints at 480, 768 and 1024 px
- **JavaScript interactions:** dropdown navigation menu, smooth scrolling and a back-to-top button
- **Account flow mock-up:** login, register, email, verification, reset-password and completion pages (front end only, with no backend, so any login opens the home page)
- **About Us and Contact Us** pages

## Run it

Clone the repository and open `index.html` in a browser. It starts at the login page; click **Login** to reach the home page. You can also open `Home.html` directly.

```bash
git clone https://github.com/0Blxz0/TWD-Mall-Directory.git
```

## Project structure

```text
index.html               # entry point, redirects to the login page
Loginpage.html …         # account flow pages (register, verification, reset password)
Home.html                # home page with category links
All/                     # every store on one page
food/  Beauty/  Entertainment/  Others/
  <Category>.html        # category page
  stores/ or Stores/     # one HTML page per store
AboutUs/  ContactUs/
group-script.js          # shared JavaScript (dropdown, smooth scroll, back to top)
style.css  Hernstyle.css # styles for the home and account pages
```

## Team

Chang Yi Hern · Gavin Goh Shau Han · Isaac Chee Man Tou · On Yong Jie · Phang Chee Fung

## Note

TWD Mall is fictional. Store names and photos belong to their respective owners and are used here for educational purposes only.

tailwind.config = {
          darkMode: "class",
          theme: {
            extend: {
              "colors": {
                "secondary-container": "#6f00be",
                "primary": "#c0c1ff",
                "on-background": "#dae2fd",
                "tertiary-fixed-dim": "#89ceff",
                "secondary-fixed": "#f0dbff",
                "primary-fixed-dim": "#c0c1ff",
                "primary-fixed": "#e1e0ff",
                "surface": "#0b1326",
                "surface-container-highest": "#2d3449",
                "on-primary-fixed-variant": "#2f2ebe",
                "on-tertiary-fixed": "#001e2f",
                "tertiary-container": "#009ada",
                "surface-bright": "#31394d",
                "surface-dim": "#0b1326",
                "on-primary-container": "#0d0096",
                "on-error": "#690005",
                "error-container": "#93000a",
                "surface-container": "#171f33",
                "background": "#0b1326",
                "on-surface": "#dae2fd",
                "surface-container-low": "#131b2e",
                "primary-container": "#8083ff",
                "error": "#ffb4ab",
                "on-secondary": "#490080",
                "tertiary": "#89ceff",
                "on-primary-fixed": "#07006c",
                "on-error-container": "#ffdad6",
                "surface-variant": "#2d3449",
                "on-secondary-container": "#d6a9ff",
                "inverse-primary": "#494bd6",
                "surface-container-high": "#222a3d",
                "on-tertiary-container": "#002d43",
                "outline": "#908fa0",
                "surface-container-lowest": "#060e20",
                "on-secondary-fixed": "#2c0051",
                "outline-variant": "#464554",
                "inverse-surface": "#dae2fd",
                "tertiary-fixed": "#c9e6ff",
                "secondary-fixed-dim": "#ddb7ff",
                "on-secondary-fixed-variant": "#6900b3",
                "on-primary": "#1000a9",
                "on-tertiary": "#00344d",
                "on-tertiary-fixed-variant": "#004c6e",
                "secondary": "#ddb7ff",
                "inverse-on-surface": "#283044",
                "surface-tint": "#c0c1ff",
                "on-surface-variant": "#c7c4d7"
              },
              "borderRadius": {
                "DEFAULT": "0.25rem",
                "lg": "0.5rem",
                "xl": "0.75rem",
                "full": "9999px"
              },
              "spacing": {
                "xl": "80px",
                "lg": "48px",
                "xs": "8px",
                "gutter": "24px",
                "md": "24px",
                "container-max": "1200px",
                "sm": "16px",
                "base": "4px"
              },
              "fontFamily": {
                "caption": ["Inter"],
                "body-lg": ["Inter"],
                "body-md": ["Inter"],
                "h1": ["Space Grotesk"],
                "h3": ["Space Grotesk"],
                "h2": ["Space Grotesk"],
                "label-caps": ["Space Grotesk"]
              },
              "fontSize": {
                "caption": ["12px", {"lineHeight": "1.4", "fontWeight": "400"}],
                "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}],
                "body-md": ["16px", {"lineHeight": "1.5", "fontWeight": "400"}],
                "h1": ["64px", {"lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                "h3": ["32px", {"lineHeight": "1.3", "fontWeight": "600"}],
                "h2": ["48px", {"lineHeight": "1.2", "letterSpacing": "-0.01em", "fontWeight": "600"}],
                "label-caps": ["14px", {"lineHeight": "1", "letterSpacing": "0.1em", "fontWeight": "500"}]
              }
            }
          }
        }


window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

    },1200);

});

document.addEventListener("DOMContentLoaded", () => {

    const menuBtn = document.getElementById("menuBtn");
    const mobileMenu = document.getElementById("mobileMenu");
    const openIcon = document.getElementById("openIcon");
    const closeIcon = document.getElementById("closeIcon");

    menuBtn.addEventListener("click", () => {

        mobileMenu.classList.toggle("hidden");

        openIcon.classList.toggle("hidden");
        closeIcon.classList.toggle("hidden");

    });

    document.querySelectorAll("#mobileMenu a").forEach(link => {

        link.addEventListener("click", () => {

            mobileMenu.classList.add("hidden");

            openIcon.classList.remove("hidden");
            closeIcon.classList.add("hidden");

        });

    });

});
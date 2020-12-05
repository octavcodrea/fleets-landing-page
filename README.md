[RO / EN]

[RO]
Proiectul e construit cu react-boostrap pentru layout.

Alinierea elementelor in pagina e facuta in bootstrap in componentele de React. (in numele claselor)

Componentele sunt:
- Header pentru bara de sus si navbar
    - Headerul schimba ce clasa de navbar randeaza in functie de scroll
- Slider pentru perechea de imagine si text. Efectul de text care apare litera cu litera este din componentul Typewriter randat in Slider
- Typewriter, component creat cu pachetul typed.js
- Cards1, primul set de carduri, cu stiluri de animatie si hover in App.scss
- Cards2, al doilea set de carduri, cu stiluri de animatie si hover in App.scss
- ParallaxContainer, sectiunea cu imaginea cu efect parallax cand se da scroll pe pagina
    - Efectul de parallax este controlat de pachetul react-scroll-parallax
- Footer, pentru footer.
- BackToTopButton, butonul care apare in dreapta jos dupa ce userul da scroll pe pagina

Componentele sunt create individual, si apoi sunt puse impreuna in Main.tsx .

Pentru efectele care tin de scrollul paginii, acestea depind de un prop din Main.tsx care inregistreaza scrollul.

Stilurile sunt aplicate din App.scss . Efectele pentru hover si click sunt continute si ele in App.scss.

Pentru content, textul e luat dintr-o serie de .json-uri care contin stringurile in functie de limba selectata.
Alegerea stringurilor din .json-uri e facuta cu pachetul react-intl . Tot textul ce va aparea pe pagina va fi extras din acele stringuri.

Iconurile sunt luate din pachetul react-icons. Fiecare icon folosit este importat ca si component din react-icons.

[EN]
This project is built with react-bootstrap for layout.

Element alignment is done with Bootstrap in the React components. (in class names)

The components are:
- Header for the top bar and the navbar
    - The header switches between what navbar class it renders depending on page scroll
- Slider for the main image and text pair. The typewriter effect is rendered by the Typewriter component.
- Typewriter, created using the typed.js package
- Cards1, the first set of cards. Styles used are contained in App.scss
- Cards2, the second set of cards. Styles used are contained in App.scss
- ParallaxContainer, the image section with a parallax effect when scrolling the page
    - The parallax effect is controlled by using the react-scroll-parallax package
- Footer
- BackToTopButton

Components are created individually and are assembled into the page in Main.tsx .

For effects pertaining to page scrolling, these depend on a prop from Main.tsx which listens for page scrolling.

Styles are applied from App.scss . Hover and active events are contained as well in App.scss.

For content, the text is extracted from a series of .jsons that contain strings depending on the selected language.
Choosing the strings from the .jsons is done with the react-intl package. All the text displayed on the page is taken from those strings.

The icons used are taken from the react-icons package. Each icon is imported as a component from react-icons.
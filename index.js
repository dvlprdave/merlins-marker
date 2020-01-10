import { colors } from './colorHelper'

const inputs = [].slice.call(document.querySelectorAll('input[type="color"]'));

async function get_css_and_replace_vars() {
  const res = await fetch("./themes/prism.css");
  const orig_css = await res.text();
  let updated_css = orig_css;
  const regexp = /(?:var\(--)[a-zA-z\-]*(?:\))/g;
  let cssVars = orig_css.matchAll(regexp);
  cssVars = Array.from(cssVars).flat();

  for (const v of cssVars) {
    updated_css = updated_css.replace(v, colors[v.slice(6, -1)]);
  }
  console.log(updated_css);
}

const handleThemeUpdate = (colors) => {
  const root = document.querySelector(':root');
  const keys = Object.keys(colors);
  keys.forEach(key => {
    root.style.setProperty(key, colors[key]);
  });
}

inputs.forEach((input) => {
  input.addEventListener('change', (e) => {
    e.preventDefault()
    const cssPropName = `--${e.target.id}`;
    document.styleSheets[2].cssRules[3].style.setProperty(cssPropName, e.target.value)
    handleThemeUpdate({
      [cssPropName]: e.target.value
    });
    console.log(`${cssPropName} is now ${e.target.value}`)
    console.log('stylesheet:', document.styleSheets[2].cssRules)
    get_css_and_replace_vars()
  });
});


// const cssRules = document.styleSheets[2].cssRules;
// for (var i = 0; i < cssRules.length; i++) {
//   // Finds css variable names
//   const regexp = /(?:var\(--)[a-zA-z\-]*(?:\))/

//   let cssVariables = cssRules[i].cssText.matchAll(regexp)
//   cssVariables = Array.from(cssVariables).join()

// }



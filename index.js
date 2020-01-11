import { colors } from './colorHelper'

const inputs = [].slice.call(document.querySelectorAll('input[type="color"]'));

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
    const cssPropName = `--${e.target.id}`

    document.styleSheets[2].cssRules[3].style.setProperty(cssPropName, e.target.value)

    handleThemeUpdate({
      [cssPropName]: e.target.value
    });

    updatedUserStyleSheet()
  });
});

const updatedUserStyleSheet = async () => {
  const res = await fetch("./themes/prism.css");
  const orig_css = await res.text();
  let updated_css = orig_css;

  const regexp = /(?:var\(--)[a-zA-z\-]*(?:\))/g;
  let cssVars = orig_css.matchAll(regexp);
  cssVars = Array.from(cssVars).flat();

  for await (const variable of cssVars) {
    updated_css = updated_css.replace(variable, colors[variable.slice(6, -1)]);
  }

  // Download button
  const downloadBtn = document.getElementById('download-btn')
  downloadBtn.setAttribute('href', 'data:application/octet-stream;charset=utf-8,' + encodeURIComponent(updated_css))

  console.log(updated_css)
}

updatedUserStyleSheet()

// var a = window.document.createElement('a');
// a.href = window.URL.createObjectURL(new Blob([updatedUserStyleSheet()], { type: 'text/css' }));
// a.download = 'test.css';

// // Append anchor to body.
// document.body.appendChild(a);
// a.click();

// // Remove anchor from body
// document.body.removeChild(a);
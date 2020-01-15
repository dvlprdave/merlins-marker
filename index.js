import { colors } from './colorHelper'

const inputs = [].slice.call(document.querySelectorAll('input[type="color"]'));

const handleUpdate = (e) => {
  document.documentElement.style.setProperty(`--${e.target.id}`, e.target.value);
  const colorVal = e.target.value
  console.log(`--${e.target.id} is now ${e.target.value}`)
  return colorVal
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));

const fetchStyleSheet = async () => {
  const res = await fetch("./themes/prism.css");
  const orig_css = await res.text();
  let updated_css = orig_css;

  const regexp = /(?:var\(--)[a-zA-z\-]*(?:\))/g;
  let cssVars = orig_css.matchAll(regexp);
  cssVars = Array.from(cssVars).flat();
  console.log(cssVars)

  for await (const variable of cssVars) {
    updated_css = updated_css.replace(variable, colors[variable.slice(6, -1)]);
    // updated_css = updated_css.replace(variable, value);
    console.log(variable.slice(6, -1))
  }

  // console.log(updated_css)

  return updated_css
}

const main = async () => {
  const updated_css = await fetchStyleSheet()
  const downloadBtn = document.getElementById('download-btn')
  downloadBtn.addEventListener('click', () => {
    downloadBtn.setAttribute('href', 'data:application/octet-stream;charset=utf-8,' + encodeURIComponent(updated_css))
    downloadBtn.setAttribute('download', 'prism-theme.css')
  })
}

main()
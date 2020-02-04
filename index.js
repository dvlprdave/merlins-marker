const inputs = [].slice.call(document.querySelectorAll('input[type="color"]'))

const handleUpdate = (e) => {
  document.documentElement.style.setProperty(`--${e.target.id}`, e.target.value);
}

inputs.forEach(input => input.addEventListener('input', handleUpdate));

(function handleInputs() {
  const colorInputs = document.querySelectorAll('.color-wrapper input');
  colorInputs.forEach(element => {
    element.parentNode.style.background = element.value;

    element.addEventListener("input", () => {
      element.parentNode.style.background = element.value;
    });
  })
})()

const fetchStyleSheet = async () => {
  const res = await fetch("./themes/prism.css");
  const orig_css = await res.text();
  let updated_css = orig_css;

  const regexp = /(?:var\(--)[a-zA-z\-]*(?:\))/g;
  let cssVars = orig_css.matchAll(regexp);
  cssVars = Array.from(cssVars).flat();

  for await (const variable of cssVars) {
    const trimmedVar = variable.slice(6, -1)
    const styles = getComputedStyle(document.documentElement)
    const value = String(styles.getPropertyValue(`--${trimmedVar}`)).trim()

    updated_css = updated_css.replace(variable, value);
  }

  return updated_css
}

const downloadBtn = document.getElementById('download-btn')
downloadBtn.addEventListener('click', async (e) => {
  if (!e.isTrusted) return
  try {
    event.preventDefault()
    const updated_css = await fetchStyleSheet()

    downloadBtn.setAttribute('href', 'data:application/octet-stream;charset=utf-8,' + encodeURIComponent(updated_css))
    downloadBtn.setAttribute('download', 'prism-theme.css')
    downloadBtn.click()
  } catch (err) {
    alert(err)
  }
})
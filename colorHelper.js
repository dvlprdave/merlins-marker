const colorSelect = {
  'Line Highlights': {
    'highlight-background': '#F7EBC6',
    'highlight-accent': '#F7D87C'
  },
  'Inline Code': {
    'inline-code-color': '#DB4C69',
    'inline-code-background': '#F9F2F4'
  },
  'Code Blocks': {
    'block-background': '#0D2831',
    'base-color': '#5C6E74',
    'selected-color': '#b3d4fc'
  },
  'Tokens': {
    'comment-color': '#93A1A1',
    'punctuation-color': '#999999',
    'property-color': '#990055',
    'selector-color': '#669900',
    'operator-color': '#a67f59',
    'operator-background': '#FFFFFF',
    'variable-color': '#ee9900',
    'function-color': '#DD4A68',
    'keyword-color': '#0077aa'
  }
}

const colorNames = []
const colors = {}

Object.keys(colorSelect).map(key => {
  const group = colorSelect[key]
  Object.keys(group).map(color => {
    colorNames.push(color)
    colors[color] = group[color]
  })
})

export { colorSelect, colorNames, colors }
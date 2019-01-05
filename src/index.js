function component() {
  let element = document.createElement('div')

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack', 'hi4'], ' ')

  return element
}

$('body').append(component())

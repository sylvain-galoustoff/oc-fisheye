export function addAccessibilityToElement (element) {
  // add all the elements inside modal which you want to make focusable
  const focusableElements =
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  const focusableContent = element.querySelectorAll(focusableElements)

  const firstFocusableElement = focusableContent[0]
  const lastFocusableElement = focusableContent[focusableContent.length - 1]

  document.addEventListener(
    'keydown',
    trapFocus.bind(this, firstFocusableElement, lastFocusableElement)
  )

  firstFocusableElement.focus()
}

export function removeAccessibilityToElement (element) {
  element.removeEventListener('keydown', trapFocus)
}

function trapFocus (firstFocusableElement, lastFocusableElement, e) {
  const isTabPressed = e.key === 'Tab' || e.keyCode === 9

  if (!isTabPressed) {
    return
  }

  if (e.shiftKey) {
    // if shift key pressed for shift + tab combination
    if (document.activeElement === firstFocusableElement) {
      lastFocusableElement.focus() // add focus for the last focusable element
      e.preventDefault()
    }
  } else {
    // if tab key is pressed
    if (document.activeElement === lastFocusableElement) {
      // if focused has reached to last focusable element then focus first focusable element after pressing tab
      firstFocusableElement.focus() // add focus for the first focusable element
      e.preventDefault()
    }
  }
}

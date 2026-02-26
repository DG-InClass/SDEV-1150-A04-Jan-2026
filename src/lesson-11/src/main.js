console.log('Lesson 11 starter loaded');

// Make sure that they keyboard input is directed to the
// first <input /> element of the form.
const firstInput = document.querySelector('[name=fullName]');
firstInput.focus();

const form = document.querySelector('#contact-form');
const result = document.querySelector('#result');

function serializeForm(formEl) {
  const fullNameValue = formEl.elements.fullName.value;
  const emailValue = formEl.elements.email.value;
  const bioValue = formEl.elements.bio.value;

  const planValue = formEl.elements.plan.value;
  let topicValue = '';
  formEl.elements.topics.forEach((el) => {
    if (el.checked) {
      topicValue += `${el.value} `;
    }
  });

  return {
    fullName: fullNameValue,
    email: emailValue,
    bio: bioValue,
    plan: planValue,
    topics: topicValue,
  };
}

// Clears the browser validation tooltip on each keystroke
form.addEventListener('input', (e) => {
  e.target.setCustomValidity('');
})

// I prefer the 'change' event over the 'input' (as suggested in the ReadMe)
// because the 'change' event happens after the user is done entering data
// into the <input />. The 'input' event is triggered on every keystroke.
form.addEventListener('change', (e) => {
  const inputElement = e.target;
  console.log(inputElement);
  const nameAttr = inputElement.name;
  switch(nameAttr) {
    case 'fullName':
      checkFullName(inputElement);
      break;
    case 'email':
      checkEmail(inputElement);
      break;
    case 'bio':
      checkBiography(inputElement);
      break;
    default:
      // do nothing
      break;
  }
  inputElement.reportValidity();
});

/**
 * Checks that the full name has at least two parts
 * @param {HTMLInputElement} el The element to be validated
 */
const checkFullName = function(el) {
  // fullName: require at least two "parts" to the name
  const fullName = el.value;
  const nameParts = fullName.split(' ');
  if(nameParts.length < 2) {
    el.setCustomValidity('Full Name must contain at least two words');
  } else {
    el.setCustomValidity('');
  }
}

/**
 * Check that it's a reasonable email
 * @param {HTMLInputElement} el The element to validate
 */
const checkEmail = (el) => {
  // email: minimal email format - have a '@' sign
  const email = el.value;
  if(!email.includes('@')) {
    el.setCustomValidity('Your email must contain an "@" symbol');
  } else {
    el.setCustomValidity('');
  }
}

/**
 * Check that the biography is at least 40 characters in length
 * @param {HTMLTextAreaElement} el The element to validate
 */
function checkBiography(el) {
  // bio: minimum length of 40 characters
  const bio = el.value;
  if(bio.length < 40) {
    el.setCustomValidity('Your biography must be at least 40 characters in length');
  } else {
    el.setCustomValidity('');
  }
}


form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const data = serializeForm(form);
  // Student TODO: Add validation logic to the form, ensure all fields are valid before allowing submission
  // HINT: see the 'input' event listener below for examples of validation logic. Perhaps
  // you can reuse some of that code here to validate all fields on submit, or create validation
  // functions that can be reused in both places.
  // OPTIONAL - use the following alongside the `novalidate` form attribute
  // to trigger built-in HTML validation
  if (form.checkValidity()) {
    result.textContent = `
      Submission received:
      - Name: ${data.fullName}
      - Email: ${data.email}
      - Bio: ${data.bio}
      - Plan: ${data.plan}
      - Topics: ${data.topics}
    `;
  } // end if form.checkValidity()
});

form.addEventListener('reset', () => {
  result.textContent = 'Awaiting submission...';
});

// 1. Add validation logic to the form on 'input' events

// 1.1 custom validation for fullName (must contain two words)

// 1.2 custom validation for bio (minimum length)

// 1.3 custom validation for email (basic '@' symbol check)

// 1.4 report the validity status to the user
  
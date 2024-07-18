// I have uploaded the files, do your magic

// List of Classes
//  1 indent means child
//  2 indent means child of child (grandchild)
//  Two line breaks means another completely separate

// newsletter

// newsletter_text (wrapper)
// newsletter_header
// newsletter_paragraph
// newsletter_list
// newsletter_listItem
// newsletter_form

// newsletter_form-label
// newsletter_form-email
// newsletter_form-submit

// newsletter_img

// success
// success_image
// success_header
// success_paragraph
// success_emphasizetext

// success_button

(function () {
  const emailInput = document.getElementById("email");

  const showSuccessPage = () => {
    document
      .getElementById("newsletter-element")
      .classList.remove("newsletter--active");
    document
      .getElementById("success-page-element")
      .classList.add("success--active");
  };

  const showInvalidEmailMesage = () => {
    emailInput.classList.add("newsletter_form-email--error");
    document
      .getElementById("error-message")
      .classList.add("error-wrapper__error-message--active");
  };

  const hideInvalidMessage = () => {
    emailInput.classList.remove("newsletter_form-email--error");
    document
      .getElementById("error-message")
      .classList.remove("error-wrapper__error-message--active");
  };

  const isEmailValid = () => {
    if (emailInput.checkValidity()) {
      return true;
    } else {
      return false;
    }
  };

  const formSubmit = (event) => {
    event.preventDefault();
    if (isEmailValid()) {
      showSuccessPage();
    } else {
      showInvalidEmailMesage();
    }
  };

  emailInput.addEventListener("input", () => {
    if (emailInput.checkValidity()) {
      hideInvalidMessage();
    }
  });
  document.getElementById("user-form").addEventListener("submit", formSubmit);
})();

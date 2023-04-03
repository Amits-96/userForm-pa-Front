export const validateFormData = (formData, errorData, setErrorData, errObj) => {
  let errorInForm;

  if (!formData.firstName) {
    errObj.firstName = "*This field is required";
    errorInForm = true;
  }

  if (!formData.lastName) {
    errObj.lastName = "*This field is required";
    errorInForm = true;
    console.log("formdata", errorInForm)
  }

  if (!formData.email) {
    errObj.email = "*This field is required";
    errorInForm = true;
  }
  if (formData.email) {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (regex.test(formData.email)) {
      errObj.email = "";
      errorInForm = false;
    } else {
      errObj.email = "*Invalid field";
      errorInForm = true;
    }
  }

  if (!formData.phone) {
    errObj.phone = "*This field is required";
    errorInForm = true;
  }
  if (formData.phone) {
    let regex = /^[0-9]*\d$/;
    if (regex.test(formData.phone)) {
      errObj.phone = "";
      errorInForm = false;
    } else {
      errObj.phone = "*Invalid field";
      errorInForm = true;
    }
  }

  if (!formData.address) {
    errObj.address = "*This field is required";
    errorInForm = true;
  }
  setErrorData({ ...errObj });
  return errorInForm;
};
import { addBlur } from "../addBlur/addBlur";
let feedbackOpened = false;
let callOpened = false;

const openAndCloseModal = () => {
  const feeedbackModal = document.querySelector('.page__modal--feedback');
  const callModal = document.querySelector('.page__modal--call');
  const page = document.querySelector('.page__main');

  const openBtnFeedback = document.querySelectorAll('.btn--type-chat')[1];
  const closeBtnFeedback = document.querySelectorAll('.btn--type-close')[1];

  const openBtnCall = document.querySelectorAll('.btn--type-phone')[1];
  const closeBtnCall = document.querySelectorAll('.btn--type-close')[2];

  openBtnFeedback.addEventListener('click', function() {
    callModal.classList.add('modal-hidden');
    callModal.classList.remove('modal-open');
    addBlur(true);
    feeedbackModal.classList.remove('none');

    openFeedbackModal();
  })

  openBtnCall.addEventListener('click', function() {
    feeedbackModal.classList.add('modal-hidden');
    feeedbackModal.classList.remove('modal-open');
    addBlur(true);
    callModal.classList.remove('none');

    openCallModal();
  })

  const openFeedbackModal = function() {
    if (!feedbackOpened) {
      feedbackOpened = true;
      feeedbackModal.classList.add('modal-open');
      feeedbackModal.classList.remove('modal-hidden');
  
      callModal.classList.add('none');
  
      addBlur(false);
    }
  
    if (feedbackOpened) {
      feedbackOpened = false;
      
      page.addEventListener('click', function() {
        feeedbackModal.classList.remove('modal-open');
        feeedbackModal.classList.add('modal-hidden');
        addBlur(true);
        callModal.classList.remove('none');
      })
  
      closeBtnFeedback.addEventListener('click', function() {
        feeedbackModal.classList.add('modal-hidden');
        feeedbackModal.classList.add('hidden');
        feeedbackModal.classList.remove('modal-open');
        addBlur(true);
      })
    }
  }

  const openCallModal = function() {
    if (!callOpened) {
      callOpened = true;
      callModal.classList.add('modal-open');
      callModal.classList.remove('modal-hidden');
  
      feeedbackModal.classList.add('none');
  
      addBlur(false);
    }
  
    if (callOpened) {
      callOpened = false;
  
      page.addEventListener('click', function() {
        callModal.classList.remove('modal-open');
        callModal.classList.add('modal-hidden');
        addBlur(true);
        feeedbackModal.classList.remove('none');
      })
  
      closeBtnCall.addEventListener('click', function() {
        callModal.classList.add('modal-hidden');
        callModal.classList.add('none');
        callModal.classList.remove('modal-open');
        addBlur(true);
      })
    }
  }

}

openAndCloseModal();  
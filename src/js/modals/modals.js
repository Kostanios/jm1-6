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

  const screenWidth = window.screen.width;

  // Открываем окно "Обратная связть" при нажатии на кнопку и закрываем окно "Заказать звонок"

  openBtnFeedback.addEventListener('click', function() {
    callModal.classList.add('modal-hidden');
    callModal.classList.remove('modal-open');
    feeedbackModal.classList.remove('none');
    document.body.style.overflow = 'hidden';
    
    if (screenWidth >= 1120) {
      addBlur(false);
    }

    openAndCloseFeedbackModal();
  })

  // Открываем окно и закр "Заказать звонок" при нажатии на кнопку и закрываем окно "Обратная связь"

  openBtnCall.addEventListener('click', function() {
    feeedbackModal.classList.add('modal-hidden');
    feeedbackModal.classList.remove('modal-open');
    callModal.classList.remove('none');
    document.body.style.overflow = 'hidden';

    if (screenWidth >= 1120) {
      addBlur(false);
    }

    openAndCloseCallModal();
  })

  const openAndCloseFeedbackModal = function() {
    if (!feedbackOpened) {
      feedbackOpened = true;
      feeedbackModal.classList.add('modal-open');
      feeedbackModal.classList.remove('modal-hidden');
  
      callModal.classList.add('none');
  
      
    }
  
    if (feedbackOpened) {
      feedbackOpened = false;
      
      page.addEventListener('click', function() {
        feeedbackModal.classList.remove('modal-open');
        feeedbackModal.classList.add('modal-hidden');
        document.body.style.overflow = '';
        addBlur(true);
      })
  
      closeBtnFeedback.addEventListener('click', function() {
        feeedbackModal.classList.add('modal-hidden');
        feeedbackModal.classList.add('none');
        feeedbackModal.classList.remove('modal-open');
        document.body.style.overflow = '';

        if (screenWidth >= 1120) {
          addBlur(true);
        }     
      })
    }
  }

  const openAndCloseCallModal = function() {
    if (!callOpened) {
      callOpened = true;
      callModal.classList.add('modal-open');
      callModal.classList.remove('modal-hidden');
  
      feeedbackModal.classList.add('none');
  
      
    }
  
    if (callOpened) {
      callOpened = false;
  
      page.addEventListener('click', function() {
        callModal.classList.remove('modal-open');
        callModal.classList.add('modal-hidden');
        addBlur(true);
        document.body.style.overflow = '';
      })
  
      closeBtnCall.addEventListener('click', function() {
        callModal.classList.add('modal-hidden');
        callModal.classList.add('none');
        callModal.classList.remove('modal-open');
        document.body.style.overflow = '';

        if (screenWidth >= 1120) {
          addBlur(true);
        }  
      })
    }
  }

}

openAndCloseModal();
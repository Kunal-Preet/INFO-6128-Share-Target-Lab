const elements = {
    h1: document.querySelector('h1'),
    titleInput: document.querySelector('#title'),
    textInput: document.querySelector('#text'),
    urlInput: document.querySelector('#url'),
    shareBtn: document.querySelector('#share'),
  }

  const onShare = async () => {
    const title = elements.titleInput.value;
    const text = elements.textInput.value;
    const url = elements.urlInput.value;
  
    try {
      if (navigator.share) {
        await navigator.share({
          title, text, url
        })
        console.log('Opened share sheet successfully', {title, text, url});
      } else {
        console.log('Opened share sheet successfully');
  
      }
    } catch (e) {
      console.error(`Could not open share dialog`, e);
    }
  }

  elements.shareBtn.addEventListener('click', onShare);



window.addEventListener('DOMContentLoaded', () => {
    const parsedUrl = new URL(window.location);
    // searchParams.get() will properly handle decoding the values.
    console.log('Title shared: ' + parsedUrl.searchParams.get('title'));
    console.log('Text shared: ' + parsedUrl.searchParams.get('text'));
    console.log('URL shared: ' + parsedUrl.searchParams.get('url'));
    const titleShared = parsedUrl.searchParams.get('title');
    const textShared = parsedUrl.searchParams.get('text');
    const urlShared = parsedUrl.searchParams.get('url');
    document.querySelector('#title').innerHTML = `Title : ${titleShared}<br></br>`;
    document.querySelector('#text').innerHTML = `Text : ${textShared}<br></br>`;
    document.querySelector('#url').innerHTML = `URL : ${urlShared}<br></br>`;
    

  });
 

document.addEventListener('DOMContentLoaded', () => {
  const htmlCodeTextarea = document.getElementById('htmlCode');
  const outputIframe = document.getElementById('output');
  const runButton = document.getElementById('runButton');
  const outputTitleSpan = document.getElementById('output-title');

  const originalPageTitle = document.title;

  const updateOutput = () => {
    outputIframe.srcdoc = htmlCodeTextarea.value;
  };

  outputIframe.addEventListener('load', () => {
    let newTitleContent = '';

    if (outputIframe.contentDocument) {
      const titleElement = outputIframe.contentDocument.querySelector('title');

      if (titleElement && titleElement.textContent.trim() !== '') {
        newTitleContent = titleElement.textContent.trim();
        document.title = newTitleContent;
      } else {
        document.title = originalPageTitle;
        newTitleContent = 'Sem Título';
      }
    }

    outputTitleSpan.textContent = `"${newTitleContent}"`;
  });

  runButton.addEventListener('click', updateOutput);
  updateOutput();
});

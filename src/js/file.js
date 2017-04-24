"use strict";
module.exports = (function () {

  function openFile(successHandler, errorHandler) {
    chooseFile(function (e) {
      successHandler(e.target.result);
    }, errorHandler);
  }

  function chooseFile(successHandler, errorHandler) { // TODO check for updated method on Chrome documentation

    var accepts = [{
      mimeTypes: ['text/html'],
      extensions: ['html', 'htm']
    }];

    chrome.fileSystem.chooseEntry({ type: 'openFile', accepts: accepts }, function (readOnlyEntry) {
      if (!readOnlyEntry) {
        errorHandler(new Error('No file selected'));
        return;
      }
      try { // TODO remove try once retain is in stable.
        chrome.storage.local.set({
          'chosenFile': chrome.fileSystem.retainEntry(readOnlyEntry)
        });
      }
      catch (e) {
        errorHandler(e);
      }
      // load file entry
      readOnlyEntry.file(function (file) {
        var reader = new FileReader();
        reader.onerror = errorHandler;
        reader.onloadend = successHandler;
        reader.readAsText(file);
      });
    });

  }

  return {
    openFile: openFile
  }

})()
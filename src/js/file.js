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

  function saveFile(file_name, file_content, successHandler, errorHandler) {
    selectFolderAndWriteFile(file_name, '.html', file_content, 'text/html', successHandler, errorHandler);
  }

  function selectFolderAndWriteFile(file_name, file_extension, file_content, file_type, successHandler, errorHandler) {
    try {
      chrome.fileSystem.chooseEntry({ type: 'openDirectory' }, function (entry) {
        chrome.fileSystem.getWritableEntry(entry, function (entry) {
          entry.getFile(file_name + file_extension, { create: true }, function (entry) {
            entry.createWriter(function (writer) {
              writer.write(new Blob([file_content], { type: file_type }));
              successHandler();
            });
          });
        });
      });
    } catch (error) {
      errorHandler(error);
    }
  }

  return {
    openFile: openFile,
    saveFile: saveFile
  }

})()
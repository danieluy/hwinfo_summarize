"use strict";


module.exports = (function () {

  function renderFile(data) {

    var wrapper = document.createElement('div');

    var title = document.createElement('h2');
    title.textContent = data.name;

    var name = document.createElement('div');
    var name_label = document.createElement('label');
    var name_data = document.createElement('p');
    name_label.textContent = 'PC User:';
    name_data.textContent = data.user;
    name.appendChild(name_label);
    name.appendChild(name_data);
    name.classList.add('card');

    var os = document.createElement('div');
    var os_label = document.createElement('label');
    var os_data = document.createElement('p');
    os_label.textContent = 'Operating System:';
    os_data.textContent = data.os;
    os.appendChild(os_label);
    os.appendChild(os_data);
    os.classList.add('card');

    var motherboard = document.createElement('div');
    var motherboard_label = document.createElement('label');
    var motherboard_data = document.createElement('p');
    var motherboard_ul = document.createElement('ul');
    var motherboard_li = document.createElement('li');
    motherboard_label.textContent = 'Motherboard:';
    motherboard_data.textContent = data.motherboard.model;
    motherboard_li.textContent = 'Chipset: ' + data.motherboard.chipset;
    motherboard.appendChild(motherboard_label);
    motherboard.appendChild(motherboard_data);
    motherboard_ul.appendChild(motherboard_li);
    motherboard.appendChild(motherboard_ul);
    motherboard.classList.add('card');

    var processor = document.createElement('div');
    var processor_label = document.createElement('label');
    var processor_data = document.createElement('p');
    var processor_ul = document.createElement('ul');
    var processor_li = document.createElement('li');
    processor_label.textContent = 'Processor:';
    processor_data.textContent = data.processor.name;
    processor_li.textContent = 'Cores: ' + data.processor.cores + ' x ' + data.processor.logical + ' ( physical x logical )';
    processor.appendChild(processor_label);
    processor.appendChild(processor_data);
    processor_ul.appendChild(processor_li);
    processor.appendChild(processor_ul);
    processor.classList.add('card');

    var processor = document.createElement('div');
    var processor_label = document.createElement('label');
    var processor_data = document.createElement('p');
    var processor_ul = document.createElement('ul');
    var processor_li = document.createElement('li');
    processor_label.textContent = 'Processor:';
    processor_data.textContent = data.processor.name;
    processor_li.textContent = 'Cores: ' + data.processor.cores + ' x ' + data.processor.logical + ' ( physical x logical )';
    processor.appendChild(processor_label);
    processor.appendChild(processor_data);
    processor_ul.appendChild(processor_li);
    processor.appendChild(processor_ul);
    processor.classList.add('card');

    var memory = document.createElement('div');
    var memory_label = document.createElement('label');
    var memory_data = document.createElement('p');
    var memory_ul = document.createElement('ul');
    var memory_li = document.createElement('li');
    memory_label.textContent = 'RAM memory:';
    memory_data.textContent = (data.ram_memory.total_MB / 1024) + 'GB';
    memory_li.textContent = 'Slots: ' + data.ram_memory.slots.length;
    memory.appendChild(memory_label);
    memory.appendChild(memory_data);
    memory_ul.appendChild(memory_li);
    memory_ul.appendChild(getMemoryDevicesDOM(data.ram_memory.slots));
    memory.appendChild(memory_ul);
    memory.classList.add('card');

    wrapper.appendChild(title);
    wrapper.appendChild(name);
    wrapper.appendChild(os);
    wrapper.appendChild(motherboard);
    wrapper.appendChild(processor);
    wrapper.appendChild(memory);

    render(wrapper);
  }
  function getMemoryDevicesDOM(devices) {
    var slots_ol = document.createElement('ol');
    devices.forEach(device => {
      var slot_li = document.createElement('li');
      slot_li.textContent = device.size.trim() === '0 MBytes' ? 'Libre' : device.size + ' | ' + device.type + ' | ' + device.speed + ' (' + device.manufacturer + ')';
      slots_ol.appendChild(slot_li);
    })
    return slots_ol;
  }
  function render(dom) {
    var output = document.getElementById('output');
    output.innerHTML = '';
    output.appendChild(dom);
  }
  return {
    renderFile: renderFile
  }
})();
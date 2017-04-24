"use strict";


module.exports = (function () {

  function renderFile(data) {

    var wrapper = document.createElement('div');

    var h1 = document.createElement('h1');
    h1.textContent = data.file_name;

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

    wrapper.appendChild(h1);
    wrapper.appendChild(name);
    wrapper.appendChild(os);

    render(wrapper);

    /*

    <div class="card">
      <label>Placa:</label>
      <p>${parsed_file.motherboard.model}</p>
      <ul>
        <li>Chipset: ${parsed_file.motherboard.chipset}</li>
      </ul>
    </div>

    <div class="card">
      <label>Procesador:</label>
      <p>${parsed_file.processor.name}</p>
      <ul>
        <li>Núcleos: ${parsed_file.processor.cores} x ${parsed_file.processor.logical} <i>(cores x logical)</i></li>
      </ul>
    </div>

    <div class="card">
      <label>Memoria RAM:</label>
      <p>${parsed_file.ram_memory.total_MB / 1024}GB RAM</p>
      <ul>
        <li>Bancos: ${parsed_file.ram_memory.slots.length}</li>
        <ul>
          ${getMemoryDevicesDOM(parsed_file.ram_memory.slots)}
        </ul>
      </ul>
    </div>*/
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
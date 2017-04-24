"use strict";
var cheerio = require('cheerio');
module.exports = (function () {


  function parseFile(string_data) {
    var $ = cheerio.load(string_data);
    return parsePcInfo($);
  }

  function parsePcInfo($) {
    const pc_info = {
      name: '',
      os: '',
      user: '',
      processor: { packages: 0, cores: 0, logical: 0, name: '', frequency_MHz: 0 },
      motherboard: { model: '', chipset: '' },
      ram_memory: { total_MB: 0, slots: [] }
    }
    $('td').each((i, td) => {
      const label = $(td).text();
      const txt = $(td).next().text().trim();
      switch (label) {
        case 'Computer Name:': pc_info.name = txt; break;
        case 'Operating System:': pc_info.os = txt; break;
        case 'Current User Name:': pc_info.user = txt; break;
        case 'CPU Brand Name:': pc_info.processor.name = txt; break;
        case 'Original Processor Frequency [MHz]:': pc_info.processor.frequency_MHz = parseNumber(txt); break;
        case 'Number Of Processor Packages (Physical):': pc_info.processor.packages = parseNumber(txt); break;
        case 'Number Of Processors Cores:': pc_info.processor.cores = parseNumber(txt); break;
        case 'Number Of Logical Processors:': pc_info.processor.logical = parseNumber(txt); break;
        case 'Motherboard Model:': pc_info.motherboard.model = txt; break;
        case 'Motherboard Chipset:': pc_info.motherboard.chipset = txt; break;
        case 'Total Memory Size [MB]:': pc_info.ram_memory.total_MB = parseNumber(txt); break;
        case 'Memory Device': pc_info.ram_memory.slots.push(parseMemoryDevice($, $(td).parent().next().next())); break;
        default: break;
      }
    })
    return pc_info;
  }
  function parseNumber(val) {
    if (isNaN(val))
      return null;
    return parseFloat(val);
  }
  function parseMemoryDevice($, table) {
    const memory_device = {}
    $(table, 'td')
      .text()
      .split('\n')
      .map(text => text.trim().split(':'))
      .forEach(tuple => {
        switch (tuple[0]) {
          case 'Manufacturer': memory_device.manufacturer = tuple[1]; break;
          case 'Device Size': memory_device.size = tuple[1]; break;
          case 'Device Type': memory_device.type = tuple[1]; break;
          case 'Memory Speed': memory_device.speed = tuple[1]; break;
          default: break;
        }
      })
    return memory_device;
  }

  return {
    parseFile: parseFile
  }

})()
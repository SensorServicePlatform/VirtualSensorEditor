/**
 * Copyright (c) 2013 Carnegie Mellon University Silicon Valley. 
 * All rights reserved. 
 *
 * This program and the accompanying materials are made available
 * under the terms of dual licensing(GPL V2 for Research/Education
 * purposes). GNU Public License v2.0 which accompanies this distribution
 * is available at http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. 
 *
 * Please contact http://www.cmu.edu/silicon-valley/ if you have any 
 * questions.
 */
var
  url = "", 
  interval = 3000,
  updateTime = 0;

function pollData(start_time, end_time){
  try {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
        if (xhr.status == 200 || xhr.status ==0) { postMessage(xhr.responseText); }
        else { throw  xhr.status+xhr.responseText; }
        setTimeout( function(){ 
          var lastUpdateTime = updateTime;
          updateTime = (new Date()).getTime();
          pollData(lastUpdateTime, updateTime);
        }, interval);
      }
    };
    xhr.open("GET",url+"?start_time="+start_time+"&end_time="+end_time, true);
    xhr.send();
  } catch(e){ postMessage("ERROR:"+e.message);}
}


self.addEventListener('message', function(e) {
  //self.postMessage("worker started");
  switch(e.data.type){
    case "START":
      url = e.data.url;
      updateTime = e.data.update_time;
      pollData(e.data.init_time, updateTime);
      break;
    case "STOP":
      self.close();
      break;
  }
}, false);

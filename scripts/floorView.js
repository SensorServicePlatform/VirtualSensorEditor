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
var sn_visualization = sn_visualization || {};

sn_visualization.floorViews = (function(){
  var
    viewsTable = {},
    insertView = function(viewId, view){
      viewsTable[viewId] = view;
    },
    getView = function(viewId){
      return viewsTable[viewId];
    };
  return {
    insertView : insertView,
    getView : getView
  };
}());


sn_visualization.floorView = function(bgGeo, elevations, ugTable, selector, imgs){
  // temporary use cmusv second floor as default
  this.heatmaps = [],
  this.selector = selector || "#geographicalView #geographicalContainer";
  this.backgroundGeo = bgGeo || [[37.410326,-122.059208], [37.410490,-122.060227]];
  this.elevations = elevations || 1;
  this.uriGeoTable = ugTable || {
    '17020005' : { print_name : "Sensor Andrew 214B", geo : [37.410465,-122.059935, 1] },
    '17020004' : { print_name : "Sensor Andrew 214", geo : [37.410465,-122.059990, 1] },
    '17020003' : { print_name : "Sensor Andrew 213", geo : [37.410466,-122.060050, 1] },
    '17020002' : { print_name : "Sensor Andrew 216", geo : [37.410449,-122.060050, 1] },
    '17020008' : { print_name : "Sensor Andrew 217A", geo : [37.410449,-122.059784, 1] },
    '17020009' : { print_name : "Sensor Andrew 217B", geo : [37.410449,-122.059874, 1] },
    '17010005' : { print_name : "Sensor Andrew 228", geo : [37.410411,-122.059480, 1] },
    '17010004' : { print_name : "Sensor Andrew 230", geo : [37.410400,-122.059480, 1] },
    '17000007' : { print_name : "Sensor Andrew 211", geo : [37.410350,-122.059890, 1] },
    '17000008' : { print_name : "Sensor Andrew 212", geo : [37.410350,-122.059990, 1] },
    '17020007' : { print_name : "Sensor Andrew 215", geo : [37.410465,-122.059780, 1] },
    '17020006' : { print_name : "Sensor Andrew 215B", geo : [37.410465,-122.059852, 1] },
    '17000009' : { print_name : "Sensor Andrew 210", geo : [37.410362,-122.060040, 1] },
    '17030003' : { print_name : "Sensor Andrew 104", geo : [37.410386,-122.060032, 0] },
    '17030002' : { print_name : "Sensor Andrew 105B", geo : [37.410379,-122.060032, 0] },
    '17000006' : { print_name : "Sensor Andrew 107", geo : [37.410368,-122.060048, 0] },
    '17000005' : { print_name : "Sensor Andrew 109", geo : [37.410350,-122.059990, 0] },
    '17000004' : { print_name : "Sensor Andrew 110", geo : [37.410350,-122.059930, 0] },
    '17000002' : { print_name : "Sensor Andrew 115", geo : [37.410357,-122.059680, 0] },
    '17000003' : { print_name : "Sensor Andrew 116", geo : [37.410365,-122.059680, 0] },
    '17030008' : { print_name : "Sensor Andrew 120", geo : [37.410442,-122.060030, 0] },
    '17030007' : { print_name : "Sensor Andrew 122", geo : [37.410437,-122.060030, 0] },
    '17030006' : { print_name : "Sensor Andrew 124", geo : [37.410431,-122.060030, 0] },
    '17030005' : { print_name : "Sensor Andrew 126", geo : [37.410425,-122.060030, 0] },
    'fireImpDigitalTemperature23420ca4e4830bee' : { print_name : "Sensor Andrew 129", geo : [37.410400,-122.059750, 0] },
    '17010002' : { print_name : "Sensor Andrew 129A", geo : [37.410415,-122.059630, 0] },
    '23-03' : { print_name : "Jeenet 213", geo : [37.410460,-122.060090, 1] },
    '23-05' : { print_name : "Jeenet 214", geo : [37.4104695,-122.060006, 1] },
    '23-01' : { print_name : "Jeenet 216", geo : [37.410454,-122.060090, 1] },
    'Sweetfeedback_device_3' : { print_name : "Sweetfeedback 120", geo : [37.410442,-122.060080, 0] }
  };
  this.imgs = imgs || [
    "images/floor1.png", "images/floor2.png"
  ];
  for(var i=0; i<this.imgs.length; ++i){
    $(this.selector).append('<img src="'+this.imgs[i]+'" class="floorPic" data-elevation="'+i+'">');
  }

  this.initView();
};

sn_visualization.floorView.prototype = {
  getPosition : function(uri){
    if(this.uriGeoTable.hasOwnProperty(uri)){
      var uriGeo = this.uriGeoTable[uri].geo;
      var position =
      /*[ (uriGeo[0]-this.backgroundGeo[0][0])*100 / (this.backgroundGeo[1][0]-this.backgroundGeo[0][0]),
        (uriGeo[1]-this.backgroundGeo[0][1])*100 / (this.backgroundGeo[1][1]-this.backgroundGeo[0][1])
      ];*/
      [ (uriGeo[0]-this.backgroundGeo[0][0])*100 / (this.backgroundGeo[1][0]-this.backgroundGeo[0][0]),
        ((uriGeo[1]-this.backgroundGeo[0][1])*100/(this.elevations+1)) / (this.backgroundGeo[1][1]-this.backgroundGeo[0][1])
        + 100*(uriGeo[2]/(this.elevations+1))
      ];
      return position;
    } else {return [0, 0]; }
  },
  initView : function(){
    // Init device map
    var deviceMapHtml = '<div class="deviceMap">';
    for(var nodeKey in this.uriGeoTable){
      var uriGeo = this.getPosition(nodeKey);
      deviceMapHtml +=
        "<div class='floorNode' data-elevation='"+this.uriGeoTable[nodeKey].geo[2]+"' data-d_uri='"+nodeKey+
        "' style='left:"+uriGeo[0]+"%; top:"+uriGeo[1]+"%;'><div class='nodeBlock'></div>"+
        "<div class='hoverBlock'>"+this.uriGeoTable[nodeKey].print_name+"</div></div>";
    }
    deviceMapHtml += '</div>';
    $(this.selector).append(deviceMapHtml);

    // Init Heatmap
    var heatmapHtml = '';
    for(var i=0; i<=this.elevations; ++i){
      heatmapHtml += '<div class="heatmap" style="height: '+100/(this.elevations+1)+'%;"></div>';
    }
    $(this.selector).append(heatmapHtml);

    //$('.floorNode, .floorPic').hide();
    //$('.floorNode[data-elevation="0"], .floorPic[data-elevation="0"]').show();
  },
  toggleHighlight : function(uri){
    if(this.uriGeoTable.hasOwnProperty(uri)){
      $(this.selector+" .floorNode[data-d_uri='"+uri+"']").toggleClass("highlighted");
      var heightPercentage = $(this.selector).height() * (this.uriGeoTable[uri].geo[2]/(this.elevations+1));
      $(this.selector).parent().animate({scrollTop: heightPercentage}, 600);
    }
  },
  updateDeviceStatus : function(data){

    var now = new Date();

    for(var key in data){
      var
        offset = now.getTime()-data[key].timestamp*1000,
        id = data[key].sensorName,
        targetBlock = $('.floorNode[data-d_uri="'+id+'"] .nodeBlock');

      targetBlock.removeClass('badBlock avgBlock goodBlock');
      //if(offset > 3*60*1000){ targetBlock.addClass('badBlock'); }
      //else if(offset > 15*1000){ targetBlock.addClass('avgBlock'); }
      //else { targetBlock.addClass('goodBlock'); }
      targetBlock.addClass('goodBlock');
    }

  }
};

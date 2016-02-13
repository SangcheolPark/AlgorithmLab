/**
 * 	grid 예제
 */

Ext.onReady(function(){
	Ext.create('Ext.grid.Panel', {
		renderTo : Ext.getBody(),
		columns : [
		           {
		        	   text : 'title'
		           },{
		        	   text : 'subtitle '
		           }]
	});
})
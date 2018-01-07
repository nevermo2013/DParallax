;(function(window,document){
	function DParallax(sele){
		this.ele = document.querySelector(sele);
		this.init();
	}
	DParallax.prototype={
		init:function(){
			this._setDpDoms();
			this.bindTransfrom();
		},
		bindTransfrom:function(){
			this.ele.oldTop = 0;
			var that = this;
			window.onscroll = function(){
				var top = document.documentElement.scrollTop;
				var cha = top-that.ele.oldTop;
				that.ele.oldTop = top;
				for(var i = 0 ; i < that.dpDoms.length ; i++){
					var dom = that.dpDoms[i];
					dom.style.transform = 'translateY('+(dom.dataset.reverse?'-':'')+(dom.currTop+cha*dom.dataset.bl)+'px)';
					dom.style.webkitTransform = 'translateY('+(dom.dataset.reverse?'-':'')+(dom.currTop+cha*dom.dataset.bl)+'px)';
					dom.currTop = dom.currTop+cha*dom.dataset.bl;
				}
			}
		},
		_setDpDoms : function(){
			this.dpDoms = new Array();
			var childDoms = this.ele.children;
			for(var i = 0 ; i < childDoms.length ; i ++){
				if(childDoms[i].hasAttribute('data-bl')){
					//初始化currTop
					childDoms[i].currTop = 0;
					this.dpDoms.push(childDoms[i]);
				}
			}
			console.log(this.dpDoms)
		}
	}
	window.DParallax = DParallax;
})(window,document);
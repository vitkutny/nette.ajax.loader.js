(function ($, element) {

	$.nette.ext('loader', {
		start: function (xhr, settings) {
			if (!this.requests++) {
				this.element.classList.add(this.start);
			}
			if (settings.hasOwnProperty('nette') && settings.nette.hasOwnProperty('el')) {
				var that = this;
				settings.nette.el.each(function () {
					if (that.processing.indexOf(this) < 0) {
						this.classList.add(that.start);
					}
					that.processing.push(this);
				});
			}
		},
		complete: function (xhr, status, settings) {
			if (settings.hasOwnProperty('nette') && settings.nette.hasOwnProperty('el')) {
				var that = this;
				settings.nette.el.each(function () {
					var index = that.processing.indexOf(this);
					if (index >= 0) {
						that.processing.splice(index, 1);
					}
					if (that.processing.indexOf(this) < 0) {
						this.classList.remove(that.start);
					}
				});
			}
			if (!--this.requests) {
				this.element.classList.remove(this.start);
			}
			if (xhr.hasOwnProperty('snippets')) {
				var snippet, element;
				for (snippet in xhr.snippets) {
					if (xhr.snippets.hasOwnProperty(snippet)) {
						if (element = document.getElementById(snippet)) {
							element.classList.add(this.complete);
							(function (that, element) {
								setTimeout(function () {
									element.classList.remove(that.complete);
								}, that.timeout);
							})(this, element);
						}
					}
				}
			}
		}
	}, {
		processing: [],
		requests: 0,
		start: 'loading',
		complete: 'loaded',
		timeout: 100,
		element: element
	});

})(window.jQuery, document.documentElement);
